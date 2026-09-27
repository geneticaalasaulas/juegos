// Catálogo de juegos — única cosa que hay que tocar al publicar un juego nuevo.
// El orden del array define la posición en la grilla.

const niveles = {
  primaria: "Primaria",
  secundaria: "Secundaria",
  docentes: "Docentes"
};

const temas = {
  herencia: "Herencia",
  evolucion: "Evolución",
  salud: "Salud"
};

const juegos = [
  {
    id: "arbol-genealogico",
    url: "arbol-genealogico/",
    capa: "capas/arbol-genealogico.svg",
    publicado: "2026-09",
    nivel: "secundaria",
    duracion: 8,
    temas: ["herencia"],
    autores: ["Genética a las Aulas"],
    es: {
      nombre: "Árbol genealógico",
      subtitulo: "Predecí el patrón de herencia",
      resumen: "Analizá cruzas en un árbol genealógico y predecí qué fracción de los hijos va a estar afectada, según el patrón de herencia.",
      aprende: [
        "Herencia autosómica dominante y recesiva",
        "Herencia ligada al cromosoma X",
        "Lectura de árboles genealógicos"
      ]
    }
  },
  {
    id: "punnett-rapido",
    url: "punnett-rapido/",
    capa: "capas/punnett-rapido.svg",
    publicado: "2026-09",
    nivel: "secundaria",
    duracion: 5,
    temas: ["herencia"],
    autores: ["Genética a las Aulas"],
    es: {
      nombre: "Punnett rápido",
      subtitulo: "Cruzas contrarreloj",
      resumen: "Resolvé cruzas monohíbridas antes de que se acabe el tiempo y sumá racha de aciertos.",
      aprende: [
        "Cuadros de Punnett",
        "Proporciones genotípicas y fenotípicas",
        "Dominancia y recesividad"
      ]
    }
  }
];
