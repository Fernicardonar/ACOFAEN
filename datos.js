/* === datos.js === */
/*
 * Estructura de datos para el mapa conceptual
 * Cada nodo puede tener "hijos" que se expanden hacia la derecha
 * Puedes agregar tantos niveles como necesites
 */
const datosDelMapa = [
  
  {
    "titulo": "COMPETENCIA 1: ",
    "descripcion": "Proveer el cuidado de enfermería teniendo en cuenta el proceso de atención de enfermería dirigido a la persona, familia y comunidad, aplicando el juicio clínico en diferentes niveles de atención, complejidad y estrategias de salud. DOMINIO: Cuidado de enfermería para la vida, el bienestar y la salud humana.",
    elementos: [
      { titulo: "Contenidos",
      hijos: [
      {
        titulo: "Núcleo de conocimiento: Fundamentación o básico",
        "hijos": [
          {
            "titulo": "Matemáticas y ciencias naturales",
            "hijos": [
              {
                "titulo": "Matemáticas",
                "hijos": [
                  { "titulo": "Aritmética básica: operaciones fundamentales (suma, resta, multiplicación, división)" },
                  { "titulo": "Proporciones y razones: cálculo de dosis, diluciones, infusiones y mezclas" },
                  { "titulo": "Porcentajes: concentración de soluciones, interpretación de resultados de laboratorio" },
                  { "titulo": "Regla de tres simple y compuesta: cálculo de medicamentos y tiempos de administración" },
                  { "titulo": "Fracciones y decimales: manejo de unidades de medida y conversión de dosis" },
                  { "titulo": "Sistema métrico y conversiones de unidades: gramos, miligramos, microgramos, litros, mililitros" },
                  { "titulo": "Cálculo de áreas y volúmenes: preparación de soluciones, nutrición y fluidoterapia" },
                  { "titulo": "Estadística descriptiva básica: variables, medidas de tendencia central y dispersión, interpretación de gráficas y tablas" }
                ]
              },
              {
                "titulo": "Biología celular y molecular",
                "hijos": [
                  { "titulo": "Estructura y función celular" },
                  { "titulo": "Organelos celulares" },
                  { "titulo": "Transporte transmembrana" },
                  { "titulo": "Genética molecular" },
                  { "titulo": "Metabolismo energético" },
                  { "titulo": "Ciclo de Krebs o del ácido cítrico"},
                  { "titulo": "Fosforilación oxidativa" }
              ]
              },
              {
                "titulo": "Bioquímica",
                "hijos": [
                  { "titulo": "Soluciones y gases" },
                  { "titulo": "Equilibrio ácido base" },
                  { "titulo": "Estructura y función de carbohidratos, lípidos, proteínas y ácidos nucleicos" },
                  { "titulo": "Genética molecular" }
              ]
              },
              {
                "titulo": "Microbiología",
                "hijos": [
                  { "titulo": "Características generales" },
                  { "titulo": "Estructura bacterias, virus, hongos y parásitos" },
                  { "titulo": "Mecanismos de patogenicidad e importancia clínica" },
                  { "titulo": "Ciclos de replicación, medidas de prevención y control" },
                  { "titulo": "Enfermedades de obligatoria notificación" }
              ]
              },
            ]
          },
          {
            "titulo": "Ciencias de la salud",
            "hijos": [
              {
                "titulo": "Morfofisiología (Anatomia y Fisiología)",
                "hijos": [
                  { "titulo": "Sistema Nervioso" },
                  { "titulo": "Sistema Cardiovascular" },
                  { "titulo": "Sistema Respiratorio" },
                  { "titulo": "Sistema Renal y Urinario" },
                  { "titulo": "Sistema Endocrino" },
                  { "titulo": "Sistema Digestivo" },
                  { "titulo": "Sistema Musculoesquelético" },
                  { "titulo": "Sistema tegumentario" },
                  { "titulo": "Sistema inmune" },
                  { "titulo": "Sistema reproductivo" },
                  { "titulo": "Sistema hematopoyetico" }
              ]
            },
            {
                "titulo": "Fisiopatología",
                "hijos": [
                  { "titulo": "Mecanismos de lesión celular" },
                  {
                    "titulo": "Procesos Patológicos Fundamentales",
                    "hijos": [
                      { "titulo": "Inflamación y reparación tisular" },
                      { "titulo": "Infección y respuesta inmune" },
                      { "titulo": "Cicatrización" },
                      { "titulo": "Trastornos hemodinámicos" },
                      { "titulo": "Alteraciones metabólicas" },
                      { "titulo": "Flujo de líquidos y edema" },
                      { "titulo": "Neoplasia" },
                    ]
                  },                
                  {"titulo": "Fisiopatología por sistemas"},
                  {"titulo": "Psicopatología y alteraciones mentales" },
              ]
            },
            {
                "titulo": "Farmacología",
                "hijos": [
                  {
                  "titulo": "Principios Generales",
                  "hijos": [
                    { "titulo": "Farmacocinética: absorción, distribución, metabolismo y excreción de fármacos" },
                    { "titulo": "Farmacodinámica: mecanismos de acción, efectos terapéuticos y tóxicos" },
                    { "titulo": "Vías de administración de fármacos" },
                  ],
                },
                  { "titulo": "Liquidos y electrolitos"},
                  { "titulo": "Hemoderivados" },
                  { "titulo": "Cálculo de dosis"},
                  { "titulo": "Farmacovigilancia"},
                  { "titulo": "Famacología por sistemas o grupos terapéuticos"}
              ]
            },
            {
                "titulo": "Semiología",
                "hijos": [
                  { "titulo": "Entrevista" },
                  { "titulo": "Exploración física" },
                  { "titulo": "Técnicas de exploración (semiotécnia)" },
                  { "titulo": "Historia clínica" },
                  { "titulo": "Signos vitales" },
                  { "titulo": "Interpretación de hallazgos clínicos (propedéutica)" },
                  { "titulo": "Semiología por sistemas" },
              ]
            },
          ]
          },
          {
            "titulo": "Ciencias sociales y humanas",
            "hijos": [
              { 
                "titulo": "Psicología y desarrollo humano",
                "hijos": [
                  { "titulo": "Curso de vida" },
                  { 
                    "titulo": "Bases del comportamiento",
                    "hijos": [
                      { "titulo": "Teorías de la personalidad" },
                      { "titulo": "Procesos cognitivos y emocionales" },
                      { "titulo": "Estrés y adaptación" },
                      { "titulo": "Sufrimiento y muerte" },
                      { "titulo": "Comunicación terapéutica" },
                      { "titulo": "Estrategias de apoyo emocional" }
                  ]
                },
              ]
            },
              {         
                "titulo": "Sociología y antropología",
                "hijos": [
                  { "titulo": "Conceptos de cultura, sociedad, etnicidad, estructura y rol social" },
                  { "titulo": "Proceso salud enfermedad"},
                  { "titulo": "Diversidad y Cuidado Culturalmente Congruente:"},
                  { "titulo": "Determinantes sociales de la salud"},
                  { "titulo": "Familia como sistema social" },
                  { "titulo": "Interculturalidad, inclusión y equidad" }
                  ]
          },
          {         
                "titulo": "Bioética",
                "hijos": [
                  { "titulo": "Principios bioéticos fundamentales" },
                  { "titulo": "Dilemas éticos en las prácticas de enfermería" },
                  { "titulo": "Ética del cuidado" }
                  ]
          },
          {         
                "titulo": "Legislación en salud y enfermería",
                "hijos": [
                  { "titulo": "Marco normativo nacional" },
                  { "titulo": "Marco normativo internacional" }
                  ]
          },
        ]
      },
          {
            "titulo": "Educación",
            "hijos": [
              { "titulo": "Comunicación en salud" },
              { "titulo": "Teorías del aprendizaje" },
              { "titulo": "Proceso educativo" },
              { "titulo": "Didácticas y ayudas para la enseñanza e información en salud" },
              { "titulo": "Evaluación del aprendizaje" }
            ]
          }
        ]
      },

     {
        "titulo": "Núcleo disciplinar profesional: Enfermería",
        "hijos": [
          {
            "titulo": "Enfermería Básica",
            "hijos": [
              {
                "titulo": "Epistemología, historia, modelos y teorías de enfermería",
                "hijos": [
                  { "titulo": "Historia del cuidado y de enfermería" },
                  { "titulo": "Visiones del mundo (Empirista, Interpretativo, Socio-crítico)" },
                  { "titulo": "Metaparadigma de enfermería" },
                  { "titulo": "Sistema conceptual teórico empírico" },
                  { "titulo": "Generalidades modelos y teorías de enfermería" },
                  { "titulo": "Patrones de conocimiento " }
                ]
              },
              {
                "titulo": "Proceso de atención de enfermería (PAE)",
                "hijos": [
                  { "titulo": "Valoración de enfermería" },
                  { "titulo": "Diagnóstico de enfermería" },
                  { "titulo": "Planificación de cuidados" },
                  { "titulo": "Intervenciones de enfermería" },
                  { "titulo": "Evaluación de resultados" },
                  { "titulo": "Registros en enfermería" }
              ]
              },
              {
                "titulo": "Procedimientos y técnicas básicas de enfermería",
                "hijos": [
                  { "titulo": "Toma e interpretación de signos vitales" },
                  { "titulo": "Técnicas asépticas y de bioseguridad" },
                  { "titulo": "Administración segura de medicamentos" },
                  { "titulo": "Oxigenoterapia" },
                  { "titulo": "Cuidados de heridas y ostomías" },
                  { "titulo": "Accesos venosos periféricos" },
                  { "titulo": "Cateterismo urinario"}, 
                  { "titulo": "Toma de muestras para laboratorio" },
                  { "titulo": "Sonda nasogátrica" },
                  { "titulo": "Cuidados básicos (Higiene y confort, Movilización)" }
                  ]
              },              
            ]
          },
          {
            "titulo": "Enfermería específica",
            "hijos": [
              { 
                "titulo": "Salud materno perinatal y salud sexual y reproductiva",
                "hijos": [
                  {
                    "titulo": "Cuidado de Enfermería en salud sexual y reproductiva  a la  persona, pareja y familia",
                  "hijos": [
                      { "titulo": "Panorama de la salud sexual y reproductiva (normatividad)" },
                      { "titulo": "Vigilancia epidemiológica en la salud sexual y reproductiva" },
                      { "titulo": "Métodos anticonceptivos , consejería en salud sexual y reproductiva" },
                      { "titulo": "Educación para la Salud sexual y Reproductiva, servicios amigables para jóvenes y adolescentes" },
                      { "titulo": "Prevención de Infecciones de transmisión sexual" },
                      { "titulo": "Enfermería en la atención a las principales enfermedades ginecológicas (endometriosis,( SDPM, CACU)" },
                      { "titulo": "Atención preconcepcional" },
                      { "titulo": "Enfermeria en la atención a la persona con climaterio y/o menopausia" },
                  ]
                  },
                  {
                    "titulo": "Cuidado de la persona gestante y su familia.",
                    "hijos": [
                      { "titulo": "Cuidado prenatal: valoración de la gestante, control prenatal, educación sobre signos de alarma, curso de preparación para la maternidad y paternidad." },
                      { "titulo": "Salud mental  perinatal" }
                  ]
                  },
                  {
                    "titulo": "Cuidado de Enfermería a la persona y su familia durante el Trabajo  de Parto, Parto y Puerperio.",
                    "hijos": [
                      { "titulo": "Cuidado de enfermería y humanización  durante el trabajo de parto y parto, monitoria fetal." },
                      { "titulo": "Cuidado del puerperio: inmediato, mediato y tardio" },
                      { "titulo": "Medicamentos de interès obstetrico" },
                      { "titulo": "Cuidado de enfermería  al mujer con morbilidad obstétrica" },
                      { "titulo": "Cuidado de enfermería durante la emergencia obstétrica" },
                      { "titulo": "Lactancia materna y estrategias para su promoción" },
                      { "titulo": "Cuidado inmediato y mediato del recién nacido" },
                      { "titulo": "Cuidado de enfermería a las principales alteraciones en el recièn nacido" }
                  ]
                  },
              ]
              },             
              { 
                "titulo": "Salud del adulto y adulto mayor",
                "hijos": [
                  {
                    "titulo": "Fundamentos conceptuales del curso de vida adulto: determinantes, trayectorias y contexto",
                  "hijos": [
                      { "titulo": "Características biológicas, psicológicas y sociales de la adultez (temprana, media y tardía)." },
                      { "titulo": "Cambios fisiológicos normales del adulto y su implicación en el cuidado." },
                      { "titulo": "Impacto de los determinantes sociales, económicos, culturales, laborales sobre la salud del adulto." },
                      { "titulo": "Rol productivo, familiar y social del adulto." },
                      { "titulo": "Transiciones vitales del adulto (ingreso al trabajo, cambios familiares, roles, envejecimiento temprano.)" },
                      { "titulo": "Transiciones y crisis vitales (laborales, familiares, de salud)." },
                      { "titulo": "Enfoque poblacional, territorial, e intercultural en la salud del adulto." }
                  ]
                  },
                  {
                    "titulo": "Salud del adulto según niveles de atención.",
                    "hijos": [
                      {
                        "titulo": "Atención primaria" ,
                        "hijos": [
                        { "titulo": "Promoción de la salud y prevención de la enfermedad en el adulto." },
                        { "titulo": "Detección temprana de factores de riesgo y enfermedades prevalentes en el adulto." },
                        { "titulo": "Manejo de enfermedades crónicas no transmisibles (ECNT) en el adulto." },
                        { "titulo": "Manejo de enfermedades transmisibles en el adulto." },
                        { "titulo": "Salud mental en el adulto." }
                      ]
                      },                    
                      {
                        "titulo": "Atención secundaria" ,
                        "hijos": [
                        { "titulo": "Cuidado del adulto con enfermedades crónicas no transmisibles prevalentes" },
                        { "titulo": "Acompañamiento al paciente y familia en procesos de hospitalización, cirugía o rehabilitación." },
                        { "titulo": "Procedimientos básicos y avanzados o invasivos en enfermería." },
                        { "titulo": "Cuidado hospitalario, ambulatorio y comunitario del adulto enfermo." },
                        { "titulo": "Salud mental del adulto: depresión, ansiedad, estrés laboral, consumo, aislamiento." },
                        { "titulo": "Salud laboral, riesgos ocupacionales, ergonomía, cuidado en ambientes de trabajo." },
                        { "titulo": "Participación comunitaria, redes de apoyo, cuidado intergeneracional." },
                        { "titulo": "Uso de tecnologías, telemonitorización, seguimiento domiciliario." }
                      ]
                      },
                      {
                        "titulo": "Atención terciaria" ,
                        "hijos": [
                        { "titulo": "Cuidado especializado, rehabilitación, cuidados de alta complejidad, seguridad del paciente, prevención de complicaciones en el adulto." },
                        { "titulo": "Cuidado médico-quirúrgico: manejo preoperatorio y postoperatorio." },
                        { "titulo": "Planes de cuidado personalizados según diagnóstico y educación en cuidados domiciliarios posthospitalarios." },
                        { "titulo": "Estrategias para la educación del adulto y su familia: autocuidado, adherencia terapéutica, empoderamiento." },
                        { "titulo": "Rehabilitación funcional, manejo de la dependencia, redes de soporte." },
                        { "titulo": "Coordinación interprofesional e interdisciplinaria del cuidado del adulto frágil o con discapacidad." },
                        { "titulo": "Humanización, calidad del cuidado y gestión del servicio para el adulto, comunicación terapéutica, respeto al paciente adulto, familia y cuidadores." },
                        { "titulo": "Seguridad del paciente adulto, gestión de riesgos, calidad y mejora continua del servicio." },
                        { "titulo": "Liderazgo del profesional de enfermería en el cuidado del adulto: gestión, dirección, innovación, investigación." }
                      ]
                      }
                    ]
                  },
                  {
                    "titulo": "Fenómenos de salud frecuentes en el adulto.",
                    "hijos": [
                      { "titulo": "Valoración y manejo de enfermedades cardiovasculares, metabólicas, respiratorias, musculoesqueléticas y mentales." },
                      { "titulo": "Dolor crónico y agudo." },
                      { "titulo": "Estrés, ansiedad, depresión y afrontamiento." },
                      { "titulo": "Sexualidad, fertilidad y salud ocupacional." },
                      { "titulo": "Autonomía, dependencia y discapacidad." }
                  ]
                  },
                  {
                    "titulo": "Enfoque familiar y comunitario.",
                    "hijos": [
                      { "titulo": "Ciclo vital familiar y su relación con el cuidado del adulto." },
                      { "titulo": "Familia como sistema de apoyo y red cuidadora." },
                      { "titulo": "Estrategias de educación en salud y autocuidado familiar." },
                      { "titulo": "Intervención comunitaria y redes de apoyo." },
                      { "titulo": "Identificación de necesidades de salud del adulto en la comunidad." },
                      { "titulo": "Diseño e implementación de proyectos de promoción y prevención." },
                      { "titulo": "Coordinación con redes institucionales y comunitarias." },
                      { "titulo": "Referencia y contrarreferencia según nivel de complejidad." }
                  ]
                  },
                  {
                    "titulo": "Ética, bioética y humanización del cuidado.",
                    "hijos": [
                      { "titulo": "Respeto por la autonomía, confidencialidad y decisiones del adulto." },
                      { "titulo": "Dilemas éticos en la práctica en el adulto." },
                      { "titulo": "Cuidado humanizado y comunicación terapéutica." }
                  ]
                  },
              ]
              },
              {
                "titulo": "Cuidados paliativos y al final de la vida",
                "hijos": [
                  { "titulo": "Principios y fundamentos de los cuidados paliativos" },
                  { "titulo": "Manejo del dolor y síntomas en cuidados paliativos" },
                  { "titulo": "Acompañamiento, apoyo emocional y espiritual al paciente y su familia" },
                  { "titulo": "Ética y toma de decisiones al final de la vida" },
                  { "titulo": "Comunicación terapéutica en cuidados paliativos" },
                  { "titulo": "Políticas Públicas Ley Consuelo Devís Saavedra. Ley 1733 de 2014 y Voluntad Anticipada Resolución 2665 de 2018." },
                  { "titulo": "Cuidar a quien Cuida. Programas de Apoyo." }
                ]
              },
              {
                "titulo": "Salud del niño y el adolescente",
                "hijos": [
                  { "titulo": "Crecimiento y desarrollo del niño y niña" },
                  { "titulo": "Enfermedades prevalentes de la infancia (AIEPI)" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña de 0 a 36 meses" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña en edad preescolar/escolar" },
                  { "titulo": "Cuidado de enfermería al niño y niña en el programa de inmunizaciones (PAI)" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente en el ámbito hosítalario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones gastrointestinales" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones del sistema urinario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones respiratorias" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con enfermedades crónicas" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con urgencias pediátricas" }
                ]
              }
            ]
          },          
        ]
      }
    ]
  },
  { titulo: "Elementos de competencia",
    hijos: [
      {
    titulo: "1.1 Valorar las necesidades de cuidado de la persona (paciente, familia y comunidad) de acuerdo con datos objetivos y subjetivos del proceso de enfermería.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "1.1.1 La realización de la valoración integral (física, emocional, psicológica y espiritual) de la persona corresponde con aspectos diferenciales, inclusivos e interculturales." },
          { "titulo": "1.1.2 El uso de instrumentos de valoración física derivados de patrones funcionales y/o dominios y otros desarrollados por enfermería en la  captura de información está acorde con proceso de enfermería." },
          { "titulo": "1.1.3 La utilización de instrumentos y recursos en la valoración, registro y reporte está acorde con estrategias, guías, patrones, protocolos y lineamientos definidas para cada situación y ciclo vida definidos por cada institución y el Sistema General de Seguridad Social en Salud (SGSSS)." },
          { "titulo": "1.1.4 El respeto a las diferencias y el ámbito cultural de procedencia de cada persona está acorde con aspectos diferenciales, inclusivos e interculturales." },
          { "titulo": "1.1.5 La aplicación de entrevista semiestructurada, estructurada y/o otros medios desarrollados por enfermería en el registro de datos objetivos y subjetivos corresponde con metodología y proceso de enfermería." },
          { "titulo": "1.1.6 El empleo de software u otros medios diseñados por la institución en el registro de datos objetivos, subjetivos, examen físico y valoración de persona (paciente, familia y comunidad) en los diferentes contextos corresponde con proceso de atención de enfermería e infraestructura tecnológica de la institución." }
          ],
        },
      ]
      },
      {
    titulo: "1.2 Priorizar  la atención de atención de enfermería teniendo en cuenta motivo de consulta, entrevista, datos, pruebas, razonamiento y hallazgos de valoración.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "1.2.1 La identificación de la situación de salud prioritaria de la persona, la familia y la comunidad está acorde con hallazgos de valoración." },
          { "titulo": "1.2.2 El análisis de datos de la valoración y la situación de la persona (paciente, familia y comunidad) está acorde con estándares y parámetros de NANDA u otros establecidos." },
          { "titulo": "1.2.3 La determinación de la acción inmediata a seguir de salud prioritaria cumple con hallazgos de valoración y juicio clínico." },
          { "titulo": "1.2.4 El registro de hallazgos y condiciones de valoración cumple con protocolos establecidos." }          
        ],
        },
      ]
      },
      {
    titulo: "1.3 Diagnosticar los problemas de salud reales o potenciales de la persona (paciente, familia y comunidad) teniendo en cuenta la valoración en el ámbito de actuación de la enfermera.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "1.3.1 El establecimiento de características y factores relacionados en la construcción del diagnóstico de los problemas de salud de la persona (paciente, familia y comunidad) está acorde con la valoración, habilidades y conocimientos disciplinares de la enfermera." },
          { "titulo": "1.3.2 La participación en la construcción de diagnósticos individuales, familiares y colectivos de problemas de salud corresponde con estándares y parámetros NANDA (Asociación Americana de diagnósticos de Enfermería) u otros establecidos para tal fin." },
          { "titulo": "1.3.3 La confrontación del diagnóstico con los estándares de NANDA (Asociación Americana de diagnósticos de Enfermería) u otros parámetros de la profesión para este fin cumple con criterios establecidos." },
          { "titulo": "1.3.4 La comunicación del diagnóstico de enfermería al paciente y su familia cumple con técnicas de comunicación asertiva y protocolos institucionales" },
          { "titulo": "1.3.5 La socialización del diágnóstico con el equipo de enfermería y otros cumple con técnicas de comunicación asertiva, protocolos institucionales y otros." },
          { "titulo": "1.3.6 El registro del diagnóstico de enfermería en las historia clínica y otros formatos está acorde con los protocolos institucionales o del sistema de salud." }
          ],
        },
      ]
      },
      {
    titulo: "1.4 Planear estrategias de intervención de cuidado para la persona (paciente, familia y comunidad) teniendo en cuenta los problemas, diagnóstico y resultados esperados.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "1.4.1 La proyección de las intervenciones de enfermería está acorde con necesidades de la persona (paciente, familia, comunidad), diagnóstico de enfermería, recursos disponibles, habilidad, destreza y conocimiento de la enfermera en el marco de la seguridad y protección." },
          { "titulo": "1.4.2 La priorización de las intervenciones de enfermería está acorde con diagnóstico de situación de salud." },
          { "titulo": "1.4.3 La selección de las intervenciones de enfermería en el logro de los resultados esperados cumple con diagnóstico, problemas de salud reales o potenciales de la persona, familia y comunidad." },
          { "titulo": "1.4.4 El acuerdo con la persona sujeto de cuidado, familia o comunidad corresponde con metas y resultados de cuidado (cómo se va a hacer el cuidado, con qué se va a hacer y en qué tiempo)." },
          { "titulo": "1.4.5 La asignación del equipo de enfermería a los cuidados correspondientes está acorde con las necesidades prioritarias de cada paciente." },
          { "titulo": "1.4.6 La delegación de actividades de bajo riesgo en su equipo de auxiliares corresponde con demanda de necesidades básicas, higiene y confort de la o las personas (paciente, familia, comunidad)." }
          ],
        },
      ]
      }
    ]
  },      
  { titulo: "Resultados de aprendizaje",
      "hijos": [
          { "titulo": "RA1. Especificar cuidados de enfermería de acuerdo con proceso de atención de enfermería, necesidades de la persona, familia y comunidad en curso de vida, juicio clínico en los diferentes niveles de atención y normatividad vigente de enfermería." },
          { "titulo": "RA2. Emplear técnicas de valoración para realizar la entrevista semiestructurada, estructurada y otros medios y/o instrumentos utilizados por enfermería y el registro de datos objetivos y subjetivos de acuerdo con metodología, guías de manejo de enfermería." },
          { "titulo": "RA3. Determinar las acciones a seguir en el cuidado integral de enfermería derivados del proceso de valoración según hallazgos, información, datos  y resultados por patrones funcionales, dominios y otros."},
          { "titulo": "RA4. Estructurar plan de atención de enfermería a persona, familia y comunidad teniendo en cuenta necesidades detectadas, pensamiento crítico, reflexivo e innovador y el juicio clínico."}
        ],
      },
    ]
  },

  {
    "titulo": "COMPETENCIA 2: ",
    "descripcion": "Implementar el Plan de Atención de Enfermería (PAE) y sus intervenciones de acuerdo con las necesidades de salud de la persona (paciente, familia y comunidad) de forma integral, diferencial, inclusiva, intercultural y con relacionamiento interprofesional. DOMINIO: Cuidado de enfermería para la vida, el bienestar y la salud humana. DOMINIO:Educación y comunicación terapeútica para el cuidado de enfermería.",
    elementos: [
      { titulo: "Contenidos",
      hijos: [
     {
        "titulo": "Núcleo disciplinar profesional: Enfermería",
        "hijos": [
          {
            "titulo": "Enfermería Básica",
            "hijos": [
              {
                "titulo": "Epistemología, historia, modelos y teorías de enfermería",
                "hijos": [
                  { "titulo": "Historia del cuidado y de enfermería" },
                  { "titulo": "Visiones del mundo (Empirista, Interpretativo, Socio-crítico)" },
                  { "titulo": "Metaparadigma de enfermería" },
                  { "titulo": "Sistema conceptual teórico empírico" },
                  { "titulo": "Generalidades modelos y teorías de enfermería" },
                  { "titulo": "Patrones de conocimiento " }
                ]
              },
              {
                "titulo": "Proceso de atención de enfermería (PAE)",
                "hijos": [
                  { "titulo": "Valoración de enfermería" },
                  { "titulo": "Diagnóstico de enfermería" },
                  { "titulo": "Planificación de cuidados" },
                  { "titulo": "Intervenciones de enfermería" },
                  { "titulo": "Evaluación de resultados" },
                  { "titulo": "Registros en enfermería" }
              ]
              },
              {
                "titulo": "Procedimientos y técnicas básicas de enfermería",
                "hijos": [
                  { "titulo": "Toma e interpretación de signos vitales" },
                  { "titulo": "Técnicas asépticas y de bioseguridad" },
                  { "titulo": "Administración segura de medicamentos" },
                  { "titulo": "Oxigenoterapia" },
                  { "titulo": "Cuidados de heridas y ostomías" },
                  { "titulo": "Accesos venosos periféricos" },
                  { "titulo": "Cateterismo urinario"}, 
                  { "titulo": "Toma de muestras para laboratorio" },
                  { "titulo": "Sonda nasogátrica" },
                  { "titulo": "Cuidados básicos (Higiene y confort, Movilización)" }
                  ]
              },              
            ]
          },
          {
            "titulo": "Enfermería específica",
            "hijos": [
              { 
                "titulo": "Salud materno perinatal y salud sexual y reproductiva",
                "hijos": [
                  {
                    "titulo": "Cuidado de Enfermería en salud sexual y reproductiva  a la  persona, pareja y familia",
                  "hijos": [
                      { "titulo": "Panorama de la salud sexual y reproductiva (normatividad)" },
                      { "titulo": "Vigilancia epidemiológica en la salud sexual y reproductiva" },
                      { "titulo": "Métodos anticonceptivos , consejería en salud sexual y reproductiva" },
                      { "titulo": "Educación para la Salud sexual y Reproductiva, servicios amigables para jóvenes y adolescentes" },
                      { "titulo": "Prevención de Infecciones de transmisión sexual" },
                      { "titulo": "Enfermería en la atención a las principales enfermedades ginecológicas (endometriosis,( SDPM, CACU)" },
                      { "titulo": "Atención preconcepcional" },
                      { "titulo": "Enfermeria en la atención a la persona con climaterio y/o menopausia" },
                  ]
                  },
                  {
                    "titulo": "Cuidado de la persona gestante y su familia.",
                    "hijos": [
                      { "titulo": "Cuidado prenatal: valoración de la gestante, control prenatal, educación sobre signos de alarma, curso de preparación para la maternidad y paternidad." },
                      { "titulo": "Salud mental  perinatal" }
                  ]
                  },
                  {
                    "titulo": "Cuidado de Enfermería a la persona y su familia durante el Trabajo  de Parto, Parto y Puerperio.",
                    "hijos": [
                      { "titulo": "Cuidado de enfermería y humanización  durante el trabajo de parto y parto, monitoria fetal." },
                      { "titulo": "Cuidado del puerperio: inmediato, mediato y tardio" },
                      { "titulo": "Medicamentos de interès obstetrico" },
                      { "titulo": "Cuidado de enfermería  al mujer con morbilidad obstétrica" },
                      { "titulo": "Cuidado de enfermería durante la emergencia obstétrica" },
                      { "titulo": "Lactancia materna y estrategias para su promoción" },
                      { "titulo": "Cuidado inmediato y mediato del recién nacido" },
                      { "titulo": "Cuidado de enfermería a las principales alteraciones en el recièn nacido" }
                  ]
                  },
              ]
              },             
              { 
                "titulo": "Salud del adulto y adulto mayor",
                "hijos": [
                  {
                    "titulo": "Fundamentos conceptuales del curso de vida adulto: determinantes, trayectorias y contexto",
                  "hijos": [
                      { "titulo": "Características biológicas, psicológicas y sociales de la adultez (temprana, media y tardía)." },
                      { "titulo": "Cambios fisiológicos normales del adulto y su implicación en el cuidado." },
                      { "titulo": "Impacto de los determinantes sociales, económicos, culturales, laborales sobre la salud del adulto." },
                      { "titulo": "Rol productivo, familiar y social del adulto." },
                      { "titulo": "Transiciones vitales del adulto (ingreso al trabajo, cambios familiares, roles, envejecimiento temprano.)" },
                      { "titulo": "Transiciones y crisis vitales (laborales, familiares, de salud)." },
                      { "titulo": "Enfoque poblacional, territorial, e intercultural en la salud del adulto." }
                  ]
                  },
                  {
                    "titulo": "Salud del adulto según niveles de atención.",
                    "hijos": [
                      {
                        "titulo": "Atención primaria" ,
                        "hijos": [
                        { "titulo": "Promoción de la salud y prevención de la enfermedad en el adulto." },
                        { "titulo": "Detección temprana de factores de riesgo y enfermedades prevalentes en el adulto." },
                        { "titulo": "Manejo de enfermedades crónicas no transmisibles (ECNT) en el adulto." },
                        { "titulo": "Manejo de enfermedades transmisibles en el adulto." },
                        { "titulo": "Salud mental en el adulto." }
                      ]
                      },                    
                      {
                        "titulo": "Atención secundaria" ,
                        "hijos": [
                        { "titulo": "Cuidado del adulto con enfermedades crónicas no transmisibles prevalentes" },
                        { "titulo": "Acompañamiento al paciente y familia en procesos de hospitalización, cirugía o rehabilitación." },
                        { "titulo": "Procedimientos básicos y avanzados o invasivos en enfermería." },
                        { "titulo": "Cuidado hospitalario, ambulatorio y comunitario del adulto enfermo." },
                        { "titulo": "Salud mental del adulto: depresión, ansiedad, estrés laboral, consumo, aislamiento." },
                        { "titulo": "Salud laboral, riesgos ocupacionales, ergonomía, cuidado en ambientes de trabajo." },
                        { "titulo": "Participación comunitaria, redes de apoyo, cuidado intergeneracional." },
                        { "titulo": "Uso de tecnologías, telemonitorización, seguimiento domiciliario." }
                      ]
                      },
                      {
                        "titulo": "Atención terciaria" ,
                        "hijos": [
                        { "titulo": "Cuidado especializado, rehabilitación, cuidados de alta complejidad, seguridad del paciente, prevención de complicaciones en el adulto." },
                        { "titulo": "Cuidado médico-quirúrgico: manejo preoperatorio y postoperatorio." },
                        { "titulo": "Planes de cuidado personalizados según diagnóstico y educación en cuidados domiciliarios posthospitalarios." },
                        { "titulo": "Estrategias para la educación del adulto y su familia: autocuidado, adherencia terapéutica, empoderamiento." },
                        { "titulo": "Rehabilitación funcional, manejo de la dependencia, redes de soporte." },
                        { "titulo": "Coordinación interprofesional e interdisciplinaria del cuidado del adulto frágil o con discapacidad." },
                        { "titulo": "Humanización, calidad del cuidado y gestión del servicio para el adulto, comunicación terapéutica, respeto al paciente adulto, familia y cuidadores." },
                        { "titulo": "Seguridad del paciente adulto, gestión de riesgos, calidad y mejora continua del servicio." },
                        { "titulo": "Liderazgo del profesional de enfermería en el cuidado del adulto: gestión, dirección, innovación, investigación." }
                      ]
                      }
                    ]
                  },
                  {
                    "titulo": "Fenómenos de salud frecuentes en el adulto.",
                    "hijos": [
                      { "titulo": "Valoración y manejo de enfermedades cardiovasculares, metabólicas, respiratorias, musculoesqueléticas y mentales." },
                      { "titulo": "Dolor crónico y agudo." },
                      { "titulo": "Estrés, ansiedad, depresión y afrontamiento." },
                      { "titulo": "Sexualidad, fertilidad y salud ocupacional." },
                      { "titulo": "Autonomía, dependencia y discapacidad." }
                  ]
                  },
                  {
                    "titulo": "Enfoque familiar y comunitario.",
                    "hijos": [
                      { "titulo": "Ciclo vital familiar y su relación con el cuidado del adulto." },
                      { "titulo": "Familia como sistema de apoyo y red cuidadora." },
                      { "titulo": "Estrategias de educación en salud y autocuidado familiar." },
                      { "titulo": "Intervención comunitaria y redes de apoyo." },
                      { "titulo": "Identificación de necesidades de salud del adulto en la comunidad." },
                      { "titulo": "Diseño e implementación de proyectos de promoción y prevención." },
                      { "titulo": "Coordinación con redes institucionales y comunitarias." },
                      { "titulo": "Referencia y contrarreferencia según nivel de complejidad." }
                  ]
                  },
                  {
                    "titulo": "Ética, bioética y humanización del cuidado.",
                    "hijos": [
                      { "titulo": "Respeto por la autonomía, confidencialidad y decisiones del adulto." },
                      { "titulo": "Dilemas éticos en la práctica en el adulto." },
                      { "titulo": "Cuidado humanizado y comunicación terapéutica." }
                  ]
                  },
              ]
              },
              {
                "titulo": "Cuidados paliativos y al final de la vida",
                "hijos": [
                  { "titulo": "Principios y fundamentos de los cuidados paliativos" },
                  { "titulo": "Manejo del dolor y síntomas en cuidados paliativos" },
                  { "titulo": "Acompañamiento, apoyo emocional y espiritual al paciente y su familia" },
                  { "titulo": "Ética y toma de decisiones al final de la vida" },
                  { "titulo": "Comunicación terapéutica en cuidados paliativos" },
                  { "titulo": "Políticas Públicas Ley Consuelo Devís Saavedra. Ley 1733 de 2014 y Voluntad Anticipada Resolución 2665 de 2018." },
                  { "titulo": "Cuidar a quien Cuida. Programas de Apoyo." }
                ]
              },
              {
                "titulo": "Salud del niño y el adolescente",
                "hijos": [
                  { "titulo": "Crecimiento y desarrollo del niño y niña" },
                  { "titulo": "Enfermedades prevalentes de la infancia (AIEPI)" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña de 0 a 36 meses" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña en edad preescolar/escolar" },
                  { "titulo": "Cuidado de enfermería al niño y niña en el programa de inmunizaciones (PAI)" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente en el ámbito hosítalario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones gastrointestinales" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones del sistema urinario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones respiratorias" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con enfermedades crónicas" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con urgencias pediátricas" }
                ]
              }
            ]
          },          
        ]
      }
    ]
  },
  { titulo: "Elementos de competencia",
    hijos: [
      {
    titulo: "2.1 Proyectar la implementación del Plan de Atención de Enfermería (PAE) y sus intervenciones de acuerdo con necesidades de salud de la persona (paciente, familia y comunidad) y con relacionamiento interprofesional.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "2.1.1 La identificación de diagnósticos de enfermería corresponde con el análisis de datos clínicos, psicosociales y ambientales de la persona, la familia y la comunidad; y, principios científicos y éticos del cuidado profesional." },
          { "titulo": "2.1.2 La formulación de objetivos de cuidado cumple con las necesidades individuales y colectivas identificadas durante la valoración, y las metas terapéuticas definidas en conjunto con el equipo interdisciplinario." },
          { "titulo": "2.1.3 La selección de intervenciones de enfermería corresponde con el juicio clínico profesional sustentado en la evidencia, las capacidades del entorno y la articulación con otros profesionales de la salud." },
          { "titulo": "2.1.4 La planificación de recursos humanos y materiales cumple con los requerimientos del Plan de Atención de Enfermería (PAE establecido, los protocolos institucionales y la disponibilidad del sistema de salud." }
          ],
        },
      ]
      },
      {
    titulo: "2.2 Ejecutar el cuidado de enfermería a la persona (paciente, familia y comunidad) teniendo en cuenta la planeación, priorización y la evidencia de las intervenciones a realizar.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "2.2.1 La determinación de las intervenciones está acorde con los problemas de salud identificados y priorizados." },
          { "titulo": "2.2.2 La realización de las intervenciones de cuidado de enfermería a la persona, (paciente, familia o comunidad) está acorde con la planeación de acciones como: intervención familiar, intervenciones a la comunidad, administración de medicamentos, administración de líquidos, electrolitos, nutrición parenteral y enteral, hemoderivados, inmunobiológicos, oxigenoterapia, cambios de posición, cateterismos, procedimientos invasivos y no invasivos, manejo de heridas, estomas, dispositivos, primer respondiente y otros que requieren práctica basada en la evidencia, seguridad y experticia profesional." },
          { "titulo": "2.2.3 La utilización de lineamientos del sistema de clasificación de intervenciones de enfermería (NIC) u otros corresponde con intervenciones, directas, indirectas en función del paciente, autónomas y colaborativas." },
          { "titulo": "2.2.4 La realización del seguimiento y retroalimentación del PAE establecido en los diferentes entornos de prestación de servicios cumple con lineamientos institucionales y del sistema de salud." },
          { "titulo": "2.2.5 El registro del plan de atención de enfermería (PAE) con sus intervenciones cumple con formatos y medios establecidos." }       
        ],
        },
      ]
      },
      {
    titulo: "2.3 Evaluar el plan de cuidado ejecutado a la persona (paciente, familia y comunidad) teniendo en cuenta las necesidades de cuidado, los recursos disponibles, los resultados obtenidos o esperados.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "2.3.1 El seguimiento a la ejecución de estrategias de cuidado cumple con planeación establecida." },
          { "titulo": "2.3.2 La medición del impacto de los resultados y las intervenciones realizadas a la persona (paciente, familia y comunidad) está acorde con la Clasificación de Resultados de Enfermería (NOC) y otros." },
          { "titulo": "2.3.3 La reasignación de acciones complementarias está acorde con las necesidades identificadas de cada una de las personas, familias y comunidades." },
          { "titulo": "2.3.4 La solicitud de la facturación de los servicios correspondientes de los CUPS de enfermería está acorde con plan de cuidado ejecutado y los resultados." },
          { "titulo": "2.3.5 El reporte de actividades del PAE en el Código Único de Procedimientos en Salud (CUPS enfermería) cumple con lineamientos técnicos establecidos." }
          ],
        },
      ]
      },      
    ]
  },      
  { titulo: "Resultados de aprendizaje",
      "hijos": [
          { "titulo": "RA1. Esbozar el diagnóstico de enfermería de la persona, familia y comunidad teniendo en cuenta el análisis, datos clínicos, psicosociales, ambientales del contexto." },
          { "titulo": "RA2. Elaborar el plan de atención de enfermería de acuerdo con las necesidades integrales de salud de la persona, familia y comunidad." },
          { "titulo": "RA3. Aplicar el plan de atención de enfermería y sus intervenciones a la persona, familia y comunidad de acuerdo con necesidades de cuidado, protocolos y guías de manejo vigentes."},
          { "titulo": "RA4. Juzgar Plan de Atención de Enfermería implementado teniendo en cuenta la planeación, priorización y evidencia científica de enfermería."}
        ],
      },
    ]
  },
 {
    "titulo": "COMPETENCIA 3: ",
    "descripcion": "Coordinar la prestación de servicios de enfermería y de salud centrados en la persona, la familia y comunidad de acuerdo con los principios de calidad de atención y metodologías de evidencia científica. DOMINIO:Cuidado de enfermería para la vida, el bienestar y la salud humana. DOMINIO: Educación y comunicación terapeútica para el cuidado de enfermería",
    elementos: [
      { titulo: "Contenidos",
      hijos: [
      {
        titulo: "Núcleo de conocimiento: Fundamentación o básico",
        "hijos": [
          {
            "titulo": "Matemáticas y ciencias naturales",
            "hijos": [
              {
                "titulo": "Matemáticas",
                "hijos": [
                  { "titulo": "Aritmética básica: operaciones fundamentales (suma, resta, multiplicación, división)" },
                  { "titulo": "Proporciones y razones: cálculo de dosis, diluciones, infusiones y mezclas" },
                  { "titulo": "Porcentajes: concentración de soluciones, interpretación de resultados de laboratorio" },
                  { "titulo": "Regla de tres simple y compuesta: cálculo de medicamentos y tiempos de administración" },
                  { "titulo": "Fracciones y decimales: manejo de unidades de medida y conversión de dosis" },
                  { "titulo": "Sistema métrico y conversiones de unidades: gramos, miligramos, microgramos, litros, mililitros" },
                  { "titulo": "Cálculo de áreas y volúmenes: preparación de soluciones, nutrición y fluidoterapia" },
                  { "titulo": "Estadística descriptiva básica: variables, medidas de tendencia central y dispersión, interpretación de gráficas y tablas" }
                ]
              },
              {
                "titulo": "Biología celular y molecular",
                "hijos": [
                  { "titulo": "Estructura y función celular" },
                  { "titulo": "Organelos celulares" },
                  { "titulo": "Transporte transmembrana" },
                  { "titulo": "Genética molecular" },
                  { "titulo": "Metabolismo energético" },
                  { "titulo": "Ciclo de Krebs o del ácido cítrico"},
                  { "titulo": "Fosforilación oxidativa" }
              ]
              },
              {
                "titulo": "Bioquímica",
                "hijos": [
                  { "titulo": "Soluciones y gases" },
                  { "titulo": "Equilibrio ácido base" },
                  { "titulo": "Estructura y función de carbohidratos, lípidos, proteínas y ácidos nucleicos" },
                  { "titulo": "Genética molecular" }
              ]
              },
              {
                "titulo": "Microbiología",
                "hijos": [
                  { "titulo": "Características generales" },
                  { "titulo": "Estructura bacterias, virus, hongos y parásitos" },
                  { "titulo": "Mecanismos de patogenicidad e importancia clínica" },
                  { "titulo": "Ciclos de replicación, medidas de prevención y control" },
                  { "titulo": "Enfermedades de obligatoria notificación" }
              ]
              },
            ]
          },
          {
            "titulo": "Ciencias de la salud",
            "hijos": [
              {
                "titulo": "Morfofisiología (Anatomia y Fisiología)",
                "hijos": [
                  { "titulo": "Sistema Nervioso" },
                  { "titulo": "Sistema Cardiovascular" },
                  { "titulo": "Sistema Respiratorio" },
                  { "titulo": "Sistema Renal y Urinario" },
                  { "titulo": "Sistema Endocrino" },
                  { "titulo": "Sistema Digestivo" },
                  { "titulo": "Sistema Musculoesquelético" },
                  { "titulo": "Sistema tegumentario" },
                  { "titulo": "Sistema inmune" },
                  { "titulo": "Sistema reproductivo" },
                  { "titulo": "Sistema hematopoyetico" }
              ]
            },
            {
                "titulo": "Fisiopatología",
                "hijos": [
                  { "titulo": "Mecanismos de lesión celular" },
                  {
                    "titulo": "Procesos Patológicos Fundamentales",
                    "hijos": [
                      { "titulo": "Inflamación y reparación tisular" },
                      { "titulo": "Infección y respuesta inmune" },
                      { "titulo": "Cicatrización" },
                      { "titulo": "Trastornos hemodinámicos" },
                      { "titulo": "Alteraciones metabólicas" },
                      { "titulo": "Flujo de líquidos y edema" },
                      { "titulo": "Neoplasia" },
                    ]
                  },                
                  {"titulo": "Fisiopatología por sistemas"},
                  {"titulo": "Psicopatología y alteraciones mentales" },
              ]
            },
            {
                "titulo": "Farmacología",
                "hijos": [
                  {
                  "titulo": "Principios Generales",
                  "hijos": [
                    { "titulo": "Farmacocinética: absorción, distribución, metabolismo y excreción de fármacos" },
                    { "titulo": "Farmacodinámica: mecanismos de acción, efectos terapéuticos y tóxicos" },
                    { "titulo": "Vías de administración de fármacos" },
                  ],
                },
                  { "titulo": "Liquidos y electrolitos"},
                  { "titulo": "Hemoderivados" },
                  { "titulo": "Cálculo de dosis"},
                  { "titulo": "Farmacovigilancia"},
                  { "titulo": "Famacología por sistemas o grupos terapéuticos"}
              ]
            },
            {
                "titulo": "Semiología",
                "hijos": [
                  { "titulo": "Entrevista" },
                  { "titulo": "Exploración física" },
                  { "titulo": "Técnicas de exploración (semiotécnia)" },
                  { "titulo": "Historia clínica" },
                  { "titulo": "Signos vitales" },
                  { "titulo": "Interpretación de hallazgos clínicos (propedéutica)" },
                  { "titulo": "Semiología por sistemas" },
              ]
            },
          ]
          },
          {
            "titulo": "Ciencias sociales y humanas",
            "hijos": [
              { 
                "titulo": "Psicología y desarrollo humano",
                "hijos": [
                  { "titulo": "Curso de vida" },
                  { 
                    "titulo": "Bases del comportamiento",
                    "hijos": [
                      { "titulo": "Teorías de la personalidad" },
                      { "titulo": "Procesos cognitivos y emocionales" },
                      { "titulo": "Estrés y adaptación" },
                      { "titulo": "Sufrimiento y muerte" },
                      { "titulo": "Comunicación terapéutica" },
                      { "titulo": "Estrategias de apoyo emocional" }
                  ]
                },
              ]
            },
              {         
                "titulo": "Sociología y antropología",
                "hijos": [
                  { "titulo": "Conceptos de cultura, sociedad, etnicidad, estructura y rol social" },
                  { "titulo": "Proceso salud enfermedad"},
                  { "titulo": "Diversidad y Cuidado Culturalmente Congruente:"},
                  { "titulo": "Determinantes sociales de la salud"},
                  { "titulo": "Familia como sistema social" },
                  { "titulo": "Interculturalidad, inclusión y equidad" }
                  ]
          },
          {         
                "titulo": "Bioética",
                "hijos": [
                  { "titulo": "Principios bioéticos fundamentales" },
                  { "titulo": "Dilemas éticos en las prácticas de enfermería" },
                  { "titulo": "Ética del cuidado" }
                  ]
          },
          {         
                "titulo": "Legislación en salud y enfermería",
                "hijos": [
                  { "titulo": "Marco normativo nacional" },
                  { "titulo": "Marco normativo internacional" }
                  ]
          },
        ]
      },
          {
            "titulo": "Educación",
            "hijos": [
              { "titulo": "Comunicación en salud" },
              { "titulo": "Teorías del aprendizaje" },
              { "titulo": "Proceso educativo" },
              { "titulo": "Didácticas y ayudas para la enseñanza e información en salud" },
              { "titulo": "Evaluación del aprendizaje" }
            ]
          }
        ]
      },

     {
        "titulo": "Núcleo disciplinar profesional: Enfermería",
        "hijos": [
          {
            "titulo": "Enfermería Básica",
            "hijos": [
              {
                "titulo": "Epistemología, historia, modelos y teorías de enfermería",
                "hijos": [
                  { "titulo": "Historia del cuidado y de enfermería" },
                  { "titulo": "Visiones del mundo (Empirista, Interpretativo, Socio-crítico)" },
                  { "titulo": "Metaparadigma de enfermería" },
                  { "titulo": "Sistema conceptual teórico empírico" },
                  { "titulo": "Generalidades modelos y teorías de enfermería" },
                  { "titulo": "Patrones de conocimiento " }
                ]
              },
              {
                "titulo": "Proceso de atención de enfermería (PAE)",
                "hijos": [
                  { "titulo": "Valoración de enfermería" },
                  { "titulo": "Diagnóstico de enfermería" },
                  { "titulo": "Planificación de cuidados" },
                  { "titulo": "Intervenciones de enfermería" },
                  { "titulo": "Evaluación de resultados" },
                  { "titulo": "Registros en enfermería" }
              ]
              },
              {
                "titulo": "Procedimientos y técnicas básicas de enfermería",
                "hijos": [
                  { "titulo": "Toma e interpretación de signos vitales" },
                  { "titulo": "Técnicas asépticas y de bioseguridad" },
                  { "titulo": "Administración segura de medicamentos" },
                  { "titulo": "Oxigenoterapia" },
                  { "titulo": "Cuidados de heridas y ostomías" },
                  { "titulo": "Accesos venosos periféricos" },
                  { "titulo": "Cateterismo urinario"}, 
                  { "titulo": "Toma de muestras para laboratorio" },
                  { "titulo": "Sonda nasogátrica" },
                  { "titulo": "Cuidados básicos (Higiene y confort, Movilización)" }
                  ]
              },              
            ]
          },
          {
            "titulo": "Enfermería específica",
            "hijos": [
              { 
                "titulo": "Salud materno perinatal y salud sexual y reproductiva",
                "hijos": [
                  {
                    "titulo": "Cuidado de Enfermería en salud sexual y reproductiva  a la  persona, pareja y familia",
                  "hijos": [
                      { "titulo": "Panorama de la salud sexual y reproductiva (normatividad)" },
                      { "titulo": "Vigilancia epidemiológica en la salud sexual y reproductiva" },
                      { "titulo": "Métodos anticonceptivos , consejería en salud sexual y reproductiva" },
                      { "titulo": "Educación para la Salud sexual y Reproductiva, servicios amigables para jóvenes y adolescentes" },
                      { "titulo": "Prevención de Infecciones de transmisión sexual" },
                      { "titulo": "Enfermería en la atención a las principales enfermedades ginecológicas (endometriosis,( SDPM, CACU)" },
                      { "titulo": "Atención preconcepcional" },
                      { "titulo": "Enfermeria en la atención a la persona con climaterio y/o menopausia" },
                  ]
                  },
                  {
                    "titulo": "Cuidado de la persona gestante y su familia.",
                    "hijos": [
                      { "titulo": "Cuidado prenatal: valoración de la gestante, control prenatal, educación sobre signos de alarma, curso de preparación para la maternidad y paternidad." },
                      { "titulo": "Salud mental  perinatal" }
                  ]
                  },
                  {
                    "titulo": "Cuidado de Enfermería a la persona y su familia durante el Trabajo  de Parto, Parto y Puerperio.",
                    "hijos": [
                      { "titulo": "Cuidado de enfermería y humanización  durante el trabajo de parto y parto, monitoria fetal." },
                      { "titulo": "Cuidado del puerperio: inmediato, mediato y tardio" },
                      { "titulo": "Medicamentos de interès obstetrico" },
                      { "titulo": "Cuidado de enfermería  al mujer con morbilidad obstétrica" },
                      { "titulo": "Cuidado de enfermería durante la emergencia obstétrica" },
                      { "titulo": "Lactancia materna y estrategias para su promoción" },
                      { "titulo": "Cuidado inmediato y mediato del recién nacido" },
                      { "titulo": "Cuidado de enfermería a las principales alteraciones en el recièn nacido" }
                  ]
                  },
              ]
              },             
              { 
                "titulo": "Salud del adulto y adulto mayor",
                "hijos": [
                  {
                    "titulo": "Fundamentos conceptuales del curso de vida adulto: determinantes, trayectorias y contexto",
                  "hijos": [
                      { "titulo": "Características biológicas, psicológicas y sociales de la adultez (temprana, media y tardía)." },
                      { "titulo": "Cambios fisiológicos normales del adulto y su implicación en el cuidado." },
                      { "titulo": "Impacto de los determinantes sociales, económicos, culturales, laborales sobre la salud del adulto." },
                      { "titulo": "Rol productivo, familiar y social del adulto." },
                      { "titulo": "Transiciones vitales del adulto (ingreso al trabajo, cambios familiares, roles, envejecimiento temprano.)" },
                      { "titulo": "Transiciones y crisis vitales (laborales, familiares, de salud)." },
                      { "titulo": "Enfoque poblacional, territorial, e intercultural en la salud del adulto." }
                  ]
                  },
                  {
                    "titulo": "Salud del adulto según niveles de atención.",
                    "hijos": [
                      {
                        "titulo": "Atención primaria" ,
                        "hijos": [
                        { "titulo": "Promoción de la salud y prevención de la enfermedad en el adulto." },
                        { "titulo": "Detección temprana de factores de riesgo y enfermedades prevalentes en el adulto." },
                        { "titulo": "Manejo de enfermedades crónicas no transmisibles (ECNT) en el adulto." },
                        { "titulo": "Manejo de enfermedades transmisibles en el adulto." },
                        { "titulo": "Salud mental en el adulto." }
                      ]
                      },                    
                      {
                        "titulo": "Atención secundaria" ,
                        "hijos": [
                        { "titulo": "Cuidado del adulto con enfermedades crónicas no transmisibles prevalentes" },
                        { "titulo": "Acompañamiento al paciente y familia en procesos de hospitalización, cirugía o rehabilitación." },
                        { "titulo": "Procedimientos básicos y avanzados o invasivos en enfermería." },
                        { "titulo": "Cuidado hospitalario, ambulatorio y comunitario del adulto enfermo." },
                        { "titulo": "Salud mental del adulto: depresión, ansiedad, estrés laboral, consumo, aislamiento." },
                        { "titulo": "Salud laboral, riesgos ocupacionales, ergonomía, cuidado en ambientes de trabajo." },
                        { "titulo": "Participación comunitaria, redes de apoyo, cuidado intergeneracional." },
                        { "titulo": "Uso de tecnologías, telemonitorización, seguimiento domiciliario." }
                      ]
                      },
                      {
                        "titulo": "Atención terciaria" ,
                        "hijos": [
                        { "titulo": "Cuidado especializado, rehabilitación, cuidados de alta complejidad, seguridad del paciente, prevención de complicaciones en el adulto." },
                        { "titulo": "Cuidado médico-quirúrgico: manejo preoperatorio y postoperatorio." },
                        { "titulo": "Planes de cuidado personalizados según diagnóstico y educación en cuidados domiciliarios posthospitalarios." },
                        { "titulo": "Estrategias para la educación del adulto y su familia: autocuidado, adherencia terapéutica, empoderamiento." },
                        { "titulo": "Rehabilitación funcional, manejo de la dependencia, redes de soporte." },
                        { "titulo": "Coordinación interprofesional e interdisciplinaria del cuidado del adulto frágil o con discapacidad." },
                        { "titulo": "Humanización, calidad del cuidado y gestión del servicio para el adulto, comunicación terapéutica, respeto al paciente adulto, familia y cuidadores." },
                        { "titulo": "Seguridad del paciente adulto, gestión de riesgos, calidad y mejora continua del servicio." },
                        { "titulo": "Liderazgo del profesional de enfermería en el cuidado del adulto: gestión, dirección, innovación, investigación." }
                      ]
                      }
                    ]
                  },
                  {
                    "titulo": "Fenómenos de salud frecuentes en el adulto.",
                    "hijos": [
                      { "titulo": "Valoración y manejo de enfermedades cardiovasculares, metabólicas, respiratorias, musculoesqueléticas y mentales." },
                      { "titulo": "Dolor crónico y agudo." },
                      { "titulo": "Estrés, ansiedad, depresión y afrontamiento." },
                      { "titulo": "Sexualidad, fertilidad y salud ocupacional." },
                      { "titulo": "Autonomía, dependencia y discapacidad." }
                  ]
                  },
                  {
                    "titulo": "Enfoque familiar y comunitario.",
                    "hijos": [
                      { "titulo": "Ciclo vital familiar y su relación con el cuidado del adulto." },
                      { "titulo": "Familia como sistema de apoyo y red cuidadora." },
                      { "titulo": "Estrategias de educación en salud y autocuidado familiar." },
                      { "titulo": "Intervención comunitaria y redes de apoyo." },
                      { "titulo": "Identificación de necesidades de salud del adulto en la comunidad." },
                      { "titulo": "Diseño e implementación de proyectos de promoción y prevención." },
                      { "titulo": "Coordinación con redes institucionales y comunitarias." },
                      { "titulo": "Referencia y contrarreferencia según nivel de complejidad." }
                  ]
                  },
                  {
                    "titulo": "Ética, bioética y humanización del cuidado.",
                    "hijos": [
                      { "titulo": "Respeto por la autonomía, confidencialidad y decisiones del adulto." },
                      { "titulo": "Dilemas éticos en la práctica en el adulto." },
                      { "titulo": "Cuidado humanizado y comunicación terapéutica." }
                  ]
                  },
              ]
              },
              {
                "titulo": "Cuidados paliativos y al final de la vida",
                "hijos": [
                  { "titulo": "Principios y fundamentos de los cuidados paliativos" },
                  { "titulo": "Manejo del dolor y síntomas en cuidados paliativos" },
                  { "titulo": "Acompañamiento, apoyo emocional y espiritual al paciente y su familia" },
                  { "titulo": "Ética y toma de decisiones al final de la vida" },
                  { "titulo": "Comunicación terapéutica en cuidados paliativos" },
                  { "titulo": "Políticas Públicas Ley Consuelo Devís Saavedra. Ley 1733 de 2014 y Voluntad Anticipada Resolución 2665 de 2018." },
                  { "titulo": "Cuidar a quien Cuida. Programas de Apoyo." }
                ]
              },
              {
                "titulo": "Salud del niño y el adolescente",
                "hijos": [
                  { "titulo": "Crecimiento y desarrollo del niño y niña" },
                  { "titulo": "Enfermedades prevalentes de la infancia (AIEPI)" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña de 0 a 36 meses" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña en edad preescolar/escolar" },
                  { "titulo": "Cuidado de enfermería al niño y niña en el programa de inmunizaciones (PAI)" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente en el ámbito hosítalario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones gastrointestinales" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones del sistema urinario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones respiratorias" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con enfermedades crónicas" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con urgencias pediátricas" }
                ]
              }
            ]
          },          
        ]
      }
    ]
  },
  { titulo: "Elementos de competencia",
    hijos: [
      {
    titulo: "3.1 Planificar la prestación de los servicios de enfermería y el uso de otros servicios de salud teniendo en cuenta las necesidades integrales de la persona y los protocolos establecidos.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "3.1.1 El registro de la identificación de la situación de salud de la persona (paciente, familia y comunidad), sus necesidades de acceso al sistema de salud y la respuesta del mismo cumple con plan de atención de enfermería, rutas integrales de atención y otros del sistema de salud. " },
          { "titulo": "3.1.2 El establecimiento de acciones en las solicitudes de los servicios de salud corresponde con disponibilidad de recursos en su contexto y territorio y procedimientos establecidos en la normatividad." },
          { "titulo": "3.1.3 La realización de la referencia y contrareferencia de la persona (paciente, familia y comunidad) está acorde con necesidades prioritarias individuales o colectivas de atención, cuidado o rehabilitación." }
          ],
        },
      ]
      },
      {
    titulo: "3.2 Monitorear el seguimiento a las acciones del equipo de enfermería, equipo interprofesional y procesos en la prestación de los servicios teniendo en cuenta las necesidades de la persona (paciente, familia y comunidad), protocolos institucionales, evidencia científica y normativa existente.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "3.2.1 La supervisión al personal del equipo de enfermería en el cumplimiento del plan de actividades PAE cumple con indicadores establecidos." },
          { "titulo": "3.2.2 El seguimiento a la ejecución del plan de atención de enfermería de las actividades delegadas al personal auxiliar corresponde con lo acordado." },
          { "titulo": "3.2.3 El rastreo al curso de interconsultas a otros profesionales o servicios especializados está acorde con necesidades del paciente, requerimientos de información a la familia y pronta toma de decisiones." },
          { "titulo": "3.2.4 La información de reinducción sobre los procesos no efectivos despúes de la monitoria, al nivel superior está acorde con lineamientos." }          ],
        },
      ]
      },
      {
    titulo: "3.3 Participar en las redes de atención establecidas de acuerdo con las políticas de salud vigentes.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "3.3.1 El desempeño del rol establecido en la ruta de atención de la red de prestación de servicios de salud está acorde con las funciones asignadas y políticas de salud vigentes." },
          { "titulo": "3.3.2 La evaluación de la calidad de atención en las diferentes redes de prestación de servicios con el equipo interprofesional cumple con parámetros definidos y políticas de salud vigentes." },
          { "titulo": "3.3.3 El uso de redes en los procesos de asesoría y consulta de enfermería está acorde con las necesidades de personas, familias y comunidades." }
          ],
        },
      ]
      },
      {
    titulo: "3.4 Organizar la admisión y acceso de la población a los servicios de enfermería y de salud teniendo en cuenta las necesidades y situación.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "3.4.1 El asesoramiento a las personas (pacientes, familias y comunidades) sobre condiciones de acceso y disponibilidad a planes, programas, consultas especializadas, controles, PAI y otros está acorde con las políticas de salud vigentes y necesidades de atención en salud." },
          { "titulo": "3.4.2 La cooperación al equipo de auxiliares y demás profesionales de salud en la admisión y acceso de la población a los servicios de salud está acorde con políticas de salud vigentes y necesidades de atención en salud." },
          { "titulo": "3.4.3 El análisis de información de registros, reportes y microplaneaciones de admisión, acceso y cobertura de la población en los programas y proyectos de servicios de salud y consulta de enfermería corresponde con necesidades, situación y recurso disponible." }
          ],
        },
      ]
      },
      {
    titulo: "3.5 Remitir persona (paciente, familia o comunidad) teniendo en cuenta factores de riesgo, disponibilidad de la red de servicios de salud y políticas de salud.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "3.5.1 La identificación de factores de riesgo corresponde con análisis de salud de la persona (paciente, familia o comunidad), disponibilidad de recursos y de la red de servicios de salud." },
          { "titulo": "3.5.2 La coordinación de la remisión de persona (paciente, familia o comunidad) está acorde con factores de riesgo y verificación de disponibilidad de servicios atención." },
          { "titulo": "3.5.3 El empleo de la referencia y contrareferencia en las diferentes situaciones de salud de la persona (paciente, familia y comunidad) está acorde con riesgos, protocolos y servicios disponibles incluidos los de atención de emergencias y desastres." },
          { "titulo": "3.5.4 El monitoreo de personas (paciente, familia o comunidad) en la continuidad de la atención está acorde con condición de salud y protocolos."}
          ],
        },
      ]
      }
    ]
  },      
  { titulo: "Resultados de aprendizaje",
      "hijos": [
          { "titulo": "RA1. Coordinar la organización de la prestación de los servicios de enfermería y otros de acuerdo con necesidades integrales de la persona, familia y comunidad, protocolos y guías de manejo." },
          { "titulo": "RA2. Establecer el seguimiento a las acciones del equipo de enfermería, equipo interprofesional en la prestación de los servicios de salud a la persona, familia y comunidad teniendo en cuenta protocolos, guías de manejo y recursos disponibles." },
          { "titulo": "RA3. Orientar la admisión y el acceso a los servicios de salud según las necesidades de la persona, familia y comunidad, disponibilidad de la red, factores de riesgo y políticas de salud."},
          { "titulo": "RA4. Evaluar la calidad de la atención en los servicios de enfermería teniendo en cuenta los principios de acreditación, guías y protocolos."}
        ],
      },
    ]
  },
  {
    "titulo": "COMPETENCIA 4: ",
    "descripcion": "Capacitar al personal a cargo teniendo en cuenta las necesidades y situaciones de salud presentes. DOMINIO: Educación y comunicación terapeútica para el cuidado de enfermería",
    elementos: [
      { titulo: "Contenidos",
      hijos: [
      {
        "titulo": "Núcleo disciplinar profesional: Enfermería",
        "hijos": [
          {
            "titulo": "Enfermería Básica",
            "hijos": [
              {
                "titulo": "Epistemología, historia, modelos y teorías de enfermería",
                "hijos": [
                  { "titulo": "Historia del cuidado y de enfermería" },
                  { "titulo": "Visiones del mundo (Empirista, Interpretativo, Socio-crítico)" },
                  { "titulo": "Metaparadigma de enfermería" },
                  { "titulo": "Sistema conceptual teórico empírico" },
                  { "titulo": "Generalidades modelos y teorías de enfermería" },
                  { "titulo": "Patrones de conocimiento " }
                ]
              },
              {
                "titulo": "Proceso de atención de enfermería (PAE)",
                "hijos": [
                  { "titulo": "Valoración de enfermería" },
                  { "titulo": "Diagnóstico de enfermería" },
                  { "titulo": "Planificación de cuidados" },
                  { "titulo": "Intervenciones de enfermería" },
                  { "titulo": "Evaluación de resultados" },
                  { "titulo": "Registros en enfermería" }
              ]
              },
              {
                "titulo": "Procedimientos y técnicas básicas de enfermería",
                "hijos": [
                  { "titulo": "Toma e interpretación de signos vitales" },
                  { "titulo": "Técnicas asépticas y de bioseguridad" },
                  { "titulo": "Administración segura de medicamentos" },
                  { "titulo": "Oxigenoterapia" },
                  { "titulo": "Cuidados de heridas y ostomías" },
                  { "titulo": "Accesos venosos periféricos" },
                  { "titulo": "Cateterismo urinario"}, 
                  { "titulo": "Toma de muestras para laboratorio" },
                  { "titulo": "Sonda nasogátrica" },
                  { "titulo": "Cuidados básicos (Higiene y confort, Movilización)" }
                  ]
              },              
            ]
          },
          {
            "titulo": "Enfermería específica",
            "hijos": [
              { 
                "titulo": "Salud materno perinatal y salud sexual y reproductiva",
                "hijos": [
                  {
                    "titulo": "Cuidado de Enfermería en salud sexual y reproductiva  a la  persona, pareja y familia",
                  "hijos": [
                      { "titulo": "Panorama de la salud sexual y reproductiva (normatividad)" },
                      { "titulo": "Vigilancia epidemiológica en la salud sexual y reproductiva" },
                      { "titulo": "Métodos anticonceptivos , consejería en salud sexual y reproductiva" },
                      { "titulo": "Educación para la Salud sexual y Reproductiva, servicios amigables para jóvenes y adolescentes" },
                      { "titulo": "Prevención de Infecciones de transmisión sexual" },
                      { "titulo": "Enfermería en la atención a las principales enfermedades ginecológicas (endometriosis,( SDPM, CACU)" },
                      { "titulo": "Atención preconcepcional" },
                      { "titulo": "Enfermeria en la atención a la persona con climaterio y/o menopausia" },
                  ]
                  },
                  {
                    "titulo": "Cuidado de la persona gestante y su familia.",
                    "hijos": [
                      { "titulo": "Cuidado prenatal: valoración de la gestante, control prenatal, educación sobre signos de alarma, curso de preparación para la maternidad y paternidad." },
                      { "titulo": "Salud mental  perinatal" }
                  ]
                  },
                  {
                    "titulo": "Cuidado de Enfermería a la persona y su familia durante el Trabajo  de Parto, Parto y Puerperio.",
                    "hijos": [
                      { "titulo": "Cuidado de enfermería y humanización  durante el trabajo de parto y parto, monitoria fetal." },
                      { "titulo": "Cuidado del puerperio: inmediato, mediato y tardio" },
                      { "titulo": "Medicamentos de interès obstetrico" },
                      { "titulo": "Cuidado de enfermería  al mujer con morbilidad obstétrica" },
                      { "titulo": "Cuidado de enfermería durante la emergencia obstétrica" },
                      { "titulo": "Lactancia materna y estrategias para su promoción" },
                      { "titulo": "Cuidado inmediato y mediato del recién nacido" },
                      { "titulo": "Cuidado de enfermería a las principales alteraciones en el recièn nacido" }
                  ]
                  },
              ]
              },             
              { 
                "titulo": "Salud del adulto y adulto mayor",
                "hijos": [
                  {
                    "titulo": "Fundamentos conceptuales del curso de vida adulto: determinantes, trayectorias y contexto",
                  "hijos": [
                      { "titulo": "Características biológicas, psicológicas y sociales de la adultez (temprana, media y tardía)." },
                      { "titulo": "Cambios fisiológicos normales del adulto y su implicación en el cuidado." },
                      { "titulo": "Impacto de los determinantes sociales, económicos, culturales, laborales sobre la salud del adulto." },
                      { "titulo": "Rol productivo, familiar y social del adulto." },
                      { "titulo": "Transiciones vitales del adulto (ingreso al trabajo, cambios familiares, roles, envejecimiento temprano.)" },
                      { "titulo": "Transiciones y crisis vitales (laborales, familiares, de salud)." },
                      { "titulo": "Enfoque poblacional, territorial, e intercultural en la salud del adulto." }
                  ]
                  },
                  {
                    "titulo": "Salud del adulto según niveles de atención.",
                    "hijos": [
                      {
                        "titulo": "Atención primaria" ,
                        "hijos": [
                        { "titulo": "Promoción de la salud y prevención de la enfermedad en el adulto." },
                        { "titulo": "Detección temprana de factores de riesgo y enfermedades prevalentes en el adulto." },
                        { "titulo": "Manejo de enfermedades crónicas no transmisibles (ECNT) en el adulto." },
                        { "titulo": "Manejo de enfermedades transmisibles en el adulto." },
                        { "titulo": "Salud mental en el adulto." }
                      ]
                      },                    
                      {
                        "titulo": "Atención secundaria" ,
                        "hijos": [
                        { "titulo": "Cuidado del adulto con enfermedades crónicas no transmisibles prevalentes" },
                        { "titulo": "Acompañamiento al paciente y familia en procesos de hospitalización, cirugía o rehabilitación." },
                        { "titulo": "Procedimientos básicos y avanzados o invasivos en enfermería." },
                        { "titulo": "Cuidado hospitalario, ambulatorio y comunitario del adulto enfermo." },
                        { "titulo": "Salud mental del adulto: depresión, ansiedad, estrés laboral, consumo, aislamiento." },
                        { "titulo": "Salud laboral, riesgos ocupacionales, ergonomía, cuidado en ambientes de trabajo." },
                        { "titulo": "Participación comunitaria, redes de apoyo, cuidado intergeneracional." },
                        { "titulo": "Uso de tecnologías, telemonitorización, seguimiento domiciliario." }
                      ]
                      },
                      {
                        "titulo": "Atención terciaria" ,
                        "hijos": [
                        { "titulo": "Cuidado especializado, rehabilitación, cuidados de alta complejidad, seguridad del paciente, prevención de complicaciones en el adulto." },
                        { "titulo": "Cuidado médico-quirúrgico: manejo preoperatorio y postoperatorio." },
                        { "titulo": "Planes de cuidado personalizados según diagnóstico y educación en cuidados domiciliarios posthospitalarios." },
                        { "titulo": "Estrategias para la educación del adulto y su familia: autocuidado, adherencia terapéutica, empoderamiento." },
                        { "titulo": "Rehabilitación funcional, manejo de la dependencia, redes de soporte." },
                        { "titulo": "Coordinación interprofesional e interdisciplinaria del cuidado del adulto frágil o con discapacidad." },
                        { "titulo": "Humanización, calidad del cuidado y gestión del servicio para el adulto, comunicación terapéutica, respeto al paciente adulto, familia y cuidadores." },
                        { "titulo": "Seguridad del paciente adulto, gestión de riesgos, calidad y mejora continua del servicio." },
                        { "titulo": "Liderazgo del profesional de enfermería en el cuidado del adulto: gestión, dirección, innovación, investigación." }
                      ]
                      }
                    ]
                  },
                  {
                    "titulo": "Fenómenos de salud frecuentes en el adulto.",
                    "hijos": [
                      { "titulo": "Valoración y manejo de enfermedades cardiovasculares, metabólicas, respiratorias, musculoesqueléticas y mentales." },
                      { "titulo": "Dolor crónico y agudo." },
                      { "titulo": "Estrés, ansiedad, depresión y afrontamiento." },
                      { "titulo": "Sexualidad, fertilidad y salud ocupacional." },
                      { "titulo": "Autonomía, dependencia y discapacidad." }
                  ]
                  },
                  {
                    "titulo": "Enfoque familiar y comunitario.",
                    "hijos": [
                      { "titulo": "Ciclo vital familiar y su relación con el cuidado del adulto." },
                      { "titulo": "Familia como sistema de apoyo y red cuidadora." },
                      { "titulo": "Estrategias de educación en salud y autocuidado familiar." },
                      { "titulo": "Intervención comunitaria y redes de apoyo." },
                      { "titulo": "Identificación de necesidades de salud del adulto en la comunidad." },
                      { "titulo": "Diseño e implementación de proyectos de promoción y prevención." },
                      { "titulo": "Coordinación con redes institucionales y comunitarias." },
                      { "titulo": "Referencia y contrarreferencia según nivel de complejidad." }
                  ]
                  },
                  {
                    "titulo": "Ética, bioética y humanización del cuidado.",
                    "hijos": [
                      { "titulo": "Respeto por la autonomía, confidencialidad y decisiones del adulto." },
                      { "titulo": "Dilemas éticos en la práctica en el adulto." },
                      { "titulo": "Cuidado humanizado y comunicación terapéutica." }
                  ]
                  },
              ]
              },
              {
                "titulo": "Cuidados paliativos y al final de la vida",
                "hijos": [
                  { "titulo": "Principios y fundamentos de los cuidados paliativos" },
                  { "titulo": "Manejo del dolor y síntomas en cuidados paliativos" },
                  { "titulo": "Acompañamiento, apoyo emocional y espiritual al paciente y su familia" },
                  { "titulo": "Ética y toma de decisiones al final de la vida" },
                  { "titulo": "Comunicación terapéutica en cuidados paliativos" },
                  { "titulo": "Políticas Públicas Ley Consuelo Devís Saavedra. Ley 1733 de 2014 y Voluntad Anticipada Resolución 2665 de 2018." },
                  { "titulo": "Cuidar a quien Cuida. Programas de Apoyo." }
                ]
              },
              {
                "titulo": "Salud del niño y el adolescente",
                "hijos": [
                  { "titulo": "Crecimiento y desarrollo del niño y niña" },
                  { "titulo": "Enfermedades prevalentes de la infancia (AIEPI)" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña de 0 a 36 meses" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña en edad preescolar/escolar" },
                  { "titulo": "Cuidado de enfermería al niño y niña en el programa de inmunizaciones (PAI)" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente en el ámbito hosítalario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones gastrointestinales" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones del sistema urinario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones respiratorias" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con enfermedades crónicas" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con urgencias pediátricas" }
                ]
              }
            ]
          },          
        ]
      },
      {
       "titulo": "Enfermería de profundización",
        "hijos": [
          { 
           "titulo": "Cuidado crítico y urgencias",
            "hijos": [
              { "titulo": "Manejo del triage en servicios de urgencias." },
              { "titulo": "Soporte vital básico y avanzado en adultos y pediatría." },
              { "titulo": "Cuidado de vías aéreas y ventilación mecánica." },
              { "titulo": "Monitoreo hemodinámico invasivo y no invasivo y soporte circulatorio." },
              { "titulo": "Farmacología de alto riesgo: manejo de vasopresores, inotrópicos, sedantes y analgésicos." }
              ]
          },
          {
           "titulo": "Salud pública y epidemiología",
            "hijos": [
              { "titulo": "Vigilancia epidemiológica: reporte de eventos de interés en salud pública." },
              { "titulo": "Investigación de brotes." },
              { "titulo": "Diseño y gestión de programas de promoción de la salud." }
              ]              
          },
          {
           "titulo": "Administración, gestión y liderazgo en enfermería",
            "hijos": [
              { "titulo": "Liderazgo y gestión de equipos de enfermería." },
              { "titulo": "Gestión de la calidad y seguridad del paciente." },
              { "titulo": "Planificación y organización estratégica del cuidado de enfermería." },
              { "titulo": "Gestión de recursos humanos, materiales y financieros en enfermería." },
              { "titulo": "Gestión de proyectos en salud." },
              { "titulo": "Desarrollo de políticas de salud." }
              ]
          },
          {
           "titulo": "Enfermería en Salud Mental y psiquiatría",
            "hijos": [
              { "titulo": "Instrumentos de valoración del estado mental." },
              { "titulo": "Cuidado al paciente con trastornos del ánimo (depresión, bipolaridad), ansiedad y psicosis." },
              { "titulo": "Manejo de la crisis psiquiátrica y prevención del suicidio." },
              { "titulo": "Diseño y gestión de programas de promoción de la salud mental." }
              ]
          },
          {
           "titulo": "Cuidado paliativo y al final de la vida",
            "hijos": [
              { "titulo": "Principios del cuidado paliativo." },
              { "titulo": "Manejo del dolor y otros síntomas en pacientes terminales." },
              { "titulo": "Apoyo emocional y espiritual al paciente y la familia." },
              { "titulo": "Aspectos éticos y legales al final de la vida." }
              ]
          },
          {
           "titulo": "Enfermería en Salud Ocupacional",
            "hijos": [
              { "titulo": "Evaluación de riesgos laborales." },
              { "titulo": "Programas de promoción de la salud en el trabajo." },
              { "titulo": "Manejo de accidentes laborales y enfermedades profesionales." },
              { "titulo": "Legislación en salud ocupacional." }
            ]
          }
        ]
      }
    ]
  },
  { titulo: "Elementos de competencia",
    hijos: [
      {
    titulo: "4.1 Planear la capacitación del personal de salud a su cargo con la actualización de los conocimientos, prácticas y habilidades de acuerdo con las necesidades de la población y el servicio de salud.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "4.1.1 La identificación de las necesidades de capacitación del personal a cargo corresponde con resultados de evaluación de desempeño, avances técnico-científicos y ajustes normativos nacionales e internacionales." },
          { "titulo": "4.1.2 El suministro de información al área responsable del diseño de estrategias de capacitación y actualización está acorde con protocolos institucionales." },
          { "titulo": "4.1.3 La participación en el diseño de programas, cursos y talleres de educación continua, entre otros, está acorde con las necesidades identificadas." },
          { "titulo": "4.1.4 La proyección de programas, cursos y talleres de educación continua, entre otros, corresponde con recusos disponibles y contexto de acción." }
          ],
        },
      ]
      },
      {
    titulo: "4.2 Promover la educación continua en el personal a cargo, motivando la participación según la politítica y recursos institucionales. ",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "4.2.1 La motivación a la participación en cursos, talleres y otros medios de actualización corresponde con expectativas del personal a cargo, necesidades y políticas del servicios y técnicas de comunicación." },
          { "titulo": "4.2.2 La mediación de la ejecución del plan de capacitación y actualización del personal a cargo con las directivas de la institución corresponde con protocolos y políticas de talento humano de la organización." },
          { "titulo": "4.2.3 La coordinación de tiempo, espacios, recursos con el personal a cargo en la participación en eventos de educación continua y autoaprendizaje sin detrimento del servicio corresponde con necesidades del equipo." },
          { "titulo": "4.2.4 La divulgación de eventos de educación continua está acorde con protocolos institucionales y medios tecnológicos disponibles." }          ],
        },
      ]
      },
      {
    titulo: "4.3 Desarrollar programas de capacitación orientados a disminuir los eventos adversos de acuerdo con políticas, recursos y protocolos institucionales.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "4.3.1 ELa elaboración de programas y contenidos está acorde con los desarrollos del conocimiento del cuidado de enfermería, políticas, recursos y protocolos institucionales." },
          { "titulo": "4.3.2 El uso de plataformas y guías de manejo con evidencia científica disponibles en la institución en procesos de capacitación y actualización del personal corresponde con políticas, recursos y protocolos institucionales." },
          { "titulo": "4.3.3 La retroalimentación en la incorporación de nuevo conocimiento en el cuidado de enefermería está acorde con estándares de calidad socializados." }
          ],
        },
      ]
      },
      {
    titulo: "4.4 Evaluar la calidad del cuidado de enfermería teniendo en cuenta el desempeño del personal a cargo post capacitación.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "4.4.1 La aplicación de listas de chequeo y de desempeño laboral al personal a cargo cumple con criterios de calidad de la evaluación." },
          { "titulo": "4.4.2 El seguimiento al desempeño del personal post capacitación está acorde con protocolos y políticas institucionales." },
          { "titulo": "4.4.3 La promoción de la autoevaluación corresponde con lineamientos y metas de crecimiento personal." }
          ],
        },
      ]
      }
    ]
  },      
  { titulo: "Resultados de aprendizaje",
      "hijos": [
          { "titulo": "RA1. Estructurar plan de capacitación de personal a cargo de acuerdo con necesidades, protocolos, guías y recursos disponibles." },
          { "titulo": "RA2. Identificar conocimientos, destrezas, habilidades y actitudes así como las estrategias y prácticas a llevar a cabo teniendo en cuenta política y recursos institucionales definidos." },
          { "titulo": "RA3. Desarrollar sesión de capacitación del personal a cargo empleando estrategias didacticas según las necesidades de actualización para la prestación de un cuidado de calidad."},
          { "titulo": "RA4. Aplicar instrumento de medición del nivel de conocimientos adquiridos en desarrollo de un programa de educación continua del personal a cargo teniendo en cuenta la satisfacción de la población capacitada y los conocimientos actualizados para mejorar la atención."}
        ],
      },
    ]
  },
  {
    "titulo": "COMPETENCIA 5: ",
    "descripcion": "Realizar consulta de enfermería a la persona (paciente, familia y comunidad) promoción de estilos de vida saludable, prevención de factores y condiciones de riesgo, procesos terapéuticos y consejería apoyada en los recursos tecnológicos disponibles de acuerdo con las necesidades de salud identificadas. DOMINIO:Cuidado de enfermería para la vida, el bienestar y la salud humana. DOMINIO:Educación y comunicación terapeútica para el cuidado de enfermería.",
    elementos: [
      { titulo: "Contenidos",
      hijos: [
      {
        "titulo": "Núcleo disciplinar profesional: Enfermería",
        "hijos": [
          {
            "titulo": "Enfermería Básica",
            "hijos": [
              {
                "titulo": "Epistemología, historia, modelos y teorías de enfermería",
                "hijos": [
                  { "titulo": "Historia del cuidado y de enfermería" },
                  { "titulo": "Visiones del mundo (Empirista, Interpretativo, Socio-crítico)" },
                  { "titulo": "Metaparadigma de enfermería" },
                  { "titulo": "Sistema conceptual teórico empírico" },
                  { "titulo": "Generalidades modelos y teorías de enfermería" },
                  { "titulo": "Patrones de conocimiento " }
                ]
              },
              {
                "titulo": "Proceso de atención de enfermería (PAE)",
                "hijos": [
                  { "titulo": "Valoración de enfermería" },
                  { "titulo": "Diagnóstico de enfermería" },
                  { "titulo": "Planificación de cuidados" },
                  { "titulo": "Intervenciones de enfermería" },
                  { "titulo": "Evaluación de resultados" },
                  { "titulo": "Registros en enfermería" }
              ]
              },
              {
                "titulo": "Procedimientos y técnicas básicas de enfermería",
                "hijos": [
                  { "titulo": "Toma e interpretación de signos vitales" },
                  { "titulo": "Técnicas asépticas y de bioseguridad" },
                  { "titulo": "Administración segura de medicamentos" },
                  { "titulo": "Oxigenoterapia" },
                  { "titulo": "Cuidados de heridas y ostomías" },
                  { "titulo": "Accesos venosos periféricos" },
                  { "titulo": "Cateterismo urinario"}, 
                  { "titulo": "Toma de muestras para laboratorio" },
                  { "titulo": "Sonda nasogátrica" },
                  { "titulo": "Cuidados básicos (Higiene y confort, Movilización)" }
                  ]
              },              
            ]
          },
          {
            "titulo": "Enfermería específica",
            "hijos": [
              { 
                "titulo": "Salud materno perinatal y salud sexual y reproductiva",
                "hijos": [
                  {
                    "titulo": "Cuidado de Enfermería en salud sexual y reproductiva  a la  persona, pareja y familia",
                  "hijos": [
                      { "titulo": "Panorama de la salud sexual y reproductiva (normatividad)" },
                      { "titulo": "Vigilancia epidemiológica en la salud sexual y reproductiva" },
                      { "titulo": "Métodos anticonceptivos , consejería en salud sexual y reproductiva" },
                      { "titulo": "Educación para la Salud sexual y Reproductiva, servicios amigables para jóvenes y adolescentes" },
                      { "titulo": "Prevención de Infecciones de transmisión sexual" },
                      { "titulo": "Enfermería en la atención a las principales enfermedades ginecológicas (endometriosis,( SDPM, CACU)" },
                      { "titulo": "Atención preconcepcional" },
                      { "titulo": "Enfermeria en la atención a la persona con climaterio y/o menopausia" },
                  ]
                  },
                  {
                    "titulo": "Cuidado de la persona gestante y su familia.",
                    "hijos": [
                      { "titulo": "Cuidado prenatal: valoración de la gestante, control prenatal, educación sobre signos de alarma, curso de preparación para la maternidad y paternidad." },
                      { "titulo": "Salud mental  perinatal" }
                  ]
                  },
                  {
                    "titulo": "Cuidado de Enfermería a la persona y su familia durante el Trabajo  de Parto, Parto y Puerperio.",
                    "hijos": [
                      { "titulo": "Cuidado de enfermería y humanización  durante el trabajo de parto y parto, monitoria fetal." },
                      { "titulo": "Cuidado del puerperio: inmediato, mediato y tardio" },
                      { "titulo": "Medicamentos de interès obstetrico" },
                      { "titulo": "Cuidado de enfermería  al mujer con morbilidad obstétrica" },
                      { "titulo": "Cuidado de enfermería durante la emergencia obstétrica" },
                      { "titulo": "Lactancia materna y estrategias para su promoción" },
                      { "titulo": "Cuidado inmediato y mediato del recién nacido" },
                      { "titulo": "Cuidado de enfermería a las principales alteraciones en el recièn nacido" }
                  ]
                  },
              ]
              },             
              { 
                "titulo": "Salud del adulto y adulto mayor",
                "hijos": [
                  {
                    "titulo": "Fundamentos conceptuales del curso de vida adulto: determinantes, trayectorias y contexto",
                  "hijos": [
                      { "titulo": "Características biológicas, psicológicas y sociales de la adultez (temprana, media y tardía)." },
                      { "titulo": "Cambios fisiológicos normales del adulto y su implicación en el cuidado." },
                      { "titulo": "Impacto de los determinantes sociales, económicos, culturales, laborales sobre la salud del adulto." },
                      { "titulo": "Rol productivo, familiar y social del adulto." },
                      { "titulo": "Transiciones vitales del adulto (ingreso al trabajo, cambios familiares, roles, envejecimiento temprano.)" },
                      { "titulo": "Transiciones y crisis vitales (laborales, familiares, de salud)." },
                      { "titulo": "Enfoque poblacional, territorial, e intercultural en la salud del adulto." }
                  ]
                  },
                  {
                    "titulo": "Salud del adulto según niveles de atención.",
                    "hijos": [
                      {
                        "titulo": "Atención primaria" ,
                        "hijos": [
                        { "titulo": "Promoción de la salud y prevención de la enfermedad en el adulto." },
                        { "titulo": "Detección temprana de factores de riesgo y enfermedades prevalentes en el adulto." },
                        { "titulo": "Manejo de enfermedades crónicas no transmisibles (ECNT) en el adulto." },
                        { "titulo": "Manejo de enfermedades transmisibles en el adulto." },
                        { "titulo": "Salud mental en el adulto." }
                      ]
                      },                    
                      {
                        "titulo": "Atención secundaria" ,
                        "hijos": [
                        { "titulo": "Cuidado del adulto con enfermedades crónicas no transmisibles prevalentes" },
                        { "titulo": "Acompañamiento al paciente y familia en procesos de hospitalización, cirugía o rehabilitación." },
                        { "titulo": "Procedimientos básicos y avanzados o invasivos en enfermería." },
                        { "titulo": "Cuidado hospitalario, ambulatorio y comunitario del adulto enfermo." },
                        { "titulo": "Salud mental del adulto: depresión, ansiedad, estrés laboral, consumo, aislamiento." },
                        { "titulo": "Salud laboral, riesgos ocupacionales, ergonomía, cuidado en ambientes de trabajo." },
                        { "titulo": "Participación comunitaria, redes de apoyo, cuidado intergeneracional." },
                        { "titulo": "Uso de tecnologías, telemonitorización, seguimiento domiciliario." }
                      ]
                      },
                      {
                        "titulo": "Atención terciaria" ,
                        "hijos": [
                        { "titulo": "Cuidado especializado, rehabilitación, cuidados de alta complejidad, seguridad del paciente, prevención de complicaciones en el adulto." },
                        { "titulo": "Cuidado médico-quirúrgico: manejo preoperatorio y postoperatorio." },
                        { "titulo": "Planes de cuidado personalizados según diagnóstico y educación en cuidados domiciliarios posthospitalarios." },
                        { "titulo": "Estrategias para la educación del adulto y su familia: autocuidado, adherencia terapéutica, empoderamiento." },
                        { "titulo": "Rehabilitación funcional, manejo de la dependencia, redes de soporte." },
                        { "titulo": "Coordinación interprofesional e interdisciplinaria del cuidado del adulto frágil o con discapacidad." },
                        { "titulo": "Humanización, calidad del cuidado y gestión del servicio para el adulto, comunicación terapéutica, respeto al paciente adulto, familia y cuidadores." },
                        { "titulo": "Seguridad del paciente adulto, gestión de riesgos, calidad y mejora continua del servicio." },
                        { "titulo": "Liderazgo del profesional de enfermería en el cuidado del adulto: gestión, dirección, innovación, investigación." }
                      ]
                      }
                    ]
                  },
                  {
                    "titulo": "Fenómenos de salud frecuentes en el adulto.",
                    "hijos": [
                      { "titulo": "Valoración y manejo de enfermedades cardiovasculares, metabólicas, respiratorias, musculoesqueléticas y mentales." },
                      { "titulo": "Dolor crónico y agudo." },
                      { "titulo": "Estrés, ansiedad, depresión y afrontamiento." },
                      { "titulo": "Sexualidad, fertilidad y salud ocupacional." },
                      { "titulo": "Autonomía, dependencia y discapacidad." }
                  ]
                  },
                  {
                    "titulo": "Enfoque familiar y comunitario.",
                    "hijos": [
                      { "titulo": "Ciclo vital familiar y su relación con el cuidado del adulto." },
                      { "titulo": "Familia como sistema de apoyo y red cuidadora." },
                      { "titulo": "Estrategias de educación en salud y autocuidado familiar." },
                      { "titulo": "Intervención comunitaria y redes de apoyo." },
                      { "titulo": "Identificación de necesidades de salud del adulto en la comunidad." },
                      { "titulo": "Diseño e implementación de proyectos de promoción y prevención." },
                      { "titulo": "Coordinación con redes institucionales y comunitarias." },
                      { "titulo": "Referencia y contrarreferencia según nivel de complejidad." }
                  ]
                  },
                  {
                    "titulo": "Ética, bioética y humanización del cuidado.",
                    "hijos": [
                      { "titulo": "Respeto por la autonomía, confidencialidad y decisiones del adulto." },
                      { "titulo": "Dilemas éticos en la práctica en el adulto." },
                      { "titulo": "Cuidado humanizado y comunicación terapéutica." }
                  ]
                  },
              ]
              },
              {
                "titulo": "Cuidados paliativos y al final de la vida",
                "hijos": [
                  { "titulo": "Principios y fundamentos de los cuidados paliativos" },
                  { "titulo": "Manejo del dolor y síntomas en cuidados paliativos" },
                  { "titulo": "Acompañamiento, apoyo emocional y espiritual al paciente y su familia" },
                  { "titulo": "Ética y toma de decisiones al final de la vida" },
                  { "titulo": "Comunicación terapéutica en cuidados paliativos" },
                  { "titulo": "Políticas Públicas Ley Consuelo Devís Saavedra. Ley 1733 de 2014 y Voluntad Anticipada Resolución 2665 de 2018." },
                  { "titulo": "Cuidar a quien Cuida. Programas de Apoyo." }
                ]
              },
              {
                "titulo": "Salud del niño y el adolescente",
                "hijos": [
                  { "titulo": "Crecimiento y desarrollo del niño y niña" },
                  { "titulo": "Enfermedades prevalentes de la infancia (AIEPI)" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña de 0 a 36 meses" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña en edad preescolar/escolar" },
                  { "titulo": "Cuidado de enfermería al niño y niña en el programa de inmunizaciones (PAI)" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente en el ámbito hosítalario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones gastrointestinales" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones del sistema urinario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones respiratorias" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con enfermedades crónicas" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con urgencias pediátricas" }
                ]
              }
            ]
          },          
        ]
      },
      {
       "titulo": "Enfermería de profundización",
        "hijos": [
          { 
           "titulo": "Cuidado crítico y urgencias",
            "hijos": [
              { "titulo": "Manejo del triage en servicios de urgencias." },
              { "titulo": "Soporte vital básico y avanzado en adultos y pediatría." },
              { "titulo": "Cuidado de vías aéreas y ventilación mecánica." },
              { "titulo": "Monitoreo hemodinámico invasivo y no invasivo y soporte circulatorio." },
              { "titulo": "Farmacología de alto riesgo: manejo de vasopresores, inotrópicos, sedantes y analgésicos." }
              ]
          },
          {
           "titulo": "Salud pública y epidemiología",
            "hijos": [
              { "titulo": "Vigilancia epidemiológica: reporte de eventos de interés en salud pública." },
              { "titulo": "Investigación de brotes." },
              { "titulo": "Diseño y gestión de programas de promoción de la salud." }
              ]              
          },
          {
           "titulo": "Administración, gestión y liderazgo en enfermería",
            "hijos": [
              { "titulo": "Liderazgo y gestión de equipos de enfermería." },
              { "titulo": "Gestión de la calidad y seguridad del paciente." },
              { "titulo": "Planificación y organización estratégica del cuidado de enfermería." },
              { "titulo": "Gestión de recursos humanos, materiales y financieros en enfermería." },
              { "titulo": "Gestión de proyectos en salud." },
              { "titulo": "Desarrollo de políticas de salud." }
              ]
          },
          {
           "titulo": "Enfermería en Salud Mental y psiquiatría",
            "hijos": [
              { "titulo": "Instrumentos de valoración del estado mental." },
              { "titulo": "Cuidado al paciente con trastornos del ánimo (depresión, bipolaridad), ansiedad y psicosis." },
              { "titulo": "Manejo de la crisis psiquiátrica y prevención del suicidio." },
              { "titulo": "Diseño y gestión de programas de promoción de la salud mental." }
              ]
          },
          {
           "titulo": "Cuidado paliativo y al final de la vida",
            "hijos": [
              { "titulo": "Principios del cuidado paliativo." },
              { "titulo": "Manejo del dolor y otros síntomas en pacientes terminales." },
              { "titulo": "Apoyo emocional y espiritual al paciente y la familia." },
              { "titulo": "Aspectos éticos y legales al final de la vida." }
              ]
          },
          {
           "titulo": "Enfermería en Salud Ocupacional",
            "hijos": [
              { "titulo": "Evaluación de riesgos laborales." },
              { "titulo": "Programas de promoción de la salud en el trabajo." },
              { "titulo": "Manejo de accidentes laborales y enfermedades profesionales." },
              { "titulo": "Legislación en salud ocupacional." }
            ]
          }
        ]
      }
    ]
  },
  { titulo: "Elementos de competencia",
    hijos: [
      {
    titulo: "5.1 Aconsejar en los procesos de salud y bienestar a la persona (paciente, familia y comunidad) teniendo en cuenta las necesidades de salud identificadas, riesgos y estilos de vida saludable.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "5.1.1 La identificación de necesidades de salud y educación de la persona, familia y comunidad corresponde con proceso de enfermería." },
          { "titulo": "5.1.2 La consejería en procesos de salud y bienestar a la persona, familia y comunidad cumple con las necesidades de salud identificadas, estilos de vida saludable, factores de riesgos, derechos y deberes en salud." },
          { "titulo": "5.1.3 La continuidad en la atención está acorde con informe de consejería o asesoría realizada." }
          ],
        },
      ]
      },
      {
    titulo: "5.2 Orientar a las personas, familias y comunidades sobre procesos y cambios que ocurren en las etapas del curso de vida teniendo en cuenta las necesidades de promoción de la salud",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "5.2.1 El asesoramiento en las acciones de promoción de la salud corresponde con las etapas del curso de vida y lineamientos establecidos." },
          { "titulo": "5.2.2 La divulgación de estrategias, planes o campañas de promoción de la salud está acorde con recursos locales, necesidades prioritarias de la comunidad y desarrollos disciplinares." },
          { "titulo": "5.2.3 La vinculación de persona, familia o comunidad a los procesos de promoción de la salud y construcción de politicas públicas está acorde con necesidades de salud identificadas en cada contexto. " }
        ],
        },
      ]
      },
      {
    titulo: "5.3 Intervenir en acciones de prevención de la enfermedad, diagnóstico temprano, tratamiento oportuno, recuperación y paliación teniendo en cuenta los lineamientos establecidos en el sistema de salud, el desarrollo de la evidencia científica y aplicación de protocolos de cuidado de enfermería.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "5.3.1 La valoración integral (física, mental, emocional y social) de la persona (paciente, persona familia y comunidad) está acorde con los lineamientos establecidos en el sistema de salud, el desarrollo de la evidencia científica y aplicación de protocolos de cuidado de enfermería." },
          { "titulo": "5.3.2 El desarrollo de las acciones de enfermería de prevención de la enfermedad, diagnóstico temprano, tratamiento oportuno, recuperación y paliación está acorde con la valoración integral de la persona (paciente, familia y comunidad)." },
          { "titulo": "5.3.3 El seguimiento y control de las intervenciones de enfermería realizadas corresponde con los lineamientos establecidos en el sistema de salud, el desarrollo de la evidencia científica y aplicación de protocolos de cuidado de enfermería" }
          ],
        },
      ]
      },
      {
    titulo: "5.4 Utilizar herramientas tecnológicas (tele-enfermería, tele comunicación, entre otros) en la consulta y apoyo que se brinda a personas, familias y comunidades teniendo en cuenta sus necesidades, problemas y contexto.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "5.4.1 El empleo de herramientas tecnológicas de información y comunicación disponibles en la consulta de enfermería corresponde con necesidades de salud identificadas y recursos tecnológicos disponibles en cada contexto." },
          { "titulo": "5.4.2 La realización de entrevista y examen integral de enfermería mediada por la tele-enfermería corresponde con proceso de atención de enfermería." },
          { "titulo": "5.4.3 El seguimiento de resultados de entrevista, examen integral y pruebas de tamizaje de enfermería mediada por la tele-enfermería está acorde con protocolos institucionales." }
          ],
        },
      ]
      }
    ]
  },      
  { titulo: "Resultados de aprendizaje",
      "hijos": [
          { "titulo": "RA1. Practicar la consulta de enfermería a la persona, familia y comunidad, sobre los procesos y cambios experimentados en su salud en las etapas del ciclo vital según las necesidades de cuidado." },
          { "titulo": "RA2. Proponer a la persona, familia y comunidad acciones de prevención de la enfermedad y promoción de estilos de vida saludable, diagnóstico oportuno, recuperación y rehabilitación de acuerdo con protocolos y guías de manejo." },
          { "titulo": "RA3. Utilizar  los recursos tecnológicos disponibles durante la consulta del paciente, la familia y comunidad teniendo en cuenta los lineamientos institucionales y pol{iticas de salud."},
          { "titulo": "RA4. Interpretar los resultados de la consulta de enfermería integrando datos en la historia clínica de la persona, familia y comunidad teniendo en cuenta el contexto, y necesidades de salud identificadas."}
        ],
      },
    ]
  },
  {
    "titulo": "COMPETENCIA 6: ",
    "descripcion": "Cumplir con principios y valores éticos y bioéticos, en el acto de cuidado de enfermería teniendo en cuenta el respeto a la vida, la dignidad y derechos humanos. DOMINIO: Cuidado de enfermería para la vida, el bienestar y la salud humana.",
    elementos: [
      { titulo: "Contenidos",
      hijos: [
      {
        "titulo": "Núcleo disciplinar profesional: Enfermería",
        "hijos": [
          {
            "titulo": "Enfermería Básica",
            "hijos": [
              {
                "titulo": "Epistemología, historia, modelos y teorías de enfermería",
                "hijos": [
                  { "titulo": "Historia del cuidado y de enfermería" },
                  { "titulo": "Visiones del mundo (Empirista, Interpretativo, Socio-crítico)" },
                  { "titulo": "Metaparadigma de enfermería" },
                  { "titulo": "Sistema conceptual teórico empírico" },
                  { "titulo": "Generalidades modelos y teorías de enfermería" },
                  { "titulo": "Patrones de conocimiento " }
                ]
              },
              {
                "titulo": "Proceso de atención de enfermería (PAE)",
                "hijos": [
                  { "titulo": "Valoración de enfermería" },
                  { "titulo": "Diagnóstico de enfermería" },
                  { "titulo": "Planificación de cuidados" },
                  { "titulo": "Intervenciones de enfermería" },
                  { "titulo": "Evaluación de resultados" },
                  { "titulo": "Registros en enfermería" }
              ]
              },
              {
                "titulo": "Procedimientos y técnicas básicas de enfermería",
                "hijos": [
                  { "titulo": "Toma e interpretación de signos vitales" },
                  { "titulo": "Técnicas asépticas y de bioseguridad" },
                  { "titulo": "Administración segura de medicamentos" },
                  { "titulo": "Oxigenoterapia" },
                  { "titulo": "Cuidados de heridas y ostomías" },
                  { "titulo": "Accesos venosos periféricos" },
                  { "titulo": "Cateterismo urinario"}, 
                  { "titulo": "Toma de muestras para laboratorio" },
                  { "titulo": "Sonda nasogátrica" },
                  { "titulo": "Cuidados básicos (Higiene y confort, Movilización)" }
                  ]
              },              
            ]
          },
          {
            "titulo": "Enfermería específica",
            "hijos": [
              { 
                "titulo": "Salud materno perinatal y salud sexual y reproductiva",
                "hijos": [
                  {
                    "titulo": "Cuidado de Enfermería en salud sexual y reproductiva  a la  persona, pareja y familia",
                  "hijos": [
                      { "titulo": "Panorama de la salud sexual y reproductiva (normatividad)" },
                      { "titulo": "Vigilancia epidemiológica en la salud sexual y reproductiva" },
                      { "titulo": "Métodos anticonceptivos , consejería en salud sexual y reproductiva" },
                      { "titulo": "Educación para la Salud sexual y Reproductiva, servicios amigables para jóvenes y adolescentes" },
                      { "titulo": "Prevención de Infecciones de transmisión sexual" },
                      { "titulo": "Enfermería en la atención a las principales enfermedades ginecológicas (endometriosis,( SDPM, CACU)" },
                      { "titulo": "Atención preconcepcional" },
                      { "titulo": "Enfermeria en la atención a la persona con climaterio y/o menopausia" },
                  ]
                  },
                  {
                    "titulo": "Cuidado de la persona gestante y su familia.",
                    "hijos": [
                      { "titulo": "Cuidado prenatal: valoración de la gestante, control prenatal, educación sobre signos de alarma, curso de preparación para la maternidad y paternidad." },
                      { "titulo": "Salud mental  perinatal" }
                  ]
                  },
                  {
                    "titulo": "Cuidado de Enfermería a la persona y su familia durante el Trabajo  de Parto, Parto y Puerperio.",
                    "hijos": [
                      { "titulo": "Cuidado de enfermería y humanización  durante el trabajo de parto y parto, monitoria fetal." },
                      { "titulo": "Cuidado del puerperio: inmediato, mediato y tardio" },
                      { "titulo": "Medicamentos de interès obstetrico" },
                      { "titulo": "Cuidado de enfermería  al mujer con morbilidad obstétrica" },
                      { "titulo": "Cuidado de enfermería durante la emergencia obstétrica" },
                      { "titulo": "Lactancia materna y estrategias para su promoción" },
                      { "titulo": "Cuidado inmediato y mediato del recién nacido" },
                      { "titulo": "Cuidado de enfermería a las principales alteraciones en el recièn nacido" }
                  ]
                  },
              ]
              },             
              { 
                "titulo": "Salud del adulto y adulto mayor",
                "hijos": [
                  {
                    "titulo": "Fundamentos conceptuales del curso de vida adulto: determinantes, trayectorias y contexto",
                  "hijos": [
                      { "titulo": "Características biológicas, psicológicas y sociales de la adultez (temprana, media y tardía)." },
                      { "titulo": "Cambios fisiológicos normales del adulto y su implicación en el cuidado." },
                      { "titulo": "Impacto de los determinantes sociales, económicos, culturales, laborales sobre la salud del adulto." },
                      { "titulo": "Rol productivo, familiar y social del adulto." },
                      { "titulo": "Transiciones vitales del adulto (ingreso al trabajo, cambios familiares, roles, envejecimiento temprano.)" },
                      { "titulo": "Transiciones y crisis vitales (laborales, familiares, de salud)." },
                      { "titulo": "Enfoque poblacional, territorial, e intercultural en la salud del adulto." }
                  ]
                  },
                  {
                    "titulo": "Salud del adulto según niveles de atención.",
                    "hijos": [
                      {
                        "titulo": "Atención primaria" ,
                        "hijos": [
                        { "titulo": "Promoción de la salud y prevención de la enfermedad en el adulto." },
                        { "titulo": "Detección temprana de factores de riesgo y enfermedades prevalentes en el adulto." },
                        { "titulo": "Manejo de enfermedades crónicas no transmisibles (ECNT) en el adulto." },
                        { "titulo": "Manejo de enfermedades transmisibles en el adulto." },
                        { "titulo": "Salud mental en el adulto." }
                      ]
                      },                    
                      {
                        "titulo": "Atención secundaria" ,
                        "hijos": [
                        { "titulo": "Cuidado del adulto con enfermedades crónicas no transmisibles prevalentes" },
                        { "titulo": "Acompañamiento al paciente y familia en procesos de hospitalización, cirugía o rehabilitación." },
                        { "titulo": "Procedimientos básicos y avanzados o invasivos en enfermería." },
                        { "titulo": "Cuidado hospitalario, ambulatorio y comunitario del adulto enfermo." },
                        { "titulo": "Salud mental del adulto: depresión, ansiedad, estrés laboral, consumo, aislamiento." },
                        { "titulo": "Salud laboral, riesgos ocupacionales, ergonomía, cuidado en ambientes de trabajo." },
                        { "titulo": "Participación comunitaria, redes de apoyo, cuidado intergeneracional." },
                        { "titulo": "Uso de tecnologías, telemonitorización, seguimiento domiciliario." }
                      ]
                      },
                      {
                        "titulo": "Atención terciaria" ,
                        "hijos": [
                        { "titulo": "Cuidado especializado, rehabilitación, cuidados de alta complejidad, seguridad del paciente, prevención de complicaciones en el adulto." },
                        { "titulo": "Cuidado médico-quirúrgico: manejo preoperatorio y postoperatorio." },
                        { "titulo": "Planes de cuidado personalizados según diagnóstico y educación en cuidados domiciliarios posthospitalarios." },
                        { "titulo": "Estrategias para la educación del adulto y su familia: autocuidado, adherencia terapéutica, empoderamiento." },
                        { "titulo": "Rehabilitación funcional, manejo de la dependencia, redes de soporte." },
                        { "titulo": "Coordinación interprofesional e interdisciplinaria del cuidado del adulto frágil o con discapacidad." },
                        { "titulo": "Humanización, calidad del cuidado y gestión del servicio para el adulto, comunicación terapéutica, respeto al paciente adulto, familia y cuidadores." },
                        { "titulo": "Seguridad del paciente adulto, gestión de riesgos, calidad y mejora continua del servicio." },
                        { "titulo": "Liderazgo del profesional de enfermería en el cuidado del adulto: gestión, dirección, innovación, investigación." }
                      ]
                      }
                    ]
                  },
                  {
                    "titulo": "Fenómenos de salud frecuentes en el adulto.",
                    "hijos": [
                      { "titulo": "Valoración y manejo de enfermedades cardiovasculares, metabólicas, respiratorias, musculoesqueléticas y mentales." },
                      { "titulo": "Dolor crónico y agudo." },
                      { "titulo": "Estrés, ansiedad, depresión y afrontamiento." },
                      { "titulo": "Sexualidad, fertilidad y salud ocupacional." },
                      { "titulo": "Autonomía, dependencia y discapacidad." }
                  ]
                  },
                  {
                    "titulo": "Enfoque familiar y comunitario.",
                    "hijos": [
                      { "titulo": "Ciclo vital familiar y su relación con el cuidado del adulto." },
                      { "titulo": "Familia como sistema de apoyo y red cuidadora." },
                      { "titulo": "Estrategias de educación en salud y autocuidado familiar." },
                      { "titulo": "Intervención comunitaria y redes de apoyo." },
                      { "titulo": "Identificación de necesidades de salud del adulto en la comunidad." },
                      { "titulo": "Diseño e implementación de proyectos de promoción y prevención." },
                      { "titulo": "Coordinación con redes institucionales y comunitarias." },
                      { "titulo": "Referencia y contrarreferencia según nivel de complejidad." }
                  ]
                  },
                  {
                    "titulo": "Ética, bioética y humanización del cuidado.",
                    "hijos": [
                      { "titulo": "Respeto por la autonomía, confidencialidad y decisiones del adulto." },
                      { "titulo": "Dilemas éticos en la práctica en el adulto." },
                      { "titulo": "Cuidado humanizado y comunicación terapéutica." }
                  ]
                  },
              ]
              },
              {
                "titulo": "Cuidados paliativos y al final de la vida",
                "hijos": [
                  { "titulo": "Principios y fundamentos de los cuidados paliativos" },
                  { "titulo": "Manejo del dolor y síntomas en cuidados paliativos" },
                  { "titulo": "Acompañamiento, apoyo emocional y espiritual al paciente y su familia" },
                  { "titulo": "Ética y toma de decisiones al final de la vida" },
                  { "titulo": "Comunicación terapéutica en cuidados paliativos" },
                  { "titulo": "Políticas Públicas Ley Consuelo Devís Saavedra. Ley 1733 de 2014 y Voluntad Anticipada Resolución 2665 de 2018." },
                  { "titulo": "Cuidar a quien Cuida. Programas de Apoyo." }
                ]
              },
              {
                "titulo": "Salud del niño y el adolescente",
                "hijos": [
                  { "titulo": "Crecimiento y desarrollo del niño y niña" },
                  { "titulo": "Enfermedades prevalentes de la infancia (AIEPI)" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña de 0 a 36 meses" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña en edad preescolar/escolar" },
                  { "titulo": "Cuidado de enfermería al niño y niña en el programa de inmunizaciones (PAI)" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente en el ámbito hosítalario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones gastrointestinales" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones del sistema urinario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones respiratorias" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con enfermedades crónicas" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con urgencias pediátricas" }
                ]
              }
            ]
          },          
        ]
      },
      {
       "titulo": "Enfermería de profundización",
        "hijos": [
          { 
           "titulo": "Cuidado crítico y urgencias",
            "hijos": [
              { "titulo": "Manejo del triage en servicios de urgencias." },
              { "titulo": "Soporte vital básico y avanzado en adultos y pediatría." },
              { "titulo": "Cuidado de vías aéreas y ventilación mecánica." },
              { "titulo": "Monitoreo hemodinámico invasivo y no invasivo y soporte circulatorio." },
              { "titulo": "Farmacología de alto riesgo: manejo de vasopresores, inotrópicos, sedantes y analgésicos." }
              ]
          },
          {
           "titulo": "Salud pública y epidemiología",
            "hijos": [
              { "titulo": "Vigilancia epidemiológica: reporte de eventos de interés en salud pública." },
              { "titulo": "Investigación de brotes." },
              { "titulo": "Diseño y gestión de programas de promoción de la salud." }
              ]              
          },
          {
           "titulo": "Administración, gestión y liderazgo en enfermería",
            "hijos": [
              { "titulo": "Liderazgo y gestión de equipos de enfermería." },
              { "titulo": "Gestión de la calidad y seguridad del paciente." },
              { "titulo": "Planificación y organización estratégica del cuidado de enfermería." },
              { "titulo": "Gestión de recursos humanos, materiales y financieros en enfermería." },
              { "titulo": "Gestión de proyectos en salud." },
              { "titulo": "Desarrollo de políticas de salud." }
              ]
          },
          {
           "titulo": "Enfermería en Salud Mental y psiquiatría",
            "hijos": [
              { "titulo": "Instrumentos de valoración del estado mental." },
              { "titulo": "Cuidado al paciente con trastornos del ánimo (depresión, bipolaridad), ansiedad y psicosis." },
              { "titulo": "Manejo de la crisis psiquiátrica y prevención del suicidio." },
              { "titulo": "Diseño y gestión de programas de promoción de la salud mental." }
              ]
          },
          {
           "titulo": "Cuidado paliativo y al final de la vida",
            "hijos": [
              { "titulo": "Principios del cuidado paliativo." },
              { "titulo": "Manejo del dolor y otros síntomas en pacientes terminales." },
              { "titulo": "Apoyo emocional y espiritual al paciente y la familia." },
              { "titulo": "Aspectos éticos y legales al final de la vida." }
              ]
          },
          {
           "titulo": "Enfermería en Salud Ocupacional",
            "hijos": [
              { "titulo": "Evaluación de riesgos laborales." },
              { "titulo": "Programas de promoción de la salud en el trabajo." },
              { "titulo": "Manejo de accidentes laborales y enfermedades profesionales." },
              { "titulo": "Legislación en salud ocupacional." }
            ]
          }
        ]
      }
    ]
  },
  { titulo: "Elementos de competencia",
    hijos: [
      {
    titulo: "6.1 Asumir en su ejercicio profesional los principios éticos y bioéticos de acuerdo con la ley deontológica de enfermería.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "6.1.1 La utilización de los principios éticos cumple con la beneficencia, no maleficencia, justicia y autonomía en el ejercicio profesional." },
          { "titulo": "6.1.2 El ejercicio de profesional de enfermería está acorde con el comportamiento ético establecido en el código deontológico y protocolos institucionales." },
          { "titulo": "6.1.3 El respeto de la autonomía del paciente en la ejecución de las actividades de enfermería está acorde con el consentimiento informado." }
          ],
        },
      ]
      },
      {
    titulo: "6.2 Promover el respeto por la dignidad de las personas (paciente, familia y comunidad) teniendo en cuenta los valores, deberes, derechos individuales y colectivos en el acto de cuidado de enfermería.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "6.2.1 La divulgación de valores, deberes, derechos individuales y colectivos de la persona (paciente, familia y comunidades) cumple con los principios éticos establecido en el código deontológico, normativa nacional del sistema de salud y protocolos institucionales  " },
          { "titulo": "6.2.2 El mantenimiento del respeto, igualdad y equidad en la atención en salud está acorde con los derechos humanos y constitucionales." },
          { "titulo": "6.2.3 La preservación de la intimidad de la persona (paciente, familia y comunidad) cumple con el respeto y protocolos establecidos." }
          ],
        },
      ]
      },
      {
    titulo: "6.3 Abogar por los derechos de las personas (paciente, familia y comunidad) teniendo en cuenta los mandatos constitucionales y las políticas de atención en salud.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "6.3.1 La defensa de los derechos en la atención en salud de enfermería de las personas (paciente, familias y comunidades) cumple con el conducto regular establecido en la constitución y las políticas de salud para su notificación." },
          { "titulo": "6.3.2 La interseción de los derechos en salud por las personas (pacientes, familias y comunidades) corresponde con los lineamientos de políticas en salud establecidas." },
          { "titulo": "6.3.3 La representación de la persona (paciente, familia y comunidad) ante otros actores sanitarios en el respeto de sus decisiones está acorde con las necesidades manifestadas por las personas." }
          ],
        },
      ]
      }      
    ]
  },      
  { titulo: "Resultados de aprendizaje",
      "hijos": [
          { "titulo": "RA1. Mostrar en su hacer los principios éticos y bioéticos relacionados con el ejercicio profesional de enfermería de acuerdo con los principios deontológicos y normatividad vigente." },
          { "titulo": "RA2. Demostrar  en el trato brindado a la persona, familia y comunidad, equipo interprofesional teniendo en cuenta los derechos individuales y colectivos en el acto de cuidado de enfermería." },
          { "titulo": "RA3. Tomar decisiones en conjunto con el equipo de salud para defender los derechos de las personas, familias y comunidades de acuerdo con las necesidades de atención en salud y políticas."},
          { "titulo": "RA4. Aplicar principios éticos y bioéticos relacionados con el ejercicio profesional de enfermería en comités de ética de las instituciones de salud de acuerdo con los principios deontológicos disciplinares."}
        ],
      },
    ]
  },
  {
    "titulo": "COMPETENCIA 7: ",
    "descripcion": "Participar en procesos de investigación orientados al fortalecimiento e innovación de la práctica de acuerdo con las necesidades de la disciplina y la salud. DOMINIO: Investigación y proyección social para el cuidado de enfermería.",
    elementos: [
      { titulo: "Contenidos",
      hijos: [
      {
        titulo: "Núcleo de conocimiento: Fundamentación o básico",
        "hijos": [
          {
            "titulo": "Matemáticas y ciencias naturales",
            "hijos": [
              {
                "titulo": "Matemáticas",
                "hijos": [
                  { "titulo": "Aritmética básica: operaciones fundamentales (suma, resta, multiplicación, división)" },
                  { "titulo": "Proporciones y razones: cálculo de dosis, diluciones, infusiones y mezclas" },
                  { "titulo": "Porcentajes: concentración de soluciones, interpretación de resultados de laboratorio" },
                  { "titulo": "Regla de tres simple y compuesta: cálculo de medicamentos y tiempos de administración" },
                  { "titulo": "Fracciones y decimales: manejo de unidades de medida y conversión de dosis" },
                  { "titulo": "Sistema métrico y conversiones de unidades: gramos, miligramos, microgramos, litros, mililitros" },
                  { "titulo": "Cálculo de áreas y volúmenes: preparación de soluciones, nutrición y fluidoterapia" },
                  { "titulo": "Estadística descriptiva básica: variables, medidas de tendencia central y dispersión, interpretación de gráficas y tablas" }
                ]
              },
              {
                "titulo": "Biología celular y molecular",
                "hijos": [
                  { "titulo": "Estructura y función celular" },
                  { "titulo": "Organelos celulares" },
                  { "titulo": "Transporte transmembrana" },
                  { "titulo": "Genética molecular" },
                  { "titulo": "Metabolismo energético" },
                  { "titulo": "Ciclo de Krebs o del ácido cítrico"},
                  { "titulo": "Fosforilación oxidativa" }
              ]
              },
              {
                "titulo": "Bioquímica",
                "hijos": [
                  { "titulo": "Soluciones y gases" },
                  { "titulo": "Equilibrio ácido base" },
                  { "titulo": "Estructura y función de carbohidratos, lípidos, proteínas y ácidos nucleicos" },
                  { "titulo": "Genética molecular" }
              ]
              },
              {
                "titulo": "Microbiología",
                "hijos": [
                  { "titulo": "Características generales" },
                  { "titulo": "Estructura bacterias, virus, hongos y parásitos" },
                  { "titulo": "Mecanismos de patogenicidad e importancia clínica" },
                  { "titulo": "Ciclos de replicación, medidas de prevención y control" },
                  { "titulo": "Enfermedades de obligatoria notificación" }
              ]
              },
            ]
          },
          {
            "titulo": "Ciencias de la salud",
            "hijos": [
              {
                "titulo": "Morfofisiología (Anatomia y Fisiología)",
                "hijos": [
                  { "titulo": "Sistema Nervioso" },
                  { "titulo": "Sistema Cardiovascular" },
                  { "titulo": "Sistema Respiratorio" },
                  { "titulo": "Sistema Renal y Urinario" },
                  { "titulo": "Sistema Endocrino" },
                  { "titulo": "Sistema Digestivo" },
                  { "titulo": "Sistema Musculoesquelético" },
                  { "titulo": "Sistema tegumentario" },
                  { "titulo": "Sistema inmune" },
                  { "titulo": "Sistema reproductivo" },
                  { "titulo": "Sistema hematopoyetico" }
              ]
            },
            {
                "titulo": "Fisiopatología",
                "hijos": [
                  { "titulo": "Mecanismos de lesión celular" },
                  {
                    "titulo": "Procesos Patológicos Fundamentales",
                    "hijos": [
                      { "titulo": "Inflamación y reparación tisular" },
                      { "titulo": "Infección y respuesta inmune" },
                      { "titulo": "Cicatrización" },
                      { "titulo": "Trastornos hemodinámicos" },
                      { "titulo": "Alteraciones metabólicas" },
                      { "titulo": "Flujo de líquidos y edema" },
                      { "titulo": "Neoplasia" },
                    ]
                  },                
                  {"titulo": "Fisiopatología por sistemas"},
                  {"titulo": "Psicopatología y alteraciones mentales" },
              ]
            },
            {
                "titulo": "Farmacología",
                "hijos": [
                  {
                  "titulo": "Principios Generales",
                  "hijos": [
                    { "titulo": "Farmacocinética: absorción, distribución, metabolismo y excreción de fármacos" },
                    { "titulo": "Farmacodinámica: mecanismos de acción, efectos terapéuticos y tóxicos" },
                    { "titulo": "Vías de administración de fármacos" },
                  ],
                },
                  { "titulo": "Liquidos y electrolitos"},
                  { "titulo": "Hemoderivados" },
                  { "titulo": "Cálculo de dosis"},
                  { "titulo": "Farmacovigilancia"},
                  { "titulo": "Famacología por sistemas o grupos terapéuticos"}
              ]
            },
            {
                "titulo": "Semiología",
                "hijos": [
                  { "titulo": "Entrevista" },
                  { "titulo": "Exploración física" },
                  { "titulo": "Técnicas de exploración (semiotécnia)" },
                  { "titulo": "Historia clínica" },
                  { "titulo": "Signos vitales" },
                  { "titulo": "Interpretación de hallazgos clínicos (propedéutica)" },
                  { "titulo": "Semiología por sistemas" },
              ]
            },
          ]
          },
          {
            "titulo": "Ciencias sociales y humanas",
            "hijos": [
              { 
                "titulo": "Psicología y desarrollo humano",
                "hijos": [
                  { "titulo": "Curso de vida" },
                  { 
                    "titulo": "Bases del comportamiento",
                    "hijos": [
                      { "titulo": "Teorías de la personalidad" },
                      { "titulo": "Procesos cognitivos y emocionales" },
                      { "titulo": "Estrés y adaptación" },
                      { "titulo": "Sufrimiento y muerte" },
                      { "titulo": "Comunicación terapéutica" },
                      { "titulo": "Estrategias de apoyo emocional" }
                  ]
                },
              ]
            },
              {         
                "titulo": "Sociología y antropología",
                "hijos": [
                  { "titulo": "Conceptos de cultura, sociedad, etnicidad, estructura y rol social" },
                  { "titulo": "Proceso salud enfermedad"},
                  { "titulo": "Diversidad y Cuidado Culturalmente Congruente:"},
                  { "titulo": "Determinantes sociales de la salud"},
                  { "titulo": "Familia como sistema social" },
                  { "titulo": "Interculturalidad, inclusión y equidad" }
                  ]
          },
          {         
                "titulo": "Bioética",
                "hijos": [
                  { "titulo": "Principios bioéticos fundamentales" },
                  { "titulo": "Dilemas éticos en las prácticas de enfermería" },
                  { "titulo": "Ética del cuidado" }
                  ]
          },
          {         
                "titulo": "Legislación en salud y enfermería",
                "hijos": [
                  { "titulo": "Marco normativo nacional" },
                  { "titulo": "Marco normativo internacional" }
                  ]
          },
        ]
      },
          {
            "titulo": "Educación",
            "hijos": [
              { "titulo": "Comunicación en salud" },
              { "titulo": "Teorías del aprendizaje" },
              { "titulo": "Proceso educativo" },
              { "titulo": "Didácticas y ayudas para la enseñanza e información en salud" },
              { "titulo": "Evaluación del aprendizaje" }
            ]
          }
        ]
      },
      {
        "titulo": "Núcleo disciplinar profesional: Enfermería",
        "hijos": [
          {
            "titulo": "Enfermería Básica",
            "hijos": [
              {
                "titulo": "Epistemología, historia, modelos y teorías de enfermería",
                "hijos": [
                  { "titulo": "Historia del cuidado y de enfermería" },
                  { "titulo": "Visiones del mundo (Empirista, Interpretativo, Socio-crítico)" },
                  { "titulo": "Metaparadigma de enfermería" },
                  { "titulo": "Sistema conceptual teórico empírico" },
                  { "titulo": "Generalidades modelos y teorías de enfermería" },
                  { "titulo": "Patrones de conocimiento " }
                ]
              },
              {
                "titulo": "Proceso de atención de enfermería (PAE)",
                "hijos": [
                  { "titulo": "Valoración de enfermería" },
                  { "titulo": "Diagnóstico de enfermería" },
                  { "titulo": "Planificación de cuidados" },
                  { "titulo": "Intervenciones de enfermería" },
                  { "titulo": "Evaluación de resultados" },
                  { "titulo": "Registros en enfermería" }
              ]
              },
              {
                "titulo": "Procedimientos y técnicas básicas de enfermería",
                "hijos": [
                  { "titulo": "Toma e interpretación de signos vitales" },
                  { "titulo": "Técnicas asépticas y de bioseguridad" },
                  { "titulo": "Administración segura de medicamentos" },
                  { "titulo": "Oxigenoterapia" },
                  { "titulo": "Cuidados de heridas y ostomías" },
                  { "titulo": "Accesos venosos periféricos" },
                  { "titulo": "Cateterismo urinario"}, 
                  { "titulo": "Toma de muestras para laboratorio" },
                  { "titulo": "Sonda nasogátrica" },
                  { "titulo": "Cuidados básicos (Higiene y confort, Movilización)" }
                  ]
              },              
            ]
          },
          {
            "titulo": "Enfermería específica",
            "hijos": [
              { 
                "titulo": "Salud materno perinatal y salud sexual y reproductiva",
                "hijos": [
                  {
                    "titulo": "Cuidado de Enfermería en salud sexual y reproductiva  a la  persona, pareja y familia",
                  "hijos": [
                      { "titulo": "Panorama de la salud sexual y reproductiva (normatividad)" },
                      { "titulo": "Vigilancia epidemiológica en la salud sexual y reproductiva" },
                      { "titulo": "Métodos anticonceptivos , consejería en salud sexual y reproductiva" },
                      { "titulo": "Educación para la Salud sexual y Reproductiva, servicios amigables para jóvenes y adolescentes" },
                      { "titulo": "Prevención de Infecciones de transmisión sexual" },
                      { "titulo": "Enfermería en la atención a las principales enfermedades ginecológicas (endometriosis,( SDPM, CACU)" },
                      { "titulo": "Atención preconcepcional" },
                      { "titulo": "Enfermeria en la atención a la persona con climaterio y/o menopausia" },
                  ]
                  },
                  {
                    "titulo": "Cuidado de la persona gestante y su familia.",
                    "hijos": [
                      { "titulo": "Cuidado prenatal: valoración de la gestante, control prenatal, educación sobre signos de alarma, curso de preparación para la maternidad y paternidad." },
                      { "titulo": "Salud mental  perinatal" }
                  ]
                  },
                  {
                    "titulo": "Cuidado de Enfermería a la persona y su familia durante el Trabajo  de Parto, Parto y Puerperio.",
                    "hijos": [
                      { "titulo": "Cuidado de enfermería y humanización  durante el trabajo de parto y parto, monitoria fetal." },
                      { "titulo": "Cuidado del puerperio: inmediato, mediato y tardio" },
                      { "titulo": "Medicamentos de interès obstetrico" },
                      { "titulo": "Cuidado de enfermería  al mujer con morbilidad obstétrica" },
                      { "titulo": "Cuidado de enfermería durante la emergencia obstétrica" },
                      { "titulo": "Lactancia materna y estrategias para su promoción" },
                      { "titulo": "Cuidado inmediato y mediato del recién nacido" },
                      { "titulo": "Cuidado de enfermería a las principales alteraciones en el recièn nacido" }
                  ]
                  },
              ]
              },             
              { 
                "titulo": "Salud del adulto y adulto mayor",
                "hijos": [
                  {
                    "titulo": "Fundamentos conceptuales del curso de vida adulto: determinantes, trayectorias y contexto",
                  "hijos": [
                      { "titulo": "Características biológicas, psicológicas y sociales de la adultez (temprana, media y tardía)." },
                      { "titulo": "Cambios fisiológicos normales del adulto y su implicación en el cuidado." },
                      { "titulo": "Impacto de los determinantes sociales, económicos, culturales, laborales sobre la salud del adulto." },
                      { "titulo": "Rol productivo, familiar y social del adulto." },
                      { "titulo": "Transiciones vitales del adulto (ingreso al trabajo, cambios familiares, roles, envejecimiento temprano.)" },
                      { "titulo": "Transiciones y crisis vitales (laborales, familiares, de salud)." },
                      { "titulo": "Enfoque poblacional, territorial, e intercultural en la salud del adulto." }
                  ]
                  },
                  {
                    "titulo": "Salud del adulto según niveles de atención.",
                    "hijos": [
                      {
                        "titulo": "Atención primaria" ,
                        "hijos": [
                        { "titulo": "Promoción de la salud y prevención de la enfermedad en el adulto." },
                        { "titulo": "Detección temprana de factores de riesgo y enfermedades prevalentes en el adulto." },
                        { "titulo": "Manejo de enfermedades crónicas no transmisibles (ECNT) en el adulto." },
                        { "titulo": "Manejo de enfermedades transmisibles en el adulto." },
                        { "titulo": "Salud mental en el adulto." }
                      ]
                      },                    
                      {
                        "titulo": "Atención secundaria" ,
                        "hijos": [
                        { "titulo": "Cuidado del adulto con enfermedades crónicas no transmisibles prevalentes" },
                        { "titulo": "Acompañamiento al paciente y familia en procesos de hospitalización, cirugía o rehabilitación." },
                        { "titulo": "Procedimientos básicos y avanzados o invasivos en enfermería." },
                        { "titulo": "Cuidado hospitalario, ambulatorio y comunitario del adulto enfermo." },
                        { "titulo": "Salud mental del adulto: depresión, ansiedad, estrés laboral, consumo, aislamiento." },
                        { "titulo": "Salud laboral, riesgos ocupacionales, ergonomía, cuidado en ambientes de trabajo." },
                        { "titulo": "Participación comunitaria, redes de apoyo, cuidado intergeneracional." },
                        { "titulo": "Uso de tecnologías, telemonitorización, seguimiento domiciliario." }
                      ]
                      },
                      {
                        "titulo": "Atención terciaria" ,
                        "hijos": [
                        { "titulo": "Cuidado especializado, rehabilitación, cuidados de alta complejidad, seguridad del paciente, prevención de complicaciones en el adulto." },
                        { "titulo": "Cuidado médico-quirúrgico: manejo preoperatorio y postoperatorio." },
                        { "titulo": "Planes de cuidado personalizados según diagnóstico y educación en cuidados domiciliarios posthospitalarios." },
                        { "titulo": "Estrategias para la educación del adulto y su familia: autocuidado, adherencia terapéutica, empoderamiento." },
                        { "titulo": "Rehabilitación funcional, manejo de la dependencia, redes de soporte." },
                        { "titulo": "Coordinación interprofesional e interdisciplinaria del cuidado del adulto frágil o con discapacidad." },
                        { "titulo": "Humanización, calidad del cuidado y gestión del servicio para el adulto, comunicación terapéutica, respeto al paciente adulto, familia y cuidadores." },
                        { "titulo": "Seguridad del paciente adulto, gestión de riesgos, calidad y mejora continua del servicio." },
                        { "titulo": "Liderazgo del profesional de enfermería en el cuidado del adulto: gestión, dirección, innovación, investigación." }
                      ]
                      }
                    ]
                  },
                  {
                    "titulo": "Fenómenos de salud frecuentes en el adulto.",
                    "hijos": [
                      { "titulo": "Valoración y manejo de enfermedades cardiovasculares, metabólicas, respiratorias, musculoesqueléticas y mentales." },
                      { "titulo": "Dolor crónico y agudo." },
                      { "titulo": "Estrés, ansiedad, depresión y afrontamiento." },
                      { "titulo": "Sexualidad, fertilidad y salud ocupacional." },
                      { "titulo": "Autonomía, dependencia y discapacidad." }
                  ]
                  },
                  {
                    "titulo": "Enfoque familiar y comunitario.",
                    "hijos": [
                      { "titulo": "Ciclo vital familiar y su relación con el cuidado del adulto." },
                      { "titulo": "Familia como sistema de apoyo y red cuidadora." },
                      { "titulo": "Estrategias de educación en salud y autocuidado familiar." },
                      { "titulo": "Intervención comunitaria y redes de apoyo." },
                      { "titulo": "Identificación de necesidades de salud del adulto en la comunidad." },
                      { "titulo": "Diseño e implementación de proyectos de promoción y prevención." },
                      { "titulo": "Coordinación con redes institucionales y comunitarias." },
                      { "titulo": "Referencia y contrarreferencia según nivel de complejidad." }
                  ]
                  },
                  {
                    "titulo": "Ética, bioética y humanización del cuidado.",
                    "hijos": [
                      { "titulo": "Respeto por la autonomía, confidencialidad y decisiones del adulto." },
                      { "titulo": "Dilemas éticos en la práctica en el adulto." },
                      { "titulo": "Cuidado humanizado y comunicación terapéutica." }
                  ]
                  },
              ]
              },
              {
                "titulo": "Cuidados paliativos y al final de la vida",
                "hijos": [
                  { "titulo": "Principios y fundamentos de los cuidados paliativos" },
                  { "titulo": "Manejo del dolor y síntomas en cuidados paliativos" },
                  { "titulo": "Acompañamiento, apoyo emocional y espiritual al paciente y su familia" },
                  { "titulo": "Ética y toma de decisiones al final de la vida" },
                  { "titulo": "Comunicación terapéutica en cuidados paliativos" },
                  { "titulo": "Políticas Públicas Ley Consuelo Devís Saavedra. Ley 1733 de 2014 y Voluntad Anticipada Resolución 2665 de 2018." },
                  { "titulo": "Cuidar a quien Cuida. Programas de Apoyo." }
                ]
              },
              {
                "titulo": "Salud del niño y el adolescente",
                "hijos": [
                  { "titulo": "Crecimiento y desarrollo del niño y niña" },
                  { "titulo": "Enfermedades prevalentes de la infancia (AIEPI)" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña de 0 a 36 meses" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña en edad preescolar/escolar" },
                  { "titulo": "Cuidado de enfermería al niño y niña en el programa de inmunizaciones (PAI)" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente en el ámbito hosítalario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones gastrointestinales" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones del sistema urinario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones respiratorias" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con enfermedades crónicas" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con urgencias pediátricas" }
                ]
              }
            ]
          },          
        ]
      },
      {
       "titulo": "Enfermería de profundización",
        "hijos": [
          { 
           "titulo": "Cuidado crítico y urgencias",
            "hijos": [
              { "titulo": "Manejo del triage en servicios de urgencias." },
              { "titulo": "Soporte vital básico y avanzado en adultos y pediatría." },
              { "titulo": "Cuidado de vías aéreas y ventilación mecánica." },
              { "titulo": "Monitoreo hemodinámico invasivo y no invasivo y soporte circulatorio." },
              { "titulo": "Farmacología de alto riesgo: manejo de vasopresores, inotrópicos, sedantes y analgésicos." }
              ]
          },
          {
           "titulo": "Salud pública y epidemiología",
            "hijos": [
              { "titulo": "Vigilancia epidemiológica: reporte de eventos de interés en salud pública." },
              { "titulo": "Investigación de brotes." },
              { "titulo": "Diseño y gestión de programas de promoción de la salud." }
              ]              
          },
          {
           "titulo": "Administración, gestión y liderazgo en enfermería",
            "hijos": [
              { "titulo": "Liderazgo y gestión de equipos de enfermería." },
              { "titulo": "Gestión de la calidad y seguridad del paciente." },
              { "titulo": "Planificación y organización estratégica del cuidado de enfermería." },
              { "titulo": "Gestión de recursos humanos, materiales y financieros en enfermería." },
              { "titulo": "Gestión de proyectos en salud." },
              { "titulo": "Desarrollo de políticas de salud." }
              ]
          },
          {
           "titulo": "Enfermería en Salud Mental y psiquiatría",
            "hijos": [
              { "titulo": "Instrumentos de valoración del estado mental." },
              { "titulo": "Cuidado al paciente con trastornos del ánimo (depresión, bipolaridad), ansiedad y psicosis." },
              { "titulo": "Manejo de la crisis psiquiátrica y prevención del suicidio." },
              { "titulo": "Diseño y gestión de programas de promoción de la salud mental." }
              ]
          },
          {
           "titulo": "Cuidado paliativo y al final de la vida",
            "hijos": [
              { "titulo": "Principios del cuidado paliativo." },
              { "titulo": "Manejo del dolor y otros síntomas en pacientes terminales." },
              { "titulo": "Apoyo emocional y espiritual al paciente y la familia." },
              { "titulo": "Aspectos éticos y legales al final de la vida." }
              ]
          },
          {
           "titulo": "Enfermería en Salud Ocupacional",
            "hijos": [
              { "titulo": "Evaluación de riesgos laborales." },
              { "titulo": "Programas de promoción de la salud en el trabajo." },
              { "titulo": "Manejo de accidentes laborales y enfermedades profesionales." },
              { "titulo": "Legislación en salud ocupacional." }
            ]
          }
        ]
      }
    ]
  },
  { titulo: "Elementos de competencia",
    hijos: [
      {
    titulo: "7.1 Promover proceso de investigación en el cuidado de enfermería de acuerdo con necesidades y problemas identificados en su práctica.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "7.1.1 La identificación de necesidades de investigación en su área de desempeño corresponde con necesidades y problemas identificados en su práctica." },
          { "titulo": "7.1.2 La conformación de grupos de estudio que direccionen las necesidades de investigación en las áreas prioritarias cumple con problemas identificados en la práctica y metodologias de investigación." },
          { "titulo": "7.1.3 El establecimiento de perfiles del talento humano, recursos materiales y financieros necearios en la realización del proceso investigativo corresponde con necesidades de investigación." }
          ],
        },
      ]
      },
      {
    titulo: "7.2 Intervenir en los procesos de investigación que se desarrollan en su área de desempeño profesional o en el área de la salud de acuerdo con los problemas identificados y los avances en la ciencia.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "7.2.1 La realización de actividades de investigación en el área de desempeño profesional o en el área de la salud cumple con método, contexto, objetivos y recursos disponibles." },
          { "titulo": "7.2.2 El desarrollo de actividades de investigación cumple con principios éticos y bioéticos." },
          { "titulo": "7.2.3 La divulgación de avances y resultados de investigación está acorde con evidencia científica, bioética y acuerdos de confidencialidad." }          
        ],
        },
      ]
      },
      {
    titulo: "7.3 Emplear los resultados y la evidencia científica en la práctica de cuidado según necesidades de la disciplina y la salud.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "7.3.1 La aplicación de avances en el cuidado de enfermería corresponde con resultados de investigación en la solución de los problemas en salud." },
          { "titulo": "7.3.2 La retroalimentación al equipo en la aplicación de los avances en la práctica de cuidado cumple con necesidades de la disciplina y la salud." },
          { "titulo": "7.3.3 La gestión de recursos orientados a la modernización tecnológica en la atención de personas (paciente, familia y comunidad) corresponde con procedimientos institucionales." }
          ],
        },
      ]
      },
      {
    titulo: "7.4 Divulgar resultados de procesos de investigación desarrollados teniendo en cuenta necesidades de actualización de los equipos de salud.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "7.4.1 La presentación de resultados obtenidos en el proceso de investigación desarrollados entre equipos de salud está acorde con estrategias de divulgación definidas." },
          { "titulo": "7.4.2 El uso de medios masivos de comunicación en la divulgación de resultados de investigaciones desarrolladas corresponde con políticas de masificación del conocimiento." },
          { "titulo": "7.4.3 La información a las comunidades de los resultados y estrategías en el mejoramiento de los estilos de vida saludable de las poblaciones corresponde con marco normativo y políticas de salud." }
          ],
        },
      ]
      }
    ]
  },      
  { titulo: "Resultados de aprendizaje",
      "hijos": [
          { "titulo": "RA1. Indagar los fenomenos de investigación en la busqueda de solución de problemas de salud de acuerdo con las necesidades de cuidado y los desarrollos científicos actuales." },
          { "titulo": "RA2. Argumentar la actualización de protocolos y guías de manejo para la persona, familia y comunidad de acuerdo con la innovación y evidencia científica reciente." },
          { "titulo": "RA3. Proponer mejoras a la práctica de cuidado de enfermería teniendo en cuenta los resultados de investigación, evidencia científica y guías de manejo de enfermería."},
          { "titulo": "RA4. Divulgar los resultados de investigación encontrados en el cuidado de enfermería según protocolos institucionales, política y normatividad de ciencia, tecnología e innovación."}
        ],
      },
    ]
  },
  {
    "titulo": "COMPETENCIA 8: ",
    "descripcion": "Liderar procesos de sostenibilidad y respeto ambiental en su ejercicio profesional según los diferentes niveles de atención en salud. DOMINIO: Liderazgo y gestión en el cuidado de enfermería.",
    elementos: [
      { titulo: "Contenidos",
      hijos: [
      {
        "titulo": "Núcleo disciplinar profesional: Enfermería",
        "hijos": [
          {
            "titulo": "Enfermería Básica",
            "hijos": [
              {
                "titulo": "Epistemología, historia, modelos y teorías de enfermería",
                "hijos": [
                  { "titulo": "Historia del cuidado y de enfermería" },
                  { "titulo": "Visiones del mundo (Empirista, Interpretativo, Socio-crítico)" },
                  { "titulo": "Metaparadigma de enfermería" },
                  { "titulo": "Sistema conceptual teórico empírico" },
                  { "titulo": "Generalidades modelos y teorías de enfermería" },
                  { "titulo": "Patrones de conocimiento " }
                ]
              },
              {
                "titulo": "Proceso de atención de enfermería (PAE)",
                "hijos": [
                  { "titulo": "Valoración de enfermería" },
                  { "titulo": "Diagnóstico de enfermería" },
                  { "titulo": "Planificación de cuidados" },
                  { "titulo": "Intervenciones de enfermería" },
                  { "titulo": "Evaluación de resultados" },
                  { "titulo": "Registros en enfermería" }
              ]
              },
              {
                "titulo": "Procedimientos y técnicas básicas de enfermería",
                "hijos": [
                  { "titulo": "Toma e interpretación de signos vitales" },
                  { "titulo": "Técnicas asépticas y de bioseguridad" },
                  { "titulo": "Administración segura de medicamentos" },
                  { "titulo": "Oxigenoterapia" },
                  { "titulo": "Cuidados de heridas y ostomías" },
                  { "titulo": "Accesos venosos periféricos" },
                  { "titulo": "Cateterismo urinario"}, 
                  { "titulo": "Toma de muestras para laboratorio" },
                  { "titulo": "Sonda nasogátrica" },
                  { "titulo": "Cuidados básicos (Higiene y confort, Movilización)" }
                  ]
              },              
            ]
          },
          {
            "titulo": "Enfermería específica",
            "hijos": [
              { 
                "titulo": "Salud materno perinatal y salud sexual y reproductiva",
                "hijos": [
                  {
                    "titulo": "Cuidado de Enfermería en salud sexual y reproductiva  a la  persona, pareja y familia",
                  "hijos": [
                      { "titulo": "Panorama de la salud sexual y reproductiva (normatividad)" },
                      { "titulo": "Vigilancia epidemiológica en la salud sexual y reproductiva" },
                      { "titulo": "Métodos anticonceptivos , consejería en salud sexual y reproductiva" },
                      { "titulo": "Educación para la Salud sexual y Reproductiva, servicios amigables para jóvenes y adolescentes" },
                      { "titulo": "Prevención de Infecciones de transmisión sexual" },
                      { "titulo": "Enfermería en la atención a las principales enfermedades ginecológicas (endometriosis,( SDPM, CACU)" },
                      { "titulo": "Atención preconcepcional" },
                      { "titulo": "Enfermeria en la atención a la persona con climaterio y/o menopausia" },
                  ]
                  },
                  {
                    "titulo": "Cuidado de la persona gestante y su familia.",
                    "hijos": [
                      { "titulo": "Cuidado prenatal: valoración de la gestante, control prenatal, educación sobre signos de alarma, curso de preparación para la maternidad y paternidad." },
                      { "titulo": "Salud mental  perinatal" }
                  ]
                  },
                  {
                    "titulo": "Cuidado de Enfermería a la persona y su familia durante el Trabajo  de Parto, Parto y Puerperio.",
                    "hijos": [
                      { "titulo": "Cuidado de enfermería y humanización  durante el trabajo de parto y parto, monitoria fetal." },
                      { "titulo": "Cuidado del puerperio: inmediato, mediato y tardio" },
                      { "titulo": "Medicamentos de interès obstetrico" },
                      { "titulo": "Cuidado de enfermería  al mujer con morbilidad obstétrica" },
                      { "titulo": "Cuidado de enfermería durante la emergencia obstétrica" },
                      { "titulo": "Lactancia materna y estrategias para su promoción" },
                      { "titulo": "Cuidado inmediato y mediato del recién nacido" },
                      { "titulo": "Cuidado de enfermería a las principales alteraciones en el recièn nacido" }
                  ]
                  },
              ]
              },             
              { 
                "titulo": "Salud del adulto y adulto mayor",
                "hijos": [
                  {
                    "titulo": "Fundamentos conceptuales del curso de vida adulto: determinantes, trayectorias y contexto",
                  "hijos": [
                      { "titulo": "Características biológicas, psicológicas y sociales de la adultez (temprana, media y tardía)." },
                      { "titulo": "Cambios fisiológicos normales del adulto y su implicación en el cuidado." },
                      { "titulo": "Impacto de los determinantes sociales, económicos, culturales, laborales sobre la salud del adulto." },
                      { "titulo": "Rol productivo, familiar y social del adulto." },
                      { "titulo": "Transiciones vitales del adulto (ingreso al trabajo, cambios familiares, roles, envejecimiento temprano.)" },
                      { "titulo": "Transiciones y crisis vitales (laborales, familiares, de salud)." },
                      { "titulo": "Enfoque poblacional, territorial, e intercultural en la salud del adulto." }
                  ]
                  },
                  {
                    "titulo": "Salud del adulto según niveles de atención.",
                    "hijos": [
                      {
                        "titulo": "Atención primaria" ,
                        "hijos": [
                        { "titulo": "Promoción de la salud y prevención de la enfermedad en el adulto." },
                        { "titulo": "Detección temprana de factores de riesgo y enfermedades prevalentes en el adulto." },
                        { "titulo": "Manejo de enfermedades crónicas no transmisibles (ECNT) en el adulto." },
                        { "titulo": "Manejo de enfermedades transmisibles en el adulto." },
                        { "titulo": "Salud mental en el adulto." }
                      ]
                      },                    
                      {
                        "titulo": "Atención secundaria" ,
                        "hijos": [
                        { "titulo": "Cuidado del adulto con enfermedades crónicas no transmisibles prevalentes" },
                        { "titulo": "Acompañamiento al paciente y familia en procesos de hospitalización, cirugía o rehabilitación." },
                        { "titulo": "Procedimientos básicos y avanzados o invasivos en enfermería." },
                        { "titulo": "Cuidado hospitalario, ambulatorio y comunitario del adulto enfermo." },
                        { "titulo": "Salud mental del adulto: depresión, ansiedad, estrés laboral, consumo, aislamiento." },
                        { "titulo": "Salud laboral, riesgos ocupacionales, ergonomía, cuidado en ambientes de trabajo." },
                        { "titulo": "Participación comunitaria, redes de apoyo, cuidado intergeneracional." },
                        { "titulo": "Uso de tecnologías, telemonitorización, seguimiento domiciliario." }
                      ]
                      },
                      {
                        "titulo": "Atención terciaria" ,
                        "hijos": [
                        { "titulo": "Cuidado especializado, rehabilitación, cuidados de alta complejidad, seguridad del paciente, prevención de complicaciones en el adulto." },
                        { "titulo": "Cuidado médico-quirúrgico: manejo preoperatorio y postoperatorio." },
                        { "titulo": "Planes de cuidado personalizados según diagnóstico y educación en cuidados domiciliarios posthospitalarios." },
                        { "titulo": "Estrategias para la educación del adulto y su familia: autocuidado, adherencia terapéutica, empoderamiento." },
                        { "titulo": "Rehabilitación funcional, manejo de la dependencia, redes de soporte." },
                        { "titulo": "Coordinación interprofesional e interdisciplinaria del cuidado del adulto frágil o con discapacidad." },
                        { "titulo": "Humanización, calidad del cuidado y gestión del servicio para el adulto, comunicación terapéutica, respeto al paciente adulto, familia y cuidadores." },
                        { "titulo": "Seguridad del paciente adulto, gestión de riesgos, calidad y mejora continua del servicio." },
                        { "titulo": "Liderazgo del profesional de enfermería en el cuidado del adulto: gestión, dirección, innovación, investigación." }
                      ]
                      }
                    ]
                  },
                  {
                    "titulo": "Fenómenos de salud frecuentes en el adulto.",
                    "hijos": [
                      { "titulo": "Valoración y manejo de enfermedades cardiovasculares, metabólicas, respiratorias, musculoesqueléticas y mentales." },
                      { "titulo": "Dolor crónico y agudo." },
                      { "titulo": "Estrés, ansiedad, depresión y afrontamiento." },
                      { "titulo": "Sexualidad, fertilidad y salud ocupacional." },
                      { "titulo": "Autonomía, dependencia y discapacidad." }
                  ]
                  },
                  {
                    "titulo": "Enfoque familiar y comunitario.",
                    "hijos": [
                      { "titulo": "Ciclo vital familiar y su relación con el cuidado del adulto." },
                      { "titulo": "Familia como sistema de apoyo y red cuidadora." },
                      { "titulo": "Estrategias de educación en salud y autocuidado familiar." },
                      { "titulo": "Intervención comunitaria y redes de apoyo." },
                      { "titulo": "Identificación de necesidades de salud del adulto en la comunidad." },
                      { "titulo": "Diseño e implementación de proyectos de promoción y prevención." },
                      { "titulo": "Coordinación con redes institucionales y comunitarias." },
                      { "titulo": "Referencia y contrarreferencia según nivel de complejidad." }
                  ]
                  },
                  {
                    "titulo": "Ética, bioética y humanización del cuidado.",
                    "hijos": [
                      { "titulo": "Respeto por la autonomía, confidencialidad y decisiones del adulto." },
                      { "titulo": "Dilemas éticos en la práctica en el adulto." },
                      { "titulo": "Cuidado humanizado y comunicación terapéutica." }
                  ]
                  },
              ]
              },
              {
                "titulo": "Cuidados paliativos y al final de la vida",
                "hijos": [
                  { "titulo": "Principios y fundamentos de los cuidados paliativos" },
                  { "titulo": "Manejo del dolor y síntomas en cuidados paliativos" },
                  { "titulo": "Acompañamiento, apoyo emocional y espiritual al paciente y su familia" },
                  { "titulo": "Ética y toma de decisiones al final de la vida" },
                  { "titulo": "Comunicación terapéutica en cuidados paliativos" },
                  { "titulo": "Políticas Públicas Ley Consuelo Devís Saavedra. Ley 1733 de 2014 y Voluntad Anticipada Resolución 2665 de 2018." },
                  { "titulo": "Cuidar a quien Cuida. Programas de Apoyo." }
                ]
              },
              {
                "titulo": "Salud del niño y el adolescente",
                "hijos": [
                  { "titulo": "Crecimiento y desarrollo del niño y niña" },
                  { "titulo": "Enfermedades prevalentes de la infancia (AIEPI)" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña de 0 a 36 meses" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña en edad preescolar/escolar" },
                  { "titulo": "Cuidado de enfermería al niño y niña en el programa de inmunizaciones (PAI)" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente en el ámbito hosítalario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones gastrointestinales" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones del sistema urinario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones respiratorias" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con enfermedades crónicas" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con urgencias pediátricas" }
                ]
              }
            ]
          },          
        ]
      },
      {
       "titulo": "Enfermería de profundización",
        "hijos": [
          { 
           "titulo": "Cuidado crítico y urgencias",
            "hijos": [
              { "titulo": "Manejo del triage en servicios de urgencias." },
              { "titulo": "Soporte vital básico y avanzado en adultos y pediatría." },
              { "titulo": "Cuidado de vías aéreas y ventilación mecánica." },
              { "titulo": "Monitoreo hemodinámico invasivo y no invasivo y soporte circulatorio." },
              { "titulo": "Farmacología de alto riesgo: manejo de vasopresores, inotrópicos, sedantes y analgésicos." }
              ]
          },
          {
           "titulo": "Salud pública y epidemiología",
            "hijos": [
              { "titulo": "Vigilancia epidemiológica: reporte de eventos de interés en salud pública." },
              { "titulo": "Investigación de brotes." },
              { "titulo": "Diseño y gestión de programas de promoción de la salud." }
              ]              
          },
          {
           "titulo": "Administración, gestión y liderazgo en enfermería",
            "hijos": [
              { "titulo": "Liderazgo y gestión de equipos de enfermería." },
              { "titulo": "Gestión de la calidad y seguridad del paciente." },
              { "titulo": "Planificación y organización estratégica del cuidado de enfermería." },
              { "titulo": "Gestión de recursos humanos, materiales y financieros en enfermería." },
              { "titulo": "Gestión de proyectos en salud." },
              { "titulo": "Desarrollo de políticas de salud." }
              ]
          },
          {
           "titulo": "Enfermería en Salud Mental y psiquiatría",
            "hijos": [
              { "titulo": "Instrumentos de valoración del estado mental." },
              { "titulo": "Cuidado al paciente con trastornos del ánimo (depresión, bipolaridad), ansiedad y psicosis." },
              { "titulo": "Manejo de la crisis psiquiátrica y prevención del suicidio." },
              { "titulo": "Diseño y gestión de programas de promoción de la salud mental." }
              ]
          },
          {
           "titulo": "Cuidado paliativo y al final de la vida",
            "hijos": [
              { "titulo": "Principios del cuidado paliativo." },
              { "titulo": "Manejo del dolor y otros síntomas en pacientes terminales." },
              { "titulo": "Apoyo emocional y espiritual al paciente y la familia." },
              { "titulo": "Aspectos éticos y legales al final de la vida." }
              ]
          },
          {
           "titulo": "Enfermería en Salud Ocupacional",
            "hijos": [
              { "titulo": "Evaluación de riesgos laborales." },
              { "titulo": "Programas de promoción de la salud en el trabajo." },
              { "titulo": "Manejo de accidentes laborales y enfermedades profesionales." },
              { "titulo": "Legislación en salud ocupacional." }
            ]
          }
        ]
      }
    ]
  },
  { titulo: "Elementos de competencia",
    hijos: [
      {
    titulo: "8.1 Diseñar plan de trabajo seguro y de sostenibilidad ambiental en su área de desempeño profesional teniendo en cuenta las necesidades y recursos de su contexto.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "8.1.1 La identificación de necesidades de sostenibilidad ambiental en su área de desempeño está acorde con marco normativo, políticas, guías y lineamientos técnicos ambientales." },
          { "titulo": "8.1.2 La programación de actividades en la elaboración del plan de trabajo seguro y de sostenibilidad ambiental con el equipo de trabajo interprofesional profesional y administrativo está acorde con metodología de planeación participativa." },
          { "titulo": "8.1.3 La estructuración de plan de trabajo seguro y de sostenibilidad ambiental en su área de desempeño profesional está acorde con marco normativo, políticas, guías y lineamientos técnicos ambientales." },
          { "titulo": "8.1.4 La proyección de los recursos necesarios en el mejoramiento de la seguridad y bienestar en el trabajo corresponde con plan de trabajo seguro y de sostenibilidad ambiental en su área de desempeño profesional." }
          ],
        },
      ]
      },
      {
    titulo: "8.2 Aplicar las indicaciones del plan de trabajo seguro y de sostenibilidad ambiental diseñado de acuerdo con las políticas institucionales y/o ambientales y/o de salud y seguridad en el trabajo.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "8.2.1 El direccionamiento al equipo de trabajo en la implementación del plan de trabajo seguro y de sostenibilidad ambiental diseñado esta acorde con  objetivos, metas e indicadores establecidos en el plan." },
          { "titulo": "8.2.2 La gestión de recursos necesarios en el mejoramiento de la seguridad y bienestar en el trabajo cumple con políticas institucionales y/o ambientales y/o de salud y seguridad en el trabajo." },
          { "titulo": "8.2.3 La participación en las actividades y tareas que permita la puesta en marcha del plan de trabajo seguro y de sostenibilidad ambiental está acorde con políticas institucionales y/o ambientales y/o de salud y seguridad en el trabajo." },
          { "titulo": "8.2.4 La participación en el mantenimiento de ambientes de trabajo seguros y saludables para el/la enfermera(o) y los demás trabajadores del equipo sanitario corresponde con políticas institucionales y/o ambientales y/o de salud y seguridad en el trabajo." }          ],
        },
      ]
      },
      {
    titulo: "8.3 Motivar al equipo interprofesional, la persona, la familia y la comunidad sobre las necesidades, normas y puesta en marcha del plan de trabajo seguro y de sostenibilidad ambiental según el contexto y condiciones del área de su desempeño.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "8.3.1 La dilvulgación de normas, estatutos y plan de acción del plan de trabajo seguro y de sostenibilidad ambiental está acorde con contexto y condiciones del área de su desempeño." },
          { "titulo": "8.3.2 La organización de reuniones que permitan conocer los avances del plan y los resultados obtenidos en el área de influencia determinada cumple con periodicidad y objetivos del plan de trabajo seguro y de sostenibilidad ambiental en su área de desempeño profesional." },
          { "titulo": "8.3.3 La información a superiores de los resultados de las acciones y ajustes pertinentes necesarios en las condiciones laborales del personal corresponde con políticas institucionales." }
          ],
        },
      ]
      }
    ]
  },      
  { titulo: "Resultados de aprendizaje",
      "hijos": [
          { "titulo": "RA1. Construir planes de trabajo seguro y sostenible  teniendo en cuenta las  necesidades del contexto." },
          { "titulo": "RA2. Proponer planes de trabajo sostenibles al equipo interdisciplinario de acuerdo con política institucional de seguridad y salud en trabajo." },
          { "titulo": "RA3. Establecer criterios de selección de los mejores planes de trabajo de enfermería de acuerdo con necesidades, normas y puesta en marcha de sostenibilidad ambiental y profesional en el área de la salud."},
          { "titulo": "RA4. Evaluar el impacto del nivel de protección de los planes de trabajo seguros y sostenible de acuerdo con normatividad, recursos disponibles y participación comunitaria."}
        ],
      },
    ]
  },
  {
    "titulo": "COMPETENCIA 9: ",
    "descripcion": "Cooperar en la construcción de políticas, planes, programas y proyectos de acuerdo con las necesidades del ejercicio del profesional de enfermería y de las condiciones de salud de la población. DOMINIO:Gobernanza y autonomía de práctica en enfermeria.",
    elementos: [
      { titulo: "Contenidos",
      hijos: [
      {
        "titulo": "Núcleo disciplinar profesional: Enfermería",
        "hijos": [
          {
            "titulo": "Enfermería Básica",
            "hijos": [
              {
                "titulo": "Epistemología, historia, modelos y teorías de enfermería",
                "hijos": [
                  { "titulo": "Historia del cuidado y de enfermería" },
                  { "titulo": "Visiones del mundo (Empirista, Interpretativo, Socio-crítico)" },
                  { "titulo": "Metaparadigma de enfermería" },
                  { "titulo": "Sistema conceptual teórico empírico" },
                  { "titulo": "Generalidades modelos y teorías de enfermería" },
                  { "titulo": "Patrones de conocimiento " }
                ]
              },
              {
                "titulo": "Proceso de atención de enfermería (PAE)",
                "hijos": [
                  { "titulo": "Valoración de enfermería" },
                  { "titulo": "Diagnóstico de enfermería" },
                  { "titulo": "Planificación de cuidados" },
                  { "titulo": "Intervenciones de enfermería" },
                  { "titulo": "Evaluación de resultados" },
                  { "titulo": "Registros en enfermería" }
              ]
              },
              {
                "titulo": "Procedimientos y técnicas básicas de enfermería",
                "hijos": [
                  { "titulo": "Toma e interpretación de signos vitales" },
                  { "titulo": "Técnicas asépticas y de bioseguridad" },
                  { "titulo": "Administración segura de medicamentos" },
                  { "titulo": "Oxigenoterapia" },
                  { "titulo": "Cuidados de heridas y ostomías" },
                  { "titulo": "Accesos venosos periféricos" },
                  { "titulo": "Cateterismo urinario"}, 
                  { "titulo": "Toma de muestras para laboratorio" },
                  { "titulo": "Sonda nasogátrica" },
                  { "titulo": "Cuidados básicos (Higiene y confort, Movilización)" }
                  ]
              },              
            ]
          },
          {
            "titulo": "Enfermería específica",
            "hijos": [
              { 
                "titulo": "Salud materno perinatal y salud sexual y reproductiva",
                "hijos": [
                  {
                    "titulo": "Cuidado de Enfermería en salud sexual y reproductiva  a la  persona, pareja y familia",
                  "hijos": [
                      { "titulo": "Panorama de la salud sexual y reproductiva (normatividad)" },
                      { "titulo": "Vigilancia epidemiológica en la salud sexual y reproductiva" },
                      { "titulo": "Métodos anticonceptivos , consejería en salud sexual y reproductiva" },
                      { "titulo": "Educación para la Salud sexual y Reproductiva, servicios amigables para jóvenes y adolescentes" },
                      { "titulo": "Prevención de Infecciones de transmisión sexual" },
                      { "titulo": "Enfermería en la atención a las principales enfermedades ginecológicas (endometriosis,( SDPM, CACU)" },
                      { "titulo": "Atención preconcepcional" },
                      { "titulo": "Enfermeria en la atención a la persona con climaterio y/o menopausia" },
                  ]
                  },
                  {
                    "titulo": "Cuidado de la persona gestante y su familia.",
                    "hijos": [
                      { "titulo": "Cuidado prenatal: valoración de la gestante, control prenatal, educación sobre signos de alarma, curso de preparación para la maternidad y paternidad." },
                      { "titulo": "Salud mental  perinatal" }
                  ]
                  },
                  {
                    "titulo": "Cuidado de Enfermería a la persona y su familia durante el Trabajo  de Parto, Parto y Puerperio.",
                    "hijos": [
                      { "titulo": "Cuidado de enfermería y humanización  durante el trabajo de parto y parto, monitoria fetal." },
                      { "titulo": "Cuidado del puerperio: inmediato, mediato y tardio" },
                      { "titulo": "Medicamentos de interès obstetrico" },
                      { "titulo": "Cuidado de enfermería  al mujer con morbilidad obstétrica" },
                      { "titulo": "Cuidado de enfermería durante la emergencia obstétrica" },
                      { "titulo": "Lactancia materna y estrategias para su promoción" },
                      { "titulo": "Cuidado inmediato y mediato del recién nacido" },
                      { "titulo": "Cuidado de enfermería a las principales alteraciones en el recièn nacido" }
                  ]
                  },
              ]
              },             
              { 
                "titulo": "Salud del adulto y adulto mayor",
                "hijos": [
                  {
                    "titulo": "Fundamentos conceptuales del curso de vida adulto: determinantes, trayectorias y contexto",
                  "hijos": [
                      { "titulo": "Características biológicas, psicológicas y sociales de la adultez (temprana, media y tardía)." },
                      { "titulo": "Cambios fisiológicos normales del adulto y su implicación en el cuidado." },
                      { "titulo": "Impacto de los determinantes sociales, económicos, culturales, laborales sobre la salud del adulto." },
                      { "titulo": "Rol productivo, familiar y social del adulto." },
                      { "titulo": "Transiciones vitales del adulto (ingreso al trabajo, cambios familiares, roles, envejecimiento temprano.)" },
                      { "titulo": "Transiciones y crisis vitales (laborales, familiares, de salud)." },
                      { "titulo": "Enfoque poblacional, territorial, e intercultural en la salud del adulto." }
                  ]
                  },
                  {
                    "titulo": "Salud del adulto según niveles de atención.",
                    "hijos": [
                      {
                        "titulo": "Atención primaria" ,
                        "hijos": [
                        { "titulo": "Promoción de la salud y prevención de la enfermedad en el adulto." },
                        { "titulo": "Detección temprana de factores de riesgo y enfermedades prevalentes en el adulto." },
                        { "titulo": "Manejo de enfermedades crónicas no transmisibles (ECNT) en el adulto." },
                        { "titulo": "Manejo de enfermedades transmisibles en el adulto." },
                        { "titulo": "Salud mental en el adulto." }
                      ]
                      },                    
                      {
                        "titulo": "Atención secundaria" ,
                        "hijos": [
                        { "titulo": "Cuidado del adulto con enfermedades crónicas no transmisibles prevalentes" },
                        { "titulo": "Acompañamiento al paciente y familia en procesos de hospitalización, cirugía o rehabilitación." },
                        { "titulo": "Procedimientos básicos y avanzados o invasivos en enfermería." },
                        { "titulo": "Cuidado hospitalario, ambulatorio y comunitario del adulto enfermo." },
                        { "titulo": "Salud mental del adulto: depresión, ansiedad, estrés laboral, consumo, aislamiento." },
                        { "titulo": "Salud laboral, riesgos ocupacionales, ergonomía, cuidado en ambientes de trabajo." },
                        { "titulo": "Participación comunitaria, redes de apoyo, cuidado intergeneracional." },
                        { "titulo": "Uso de tecnologías, telemonitorización, seguimiento domiciliario." }
                      ]
                      },
                      {
                        "titulo": "Atención terciaria" ,
                        "hijos": [
                        { "titulo": "Cuidado especializado, rehabilitación, cuidados de alta complejidad, seguridad del paciente, prevención de complicaciones en el adulto." },
                        { "titulo": "Cuidado médico-quirúrgico: manejo preoperatorio y postoperatorio." },
                        { "titulo": "Planes de cuidado personalizados según diagnóstico y educación en cuidados domiciliarios posthospitalarios." },
                        { "titulo": "Estrategias para la educación del adulto y su familia: autocuidado, adherencia terapéutica, empoderamiento." },
                        { "titulo": "Rehabilitación funcional, manejo de la dependencia, redes de soporte." },
                        { "titulo": "Coordinación interprofesional e interdisciplinaria del cuidado del adulto frágil o con discapacidad." },
                        { "titulo": "Humanización, calidad del cuidado y gestión del servicio para el adulto, comunicación terapéutica, respeto al paciente adulto, familia y cuidadores." },
                        { "titulo": "Seguridad del paciente adulto, gestión de riesgos, calidad y mejora continua del servicio." },
                        { "titulo": "Liderazgo del profesional de enfermería en el cuidado del adulto: gestión, dirección, innovación, investigación." }
                      ]
                      }
                    ]
                  },
                  {
                    "titulo": "Fenómenos de salud frecuentes en el adulto.",
                    "hijos": [
                      { "titulo": "Valoración y manejo de enfermedades cardiovasculares, metabólicas, respiratorias, musculoesqueléticas y mentales." },
                      { "titulo": "Dolor crónico y agudo." },
                      { "titulo": "Estrés, ansiedad, depresión y afrontamiento." },
                      { "titulo": "Sexualidad, fertilidad y salud ocupacional." },
                      { "titulo": "Autonomía, dependencia y discapacidad." }
                  ]
                  },
                  {
                    "titulo": "Enfoque familiar y comunitario.",
                    "hijos": [
                      { "titulo": "Ciclo vital familiar y su relación con el cuidado del adulto." },
                      { "titulo": "Familia como sistema de apoyo y red cuidadora." },
                      { "titulo": "Estrategias de educación en salud y autocuidado familiar." },
                      { "titulo": "Intervención comunitaria y redes de apoyo." },
                      { "titulo": "Identificación de necesidades de salud del adulto en la comunidad." },
                      { "titulo": "Diseño e implementación de proyectos de promoción y prevención." },
                      { "titulo": "Coordinación con redes institucionales y comunitarias." },
                      { "titulo": "Referencia y contrarreferencia según nivel de complejidad." }
                  ]
                  },
                  {
                    "titulo": "Ética, bioética y humanización del cuidado.",
                    "hijos": [
                      { "titulo": "Respeto por la autonomía, confidencialidad y decisiones del adulto." },
                      { "titulo": "Dilemas éticos en la práctica en el adulto." },
                      { "titulo": "Cuidado humanizado y comunicación terapéutica." }
                  ]
                  },
              ]
              },
              {
                "titulo": "Cuidados paliativos y al final de la vida",
                "hijos": [
                  { "titulo": "Principios y fundamentos de los cuidados paliativos" },
                  { "titulo": "Manejo del dolor y síntomas en cuidados paliativos" },
                  { "titulo": "Acompañamiento, apoyo emocional y espiritual al paciente y su familia" },
                  { "titulo": "Ética y toma de decisiones al final de la vida" },
                  { "titulo": "Comunicación terapéutica en cuidados paliativos" },
                  { "titulo": "Políticas Públicas Ley Consuelo Devís Saavedra. Ley 1733 de 2014 y Voluntad Anticipada Resolución 2665 de 2018." },
                  { "titulo": "Cuidar a quien Cuida. Programas de Apoyo." }
                ]
              },
              {
                "titulo": "Salud del niño y el adolescente",
                "hijos": [
                  { "titulo": "Crecimiento y desarrollo del niño y niña" },
                  { "titulo": "Enfermedades prevalentes de la infancia (AIEPI)" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña de 0 a 36 meses" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña en edad preescolar/escolar" },
                  { "titulo": "Cuidado de enfermería al niño y niña en el programa de inmunizaciones (PAI)" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente en el ámbito hosítalario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones gastrointestinales" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones del sistema urinario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones respiratorias" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con enfermedades crónicas" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con urgencias pediátricas" }
                ]
              }
            ]
          },          
        ]
      },
      {
       "titulo": "Enfermería de profundización",
        "hijos": [
          { 
           "titulo": "Cuidado crítico y urgencias",
            "hijos": [
              { "titulo": "Manejo del triage en servicios de urgencias." },
              { "titulo": "Soporte vital básico y avanzado en adultos y pediatría." },
              { "titulo": "Cuidado de vías aéreas y ventilación mecánica." },
              { "titulo": "Monitoreo hemodinámico invasivo y no invasivo y soporte circulatorio." },
              { "titulo": "Farmacología de alto riesgo: manejo de vasopresores, inotrópicos, sedantes y analgésicos." }
              ]
          },
          {
           "titulo": "Salud pública y epidemiología",
            "hijos": [
              { "titulo": "Vigilancia epidemiológica: reporte de eventos de interés en salud pública." },
              { "titulo": "Investigación de brotes." },
              { "titulo": "Diseño y gestión de programas de promoción de la salud." }
              ]              
          },
          {
           "titulo": "Administración, gestión y liderazgo en enfermería",
            "hijos": [
              { "titulo": "Liderazgo y gestión de equipos de enfermería." },
              { "titulo": "Gestión de la calidad y seguridad del paciente." },
              { "titulo": "Planificación y organización estratégica del cuidado de enfermería." },
              { "titulo": "Gestión de recursos humanos, materiales y financieros en enfermería." },
              { "titulo": "Gestión de proyectos en salud." },
              { "titulo": "Desarrollo de políticas de salud." }
              ]
          },
          {
           "titulo": "Enfermería en Salud Mental y psiquiatría",
            "hijos": [
              { "titulo": "Instrumentos de valoración del estado mental." },
              { "titulo": "Cuidado al paciente con trastornos del ánimo (depresión, bipolaridad), ansiedad y psicosis." },
              { "titulo": "Manejo de la crisis psiquiátrica y prevención del suicidio." },
              { "titulo": "Diseño y gestión de programas de promoción de la salud mental." }
              ]
          },
          {
           "titulo": "Cuidado paliativo y al final de la vida",
            "hijos": [
              { "titulo": "Principios del cuidado paliativo." },
              { "titulo": "Manejo del dolor y otros síntomas en pacientes terminales." },
              { "titulo": "Apoyo emocional y espiritual al paciente y la familia." },
              { "titulo": "Aspectos éticos y legales al final de la vida." }
              ]
          },
          {
           "titulo": "Enfermería en Salud Ocupacional",
            "hijos": [
              { "titulo": "Evaluación de riesgos laborales." },
              { "titulo": "Programas de promoción de la salud en el trabajo." },
              { "titulo": "Manejo de accidentes laborales y enfermedades profesionales." },
              { "titulo": "Legislación en salud ocupacional." }
            ]
          }
        ]
      }
    ]
  },
  { titulo: "Elementos de competencia",
    hijos: [
      {
    titulo: "9.1 Encaminar la participación del equipo de enfermería ante las directivas y entes decisorios teniendo en cuenta las necesidades, propuestas, desarrollos profesionales, políticas vigentes y programas.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "9.1.1 La dirección de departamentos de enfermería o de la estructura que haga sus veces y hace parte de la plataforma estratégica institucional corresponde con misionalidad y estrategia institucional." },
          { "titulo": "9.1.2 La organización de grupos de trabajo interprofesional en la respuesta a las necesidades de salud reales de las personas, familias y comunidades corresponde con necesidades, propuestas y desarrollos profesionales." },
          { "titulo": "9.1.3 La elaboración de guia de discusiones y propuestas alrededor de las necesidades prioritarias de salud de las personas, famillias y comunidad que representa cumple con protocolos, políticas vigentes y programas." }
          ],
        },
      ]
      },
      {
    titulo: "9.2 Intervenir en el diseño de políticas, planes y programas teniendo en cuenta las necesidades de salud de la población del área de influencia.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "9.2.1 La participación en la elaboración de planes y programas de salud corresponde con necesidades prioritarias de las diversas poblaciones." },
          { "titulo": "9.2.2 La concertación de planes y programas de salud prioritarios en las comunidades que representa, con los niveles directivos está acorde con necesidades de salud de la población." },
          { "titulo": "9.2.3 La información de nuevas políticas, planes y programas al talento humano a cago está acorde con las necesidades de salud de la población del area de influencia." }
        ],
        },
      ]
      },
      {
    titulo: "9.3 Difundir información de acceso a planes y programas a las poblaciones de su área de influencia de acuerdo con plan de prevención, promoción y atención en salud.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "9.3.1 La divulgación de servicios y programas de salud que mejoren el acceso a las comunidades con el apoyo del equipo a su cargo y el uso de medios masivos de comunicación corresponde con política institucional y plan de prevención, promoción y atención en salud." },
          { "titulo": "9.3.2 La delegación de actividades de difusión, captación y seguimiento del acceso a los programas por parte de la poblaciónde su área de influencia, al equipo a su cargo está acorde con política institucional y plan de prevención, promoción y atención en salud." },
          { "titulo": "9.3.3 La promoción de los diversos servicios disponibles a personas, familias y comunidades que beneficien sus condiciones de salud está acorde con política institucional y plan de prevención, promoción y atención en salud." }
          ],
        },
      ]
      },      
    ]
  },      
  { titulo: "Resultados de aprendizaje",
      "hijos": [
          { "titulo": "RA1. Argumentar la construcción de propuestas, programas, y desarrollos profesionales según la política institucional y las necesidades de la disciplina y las condiciones de la población." },
          { "titulo": "RA2. Participar ante las directivas y entes decisorios teniendo en cuenta la política institucional, política del talento humano de enfermería y de salud vigente." },
          { "titulo": "RA3. Defender propuestas de programas de desarrollo de profesionales ante los entes gubernamentales y administrativos de acuerdo con políticas de salud vigentes."},
          { "titulo": "RA4. Dirigir la implementación de planes propuestos y programas de salud en las poblaciones de su área de influencia según recursos disponibles y políticas vigentes."}
        ],
      },
    ]
  },
  {
    "titulo": "COMPETENCIA 10: ",
    "descripcion": "Interactuar en la planificación, implementación y evaluación de la atención en la salud con el equipo interprofesional teniendo en cuenta los aportes de las diferentes profesiones y normas de identificación, seguimiento, control y notificación de eventos de interés de salud pública. DOMINIO:Gobernanza y autonomía de práctica en enfermeria..",
    elementos: [
      { titulo: "Contenidos",
      hijos: [
      {
        "titulo": "Núcleo disciplinar profesional: Enfermería",
        "hijos": [
          {
            "titulo": "Enfermería Básica",
            "hijos": [
              {
                "titulo": "Epistemología, historia, modelos y teorías de enfermería",
                "hijos": [
                  { "titulo": "Historia del cuidado y de enfermería" },
                  { "titulo": "Visiones del mundo (Empirista, Interpretativo, Socio-crítico)" },
                  { "titulo": "Metaparadigma de enfermería" },
                  { "titulo": "Sistema conceptual teórico empírico" },
                  { "titulo": "Generalidades modelos y teorías de enfermería" },
                  { "titulo": "Patrones de conocimiento " }
                ]
              },
              {
                "titulo": "Proceso de atención de enfermería (PAE)",
                "hijos": [
                  { "titulo": "Valoración de enfermería" },
                  { "titulo": "Diagnóstico de enfermería" },
                  { "titulo": "Planificación de cuidados" },
                  { "titulo": "Intervenciones de enfermería" },
                  { "titulo": "Evaluación de resultados" },
                  { "titulo": "Registros en enfermería" }
              ]
              },
              {
                "titulo": "Procedimientos y técnicas básicas de enfermería",
                "hijos": [
                  { "titulo": "Toma e interpretación de signos vitales" },
                  { "titulo": "Técnicas asépticas y de bioseguridad" },
                  { "titulo": "Administración segura de medicamentos" },
                  { "titulo": "Oxigenoterapia" },
                  { "titulo": "Cuidados de heridas y ostomías" },
                  { "titulo": "Accesos venosos periféricos" },
                  { "titulo": "Cateterismo urinario"}, 
                  { "titulo": "Toma de muestras para laboratorio" },
                  { "titulo": "Sonda nasogátrica" },
                  { "titulo": "Cuidados básicos (Higiene y confort, Movilización)" }
                  ]
              },              
            ]
          },
          {
            "titulo": "Enfermería específica",
            "hijos": [
              { 
                "titulo": "Salud materno perinatal y salud sexual y reproductiva",
                "hijos": [
                  {
                    "titulo": "Cuidado de Enfermería en salud sexual y reproductiva  a la  persona, pareja y familia",
                  "hijos": [
                      { "titulo": "Panorama de la salud sexual y reproductiva (normatividad)" },
                      { "titulo": "Vigilancia epidemiológica en la salud sexual y reproductiva" },
                      { "titulo": "Métodos anticonceptivos , consejería en salud sexual y reproductiva" },
                      { "titulo": "Educación para la Salud sexual y Reproductiva, servicios amigables para jóvenes y adolescentes" },
                      { "titulo": "Prevención de Infecciones de transmisión sexual" },
                      { "titulo": "Enfermería en la atención a las principales enfermedades ginecológicas (endometriosis,( SDPM, CACU)" },
                      { "titulo": "Atención preconcepcional" },
                      { "titulo": "Enfermeria en la atención a la persona con climaterio y/o menopausia" },
                  ]
                  },
                  {
                    "titulo": "Cuidado de la persona gestante y su familia.",
                    "hijos": [
                      { "titulo": "Cuidado prenatal: valoración de la gestante, control prenatal, educación sobre signos de alarma, curso de preparación para la maternidad y paternidad." },
                      { "titulo": "Salud mental  perinatal" }
                  ]
                  },
                  {
                    "titulo": "Cuidado de Enfermería a la persona y su familia durante el Trabajo  de Parto, Parto y Puerperio.",
                    "hijos": [
                      { "titulo": "Cuidado de enfermería y humanización  durante el trabajo de parto y parto, monitoria fetal." },
                      { "titulo": "Cuidado del puerperio: inmediato, mediato y tardio" },
                      { "titulo": "Medicamentos de interès obstetrico" },
                      { "titulo": "Cuidado de enfermería  al mujer con morbilidad obstétrica" },
                      { "titulo": "Cuidado de enfermería durante la emergencia obstétrica" },
                      { "titulo": "Lactancia materna y estrategias para su promoción" },
                      { "titulo": "Cuidado inmediato y mediato del recién nacido" },
                      { "titulo": "Cuidado de enfermería a las principales alteraciones en el recièn nacido" }
                  ]
                  },
              ]
              },             
              { 
                "titulo": "Salud del adulto y adulto mayor",
                "hijos": [
                  {
                    "titulo": "Fundamentos conceptuales del curso de vida adulto: determinantes, trayectorias y contexto",
                  "hijos": [
                      { "titulo": "Características biológicas, psicológicas y sociales de la adultez (temprana, media y tardía)." },
                      { "titulo": "Cambios fisiológicos normales del adulto y su implicación en el cuidado." },
                      { "titulo": "Impacto de los determinantes sociales, económicos, culturales, laborales sobre la salud del adulto." },
                      { "titulo": "Rol productivo, familiar y social del adulto." },
                      { "titulo": "Transiciones vitales del adulto (ingreso al trabajo, cambios familiares, roles, envejecimiento temprano.)" },
                      { "titulo": "Transiciones y crisis vitales (laborales, familiares, de salud)." },
                      { "titulo": "Enfoque poblacional, territorial, e intercultural en la salud del adulto." }
                  ]
                  },
                  {
                    "titulo": "Salud del adulto según niveles de atención.",
                    "hijos": [
                      {
                        "titulo": "Atención primaria" ,
                        "hijos": [
                        { "titulo": "Promoción de la salud y prevención de la enfermedad en el adulto." },
                        { "titulo": "Detección temprana de factores de riesgo y enfermedades prevalentes en el adulto." },
                        { "titulo": "Manejo de enfermedades crónicas no transmisibles (ECNT) en el adulto." },
                        { "titulo": "Manejo de enfermedades transmisibles en el adulto." },
                        { "titulo": "Salud mental en el adulto." }
                      ]
                      },                    
                      {
                        "titulo": "Atención secundaria" ,
                        "hijos": [
                        { "titulo": "Cuidado del adulto con enfermedades crónicas no transmisibles prevalentes" },
                        { "titulo": "Acompañamiento al paciente y familia en procesos de hospitalización, cirugía o rehabilitación." },
                        { "titulo": "Procedimientos básicos y avanzados o invasivos en enfermería." },
                        { "titulo": "Cuidado hospitalario, ambulatorio y comunitario del adulto enfermo." },
                        { "titulo": "Salud mental del adulto: depresión, ansiedad, estrés laboral, consumo, aislamiento." },
                        { "titulo": "Salud laboral, riesgos ocupacionales, ergonomía, cuidado en ambientes de trabajo." },
                        { "titulo": "Participación comunitaria, redes de apoyo, cuidado intergeneracional." },
                        { "titulo": "Uso de tecnologías, telemonitorización, seguimiento domiciliario." }
                      ]
                      },
                      {
                        "titulo": "Atención terciaria" ,
                        "hijos": [
                        { "titulo": "Cuidado especializado, rehabilitación, cuidados de alta complejidad, seguridad del paciente, prevención de complicaciones en el adulto." },
                        { "titulo": "Cuidado médico-quirúrgico: manejo preoperatorio y postoperatorio." },
                        { "titulo": "Planes de cuidado personalizados según diagnóstico y educación en cuidados domiciliarios posthospitalarios." },
                        { "titulo": "Estrategias para la educación del adulto y su familia: autocuidado, adherencia terapéutica, empoderamiento." },
                        { "titulo": "Rehabilitación funcional, manejo de la dependencia, redes de soporte." },
                        { "titulo": "Coordinación interprofesional e interdisciplinaria del cuidado del adulto frágil o con discapacidad." },
                        { "titulo": "Humanización, calidad del cuidado y gestión del servicio para el adulto, comunicación terapéutica, respeto al paciente adulto, familia y cuidadores." },
                        { "titulo": "Seguridad del paciente adulto, gestión de riesgos, calidad y mejora continua del servicio." },
                        { "titulo": "Liderazgo del profesional de enfermería en el cuidado del adulto: gestión, dirección, innovación, investigación." }
                      ]
                      }
                    ]
                  },
                  {
                    "titulo": "Fenómenos de salud frecuentes en el adulto.",
                    "hijos": [
                      { "titulo": "Valoración y manejo de enfermedades cardiovasculares, metabólicas, respiratorias, musculoesqueléticas y mentales." },
                      { "titulo": "Dolor crónico y agudo." },
                      { "titulo": "Estrés, ansiedad, depresión y afrontamiento." },
                      { "titulo": "Sexualidad, fertilidad y salud ocupacional." },
                      { "titulo": "Autonomía, dependencia y discapacidad." }
                  ]
                  },
                  {
                    "titulo": "Enfoque familiar y comunitario.",
                    "hijos": [
                      { "titulo": "Ciclo vital familiar y su relación con el cuidado del adulto." },
                      { "titulo": "Familia como sistema de apoyo y red cuidadora." },
                      { "titulo": "Estrategias de educación en salud y autocuidado familiar." },
                      { "titulo": "Intervención comunitaria y redes de apoyo." },
                      { "titulo": "Identificación de necesidades de salud del adulto en la comunidad." },
                      { "titulo": "Diseño e implementación de proyectos de promoción y prevención." },
                      { "titulo": "Coordinación con redes institucionales y comunitarias." },
                      { "titulo": "Referencia y contrarreferencia según nivel de complejidad." }
                  ]
                  },
                  {
                    "titulo": "Ética, bioética y humanización del cuidado.",
                    "hijos": [
                      { "titulo": "Respeto por la autonomía, confidencialidad y decisiones del adulto." },
                      { "titulo": "Dilemas éticos en la práctica en el adulto." },
                      { "titulo": "Cuidado humanizado y comunicación terapéutica." }
                  ]
                  },
              ]
              },
              {
                "titulo": "Cuidados paliativos y al final de la vida",
                "hijos": [
                  { "titulo": "Principios y fundamentos de los cuidados paliativos" },
                  { "titulo": "Manejo del dolor y síntomas en cuidados paliativos" },
                  { "titulo": "Acompañamiento, apoyo emocional y espiritual al paciente y su familia" },
                  { "titulo": "Ética y toma de decisiones al final de la vida" },
                  { "titulo": "Comunicación terapéutica en cuidados paliativos" },
                  { "titulo": "Políticas Públicas Ley Consuelo Devís Saavedra. Ley 1733 de 2014 y Voluntad Anticipada Resolución 2665 de 2018." },
                  { "titulo": "Cuidar a quien Cuida. Programas de Apoyo." }
                ]
              },
              {
                "titulo": "Salud del niño y el adolescente",
                "hijos": [
                  { "titulo": "Crecimiento y desarrollo del niño y niña" },
                  { "titulo": "Enfermedades prevalentes de la infancia (AIEPI)" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña de 0 a 36 meses" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña en edad preescolar/escolar" },
                  { "titulo": "Cuidado de enfermería al niño y niña en el programa de inmunizaciones (PAI)" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente en el ámbito hosítalario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones gastrointestinales" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones del sistema urinario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones respiratorias" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con enfermedades crónicas" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con urgencias pediátricas" }
                ]
              }
            ]
          },          
        ]
      },
      {
       "titulo": "Enfermería de profundización",
        "hijos": [
          { 
           "titulo": "Cuidado crítico y urgencias",
            "hijos": [
              { "titulo": "Manejo del triage en servicios de urgencias." },
              { "titulo": "Soporte vital básico y avanzado en adultos y pediatría." },
              { "titulo": "Cuidado de vías aéreas y ventilación mecánica." },
              { "titulo": "Monitoreo hemodinámico invasivo y no invasivo y soporte circulatorio." },
              { "titulo": "Farmacología de alto riesgo: manejo de vasopresores, inotrópicos, sedantes y analgésicos." }
              ]
          },
          {
           "titulo": "Salud pública y epidemiología",
            "hijos": [
              { "titulo": "Vigilancia epidemiológica: reporte de eventos de interés en salud pública." },
              { "titulo": "Investigación de brotes." },
              { "titulo": "Diseño y gestión de programas de promoción de la salud." }
              ]              
          },
          {
           "titulo": "Administración, gestión y liderazgo en enfermería",
            "hijos": [
              { "titulo": "Liderazgo y gestión de equipos de enfermería." },
              { "titulo": "Gestión de la calidad y seguridad del paciente." },
              { "titulo": "Planificación y organización estratégica del cuidado de enfermería." },
              { "titulo": "Gestión de recursos humanos, materiales y financieros en enfermería." },
              { "titulo": "Gestión de proyectos en salud." },
              { "titulo": "Desarrollo de políticas de salud." }
              ]
          },
          {
           "titulo": "Enfermería en Salud Mental y psiquiatría",
            "hijos": [
              { "titulo": "Instrumentos de valoración del estado mental." },
              { "titulo": "Cuidado al paciente con trastornos del ánimo (depresión, bipolaridad), ansiedad y psicosis." },
              { "titulo": "Manejo de la crisis psiquiátrica y prevención del suicidio." },
              { "titulo": "Diseño y gestión de programas de promoción de la salud mental." }
              ]
          },
          {
           "titulo": "Cuidado paliativo y al final de la vida",
            "hijos": [
              { "titulo": "Principios del cuidado paliativo." },
              { "titulo": "Manejo del dolor y otros síntomas en pacientes terminales." },
              { "titulo": "Apoyo emocional y espiritual al paciente y la familia." },
              { "titulo": "Aspectos éticos y legales al final de la vida." }
              ]
          },
          {
           "titulo": "Enfermería en Salud Ocupacional",
            "hijos": [
              { "titulo": "Evaluación de riesgos laborales." },
              { "titulo": "Programas de promoción de la salud en el trabajo." },
              { "titulo": "Manejo de accidentes laborales y enfermedades profesionales." },
              { "titulo": "Legislación en salud ocupacional." }
            ]
          }
        ]
      }
    ]
  },
  { titulo: "Elementos de competencia",
    hijos: [
      {
    titulo: "10.1 Apoyar la identificación interprofesional del diagnóstico de salud de la persona, familia y comunidad teniendo en cuenta conocimientos propios, lineamientos y normatividad asociada a estilo de vida saludable y mejoramiento del medio ambiente institucional y comunitario.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "10.1.1 El aporte de conocimientos propios en la realización del diagnóstico de salud de persona, familia y comunidad está acorde con dinámica de equipo interprofesional, lineamientos y normatividad asociada a estilo de vida saludable y mejoramiento del medio ambiente institucional y comunitario." },
          { "titulo": "10.1.2 La transmisión de información a personas, familias y comunidades relacionada con el diagnóstico de salud cumple con acciones de estilo de vida saludable y mejoramiento del medio ambiente institucional y comunitario." },
          { "titulo": "10.1.3 La identificación interprofesional del diagnóstico de salud de la persona, familia y comunidad corresponde con lineamientos y normatividad asociada a estilo de vida saludable y mejoramiento del medio ambiente institucional y comunitario." }
          ],
        },
      ]
      },
      {
    titulo: "10.2 Cooperar en el análisis de los avances de los planes y programas de salud con los miembros del equipo interprofesional de acuerdo con las necesidades de las personas, familias y comunidades y normas de identificación, seguimiento, control y notificación de eventos de interés de salud pública.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "10.2.1 El seguimiento interprofesional de avances de acciones de intervención de atención en salud de personas, familias y comunidades corresponde con indicadores de los planes y programas de salud." },
          { "titulo": "10.2.2 El análisis interprofesional del avance de planes y programas de atención en salud en personas, familias y comunidades está acorde con metodologías de evaluación y análisis participativo y normas de identificación, seguimiento, control y notificación de eventos de interés de salud pública." },
          { "titulo": "10.2.3 La elaboración de informe interprofesional de los resultados de las acciones de intervención de atención en salud de personas, familias y comunidades cumple con protocolos y normas de identificación, seguimiento, control y notificación de eventos de interés de salud pública." }
        ],
        },
      ]
      },
      {
    titulo: "10.3 Proyectar ajustes en los planes y programas de salud con el equipo interprofesional de acuerdo con periodicidad de los resultados evaluados.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "10.3.1 La implementación interprofesional de la evaluación de planes y programas de salud desarrollados en los diversos contextos donde interactúa el equipo de salud está acorde con periodicidad y aportes de las diferentes profesiones." },
          { "titulo": "10.3.2 La adaptación interprofesional de la atención en salud está acorde con resultados de evaluación periódica interprofesional de los programas y planes diseñados." },
          { "titulo": "10.3.3 El mejoramiento interprofesional del diseño de los planes y programas de salud a las personas, familias y comunidades corresponde con avances tecnológicos, humanos y educativos." }
          ],
        },
      ]
      },
    ]
  },      
  { titulo: "Resultados de aprendizaje",
      "hijos": [
          { "titulo": "RA1. Organizar los análisis y el desarrollo de programas de salud con el equipo interprofesional de acuerdo con la normatividad y control de los eventos de interés de salud pública." },
          { "titulo": "RA2. Analizar los aportes de las diferentes profesiones y normas de identificación, seguimiento y control de acuerdo con las necesidades de las personas, familias y comunidades y periodicidad de los resultados evaluados en los eventos de salud pública." },
          { "titulo": "RA3. Informar los resultados de planes analizados con el equipo interprofesional y las directivas teniendo en cuenta normas de identificación, seguimiento y control de eventos de interés de salud pública."},
          { "titulo": "RA4. Cotejar el impacto de la aplicación de los resultados y avances de los programas de interés de salud púlica teniendo en cuenta el medio ambiente institucional y necesidades de la población."}
        ],
      },
    ]
  },
  {
    "titulo": "COMPETENCIA 11: ",
    "descripcion": "Comunicar el cuidado de enfermería a la persona (paciente, familia y comunidad) y equipo sanitario de acuerdo con situación de salud individual y colectiva, el contexto social, cultural, habilidades y destrezas terapéuticas en la comunicación e interacción en enfermería. DOMINIO: Educacion y comunicacion terapeutica para el cuidado de enfermeria.",
    elementos: [
      { titulo: "Contenidos",
      hijos: [
      {
        "titulo": "Núcleo disciplinar profesional: Enfermería",
        "hijos": [
          {
            "titulo": "Enfermería Básica",
            "hijos": [
              {
                "titulo": "Epistemología, historia, modelos y teorías de enfermería",
                "hijos": [
                  { "titulo": "Historia del cuidado y de enfermería" },
                  { "titulo": "Visiones del mundo (Empirista, Interpretativo, Socio-crítico)" },
                  { "titulo": "Metaparadigma de enfermería" },
                  { "titulo": "Sistema conceptual teórico empírico" },
                  { "titulo": "Generalidades modelos y teorías de enfermería" },
                  { "titulo": "Patrones de conocimiento " }
                ]
              },
              {
                "titulo": "Proceso de atención de enfermería (PAE)",
                "hijos": [
                  { "titulo": "Valoración de enfermería" },
                  { "titulo": "Diagnóstico de enfermería" },
                  { "titulo": "Planificación de cuidados" },
                  { "titulo": "Intervenciones de enfermería" },
                  { "titulo": "Evaluación de resultados" },
                  { "titulo": "Registros en enfermería" }
              ]
              },
              {
                "titulo": "Procedimientos y técnicas básicas de enfermería",
                "hijos": [
                  { "titulo": "Toma e interpretación de signos vitales" },
                  { "titulo": "Técnicas asépticas y de bioseguridad" },
                  { "titulo": "Administración segura de medicamentos" },
                  { "titulo": "Oxigenoterapia" },
                  { "titulo": "Cuidados de heridas y ostomías" },
                  { "titulo": "Accesos venosos periféricos" },
                  { "titulo": "Cateterismo urinario"}, 
                  { "titulo": "Toma de muestras para laboratorio" },
                  { "titulo": "Sonda nasogátrica" },
                  { "titulo": "Cuidados básicos (Higiene y confort, Movilización)" }
                  ]
              },              
            ]
          },
          {
            "titulo": "Enfermería específica",
            "hijos": [
              { 
                "titulo": "Salud materno perinatal y salud sexual y reproductiva",
                "hijos": [
                  {
                    "titulo": "Cuidado de Enfermería en salud sexual y reproductiva  a la  persona, pareja y familia",
                  "hijos": [
                      { "titulo": "Panorama de la salud sexual y reproductiva (normatividad)" },
                      { "titulo": "Vigilancia epidemiológica en la salud sexual y reproductiva" },
                      { "titulo": "Métodos anticonceptivos , consejería en salud sexual y reproductiva" },
                      { "titulo": "Educación para la Salud sexual y Reproductiva, servicios amigables para jóvenes y adolescentes" },
                      { "titulo": "Prevención de Infecciones de transmisión sexual" },
                      { "titulo": "Enfermería en la atención a las principales enfermedades ginecológicas (endometriosis,( SDPM, CACU)" },
                      { "titulo": "Atención preconcepcional" },
                      { "titulo": "Enfermeria en la atención a la persona con climaterio y/o menopausia" },
                  ]
                  },
                  {
                    "titulo": "Cuidado de la persona gestante y su familia.",
                    "hijos": [
                      { "titulo": "Cuidado prenatal: valoración de la gestante, control prenatal, educación sobre signos de alarma, curso de preparación para la maternidad y paternidad." },
                      { "titulo": "Salud mental  perinatal" }
                  ]
                  },
                  {
                    "titulo": "Cuidado de Enfermería a la persona y su familia durante el Trabajo  de Parto, Parto y Puerperio.",
                    "hijos": [
                      { "titulo": "Cuidado de enfermería y humanización  durante el trabajo de parto y parto, monitoria fetal." },
                      { "titulo": "Cuidado del puerperio: inmediato, mediato y tardio" },
                      { "titulo": "Medicamentos de interès obstetrico" },
                      { "titulo": "Cuidado de enfermería  al mujer con morbilidad obstétrica" },
                      { "titulo": "Cuidado de enfermería durante la emergencia obstétrica" },
                      { "titulo": "Lactancia materna y estrategias para su promoción" },
                      { "titulo": "Cuidado inmediato y mediato del recién nacido" },
                      { "titulo": "Cuidado de enfermería a las principales alteraciones en el recièn nacido" }
                  ]
                  },
              ]
              },             
              { 
                "titulo": "Salud del adulto y adulto mayor",
                "hijos": [
                  {
                    "titulo": "Fundamentos conceptuales del curso de vida adulto: determinantes, trayectorias y contexto",
                  "hijos": [
                      { "titulo": "Características biológicas, psicológicas y sociales de la adultez (temprana, media y tardía)." },
                      { "titulo": "Cambios fisiológicos normales del adulto y su implicación en el cuidado." },
                      { "titulo": "Impacto de los determinantes sociales, económicos, culturales, laborales sobre la salud del adulto." },
                      { "titulo": "Rol productivo, familiar y social del adulto." },
                      { "titulo": "Transiciones vitales del adulto (ingreso al trabajo, cambios familiares, roles, envejecimiento temprano.)" },
                      { "titulo": "Transiciones y crisis vitales (laborales, familiares, de salud)." },
                      { "titulo": "Enfoque poblacional, territorial, e intercultural en la salud del adulto." }
                  ]
                  },
                  {
                    "titulo": "Salud del adulto según niveles de atención.",
                    "hijos": [
                      {
                        "titulo": "Atención primaria" ,
                        "hijos": [
                        { "titulo": "Promoción de la salud y prevención de la enfermedad en el adulto." },
                        { "titulo": "Detección temprana de factores de riesgo y enfermedades prevalentes en el adulto." },
                        { "titulo": "Manejo de enfermedades crónicas no transmisibles (ECNT) en el adulto." },
                        { "titulo": "Manejo de enfermedades transmisibles en el adulto." },
                        { "titulo": "Salud mental en el adulto." }
                      ]
                      },                    
                      {
                        "titulo": "Atención secundaria" ,
                        "hijos": [
                        { "titulo": "Cuidado del adulto con enfermedades crónicas no transmisibles prevalentes" },
                        { "titulo": "Acompañamiento al paciente y familia en procesos de hospitalización, cirugía o rehabilitación." },
                        { "titulo": "Procedimientos básicos y avanzados o invasivos en enfermería." },
                        { "titulo": "Cuidado hospitalario, ambulatorio y comunitario del adulto enfermo." },
                        { "titulo": "Salud mental del adulto: depresión, ansiedad, estrés laboral, consumo, aislamiento." },
                        { "titulo": "Salud laboral, riesgos ocupacionales, ergonomía, cuidado en ambientes de trabajo." },
                        { "titulo": "Participación comunitaria, redes de apoyo, cuidado intergeneracional." },
                        { "titulo": "Uso de tecnologías, telemonitorización, seguimiento domiciliario." }
                      ]
                      },
                      {
                        "titulo": "Atención terciaria" ,
                        "hijos": [
                        { "titulo": "Cuidado especializado, rehabilitación, cuidados de alta complejidad, seguridad del paciente, prevención de complicaciones en el adulto." },
                        { "titulo": "Cuidado médico-quirúrgico: manejo preoperatorio y postoperatorio." },
                        { "titulo": "Planes de cuidado personalizados según diagnóstico y educación en cuidados domiciliarios posthospitalarios." },
                        { "titulo": "Estrategias para la educación del adulto y su familia: autocuidado, adherencia terapéutica, empoderamiento." },
                        { "titulo": "Rehabilitación funcional, manejo de la dependencia, redes de soporte." },
                        { "titulo": "Coordinación interprofesional e interdisciplinaria del cuidado del adulto frágil o con discapacidad." },
                        { "titulo": "Humanización, calidad del cuidado y gestión del servicio para el adulto, comunicación terapéutica, respeto al paciente adulto, familia y cuidadores." },
                        { "titulo": "Seguridad del paciente adulto, gestión de riesgos, calidad y mejora continua del servicio." },
                        { "titulo": "Liderazgo del profesional de enfermería en el cuidado del adulto: gestión, dirección, innovación, investigación." }
                      ]
                      }
                    ]
                  },
                  {
                    "titulo": "Fenómenos de salud frecuentes en el adulto.",
                    "hijos": [
                      { "titulo": "Valoración y manejo de enfermedades cardiovasculares, metabólicas, respiratorias, musculoesqueléticas y mentales." },
                      { "titulo": "Dolor crónico y agudo." },
                      { "titulo": "Estrés, ansiedad, depresión y afrontamiento." },
                      { "titulo": "Sexualidad, fertilidad y salud ocupacional." },
                      { "titulo": "Autonomía, dependencia y discapacidad." }
                  ]
                  },
                  {
                    "titulo": "Enfoque familiar y comunitario.",
                    "hijos": [
                      { "titulo": "Ciclo vital familiar y su relación con el cuidado del adulto." },
                      { "titulo": "Familia como sistema de apoyo y red cuidadora." },
                      { "titulo": "Estrategias de educación en salud y autocuidado familiar." },
                      { "titulo": "Intervención comunitaria y redes de apoyo." },
                      { "titulo": "Identificación de necesidades de salud del adulto en la comunidad." },
                      { "titulo": "Diseño e implementación de proyectos de promoción y prevención." },
                      { "titulo": "Coordinación con redes institucionales y comunitarias." },
                      { "titulo": "Referencia y contrarreferencia según nivel de complejidad." }
                  ]
                  },
                  {
                    "titulo": "Ética, bioética y humanización del cuidado.",
                    "hijos": [
                      { "titulo": "Respeto por la autonomía, confidencialidad y decisiones del adulto." },
                      { "titulo": "Dilemas éticos en la práctica en el adulto." },
                      { "titulo": "Cuidado humanizado y comunicación terapéutica." }
                  ]
                  },
              ]
              },
              {
                "titulo": "Cuidados paliativos y al final de la vida",
                "hijos": [
                  { "titulo": "Principios y fundamentos de los cuidados paliativos" },
                  { "titulo": "Manejo del dolor y síntomas en cuidados paliativos" },
                  { "titulo": "Acompañamiento, apoyo emocional y espiritual al paciente y su familia" },
                  { "titulo": "Ética y toma de decisiones al final de la vida" },
                  { "titulo": "Comunicación terapéutica en cuidados paliativos" },
                  { "titulo": "Políticas Públicas Ley Consuelo Devís Saavedra. Ley 1733 de 2014 y Voluntad Anticipada Resolución 2665 de 2018." },
                  { "titulo": "Cuidar a quien Cuida. Programas de Apoyo." }
                ]
              },
              {
                "titulo": "Salud del niño y el adolescente",
                "hijos": [
                  { "titulo": "Crecimiento y desarrollo del niño y niña" },
                  { "titulo": "Enfermedades prevalentes de la infancia (AIEPI)" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña de 0 a 36 meses" },
                  { "titulo": "Crecimiento y desarrollo del el niño y niña en edad preescolar/escolar" },
                  { "titulo": "Cuidado de enfermería al niño y niña en el programa de inmunizaciones (PAI)" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente en el ámbito hosítalario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones gastrointestinales" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones del sistema urinario" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con alteraciones respiratorias" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con enfermedades crónicas" },
                  { "titulo": "Cuidado de enfermería al niño y niña y adolescente con urgencias pediátricas" }
                ]
              }
            ]
          },          
        ]
      },     
    ]
  },
  { titulo: "Elementos de competencia",
    hijos: [
      {
    titulo: "11.1 Mantener una comunicación asertiva, con la persona sujeto de cuidado (paciente, familia y comunidad)  teniendo en cuenta el respeto, la empatía y la interacción humana.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "11.1.1 La comunicación del cuidado de enfermería a la persona (paciente, familia y comunidad) está acorde con el PAE establecido." },
          { "titulo": "11.1.2 La comprensión de la situación de la persona (paciente, familia y comunidad) corresponde con las metas de cuidado, habilidades y destrezas en la comunicación terapéutica." },
          { "titulo": "11.1.3 La interacción con la persona (paciente, familia y comunidad) cumple con las metas de cuidado, habilidades y destrezas en la comunicación terapéutica." }
          ],
        },
      ]
      },
      {
    titulo: "11.2 Adecuar la comunicación y el lenguaje en salud al contexto sociocultural de la persona, familia y comunidad teniendo en cuenta sus valores, creencias y cultura. ",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "11.2.1 El diseño de estrategias de comunicación interpersonales y masivas, está acorde con la población objeto del cuidado de enfermería." },
          { "titulo": "11.2.2 La adaptación del lenguaje y los textos está acorde con el contexto sociocultural de las personas (paciente, familia y comunidad)." },
          { "titulo": "11.2.3 La articulación del lenguaje en doble via entre la personas (paciente, familia y comunidad) y el sistema de salud corresponde con las necesidad de los distintos actores." },
          { "titulo": "11.2.4 La escucha activa de la enfermera a la persona (paciente, familia y comunidad) cumple con el respeto a valores, creencias y cultura" }          ],
        },
      ]
      },
      {
    titulo: "11.3 Propiciar comunicación asertiva, empática y permanente con el equipo sanitario (personal auxiliar, docentes, estudiantes, otros profesionales, personal administrativo, cuidadores y otros) de acuerdo con el contexto social, cultural, habilidades y destrezas terapéuticas en la comunicación.",
      hijos: [
      {
        titulo: "Criterios de desempeño",
        "hijos": [
          { "titulo": "11.3.1 La motivación en el mantenimiento de la comunicación permanente, fluida y respetuosa con la persona, los demás miembros del equipo sanitario, trabajadores de la institución, familias, comunidades, estudiantes y docentes está acorde con protocolos institucionales." },
          { "titulo": "11.3.2 La comunicación calida, cercana y clara con con el equipo sanitario (personal auxiliar, docentes, estudiantes, otros profesionales, personal administrativo, cuidadores y otros) es acorde con las políticas institucionales y los actores en la relación docencia servicio." },
          { "titulo": "11.3.3 La priorización en la comunicación con el interlocutor corresponde con la escucha activa, la atención y el contacto visual permanente." }
          ],
        },
      ]
      },
    ]
  },      
  { titulo: "Resultados de aprendizaje",
      "hijos": [
          { "titulo": "RA1. Proponer canales efectivos de comunicación de acuerdo con situación de salud individual y colectiva." },
          { "titulo": "RA2. Utilizar el lenguaje adecuado en el contexto sociocultural de acuerdo con el respeto a las personas, familias y comunidades y el equipo interprofesional." },
          { "titulo": "RA3. Emplear comunicación asertiva, empática, profesional y permanente con el equipo de salud según políticas institucionales de trato humanizado."},
          { "titulo": "RA4. Mantener las habilidades y destrezas terapéuticas al comunicarse efectivamente con el equipo interprofesional de acuerdo con el contexto laboral y sociocultural."}
        ],
      },
    ]
  },
];