# Juegos — Genética a las Aulas

Sitio publicado: **https://geneticaalasaulas.github.io/juegos/**

Sitio estático, sin build, sin framework, sin dependencias: solo HTML, CSS
y un catálogo en JavaScript. Incluye 17 juegos. Para primaria: La escalera del ADN, Viaje al interior,
Extracción de ADN, Detectives de familia y ¿Es merluza de verdad?. Para secundaria y docentes:
Árbol genealógico: poné a prueba tu hipótesis, Punnett: de los gametos a la descendencia, Cariotipo: armá y diagnosticá, Selección natural simulada, Árbol filogenético: armalo vos,
Cuello de botella, Resistencia a antibióticos, Nutrigenética (leche, genes y cultura),
CRISPR simplificado, Farmacogenómica: ajustá la dosis, Detective de enfermedades
genéticas y Epigenética con interruptores.

## Estructura

```
.
├── index.html                catálogo (no hay que tocarlo para agregar juegos)
├── juegos.js                 catálogo de datos — lo único que cambia al publicar un juego
├── 404.html
├── .nojekyll                 evita que GitHub procese el sitio con Jekyll
├── capas/
│   ├── arbol-genealogico.svg
│   └── punnett-rapido.svg
├── arbol-genealogico/index.html
└── punnett-rapido/index.html
```

## Cómo publicar en GitHub Pages

1. **Crear el repositorio**: público (Pages es gratis solo ahí), subir estos
   archivos a la raíz.
   ```
   git init
   git add .
   git commit -m "Primera versión"
   git branch -M main
   git remote add origin https://github.com/geneticaalasaulas/juegos.git
   git push -u origin main
   ```
2. **Activar Pages**: `Settings → Pages` → *Deploy from a branch* → rama
   `main`, carpeta `/ (root)`.
3. Con eso el sitio queda en `https://geneticaalasaulas.github.io/juegos/`.

### Si querés un dominio propio (ej. algo.com)

- En `Settings → Pages`, campo *Custom domain*: escribí el dominio y guardá
  **antes** de tocar el DNS.
- En el DNS de tu proveedor (GoDaddy, Namecheap, etc.), creá estos registros:

  | Tipo  | Nombre | Valor                    |
  |-------|--------|--------------------------|
  | A     | @      | 185.199.108.153          |
  | A     | @      | 185.199.109.153          |
  | A     | @      | 185.199.110.153          |
  | A     | @      | 185.199.111.153          |
  | CNAME | www    | geneticaalasaulas.github.io |

- Esperá a que propague (15 min a 24 h) y recién ahí activá *Enforce HTTPS*.

## Cómo agregar un juego nuevo

1. Creá la carpeta: `nombre-del-juego/index.html` (archivo único y
   autosuficiente, sin dependencias externas).
2. Agregá la portada en `capas/nombre-del-juego.svg` (o `.webp`), proporción 3:2.
3. Sumá una entrada al array `juegos` en `juegos.js`:

   ```js
   {
     id: "nombre-del-juego",
     url: "nombre-del-juego/",
     capa: "capas/nombre-del-juego.svg",
     publicado: "2026-10",
     nivel: "primaria", // primaria | secundaria | docentes
     duracion: 10,
     temas: ["evolucion"], // deben existir en el diccionario `temas`
     autores: ["Genética a las Aulas"],
     es: {
       nombre: "Nombre del juego",
       subtitulo: "Subtítulo corto",
       resumen: "Dos o tres frases sobre qué hace el juego.",
       aprende: ["Primer objetivo de aprendizaje", "Segundo objetivo"]
     }
   }
   ```

   La coma es importante: la última entrada del array no lleva coma después.
   Un error de sintaxis acá deja el catálogo en blanco — si pasa, abrí la
   consola del navegador (F12), señala la línea exacta.

## Correr localmente

Abrí `index.html` con doble clic — funciona sin servidor. Por eso el
catálogo es un archivo `.js` y no `.json`: los navegadores bloquean la
lectura de JSON vía `file://`, pero sí ejecutan scripts.
