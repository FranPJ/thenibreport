# TheNibReport

Sitio estático (HTML/CSS/JS puro, sin dependencias de build) para el blog **TheNibReport**.

## Estructura

```
thenibreport/
├── index.html              → página principal (listado de entradas)
├── about.html               → manifiesto / acerca de
├── articles/                → un archivo .html por artículo
│   ├── primera-pluma.html
│   ├── tinta-hierro-agalla.html
│   └── papel-que-importa.html
├── css/style.css            → todo el diseño
├── js/script.js             → lógica del botón "ver nota manuscrita"
└── img/                     → aquí van tus fotos escaneadas
```

## Cómo añadir una nueva entrada

1. Copia uno de los archivos de `articles/` y renómbralo.
2. Cambia el `<title>`, la fecha/etiqueta en `.article-meta`, el `<h1>` y el texto del artículo.
3. Sube tu foto escaneada a `img/` (por ejemplo `img/nota-nombre-articulo.jpg`).
4. Dentro del artículo, sustituye el bloque:
   ```html
   <div class="note-img-holder">
     <p>Aquí irá la foto escaneada...</p>
   </div>
   ```
   por:
   ```html
   <div class="note-img-holder">
     <img src="../img/nota-nombre-articulo.jpg" alt="Nota manuscrita original del artículo">
   </div>
   ```
5. Añade una entrada nueva en `index.html`, dentro de `<section class="ledger">`, copiando el bloque `<a class="entry">...</a>` y apuntando el `href` a tu nuevo archivo.

## Cómo publicarlo con tu dominio (gratis)

La opción más simple, sin necesidad de tocar terminal ni servidores:

### Opción A — Netlify (recomendada, arrastrar y soltar)
1. Entra en [app.netlify.com](https://app.netlify.com) y crea una cuenta gratuita.
2. En el panel, busca la opción de subir un sitio arrastrando una carpeta ("Deploy manually" / "Drag and drop").
3. Arrastra la carpeta `thenibreport` completa.
4. Netlify te da una URL tipo `algo-al-azar.netlify.app`. Comprueba que todo funciona ahí.
5. Ve a **Domain settings → Add a domain**, escribe tu dominio, y Netlify te dará 1-2 registros DNS (normalmente un registro `A` y/o `CNAME`).
6. Entra en el panel de tu proveedor de dominio (donde lo compraste) y añade esos registros DNS tal cual te los indique Netlify.
7. En 15 min–24 h el dominio apunta a tu sitio, con HTTPS automático.

### Opción B — GitHub Pages
1. Crea un repositorio en GitHub y sube el contenido de esta carpeta.
2. En el repo, ve a **Settings → Pages** y selecciona la rama `main` como origen.
3. En **Settings → Pages → Custom domain**, escribe tu dominio.
4. En tu proveedor de dominio, añade un registro `CNAME` apuntando a `tu-usuario.github.io`.

Cualquiera de las dos opciones es gratuita y no requiere mantener un servidor.

## Notas de diseño

- Tipografías: **Fraunces** (titulares, con carácter caligráfico) + **Source Serif 4** (cuerpo) + **IBM Plex Mono** (fechas, etiquetas, metadatos) — cargadas desde Google Fonts vía CDN.
- Paleta: papel de lino envejecido (`#EDE7D9`), tinta índigo (`#1E2A44`), lacre oxblood (`#6B2634`).
- El elemento distintivo es el "sello de lacre": el botón que revela la nota manuscrita de cada artículo, pensado para parecer literalmente un sello de cera que se abre.
