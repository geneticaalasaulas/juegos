// Catálogo de juegos — única cosa que hay que tocar al publicar un juego nuevo.
// El orden del array define la posición en la grilla.

const niveles = {
  primaria: "Primaria",
  secundaria: "Secundaria",
  docentes: "Docentes"
};

// Color de cada nivel, tomado del logo. Se usa en las chips del catalogo.
const nivelColor = {
  primaria:   { solido:"#0462B7", tinte:"#E6EFF8" },
  secundaria: { solido:"#BC0440", tinte:"#F8E6EC" },
  docentes:   { solido:"#5E0478", tinte:"#EFE6F2" }
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
    // color del logo asignado a este juego (ver capas/arbol-genealogico.svg)
    acento: "#0462B7",
    acentoTexto: "#0462B7",
    publicado: "2026-09",
    nivel: "secundaria",
    duracion: 15,
    temas: ["herencia"],
    autores: ["Genética a las Aulas"],
    es: {
      nombre: "Árbol genealógico: poné a prueba tu hipótesis",
      subtitulo: "Inferí el modo de herencia",
      resumen: "Cada familia se genera con un modo de herencia oculto. Proponé una hipótesis, mirá si es compatible con el árbol y ponela a prueba: elegí una pareja, predecí su descendencia y mirá nacer una nueva generación.",
      aprende: ["Herencia autosómica dominante y recesiva", "Herencia ligada al cromosoma X", "Lectura de árboles genealógicos", "Poner a prueba una hipótesis"]
    }
  },
  {
    id: "punnett-rapido",
    url: "punnett-rapido/",
    capa: "capas/punnett-rapido.svg",
    // color del logo asignado a este juego (ver capas/punnett-rapido.svg)
    acento: "#C88705",
    acentoTexto: "#A06C04",
    publicado: "2026-09",
    nivel: "secundaria",
    duracion: 15,
    temas: ["herencia"],
    autores: ["Genética a las Aulas"],
    es: {
      nombre: "Punnett: de los gametos a la camada",
      subtitulo: "Armá la cruza, predecí y simulá",
      resumen: "Separá los alelos en gametos, llená el cuadro de Punnett y marcá qué crías muestran el rasgo. Después simulá camadas para comparar lo esperado con lo observado. Incluye un modo contrarreloj para repasar.",
      aprende: ["Segregación de alelos en los gametos", "Cuadros de Punnett", "Proporciones genotípicas y fenotípicas", "Probabilidad y azar en muestras chicas"]
    }
  },
  {
    id: "cariotipo-express",
    url: "cariotipo-express/",
    capa: "capas/cariotipo-express.svg",
    // color del logo asignado a este juego (ver capas/cariotipo-express.svg)
    acento: "#BC0440",
    acentoTexto: "#BC0440",
    publicado: "2026-10",
    // Armar el cariograma por bandas y escribir la fórmula ISCN: secundaria.
    nivel: "secundaria",
    duracion: 20,
    temas: ["herencia", "salud"],
    autores: ["Genética a las Aulas"],
    es: {
      nombre: "Cariotipo: armá y diagnosticá",
      subtitulo: "Ordená los cromosomas y leé el resultado",
      resumen: "Arrastrá los cromosomas de una metafase a su lugar en el cariograma, emparejándolos por tamaño, centrómero y bandas. Después, como detective, escribí el resultado en notación ISCN a partir de lo que armaste.",
      aprende: ["Cómo se arma un cariotipo", "Cromosomas homólogos y grupos A–G", "Trisomías y monosomías", "Nomenclatura ISCN"]
    }
  },
  {
    id: "seleccion-natural",
    url: "seleccion-natural/",
    capa: "capas/seleccion-natural.svg",
    // color del logo asignado a este juego (ver capas/seleccion-natural.svg)
    acento: "#0B9053",
    acentoTexto: "#0A874E",
    publicado: "2026-10",
    // Incluye seleccion sexual y estabilizadora: vocabulario de secundaria.
    nivel: "secundaria",
    duracion: 7,
    temas: ["evolucion"],
    autores: ["Genética a las Aulas"],
    es: {
      nombre: "Selección natural simulada",
      subtitulo: "Camuflaje, generación a generación",
      resumen: "Polillas claras y oscuras sobre el tronco de un abedul. Predecí cómo van a cambiar las proporciones, hacé pasar las generaciones y compará. Cambiá el tronco a mitad de camino y la curva se da vuelta.",
      aprende: ["Selección natural", "La variación existe antes de la selección", "El ambiente define qué variante es ventajosa", "Melanismo industrial"]
    }
  },
  {
    id: "filogenia",
    url: "filogenia/",
    capa: "capas/filogenia.svg",
    // color del logo asignado a este juego (ver capas/filogenia.svg)
    acento: "#02A690",
    acentoTexto: "#018574",
    publicado: "2026-10",
    nivel: "secundaria",
    duracion: 12,
    temas: ["evolucion"],
    autores: ["Genética a las Aulas"],
    es: {
      nombre: "Árbol filogenético: armalo vos",
      subtitulo: "De la tabla de similitud al árbol",
      resumen: "Armá el árbol paso a paso, uniendo las especies más parecidas según una tabla de similitud genética. Después leé tu árbol: ancestros comunes, grupo externo y por qué girar las ramas no cambia nada.",
      aprende: ["Construcción de árboles a partir de similitud genética", "Ancestro común más reciente y grupo externo", "Lectura de cladogramas", "Convergencia evolutiva"]
    }
  },
  {
    id: "cuello-de-botella",
    url: "cuello-de-botella/",
    capa: "capas/cuello-de-botella.svg",
    // color del logo asignado a este juego (ver capas/cuello-de-botella.svg)
    acento: "#5E0478",
    acentoTexto: "#5E0478",
    publicado: "2026-10",
    nivel: "secundaria",
    duracion: 8,
    temas: ["evolucion"],
    autores: ["Genética a las Aulas"],
    es: {
      nombre: "Cuello de botella",
      subtitulo: "Simulá la deriva genética",
      resumen: "Una tormenta deja unas pocas tortugas sobrevivientes, elegidas al azar. Predecí qué color se pierde y cuántas sobrevivientes hacen falta para no perder variación, y ponelo a prueba corriendo tormentas.",
      aprende: ["Deriva genética", "Cuello de botella poblacional", "Pérdida de variación por azar", "Diferencia entre deriva y selección"]
    }
  },
  {
    id: "resistencia-antibioticos",
    url: "resistencia-antibioticos/",
    capa: "capas/resistencia-antibioticos.svg",
    // color del logo asignado a este juego (ver capas/resistencia-antibioticos.svg)
    acento: "#ED101B",
    acentoTexto: "#EB101B",
    publicado: "2026-10",
    nivel: "secundaria",
    duracion: 8,
    temas: ["evolucion", "salud"],
    autores: ["Genética a las Aulas"],
    es: {
      nombre: "Resistencia a antibióticos",
      subtitulo: "Simulador interactivo",
      resumen: "Predecí qué va a pasar con las bacterias resistentes, aplicá o no el antibiótico en cada generación y compará en el gráfico. Ajustá la ventaja de las resistentes y el costo de serlo.",
      aprende: ["Evolución de la resistencia bacteriana", "El antibiótico selecciona, no crea", "Proporción frente a cantidad", "Uso responsable de antibióticos"]
    }
  },
  {
    id: "nutrigenetica",
    url: "nutrigenetica/",
    capa: "capas/nutrigenetica.svg",
    // color del logo asignado a este juego (ver capas/nutrigenetica.svg)
    acento: "#3BA2A5",
    acentoTexto: "#2F8183",
    publicado: "2026-10",
    nivel: "secundaria",
    duracion: 5,
    temas: ["salud", "herencia"],
    autores: ["Genética a las Aulas"],
    es: {
      nombre: "Nutrigenética: lactosa",
      subtitulo: "Genotipo, fenotipo y dieta",
      resumen: "A partir del genotipo para persistencia de lactasa, predecí si una persona sigue produciendo lactasa en la adultez o deja de hacerlo.",
      aprende: ["Persistencia de lactasa", "Genotipo vs. fenotipo", "Nutrigenética"]
    }
  },
  {
    id: "crispr",
    url: "crispr/",
    capa: "capas/crispr.svg",
    // color del logo asignado a este juego (ver capas/crispr.svg)
    acento: "#0462B7",
    acentoTexto: "#0462B7",
    publicado: "2026-10",
    nivel: "docentes",
    duracion: 8,
    temas: ["salud", "herencia"],
    autores: ["Genética a las Aulas"],
    es: {
      nombre: "CRISPR simplificado",
      subtitulo: "Elegí el ARN guía correcto",
      resumen: "Elegí el ARN guía que lleva a Cas9 al sitio exacto de una mutación, respetando la secuencia PAM que la enzima necesita para cortar.",
      aprende: ["Lógica de CRISPR/Cas9", "El papel del PAM", "Qué corrige CRISPR y qué no"]
    }
  },
  {
    id: "farmacogenomica",
    url: "farmacogenomica/",
    capa: "capas/farmacogenomica.svg",
    // color del logo asignado a este juego (ver capas/farmacogenomica.svg)
    acento: "#C88705",
    acentoTexto: "#A06C04",
    publicado: "2026-10",
    nivel: "docentes",
    duracion: 12,
    temas: ["salud"],
    autores: ["Genética a las Aulas"],
    es: {
      nombre: "Farmacogenómica: ajustá la dosis",
      subtitulo: "Del genotipo a la dosis",
      resumen: "Calculá el puntaje de actividad de una enzima a partir del genotipo, deducí el fenotipo de metabolización y ajustá la dosis mirando el nivel del fármaco en sangre. Con un profármaco, todo se da vuelta.",
      aprende: ["Del genotipo al fenotipo de metabolización", "Ventana terapéutica", "Fármaco activo frente a profármaco", "Medicina de precisión"]
    }
  },
  {
    id: "detective-clinico",
    url: "detective-clinico/",
    capa: "capas/detective-clinico.svg",
    // color del logo asignado a este juego (ver capas/detective-clinico.svg)
    acento: "#BC0440",
    acentoTexto: "#BC0440",
    publicado: "2026-10",
    nivel: "docentes",
    duracion: 8,
    temas: ["salud", "herencia"],
    autores: ["Genética a las Aulas"],
    es: {
      nombre: "Detective de enfermedades genéticas",
      subtitulo: "Diagnosticá a partir del caso clínico",
      resumen: "A partir de un relato clínico breve y el patrón de herencia familiar, diagnosticá la enfermedad genética más probable.",
      aprende: ["Patrones de herencia en clínica", "Enfermedades genéticas comunes", "Razonamiento diagnóstico"]
    }
  },
  {
    id: "epigenetica",
    url: "epigenetica/",
    capa: "capas/epigenetica.svg",
    // color del logo asignado a este juego (ver capas/epigenetica.svg)
    acento: "#0B9053",
    acentoTexto: "#0A874E",
    publicado: "2026-10",
    nivel: "docentes",
    duracion: 7,
    temas: ["salud", "herencia"],
    autores: ["Genética a las Aulas"],
    es: {
      nombre: "Epigenética con interruptores",
      subtitulo: "El ambiente prende y apaga genes",
      resumen: "A partir de casos reales (ratones agutí, gemelos, abejas reina), identificá el concepto epigenético que ilustran.",
      aprende: ["Metilación del ADN", "Epigenética y ambiente", "Diferencias entre genotipo idéntico y fenotipo distinto"]
    }
  }
];
