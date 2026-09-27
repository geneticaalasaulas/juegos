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
      aprende: ["Herencia autosómica dominante y recesiva", "Herencia ligada al cromosoma X", "Lectura de árboles genealógicos"]
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
      aprende: ["Cuadros de Punnett", "Proporciones genotípicas y fenotípicas", "Dominancia y recesividad"]
    }
  },
  {
    id: "cariotipo-express",
    url: "cariotipo-express/",
    capa: "capas/cariotipo-express.svg",
    publicado: "2026-10",
    nivel: "primaria",
    duracion: 6,
    temas: ["herencia", "salud"],
    autores: ["Genética a las Aulas"],
    es: {
      nombre: "Cariotipo express",
      subtitulo: "Identificá alteraciones cromosómicas",
      resumen: "A partir de fotografías reales de cariotipos (CDC, Wikimedia Commons), identificá si es un cariotipo típico o presenta una trisomía o monosomía.",
      aprende: ["Qué es un cariotipo", "Trisomías y monosomías", "Síndromes cromosómicos comunes"]
    }
  },
  {
    id: "seleccion-natural",
    url: "seleccion-natural/",
    capa: "capas/seleccion-natural.svg",
    publicado: "2026-10",
    // Incluye seleccion sexual y estabilizadora: vocabulario de secundaria.
    nivel: "secundaria",
    duracion: 7,
    temas: ["evolucion"],
    autores: ["Genética a las Aulas"],
    es: {
      nombre: "Selección natural simulada",
      subtitulo: "Predecí qué rasgo sobrevive",
      resumen: "A partir de escenarios reales (camuflaje, resistencia, selección sexual), predecí cómo cambia una población generación tras generación.",
      aprende: ["Selección natural", "Selección sexual y estabilizadora", "Presión de selección"]
    }
  },
  {
    id: "filogenia",
    url: "filogenia/",
    capa: "capas/filogenia.svg",
    publicado: "2026-10",
    nivel: "secundaria",
    duracion: 6,
    temas: ["evolucion"],
    autores: ["Genética a las Aulas"],
    es: {
      nombre: "Árbol filogenético",
      subtitulo: "Armá el rompecabezas evolutivo",
      resumen: "A partir de tablas de similitud genética entre especies, identificá qué pares comparten el ancestro común más reciente.",
      aprende: ["Árboles filogenéticos", "Ancestro común", "Similitud genética entre especies"]
    }
  },
  {
    id: "cuello-de-botella",
    url: "cuello-de-botella/",
    capa: "capas/cuello-de-botella.svg",
    publicado: "2026-10",
    nivel: "secundaria",
    duracion: 7,
    temas: ["evolucion"],
    autores: ["Genética a las Aulas"],
    es: {
      nombre: "Cuello de botella",
      subtitulo: "Efecto fundador y deriva génica",
      resumen: "Explorá qué pasa con la variación genética de una población cuando una catástrofe reduce drásticamente su tamaño.",
      aprende: ["Cuello de botella poblacional", "Efecto fundador", "Deriva génica"]
    }
  },
  {
    id: "resistencia-antibioticos",
    url: "resistencia-antibioticos/",
    capa: "capas/resistencia-antibioticos.svg",
    publicado: "2026-10",
    nivel: "secundaria",
    duracion: 6,
    temas: ["evolucion", "salud"],
    autores: ["Genética a las Aulas"],
    es: {
      nombre: "Resistencia a antibióticos",
      subtitulo: "Evolución en tiempo real",
      resumen: "Predecí cómo cambia la proporción de bacterias resistentes generación tras generación bajo el mismo antibiótico.",
      aprende: ["Evolución de la resistencia bacteriana", "Presión de selección por fármacos", "Uso racional de antibióticos"]
    }
  },
  {
    id: "nutrigenetica",
    url: "nutrigenetica/",
    capa: "capas/nutrigenetica.svg",
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
    publicado: "2026-10",
    nivel: "docentes",
    duracion: 5,
    temas: ["salud"],
    autores: ["Genética a las Aulas"],
    es: {
      nombre: "Farmacogenómica exprés",
      subtitulo: "Dosis según genotipo, contrarreloj",
      resumen: "Elegí la dosis correcta de un fármaco ficticio según el perfil de metabolización del paciente, antes de que se acabe el tiempo.",
      aprende: ["Farmacogenómica", "Metabolizadores lentos, normales y rápidos", "Medicina de precisión"]
    }
  },
  {
    id: "detective-clinico",
    url: "detective-clinico/",
    capa: "capas/detective-clinico.svg",
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
