# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Qué es esto

Landing page personal / CV de Gabriel Navarro Bazay (Leader Técnico y Solution Manager), publicada en
GitHub Pages: https://gnbazay.github.io/gabriel-navarro-bazay/

Sitio estático **sin frameworks, sin dependencias y sin build**: un archivo por tipo
(`index.html`, `styles.css`, `script.js`). Esa restricción es deliberada y viene del brief —
no introduzcas npm, bundlers, preprocesadores ni librerías de terceros sin que el usuario lo pida.

## Flujo de trabajo: rama por cambio

**Nunca trabajes directamente sobre `main`.** Cada cambio arranca con una rama creada a partir
de `main`, se commitea allí y **solo se fusiona cuando el usuario ha visto el resultado y lo
aprueba**. El motivo es que `main` está conectado a GitHub Pages: cualquier push a esa rama
publica la web personal al instante, sin margen de revisión.

```bash
git checkout main && git pull
git checkout -b <nombre-del-cambio>
# … editar, commitear, y ofrecerle una vista previa (servidor local o la rama en GitHub)
# … esperar su visto bueno; solo entonces:
git checkout main && git merge --no-ff <nombre-del-cambio> && git push origin main
```

No interpretes el silencio como aprobación: mientras no lo diga, el trabajo se queda en la rama.

## Comandos

No hay build, lint ni tests. El único comando de desarrollo es servir la carpeta:

```bash
python3 -m http.server 8000     # http://localhost:8000
```

Hay que servirla por HTTP, no abrir `index.html` con `file://`: el script usa `localStorage`,
que falla en ese origen.

Los recortes del retrato se regeneran con `sips` (macOS, sin ImageMagick ni cwebp en el equipo):

```bash
sips -c 2100 2100 --cropOffset 100 150 assets/foto.png --out /tmp/sq.png
sips -Z 800 -s format jpeg -s formatOptions 84 /tmp/sq.png --out assets/retrato-800.jpg
sips -Z 480 -s format jpeg -s formatOptions 84 /tmp/sq.png --out assets/retrato-480.jpg
```

### Verificación

Al no haber suite de tests, los cambios se comprueban en un navegador real. Chrome headless con
DevTools Protocol permite medir en vez de suponer — es como se detectaron los dos defectos que
ya están corregidos (desbordamiento horizontal en móvil y contraste insuficiente):

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --remote-debugging-port=9333 --user-data-dir=/tmp/chrome-cv about:blank &
```

Con `Emulation.setDeviceMetricsOverride` + `Runtime.evaluate` se comprueba lo que importa:
`document.documentElement.scrollWidth === window.innerWidth` a 390/768/1440 px, que el cambio de
idioma no deja cadenas vacías, y que con `Emulation.setEmulatedMedia`
(`prefers-reduced-motion: reduce`) ningún elemento queda con `opacity` distinta de 1.

Usa `Page.captureScreenshot` para las capturas, **no** `--screenshot` con `--window-size`: en
macOS la ventana tiene un ancho mínimo y las capturas móviles salen recortadas, no re-maquetadas,
lo que simula falsos desbordamientos.

## Arquitectura

### i18n: el contrato entre HTML y JS

El sitio es trilingüe (es/en/fr) y es la parte con más acoplamiento entre archivos.

- El HTML contiene el contenido **en español** y cada cadena traducible lleva
  `data-i18n="clave"`. Para atributos se usa `data-i18n-attr="atributo:clave"` (admite varios
  separados por `;`), por ejemplo el `alt` del retrato y los `aria-label`.
- Los tres diccionarios viven en el objeto `I18N` de `script.js`. **Toda clave usada en el HTML
  debe existir en los tres idiomas**; si falta, `translate()` devuelve `null` y el texto se queda
  en el idioma anterior, sin error visible.
- `applyTo()` distingue por etiqueta: en `<meta>` escribe el atributo `content`, en el resto
  `textContent`. Por eso el `<title>` y las metadescripciones también se traducen.
- Idioma inicial, por orden: parámetro `?lang=` de la URL → `localStorage['gn-lang']` →
  `navigator.languages` → inglés (`FALLBACK`).
- Cada idioma tiene URL propia: el español vive en la raíz y los otros en `?lang=en` / `?lang=fr`.
  Al cambiar de idioma, `syncUrl()` reescribe la URL con `replaceState` y **autorreferencia el
  `<link rel="canonical">`**, para que Google trate cada variante como página distinta.

Para comprobar que HTML y diccionarios siguen sincronizados (72 claves a día de hoy):

```bash
node -e 'const h=require("fs").readFileSync("index.html","utf8");
const k=new Set([...h.matchAll(/data-i18n="([^"]+)"/g)].map(m=>m[1]));
console.log(k.size+" claves en el HTML")'
```

### Contenido de la experiencia

Cada puesto de la timeline es una tarjeta con la misma anatomía: periodo, cargo, empresa y
ciudad, un párrafo de contexto, una lista `.card__points` con dos o tres logros y los `.chips`
con la tecnología. El periodo, la empresa y los chips son estáticos (no se traducen); el cargo,
el párrafo y los logros llevan `data-i18n`, así que **añadir un logro son cuatro ediciones**: el
`<li>` en el HTML y la clave en los tres diccionarios.

El material de origen es `assets/Profile.pdf`, el export del LinkedIn del usuario, mucho más
detallado que el brief inicial. Está en `.gitignore` porque es material de trabajo y porque
incluye su teléfono en texto plano, justo lo que la web evita exponer. Para leerlo en macOS sin
instalar nada:

```bash
osascript -l JavaScript -e 'ObjC.import("Quartz");
const d = $.PDFDocument.alloc.initWithURL($.NSURL.fileURLWithPath("<ruta>/assets/Profile.pdf"));
ObjC.unwrap(d.string);'
```

El nivel de detalle es una decisión suya: quiere que se note el contenido de cada puesto, pero
sin volcar el LinkedIn entero. Dos o tres logros por puesto es el techo acordado.

### Sistema de diseño

`styles.css` está ordenado tokens → base → átomos → secciones → responsive. Todos los valores de
color, espaciado, radios y sombras son custom properties en `:root` y provienen literalmente del
brief. **Usa los tokens existentes en lugar de valores nuevos**: la paleta es intencionada (azul
dominante, violeta secundario, magenta solo puntual) y saturarla de más rompe la dirección visual.

El fondo atmosférico es un `div.atmosphere` fijo con `z-index: -1`: degradados radiales, tres
blobs difuminados animados entre 20 y 32 s, rejilla enmascarada y grano en SVG data-URI. Va
detrás de todo el contenido, no dentro de las secciones.

Mobile-first: los breakpoints son 600, 900 y 1200 px, y el único que cambia el layout de fondo es
900 px (ahí aparece el menú horizontal y desaparece el botón hamburguesa).

### JavaScript

`script.js` es una IIFE sin dependencias con cinco responsabilidades: i18n, menú móvil, enlace
activo del nav, revelado al hacer scroll y contacto. Dos decisiones no obvias:

- **El revelado se aplica desde JS**, no desde el HTML: la clase `.reveal` (que pone
  `opacity: 0`) solo se añade si hay `IntersectionObserver` y no está activo
  `prefers-reduced-motion`. Así el sitio es legible aunque el script falle o no se ejecute.
  Si mueves esa lógica al HTML, el contenido desaparece sin JS.
- **El teléfono nunca está en el HTML servido**: se compone desde `PHONE_PARTS` al pulsar el
  botón, que entonces se reemplaza por un `<a href="tel:…">`. Es una decisión explícita del
  usuario contra los scrapers; no lo escribas en el marcado.

El enlace activo del nav se calcula en el handler de scroll (la última sección cuyo inicio pasó
el 35 % de la ventana), no con `IntersectionObserver`: con un observador varios enlaces podían
quedar activos a la vez.

### SEO

El sitio compite por el nombre propio «Gabriel Navarro Bazay», así que hay cuatro sitios con
**URLs absolutas escritas a mano** que deben moverse juntos: el bloque `<link>` de canonical y
hreflang del `<head>`, las etiquetas Open Graph, `sitemap.xml` y `robots.txt`. Si cambia el nombre
del repositorio o se añade un dominio propio, hay que actualizar los cuatro o Google recibirá
señales contradictorias.

El `<head>` lleva dos bloques JSON-LD: un `Person` con `@id` estable (nombre completo,
`alternateName` con las variantes, formación, certificaciones y `sameAs` a LinkedIn y GitHub) y un
`WebSite` que lo referencia por ese `@id`. El nombre completo debe aparecer también en el `<title>`,
el `<h1>`, la meta description y el primer párrafo del hero, en los tres idiomas — si tocas uno,
tócalos todos.

## Restricciones que hay que respetar

Vienen del brief original, `idea inicial.txt` (está en el repo pero excluido por `.gitignore`;
es la fuente de verdad para cualquier duda de diseño o contenido).

- **Cero desbordamiento horizontal** en cualquier ancho. Cuidado con los elementos animados:
  rotar un cuadrado hace crecer su caja envolvente √2 veces y provoca scroll lateral. Por eso el
  anillo del retrato anima `--ring-angle` con `@property` en lugar de `transform: rotate()`.
- **Contraste AA**. `--text-muted` (#686D91) da 3,9:1 sobre el fondo: resérvalo para elementos
  decorativos con `aria-hidden`, y usa `--text-2` para texto informativo.
- **`prefers-reduced-motion`** debe dejar el sitio completamente usable y visible.
- Los micro-detalles futuristas (`SYSTEM / 01`, `NETWORK_STATUS ● ONLINE`) son decorativos, van
  con `aria-hidden="true"` y se usan con cuentagotas: el sitio no debe parecer una terminal de
  hacker ni una web de videojuegos.
- Las animaciones son lentas y atmosféricas: 500–800 ms para entradas, 8–20 s para el ambiente.

## Despliegue

GitHub Pages sirve `main` desde la raíz: **cada push a `main` republica el sitio**, no hay
workflow de Actions. Por eso existe la regla de la rama por cambio que abre este documento.
`.nojekyll` evita el procesado de Jekyll.

`.gitignore` excluye el material de trabajo que no forma parte del sitio: `idea inicial.txt`,
`assets/foto.png` (el original de 4,7 MB), `assets/cv Gabriel NAVARRO.pdf` (la copia publicada
es `assets/cv-gabriel-navarro.pdf`, sin espacios en el nombre) y `assets/Profile.pdf`.
