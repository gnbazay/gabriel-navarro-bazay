# Gabriel Navarro Bazay — CV / Portfolio

Landing page personal de **Gabriel Navarro Bazay**, Leader Técnico y Solution Manager.
Sitio estático, sin frameworks ni dependencias de build: HTML, CSS y JavaScript vainilla.

🔗 **https://gnbazay.github.io/gabriel-navarro-bazay/**

## Características

- **Trilingüe** (español, inglés y francés). El idioma inicial sale de `?lang=`, de la elección
  guardada en `localStorage` o del navegador, por ese orden. Cada idioma tiene URL propia y
  compartible: la raíz en español, `?lang=en` y `?lang=fr` para el resto.
- **Optimizado para búsquedas del nombre**: JSON-LD `Person` y `WebSite`, canonical
  autorreferenciado, `hreflang`, Open Graph, `sitemap.xml` y `robots.txt`.
- **Responsive mobile-first**, sin desbordamiento horizontal en ningún ancho.
- **Accesible**: navegación por teclado, skip link, landmarks semánticos, foco visible y
  soporte de `prefers-reduced-motion`.
- **Diseño cinematográfico**: paleta azul/violeta/magenta sobre fondo noir, superficies de
  cristal translúcido, luz ambiental animada y grano de película.
- El teléfono no está en el HTML servido: se compone en JavaScript al pulsar el botón.

## Estructura

```
index.html    Marcado semántico (contenido base en español)
styles.css    Tokens de diseño, layout y componentes
script.js     i18n, navegación, revelado al hacer scroll, contacto
assets/       Retrato optimizado, CV en PDF y favicon
```

Todas las cadenas traducibles llevan `data-i18n="clave"` (o
`data-i18n-attr="atributo:clave"` para atributos), y los tres diccionarios viven en el objeto
`I18N` de `script.js`. Para añadir o cambiar un texto hay que tocar esos dos sitios.

## Desarrollo

No hay build ni dependencias. Basta con servir la carpeta:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Despliegue

GitHub Pages sirve la rama `main` desde la raíz del repositorio: cada `push` publica el sitio.

## Créditos

Retrato optimizado con `sips`. Tipografías **Space Grotesk** e **Inter** (Google Fonts).
Iconografía de línea propia, inspirada en el estilo de Lucide.
