// folios.js - Base de datos completa de certificados INEA (60 Registros)
const baseDatos = {
   
    // --- NUEVOS REGISTROS SIMULADOS (50 ADICIONALES) ---
    "a1b2c3d4-e5f6-47a8-b9c0-1d2e3f4a5b61": { nombre: "ISIDRO SIERRA SALAZAR", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2015-11-15", emision: "2015-11-20", lugar: "MONTERREY, NUEVO LEON", id: "7278262471" },
    "b2c3d4e5-f6a7-48b9-c0d1-2e3f4a5b6c72": { nombre: "KIARA ALIZEE MURILLO MARTINEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "GUADALAJARA, JALISCO", id: "7379262582" },
    "c3d4e5f6-a7b8-49c0-d1e2-3f4a5b6c7d8": { nombre: "EZEQUIEL YAÑEZ HINOJOSA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2016-11-15", emision: "2016-11-20", lugar: "REYNOSA ,TAMAULIPAS", id: "7480262693" },
    "d4e5f6a7-b8c9-40d1-e2f3-4a5b6c7d8e94": { nombre: "JOSE ANTONIO VASQUEZ LOPEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2015-07-08", emision: "2015-07-15", lugar: "SANTIAGO LACHIGUIRI TEHUANTEPEC, OAXACA", id: "7581262804" },
    "e5f6a7b8-c9d0-41e2-f3a4-5b6c7d8e9f05": { nombre: "MARIANO ISMAEL ROSAS SANTIAGO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "GUADALAJARA, JALISCO", id: "7682262915" },
    "f6a7b8c9-d0e1-42f3-a4b5-6c7d8e9f0a16": { nombre: "MARIA DEL REFUGIO SANTIAGO HARO", nivel: "SECUNDARIA", promedio: "8.6", conclusion: "2025-11-17", emision: "2025-11-22", lugar: "GUADALAJARA, JALISCO", id: "7783263026" },
    "a7b8c9d0-e1f2-43a4-b5c6-7d8e9f0a1b2": { nombre: "RICARDO YAÑEZ MARTINEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2024-08-15", emision: "2024-08-20", lugar: "REYNOSA, TAMAULIPAS", id: "7884263137" },
    "b8c9d0e1-f2a3-44b5-c6d7-8e9f0a1b2c": { nombre: "FELIPE  DE JESUS RUIZ SALDAÑA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "COATEPEC, VERACRUZ", id: "7985263248" },
    "c9d0e1f2-a3b4-45c6-d7e8-9f0a1b2c3d49": { nombre: "SALOME GERARDO LOPEZ ESPINO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MATAMOROS,TAMAULIPAS", id: "8086263359" },
    "d0e1f2a3-b4c5-46d7-e8f9-0a1b2c3d4e50": { nombre: "JOSE RAUL RODRIGUEZ ANAYA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "GUADALAJARA, JALISCO", id: "8187263470" },
    "e1f2a3b4-c5d6-47e8-f90a-1b2c3d98767": { nombre: "JOSE ALBERTO CEPEDA MORAN", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NUEVO LEON", id: "8288263581" },
    "f2a3b4c5-d6e7-48f9-0a1b-2c3d4e554328": { nombre: "ANAI RAFAELA MURILLO MARTINEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "GUADALAJARA, JALISCO", id: "8389263692" },
    "a3b4c5d6-e7f8-490a-1b2c-3d4e5f6a7b8": { nombre: "ANA ANGELICA RODRIGUEZ MEJIA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "GUADALAJARA, JALISCO", id: "8490263803" },
    "b4c5d6e7-f890-4a1b-2c3d-4e5f6a7b8c9": { nombre: "LUIS FERNANDO VILLARREAL RODRIGUEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NUEVO LEON", id: "8591263914" },
    "c5d6e7f8-90a1-4b2c-3d4e-5f6a7b8c9d05": { nombre: "JAZMIN HERNANDEZ MANCILLA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "TOLUCA, ESTADO DE MÉXICO", id: "8692264025" },
    "d6e7f890-a1b2-4c3d-4e5f-6a7b8c9d0e": { nombre: "LUIS VAZQUEZ CHAPARRO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2017-08-15", emision: "2017-08-20", lugar: "IZTAPALAPA, CIUDAD DE MEXICO", id: "8793264136" },
    "e7f890a1-b2c3-4d4e-5f6a-7b8c9d0e1f27": { nombre: "CAROLINA BUENROSTRO UREÑA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "GUADALAJARA, JALISCO", id: "8894264247" },
    "f890a1b2-c3d4-4e5f-6a7b-8c9d0e1f2a3": { nombre: "JOSUANY MONTALVO SANTOS", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "BOCA DEL RIO, VERACRUZ", id: "8995264358" },
    "90a1b2c3-d4e5-4f6a-7b8c-9d0e1f2a3b499": { nombre: "PEDRO CONSTANTINO GARCIA", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "COLIMA, COLIMA", id: "9096264469" },
    "0a1b2c3d-4e5f-46a7-b8c9-d0e1f2a3b4c0": { nombre: "SERGIO MONSIVAIS VILLEGAS", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NUEVO LEON", id: "9197264570" },
    "1b2c3d4e-5f6a-47b8-c9d0-e1f2a3b4c5d1": { nombre: "LUIS FERNANDO CEDRO GARCIA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2015-11-15", emision: "2015-11-20", lugar: "ECATEPEC DE MORELOS, ESTADO DE MÉXICO", id: "9298264681" },
    "2c3d4e5f-6a7b-48c9-d0e1-f2a3b4c5d6e": { nombre: "CONSUELO IVONNE MORENO ARGUELLO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2021-11-15", emision: "2021-11-20", lugar: "TUZANTAN DE MORELOS ,CHIAPAS", id: "9399264792" },
    "3d4e5f6a-7b8c-49d0-e1f2-a3b4c5d6e7f": { nombre: "ANA LAURA HUERTA HUERTA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "GUADALAJARA, JALISCO", id: "9410264903" },
    "4e5f6a7b-8c9d-40e1-f2a3-b4c5d6e7f894": { nombre: "ANSELMO SALAZAR TIRADO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2016-11-15", emision: "2016-11-20", lugar: "MAGDALENA CONTRERAS, CIUDAD DE MÉXICO", id: "9511265014" },
    "5f6a7b8c-9d0e-41f2-a3b4-c5d6e7f890a5": { nombre: "LETICIA JUAREZ CRUZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "ECATEPEC DE MORELOS, ESTADO DE MÉXICO", id: "9612265125" },
    "6a7b8c9d-0e1f-42a3-b4c5-d6e7f890a1b6": { nombre: "EMMANUEL GONZALEZ PERALES", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CIENEGA DE FLORES, NUEVO LEÓN", id: "9713265236" },
    "7b8c9d0e-1f2a-43b4-c5d6-e7f890a1b2c7": { nombre: "MIA ELIZABETH FIGUEROA LOZANO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "TECATE,BC", id: "9814265347" },
    "8c9d0e1f-2a3b-44c5-d6e7-f890a1b2c3d8": { nombre: "FREDY RAFAEL DELFIN ABAD", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2023-11-15", emision: "2023-11-20", lugar: "REYNOSA ,TAMAULIPAS", id: "9915265458" },
    "9d0e1f2a-3b4c-45d6-e7f8-90a1b2c3d4e": { nombre: "MARIA ROBLES ARGUETA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2022-11-15", emision: "2022-11-20", lugar: "GUADALAJARA, JALISCO", id: "1016265569" },
    "0e1f2a3b-4c5d-46e7-f890-a1b2c3d4e5f0": { nombre: "LUIS ANGEL GALAVIZ ARREAGA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2022-11-15", emision: "2022-11-20", lugar: "GUADALUPE, NUEVO LEÓN", id: "1117265670" },
    "1f2a3b4c-5d6e-47f8-90a1-b2c3d4e5f6": { nombre: "CARLOS EDUARDO MENDOZA PEREZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2017-11-15", emision: "2017-11-20", lugar: "COACALCO DE BERRIOZÁBAL, ESTADO DE MÉXICO", id: "1218265781" },
    "2a3b4c5d-6e7f-4809-a1b2-c3d4e5f6a7b": { nombre: "WILFRIDO DOMINGUEZ HERNANDEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "TORREÓN, COAHUILA", id: "1319265892" },
    "3b4c5d6e-7f89-490a-1b2c-3d4e5f6a7b83": { nombre: "BRANDON JOAHO MORALES REQUENA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MATAMOROS, TAMAULIPAS", id: "1420266003" },
    "4c5d6e7f-890a-4a1b-2c3d-4e5f6a7b8c94": { nombre: "MARIA DE LOS ANGELES GUTIERREZ TORRES", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NL", id: "1521266114" },
    "5d6e7f89-0a1b-4b2c-3d4e-5f6a7b8c9d05": { nombre: "MA  ESTHER ARAIZA NUÑEZ", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "ELOTA, SINALOA", id: "1622266225" },
    "6d7e8f90-a1b2-4c3d-4e5f-6a7b8c9d0e16": { nombre: "GONZALO VALENCIA GUILLEN", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "COLIMA, COLIMA", id: "1723266336" },
    "7e8f90a1-b2c3-4d4e-5f6a-7b8c9d0e1f2": { nombre: "NERICK NIXUA CERVANTES MEJIA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "GUSTAVO A MADERO, CIUDAD DE MÉXICO", id: "1824266447" },
    "8f90a1b2-c3d4-4e5f-6a7b-8c9d0e1f2a38": { nombre: "JOSE FELIPE FLORES GUILLEN", nivel: "SECUNDARIA", promedio: "8.2", conclusion: "2025-02-08", emision: "2025-03-03", lugar: "APATZINGÁN, MICHOACÁN", id: "1925266558" },
    "90a1b2c3-d4e5-4f6a-7b8c-9d0e1f2a3b49": { nombre: "JESUS PORFIRIO BARRAGAN CABRERA", nivel: "SECUNDARIA", promedio: "7.8", conclusion: "2024-08-23", emision: "2024-08-25", lugar: "COLIMA, COLIMA", id: "2026266669" },
    "a1b2c3d4-4e5f-46a7-b8c9-d0e1f2a3b4c0": { nombre: "LIDIA LOPEZ CARDENAS", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CARDENAS ,TABASCO", id: "2127266770" },
    "b2c3d4e5-5f6a-47b8-c9d0-e1f2a3b4c5d": { nombre: "KARLA SARAY SOLIS HERNANDEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2018-11-15", emision: "2018-11-20", lugar: "TECAMAC, ESTADO DE MEXICO", id: "2228266881" },
    "c3d4e5f6-6a7b-48c9-d0e1-f2a3b4c5d6e": { nombre: "MARCELO RUIZ RAMOS", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2015-08-15", emision: "2015-08-20", lugar: "COLIMA, COLIMA", id: "2329266992" },
    "d4e5f6a7-7b8c-49d0-e1f2-a3b4c5d6e7f": { nombre: "BLANCA ESTELA MENDOZA MENDEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "EL SALTO, JALISCO", id: "2430267103" },
    "e5f6a7b8-8c9d-40e1-f2a3-b4c5d6e7f894": { nombre: "JOSE GUILLERMO CAMPILLO LOPEZ", nivel: "SECUNDARIA", promedio: "8.2", conclusion: "2021-11-15", emision: "2021-11-20", lugar: "TULANCINGO DE BRAVO, HIDALGO", id: "2531267214" },
    "f6a7b8c9-9d0e-41f2-a3b4-c5d6e7f890a5": { nombre: "YURIANA MARISOL VILLELA ACOSTA", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NUEVO LEÓN", id: "2632267325" },
    "6a7b8c9d-1e1f-42a3-b4c5-d6e7f890a1b6": { nombre: "JUAN CARLOS CAVAZOS LEAL", nivel: "PRIMARIA", promedio: "8.6", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NUEVO LEÓN", id: "2733267436" },
    "7b8c9d0e-2f2a-43b4-c5d6-e7f890a1b2c7": { nombre: "VICTOR MANUEL DIAZ", nivel: "PRIMARIA", promedio: "8.2", conclusion: "2026-05-15", emision: "2026-05-25", lugar: "ENSENADA, BC", id: "2834267547" },
    "8c9d0e1f-3a3b-44c5-d6e7-f890a1b2c3d-": { nombre: "ANDRES HERNANDEZ RUIZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NL", id: "2935267658" },
    "9d0e1f2a-4b4c-45d6-e7f8-90a1b2c3d4e9": { nombre: "ISMAEL OSVALDO RUIZ SALDAÑA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2019-11-15", emision: "2019-11-20", lugar: "COATEPEC, VERACRUZ", id: "3036267769" },
    "0e1f2a3b-5c5d-46e7-f890-a1b2c3d4e5f0": { nombre: "ILIANA NAYELI VAZQUEZ SUAREZ", nivel: "SECUNDARIA", promedio: "9.0", conclusion: "2016-11-15", emision: "2016-11-20", lugar: "ZUMPANGO , ESTADO DE MÉXICO", id: "3137267870" },
     // --- SEGUNDA TANDA DE REGISTROS SIMULADOS (50 ADICIONALES) ---
    "f7a1b2c3-d4e5-4a6b-c7d8-e9f0a1b2c3d1": { nombre: "JORGE DE JESUS SANCHEZ RAMOS", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2017-11-15", emision: "2017-11-20", lugar: "PUEBLA, PUEBLA", id: "3238267981" },
    "e6b2c3d4-f5a6-4b7c-d8e9-f0a1b2c3d4e2": { nombre: "LUCERO IVETTE CANO RODRIGUEZ", nivel: "SECUNDARIA", promedio: "8.2", conclusion: "2015-11-15", emision: "2015-11-20", lugar: "CUAUTITLAN IZCALLI, ESTADO DE MEXICO", id: "3339268092" },
    "d5c3d4e5-a6f7-4c8d-e9f0-a1b2c3d4e5f3": { nombre: "MARGARITA MEDINA SANDOVAL", nivel: "SECUNDARIA", promedio: "8.2", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "ZAPOPAN, JALISCO", id: "3440268203" },
    "c4d4e5f6-b7a8-4d9e-f0a1-b2c3d4e5f6a4": { nombre: "RICARDO DANIEL FERNANDEZ MEDINA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "ZAPOPAN, JALISCO", id: "3541268314" },
    "b3e5f6a7-c8b9-4e0f-a1b2-c3d4e5f6a7b5": { nombre: "ISABEL GUADALUPE ESPINOZA CHAPA", nivel: "SECUNDARIA", promedio: "8.2", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "SAN JOSE GARCIA, NUEVO LEÓN", id: "3642268425" },
    "a2f6a7b8-d9c0-4f1a-b2c3-d4e5f6a7b8c6": { nombre: "....", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2026-06-18", emision: "2026-06-28", lugar: "MONTERREY, NL", id: "3743268536" },
    "91a7b8c9-e0d1-4a2b-c3d4-e5f6a7b8c9d7": { nombre: "GLORIA TREVIÑO RUIZ", nivel: "SECUNDARIA", promedio: "9.0", conclusion: "2026-06-20", emision: "2026-06-30", lugar: "MONTERREY, NL", id: "3844268647" },
    "80b8c9d0-f1e2-4b3c-d4e5-f6a7b8c9d0e8": { nombre: "HORACIO VILLALOBOS", nivel: "SECUNDARIA", promedio: "8.7", conclusion: "2026-06-22", emision: "2026-07-02", lugar: "CIUDAD DE MEXICO", id: "3945268758" },
    "79c9d0e1-a2f3-4c4d-e5f6-a7b8c9d0e1f9": { nombre: "ITZEL MANCERA LARA", nivel: "PRIMARIA", promedio: "9.4", conclusion: "2026-06-25", emision: "2026-07-05", lugar: "LEON, GUANAJUATO", id: "4046268869" },
    "68d0e1f2-b3a4-4d5e-f6a7-b8c9d0e1f2a0": { nombre: "JUAN CARLOS BODOQUE", nivel: "SECUNDARIA", promedio: "8.1", conclusion: "2026-06-28", emision: "2026-07-08", lugar: "SANTIAGO, CHIH", id: "4147268970" },
    "57e1f2a3-c4b5-4e6f-a7b8-c9d0e1f2a3b1": { nombre: "KARINA VALDEZ SOSA", nivel: "SECUNDARIA", promedio: "8.6", conclusion: "2026-07-02", emision: "2026-07-12", lugar: "MAZATLAN, SINALOA", id: "4248269081" },
    "46f2a3b4-d5c6-4f7a-b8c9-d0e1f2a3b4c2": { nombre: "LORENA HERRERA DE LA V.", nivel: "PRIMARIA", promedio: "8.3", conclusion: "2026-07-05", emision: "2026-07-15", lugar: "ACAPULCO, GUERRERO", id: "4349269192" },
    "35a3b4c5-e6d7-4a8b-c9d0-e1f2a3b4c5d3": { nombre: "MARIO MORENO REYES", nivel: "SECUNDARIA", promedio: "9.7", conclusion: "2026-07-08", emision: "2026-07-18", lugar: "CDMX", id: "4450269303" },
    "24b4c5d6-f7e8-4b9c-d0e1-f2a3b4c5d6e4": { nombre: "NATALIA LAFOURCADE", nivel: "SECUNDARIA", promedio: "9.2", conclusion: "2026-07-10", emision: "2026-07-20", lugar: "COATEPEC, VER", id: "4551269414" },
    "13c5d6e7-a8f9-4c0a-1b2c-3d4e5f6a7b85": { nombre: "OCTAVIO PAZ LOZANO", nivel: "PRIMARIA", promedio: "9.9", conclusion: "2026-07-12", emision: "2026-07-22", lugar: "MIXCOAC, CDMX", id: "4652269525" },
    "02d6e7f8-b9a0-4d1b-2c3d-4e5f6a7b8c96": { nombre: "PEDRO INFANTE CRUZ", nivel: "SECUNDARIA", promedio: "8.0", conclusion: "2026-07-15", emision: "2026-07-25", lugar: "MAZATLAN, SIN", id: "4753269636" },
    "91e7f890-c0b1-4e2c-3d4e-5f6a7b8c9d07": { nombre: "QUETA JIMENEZ CH.", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2026-07-18", emision: "2026-07-28", lugar: "IRAPUATO, GTO", id: "4854269747" },
    "80f890a1-d1c2-4f3d-4e5f-6a7b8c9d0e18": { nombre: "ROBERTO GOMEZ B.", nivel: "PRIMARIA", promedio: "9.3", conclusion: "2026-07-20", emision: "2026-07-30", lugar: "CDMX", id: "4955269858" },
    "79a90a1b-e2d3-4a4e-5f6a-7b8c9d0e1f29": { nombre: "SILVIA PINAL HIDALGO", nivel: "SECUNDARIA", promedio: "8.8", conclusion: "2026-07-22", emision: "2026-08-01", lugar: "GUAYMAS, SON", id: "5056269969" },
    "68b0b1c2-f3e4-4b5f-6a7b-8c9d0e1f2a30": { nombre: "THALIA SODI MIRANDA", nivel: "SECUNDARIA", promedio: "9.1", conclusion: "2026-07-25", emision: "2026-08-05", lugar: "CIUDAD DE MEXICO", id: "5157270070" },
    "57c1c2d3-a4f5-4c6a-7b8c-9d0e1f2a3b41": { nombre: "USHER RAYMOND IV", nivel: "PRIMARIA", promedio: "8.2", conclusion: "2026-07-28", emision: "2026-08-08", lugar: "MONTERREY, NL", id: "5258270181" },
    "46d2d3e4-b5a6-4d7b-8c9d-0e1f2a3b4c52": { nombre: "VICENTE FERNANDEZ G.", nivel: "SECUNDARIA", promedio: "7.9", conclusion: "2026-07-30", emision: "2026-08-10", lugar: "HUENTITAN, JAL", id: "5359270292" },
    "35e3e4f5-c6b7-4e8c-9d0e-1f2a3b4c5d63": { nombre: "WENCESLAO MOCTEZUMA", nivel: "SECUNDARIA", promedio: "8.4", conclusion: "2026-08-02", emision: "2026-08-12", lugar: "TOLUCA, EDO MEX", id: "5460270403" },
    "24f4f5a6-d7c8-4f9d-0e1f-2a3b4c5d6e74": { nombre: "XAVIER LOPEZ RDZ", nivel: "PRIMARIA", promedio: "9.0", conclusion: "2026-08-05", emision: "2026-08-15", lugar: "CDMX", id: "5561270514" },
    "13a5a6b7-e8d9-4a0e-1f2a-3b4c5d6e7f85": { nombre: "YURI CANSECO VALENZUELA", nivel: "SECUNDARIA", promedio: "8.8", conclusion: "2026-08-08", emision: "2026-08-18", lugar: "VERACRUZ, VER", id: "5662270625" },
    "02b6b7c8-f9a0-4b1f-2a3b-4c5d6e7f8906": { nombre: "ZOE SALDAÑA PEREZ", nivel: "SECUNDARIA", promedio: "9.5", conclusion: "2026-08-10", emision: "2026-08-20", lugar: "PLAYA DEL CARMEN, QROO", id: "5763270736" },
    "91c7c8d9-a0b1-4c2a-3b4c-5d6e7f890a17": { nombre: "ARMANDO MANZANERO", nivel: "PRIMARIA", promedio: "9.8", conclusion: "2026-08-12", emision: "2026-08-22", lugar: "MERIDA, YUCATAN", id: "5864270847" },
    "80d8d9e0-b1c2-4d3b-4c5d-6e7f890a1b28": { nombre: "BELINDA PEREGRIN", nivel: "SECUNDARIA", promedio: "8.6", conclusion: "2026-08-15", emision: "2026-08-25", lugar: "CDMX", id: "5965270958" },
    "79e9e0f1-c2d3-4e4c-5d6e-7f890a1b2c39": { nombre: "CUAUHTEMOC BLANCO", nivel: "SECUNDARIA", promedio: "7.5", conclusion: "2026-08-18", emision: "2026-08-28", lugar: "TEPITO, CDMX", id: "6066271069" },
    "68f0f1a2-d3e4-4f5d-6e7f-890a1b2c3d40": { nombre: "DULCE MARIA ESPINOZA", nivel: "PRIMARIA", promedio: "8.9", conclusion: "2026-08-20", emision: "2026-08-30", lugar: "TLAXCALA, TLAX", id: "6167271170" },
    "57a1a2b3-e4d5-4a6e-7f89-0a1b2c3d4e51": { nombre: "EUGENIO DERBEZ V.", nivel: "SECUNDARIA", promedio: "8.4", conclusion: "2026-08-22", emision: "2026-09-01", lugar: "CIUDAD DE MEXICO", id: "6268271281" },
    "46b2b3c4-f5a6-4b7f-890a-1b2c3d4e5f62": { nombre: "FERNANDO COLUNGA", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2026-08-25", emision: "2026-09-05", lugar: "CDMX", id: "6369271392" },
    "35c3c4d5-a6b7-4c80-a1b2-c3d4e5f6a7b3": { nombre: "GABRIEL SOTO DIAZ", nivel: "PRIMARIA", promedio: "8.0", conclusion: "2026-08-28", emision: "2026-09-08", lugar: "GUADALAJARA, JALISCO", id: "6470271503" },
    "24d4d4e6-b7c8-4d91-b2c3-d4e5f6a7b8c4": { nombre: "HUMBERTO ZURITA", nivel: "SECUNDARIA", promedio: "8.7", conclusion: "2026-08-30", emision: "2026-09-10", lugar: "TORREON, COAHUILA", id: "6571271614" },
    "13e5e5f7-c8d9-4e02-c3d4-e5f6a7b8c9d5": { nombre: "ITATÍ CANTORAL Z.", nivel: "SECUNDARIA", promedio: "9.1", conclusion: "2026-09-02", emision: "2026-09-12", lugar: "CDMX", id: "6672271725" },
    "02f6f6a8-d9e0-4f13-d4e5-f6a7b8c9d0e6": { nombre: "JAIME CAMIL GARZA", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2026-09-05", emision: "2026-09-15", lugar: "MONTERREY, NL", id: "6773271836" },
    "91a7a7b9-e0f1-4a24-e5f6-a7b8c9d0e1f7": { nombre: "KATE DEL CASTILLO", nivel: "SECUNDARIA", promedio: "8.8", conclusion: "2026-09-08", emision: "2026-09-18", lugar: "CIUDAD DE MEXICO", id: "6874271947" },
    "80b8b8c0-f1a2-4b35-f6a7-b8c9d0e1f2a8": { nombre: "LUCERO HOGAZA L.", nivel: "SECUNDARIA", promedio: "9.4", conclusion: "2026-09-10", emision: "2026-09-20", lugar: "CDMX", id: "6975272058" },
    "79c9c9d1-a2b3-4c46-a7b8-c9d0e1f2a3b9": { nombre: "MAITE PERRONI B.", nivel: "PRIMARIA", promedio: "9.0", conclusion: "2026-09-12", emision: "2026-09-22", lugar: "CIUDAD DE MEXICO", id: "7076272169" },
    "68d0d0e2-b3c4-4d57-b8c9-d0e1f2a3b4c0": { nombre: "NINEL CONDE H.", nivel: "SECUNDARIA", promedio: "8.1", conclusion: "2026-09-15", emision: "2026-09-25", lugar: "TOLUCA, EDO MEX", id: "7177272270" },
    "57e1e1f3-c4d5-4e68-c9d0-e1f2a3b4c5d1": { nombre: "OMAR CHAPARRO A.", nivel: "SECUNDARIA", promedio: "8.4", conclusion: "2026-09-18", emision: "2026-09-28", lugar: "CHIHUAHUA, CHIH", id: "7278272381" },
    "46f2f2a4-d5e6-4f79-d0e1-f2a3b4c5d6e2": { nombre: "PEDRO FERNANDEZ", nivel: "PRIMARIA", promedio: "8.2", conclusion: "2026-09-20", emision: "2026-09-30", lugar: "GUADALAJARA, JAL", id: "7379272492" },
    "35a3a3b5-e6f7-4a80-e1f2-a3b4c5d6e7f3": { nombre: "REBECA JONES F.", nivel: "SECUNDARIA", promedio: "9.3", conclusion: "2026-09-22", emision: "2026-10-02", lugar: "CIUDAD DE MEXICO", id: "7480272603" },
    "24b4b4c6-f7a8-4b91-f2a3-b4c5d6e7f894": { nombre: "SEBASTIAN RULLI", nivel: "SECUNDARIA", promedio: "8.6", conclusion: "2026-09-25", emision: "2026-10-05", lugar: "CDMX", id: "7581272714" },
    "13c5c5d7-a8b9-4c02-a3b4-c5d6e7f890a5": { nombre: "TESSA IA GONZALEZ", nivel: "PRIMARIA", promedio: "9.1", conclusion: "2026-09-28", emision: "2026-10-08", lugar: "CDMX", id: "7682272825" },
    "02d6d6e8-b9c0-4d13-b4c5-d6e7f890a1b6": { nombre: "UMBERTO ROSA L.", nivel: "SECUNDARIA", promedio: "8.0", conclusion: "2026-09-30", emision: "2026-10-10", lugar: "PUEBLA, PUE", id: "7783272936" },
    "91e7e7f9-c0d1-4e24-c5d6-e7f890a1b2c7": { nombre: "VADHIR DERBEZ A.", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2026-10-02", emision: "2026-10-12", lugar: "CIUDAD DE MEXICO", id: "7884273047" },
    "80f8f8a0-d1e2-4f35-d6e7-f890a1b2c3d8": { nombre: "WILLIAM LEVY G.", nivel: "PRIMARIA", promedio: "8.2", conclusion: "2026-10-05", emision: "2026-10-15", lugar: "VERACRUZ, VER", id: "7985273158" },
    "79a9a9b1-e2f3-4a46-e7f8-90a1b2c3d4e9": { nombre: "XIMENA SARIÑANA", nivel: "SECUNDARIA", promedio: "9.6", conclusion: "2026-10-08", emision: "2026-10-18", lugar: "CDMX", id: "8086273269" },
    "68b0b0c2-f3a4-4b57-f890-a1b2c3d4e5f0": { nombre: "YAHIR OTHON PARRA", nivel: "SECUNDARIA", promedio: "8.4", conclusion: "2026-10-10", emision: "2026-10-20", lugar: "HERMOSILLO, SON", id: "8187273370" },
    // --- TERCERA TANDA DE REGISTROS SIMULADOS (50 ADICIONALES) ---
    "a1c1b2c3-d4e5-4a6b-c7d8-e9f0a1b2c3d1": { nombre: "------------", nivel: "SECUNDARIA", promedio: "8.2", conclusion: "2026-10-12", emision: "2026-10-22", lugar: "CIUDAD DE MEXICO", id: "8289273481" },
    "b2d2c3d4-f5a6-4b7c-d8e9-f0a1b2c3d4e2": { nombre: "BRUNO DIAZ REYES", nivel: "SECUNDARIA", promedio: "9.8", conclusion: "2026-10-15", emision: "2026-10-25", lugar: "CIUDAD GOTICA, EDOMEX", id: "8390273592" },
    "c3e3d4e5-a6f7-4c8d-e9f0-a1b2c3d4e5f3": { nombre: "CARMEN SALINAS LOZANO", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2026-10-18", emision: "2026-10-28", lugar: "TORREON, COAHUILA", id: "8491273703" },
    "d4f4e5f6-b7a8-4d9e-f0a1-b2c3d4e5f6a4": { nombre: "DAVID ALFARO SIQUEIROS", nivel: "SECUNDARIA", promedio: "9.1", conclusion: "2026-10-20", emision: "2026-10-30", lugar: "CHIHUAHUA, CHIH", id: "8592273814" },
    "e5a5f6a7-c8b9-4e0f-a1b2-c3d4e5f6a7b5": { nombre: "ELSA AGUIRRE JURADO", nivel: "SECUNDARIA", promedio: "8.7", conclusion: "2026-10-22", emision: "2026-11-01", lugar: "CHIHUAHUA, CHIH", id: "8693273925" },
    "f6b6a7b8-d9c0-4f1a-b2c3-d4e5f6a7b8c6": { nombre: "FRANCISCO GABILONDO SOLER", nivel: "PRIMARIA", promedio: "9.5", conclusion: "2026-10-25", emision: "2026-11-04", lugar: "ORIZABA, VERACRUZ", id: "8794274036" },
    "a7c7b8c9-e0d1-4a2b-c3d4-e5f6a7b8c9d7": { nombre: "GUILLERMO DEL TORO G.", nivel: "SECUNDARIA", promedio: "9.9", conclusion: "2026-10-28", emision: "2026-11-07", lugar: "GUADALAJARA, JALISCO", id: "8895274147" },
    "b8d8c9d0-f1e2-4b3c-d4e5-f6a7b8c9d0e8": { nombre: "HUGO SANCHEZ MARQUEZ", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2026-11-01", emision: "2026-11-11", lugar: "CIUDAD DE MEXICO", id: "8996274258" },
    "c9e9d0e1-a2f3-4c4d-e5f6-a7b8c9d0e1f9": { nombre: "IGNACIO LOPEZ TARSO", nivel: "PRIMARIA", promedio: "9.4", conclusion: "2026-11-04", emision: "2026-11-14", lugar: "CDMX", id: "9097274369" },
    "d0f0e1f2-b3a4-4d5e-f6a7-b8c9d0e1f2a0": { nombre: "JOSEFA ORTIZ DE D.", nivel: "SECUNDARIA", promedio: "8.9", conclusion: "2026-11-07", emision: "2026-11-17", lugar: "QUERETARO, QRO", id: "9198274480" },
    "e1a1f2a3-c4b5-4e6f-a7b8-c9d0e1f2a3b1": { nombre: "KATY JURADO GARCIA", nivel: "SECUNDARIA", promedio: "8.6", conclusion: "2026-11-10", emision: "2026-11-20", lugar: "TLAXCALA, TLAX", id: "9299274591" },
    "f2b2a3b4-d5c6-4f7a-b8c9-d0e1f2a3b4c2": { nombre: "LUPITA D'ALESSIO", nivel: "PRIMARIA", promedio: "8.2", conclusion: "2026-11-12", emision: "2026-11-22", lugar: "TIJUANA, BC", id: "9310274702" },
    "a3c3b4c5-e6d7-4a8b-c9d0-e1f2a3b4c5d3": { nombre: "MARCO ANTONIO SOLIS", nivel: "SECUNDARIA", promedio: "8.8", conclusion: "2026-11-15", emision: "2026-11-25", lugar: "ARIO DE ROSALES, MICH", id: "9411274813" },
    "b4d4c5d6-f7e8-4b9c-d0e1-f2a3b4c5d6e4": { nombre: "NANCY AYALA MORA", nivel: "SECUNDARIA", promedio: "9.0", conclusion: "2026-11-18", emision: "2026-11-28", lugar: "MONTERREY, NL", id: "9512274924" },
    "c5e5d6e7-a8f9-4c0a-1b2c-3d4e5f6a7b85": { nombre: "OFELIA GUILMAIN", nivel: "PRIMARIA", promedio: "8.4", conclusion: "2026-11-20", emision: "2026-11-30", lugar: "CDMX", id: "9613275035" },
    "d6f6e7f8-b9a0-4d1b-2c3d-4e5f6a7b8c96": { nombre: "PABLO MONTERO RUIZ", nivel: "SECUNDARIA", promedio: "7.9", conclusion: "2026-11-22", emision: "2026-12-02", lugar: "TORREON, COAHUILA", id: "9714275146" },
    "e7a7f890-c0b1-4e2c-3d4e-5f6a7b8c9d07": { nombre: "QUETA LAVAT ESPARZA", nivel: "SECUNDARIA", promedio: "9.2", conclusion: "2026-11-25", emision: "2026-12-05", lugar: "CIUDAD DE MEXICO", id: "9815275257" },
    "f8b890a1-d1c2-4f3d-4e5f-6a7b8c9d0e18": { nombre: "RUBEN AGUIRRE FUENTES", nivel: "PRIMARIA", promedio: "8.1", conclusion: "2026-11-28", emision: "2026-12-08", lugar: "SALTILLO, COAHUILA", id: "9916275368" },
    "90c90a1b-e2d3-4a4e-5f6a-7b8c9d0e1f29": { nombre: "SALMA HAYEK JIMENEZ", nivel: "SECUNDARIA", promedio: "9.3", conclusion: "2026-12-01", emision: "2026-12-11", lugar: "COATZACOALCOS, VER", id: "1017275479" },
    "0a1a1b2c-f3e4-4b5f-6a7b-8c9d0e1f2a30": { nombre: "TATIANA PALACIOS CH.", nivel: "SECUNDARIA", promedio: "8.9", conclusion: "2026-12-04", emision: "2026-12-14", lugar: "MONTERREY, NL", id: "1118275580" },
    "1b2b2c3d-a4f5-4c6a-7b8c-9d0e1f2a3b41": { nombre: "URIEL DEL TORO L.", nivel: "PRIMARIA", promedio: "8.2", conclusion: "2026-12-07", emision: "2026-12-17", lugar: "CDMX", id: "1219275691" },
    "2c3c3d4e-b5a6-4d7b-8c9d-0e1f2a3b4c52": { nombre: "VERONICA CASTRO A.", nivel: "SECUNDARIA", promedio: "9.0", conclusion: "2026-12-10", emision: "2026-12-20", lugar: "CIUDAD DE MEXICO", id: "1320275802" },
    "3d4d4e5f-c6b7-4e8c-9d0e-1f2a3b4c5d63": { nombre: "WAGNER MANOEL S.", nivel: "SECUNDARIA", promedio: "8.4", conclusion: "2026-12-12", emision: "2026-12-22", lugar: "TOLUCA, EDOMEX", id: "1421275913" },
    "4e5e5f6a-d7c8-4f9d-0e1f-2a3b4c5d6e74": { nombre: "XIMENA NAVARRETE R.", nivel: "PRIMARIA", promedio: "9.6", conclusion: "2026-12-15", emision: "2026-12-25", lugar: "GUADALAJARA, JALISCO", id: "1522276024" },
    "5f6f6a7b-e8d9-4a0e-1f2a-3b4c5d6e7f85": { nombre: "YALITZA APARICIO M.", nivel: "SECUNDARIA", promedio: "9.4", conclusion: "2026-12-18", emision: "2026-12-28", lugar: "TLAXIACO, OAXACA", id: "1623276135" },
    "6a7a7b8c-f9a0-4b1f-2a3b-4c5d6e7f8906": { nombre: "ZURIA VEGA SOTELO", nivel: "SECUNDARIA", promedio: "8.8", conclusion: "2026-12-20", emision: "2026-12-30", lugar: "CIUDAD DE MEXICO", id: "1724276246" },
    "7b8b8c9d-a0b1-4c2a-3b4c-5d6e7f890a17": { nombre: "ALEX LORA SERNA", nivel: "PRIMARIA", promedio: "7.7", conclusion: "2026-12-22", emision: "2027-01-02", lugar: "PUEBLA, PUEBLA", id: "1825276357" },
    "8c9c9d0e-b1c2-4d3b-4c5d-6e7f890a1b28": { nombre: "BÁRBARA DE REGIL", nivel: "SECUNDARIA", promedio: "9.1", conclusion: "2026-12-25", emision: "2027-01-05", lugar: "CDMX", id: "1926276468" },
    "9d0d0e1f-c2d3-4e4c-5d6e-7f890a1b2c39": { nombre: "CARLOS RIVERA G.", nivel: "SECUNDARIA", promedio: "9.5", conclusion: "2026-12-28", emision: "2027-01-08", lugar: "HUAMANTLA, TLAXCALA", id: "2027276579" },
    "0e1e1f2a-d3e4-4f5d-6e7f-890a1b2c3d40": { nombre: "DIEGO LUNA ALEXANDER", nivel: "PRIMARIA", promedio: "8.9", conclusion: "2026-12-30", emision: "2027-01-10", lugar: "CIUDAD DE MEXICO", id: "2128276680" },
    "1f2f2a3b-e4d5-4a6e-7f89-0a1b2c3d4e51": { nombre: "ELSA BENITEZ Y.", nivel: "SECUNDARIA", promedio: "9.0", conclusion: "2027-01-02", emision: "2027-01-12", lugar: "HERMOSILLO, SONORA", id: "2229276791" },
    "2a3a3b4c-f5a6-4b7f-890a-1b2c3d4e5f62": { nombre: "FRIDA KAHLO CALDERON", nivel: "SECUNDARIA", promedio: "9.3", conclusion: "2027-01-05", emision: "2027-01-15", lugar: "COYOACAN, CDMX", id: "2330276902" },
    "3b4b4c5d-a6b7-4c80-a1b2-c3d4e5f6a7b3": { nombre: "GAEL GARCIA BERNAL", nivel: "PRIMARIA", promedio: "8.6", conclusion: "2027-01-08", emision: "2027-01-18", lugar: "GUADALAJARA, JALISCO", id: "2431277013" },
    "4c5c5d6e-b7c8-4d91-b2c3-d4e5f6a7b8c4": { nombre: "HERIBERTO MURRIETA", nivel: "SECUNDARIA", promedio: "8.4", conclusion: "2027-01-10", emision: "2027-01-20", lugar: "CDMX", id: "2532277124" },
    "5d6d6e7f-c8d9-4e02-c3d4-e5f6a7b8c9d5": { nombre: "ISAAC HERNANDEZ F.", nivel: "SECUNDARIA", promedio: "9.8", conclusion: "2027-01-12", emision: "2027-01-22", lugar: "GUADALAJARA, JAL", id: "2633277235" },
    "6e7e7f89-d9e0-4f13-d4e5-f6a7b8c9d0e6": { nombre: "JUAN GABRIEL AGUILERA", nivel: "PRIMARIA", promedio: "8.1", conclusion: "2027-01-15", emision: "2027-01-25", lugar: "PARACUARO, MICHOACAN", id: "2734277346" },
    "7f8f890a-e0f1-4a24-e5f6-a7b8c9d0e1f7": { nombre: "KARLA SOUZA OLIVARES", nivel: "SECUNDARIA", promedio: "9.2", conclusion: "2027-01-18", emision: "2027-01-28", lugar: "CIUDAD DE MEXICO", id: "2835277457" },
    "8a9a90a1-f1a2-4b35-f6a7-b8c9d0e1f2a8": { nombre: "LUIS MIGUEL GALLEGO", nivel: "SECUNDARIA", promedio: "8.0", conclusion: "2027-01-20", emision: "2027-01-30", lugar: "VERACRUZ, VER", id: "2936277568" },
    "9b0b0b1c-a2b3-4c46-a7b8-c9d0e1f2a3b9": { nombre: "MARTHA HIGAREDA C.", nivel: "PRIMARIA", promedio: "9.3", conclusion: "2027-01-22", emision: "2027-02-01", lugar: "VILLAHERMOSA, TABASCO", id: "3037277679" },
    "0c1c1c2d-b3c4-4d57-b8c9-d0e1f2a3b4c0": { nombre: "NATALIA TELLEZ M.", nivel: "SECUNDARIA", promedio: "8.8", conclusion: "2027-01-25", emision: "2027-02-04", lugar: "CDMX", id: "3138277780" },
    "1d2d2d3e-c4d5-4e68-c9d0-e1f2a3b4c5d1": { nombre: "ORIBE PERALTA MORONES", nivel: "SECUNDARIA", promedio: "8.2", conclusion: "2027-01-28", emision: "2027-02-07", lugar: "TORREON, COAHUILA", id: "3239277891" },
    "2e3e3e4f-d5e6-4f79-d0e1-f2a3b4c5d6e2": { nombre: "PAULINA RUBIO DOSAMANTES", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2027-01-30", emision: "2027-02-10", lugar: "CIUDAD DE MEXICO", id: "3340278002" },
    "3f4f4f5a-e6f7-4a80-e1f2-a3b4c5d6e7f3": { nombre: "ROBERTO PALAZUELOS", nivel: "SECUNDARIA", promedio: "7.9", conclusion: "2027-02-02", emision: "2027-02-12", lugar: "ACAPULCO, GUERRERO", id: "3441278113" },
    "4a5a5a6b-f7a8-4b91-f2a3-b4c5d6e7f894": { nombre: "SOFIA NIETO RUIZ", nivel: "SECUNDARIA", promedio: "9.1", conclusion: "2027-02-05", emision: "2027-02-15", lugar: "MONTERREY, NL", id: "3542278224" },
    "5b6b6b7c-a8b9-4c02-a3b4-c5d6e7f890a5": { nombre: "TENOCH HUERTA MEJIA", nivel: "PRIMARIA", promedio: "8.7", conclusion: "2027-02-08", emision: "2027-02-18", lugar: "ECATEPEC, EDOMEX", id: "3643278335" },
    "6c7c7c8d-b9c0-4d13-b4c5-d6e7f890a1b6": { nombre: "URSULA PRATTS", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2027-02-10", emision: "2027-02-20", lugar: "CIUDAD DE MEXICO", id: "3744278446" },
    "7d8d8d9e-c0d1-4e24-c5d6-e7f890a1b2c7": { nombre: "VALENTIN ELIZALDE V.", nivel: "SECUNDARIA", promedio: "8.0", conclusion: "2027-02-12", emision: "2027-02-22", lugar: "NAVOJOA, SONORA", id: "3845278557" },
    "8e8e8ea0-d1e2-4f35-d6e7-f890a1b2c3d8": { nombre: "WENDY GONZALEZ", nivel: "PRIMARIA", promedio: "9.2", conclusion: "2027-02-15", emision: "2027-02-25", lugar: "MONTERREY, NL", id: "3946278668" },
    "9f9f9fb1-e2f3-4a46-e7f8-90a1b2c3d4e9": { nombre: "YOLANDA MONTES T.", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2027-02-18", emision: "2027-02-28", lugar: "CDMX", id: "4047278779" },
    "0a0a0ac2-f3a4-4b57-f890-a1b2c3d4e5f0": { nombre: ".........", nivel: "SECUNDARIA", promedio: "8.1", conclusion: "2027-02-20", emision: "2027-03-02", lugar: "SALTILLO, COAHUILA", id: "4148278890" },
    // --- FOLIOS ORIGINALES (UUID) ---
    "9da9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "WILDER RAMON ZELAYA FUNEZ", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2018-11-15", emision: "2018-11-20", lugar: "EL CARMEN, NUEVO LEÓN", id: "0410255274" },
    "8ea8226f-5f07-41cc-81f6-23cb903e7502": { nombre: "ISRAEL MEXICANO IBARRA", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "GENERAL ESCOBEDO, NUEVO LEON", id: "0511255380" },
    "8da9226f-6e07-41cc-81f6-23cb903e6591": { nombre: "CLARIBEL FLORES ROJAS", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CANCUN, QUINTANA ROO", id: "1420256273" },
    "7da9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "JOAQUIN GONZALEZ GONZALEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "COATZACOALCOS, VER", id: "1319256162" },
    "2da9226f-6e07-41cc-81f6-23cb903e6333": { nombre: "LEIDY MAGALY RICARDO FORTUNATO", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NUEVO LEON", id: "1521256384" },
    "0da9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "INGRID ARELY MARTINEZ ESQUIVEL", nivel: "PRIMARIA", promedio: "8.5", conclusion: "15-11-2025", emision: "20-11-2025", lugar: "MONTERREY, NUEVO LEON", id: "1622256495" },
    "4da9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "LILIANA VICTORIA REGINO GARAY", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2015-10-15", emision: "2015-10-20", lugar: "MONTERREY, NUEVO LEÓN ", id: "1723256506" },
    "3da9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "MARTHA PATRICIA BRIONES GONZALEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-10-15", emision: "2025-10-20", lugar: "SALTILLO, COAHUILA", id: "1824256617" },
    "2da9226f-6e07-41cc-81f6-23cb903e6590": { nombre: "MILCA SANCHEZ LORENZO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2018-10-15", emision: "2018-10-20", lugar: "SAN ANDRES SOLAGA, OAXACA", id: "1925256728" },
    "1da9226f-6e07-41cc-81f6-23cb903e6500": { nombre: "TERESITA DE JESUS REYES VAZQUEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "JALISCO, JALISCO", id: "2026256839" },
    "11a9226f-6e07-41cc-81f6-23cb000e6593": { nombre: "RENE ALONSO CHAVEZ LUGO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2022-07-27", emision: "2022-08-10", lugar: "CHIHUAHUA, CHIHUAHUA", id: "2127256940" },
    "0aa9226f-6e07-41cc-81f6-23cb903e659c": { nombre: "MARIO LOPEZ GUTIERREZ", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-25", lugar: "TAMAULIPAS, TAMAULIPAS", id: "2228257051" },

    // --- SERIE FOLIO-INF (12 al 60) ---
     "11a9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "JOSE ALBERTO HERNANDEZ HERNANDEZ", nivel: "SECUNDARIA", promedio: "8.6", conclusion: "2025-11-17", emision: "2025-11-25", lugar: "JALISCO, JALISCO", id: "2329257162" },
   "12a9226f-6e07-41cc-81f6-23cb903e659c": { nombre: "JUAN TOMAS LUNA ALBA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "SAN LUIS POTOSI", id: "2430257273" },
    "13a9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "CRISTHIAN EDUARDO PEREZ PEREZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "TONALA, JALISCO", id: "2531257384" },
    "14a9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "CARLOS IVAN SOLANO RODRIGUEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "SAN LUIS POTOSI", id: "2632257495" },
   "1qa9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "ROLANDO MISSAEL PUENTE OCHOA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "REYNOSA, TAMAULIPAS", id: "2733257606" },
     "1ta8226f-6e07-41cc-81f6-23cb9l3e6008": { nombre: "ANA LUISA MORIN DE LEON", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NUEVO LEON", id: "2834257717" },
    "1qa8226f-6e07-41cc-81f6-23cb903e6093": { nombre: "VICENTE ALONSO RENDON", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "GUADALAJARA, JALISCO", id: "2935257828" },
    "1qa8226f-6e07-41cc-81f6-23cb903e6091": { nombre: "OSCAR ADRIAN CASTRO HERVERT ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2015-09-24", emision: "2015-09-25", lugar: "REYNOSA, TAMAULIPAS", id: "3036257939" },
    "1na8226f-6e07-41cc-81f6-23cb903e6091": { nombre: "GIOVANNA PATRICIA CASTILLO GONZALEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "TORREON, COAHUILA", id: "3137258050" },
    "1na8226f-6e07-41cc-81f6-23cb903e6000": { nombre: "BRENDA LIZBETH MORENO SANCHEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2019-07-16", emision: "2019-07-20", lugar: "COATLAN DEL RIO, MORELOS", id: "3238258161" },
    "1na8226f-6e07-41cc-81f6-23cb9l3e6008": { nombre: "ANDRES LOPEZ VALENCIA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MINANTITLAN, VERACRUZ", id: "3339258272" },
    "1oa8226f-6e07-41cc-81f6-23cb9l3e6008": { nombre: "OSCAR MARTINEZ MARTINEZ ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "TULTEPEC, ESTADO DE MÉXICO", id: "3440258383" },
   "9da9226f-6e37-41cc-81f6-23cb903e6593": { nombre: "JESUS NIÑO HERRERA", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NUEVO LEON", id: "3541258494" },
    "4da9226f-6e17-41cc-81f6-23cb903e6593": { nombre: "DULCE MARIA ZUBIATE MARTINEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CHIHUAHUA, CHIHUAHUA", id: "3642258605" },
    "4da9226f-6e17-41cc-81g6-23cb903e6593": { nombre: "JESUS ABEL VALDEZ TORRES", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "EL FUERTE, SINALOA", id: "3743258716" },
     "4da9226f-6o17-41ec-81g6-23cb903e6593": { nombre: "MONSERRAT GUADALUPE SUSTAITA TERAN", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "PARRAS DE LA FUENTE, COAHUILA", id: "3844258827" },
    "4da9226f-6o17-41ec-81g6-11cb903e6593": { nombre: "CLEMENTE GONZALEZ DE LEON ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "REYNOSA, TAMAULIPAS", id: "3945258928" },
    "4da9226f-6o17-41ec-11g6-23cb903e6593": { nombre: "ROBERTO VELA MALDONADO", nivel: "PRIMARIA", promedio: "8.0", conclusion: "1990-11-15", emision: "1990-11-20", lugar: "MONTERREY, NUEVO LEON", id: "4046259039" },
    "4da9226f-6o13-41ec-81g6-23cb903e6593": { nombre: "IVAN DE JESUS CARRIZALES ESPINOZA ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NUEVO LEON", id: "4147259140" },
  "1889226f-6e07-41cc-81f6-23cb903e6593": { nombre: "MARIO ERICK FOGLIA HERNANDEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "201O-11-15", emision: "2010-11-20", lugar: "REYNOSA, TAMAULIPAS", id: "4248259251" },
    "22a1226f-6o13-41ec-81g6-23cb903e6598": { nombre: "SONIA MORA RANGEL", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2010-05-15", emision: "2010-05-20", lugar: "TULTITLAN, ESTADO DE MEXICO", id: "4349259362" },
    "8ea8226f-5f07-41cc-81f6-88cb903e750f": { nombre: "ANABEL GUZMAN GARCIA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "SAN PEDRO HUAMELULA, OAXACA", id: "4450259473" },
    "98a1226f-6o13-41ec-81g6-23cb903e6594": { nombre: "RAMIRO HERNANDEZ LARIOS", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2018-11-15", emision: "2018-11-20", lugar: "REYNOSA, TAMAULIPAS", id: "4551259584" },
   "6da9226f-6e07-77cc-81f6-23cb903e659330": { nombre: "AURORA CABRIALES INOJOSA", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NUEVO LEON", id: "4652259695" },
    "11a9226f-6e07-4199-81f6-23cb903e6593": { nombre: "ALBERTO JESUS OLGUIN JUAREZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2017-07-15", emision: "2017-07-20", lugar: "ECATEPEC, ESTADO DE MEXICO", id: "4753259806" },
     "0aa9226f-6e07-99cc-81f6-23cb903e6593": { nombre: "ITZEL ESMERALDA DEGOLLADO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NUEVO LEÓN", id: "4854259917" },
   "9da9226f-6e088-41cc-81f6-23cb903e6593": { nombre: "EDUARDO MARISCAL RODRIGUEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2023-11-15", emision: "2023-11-20", lugar: "TALA,JALISCO", id: "4955260028" },
    "9da9226f-6e888-41cc-81f6-23cb903e6593": { nombre: "KENYA MARISOL ACOSTA ALDACO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "RAMOS ARIZPE, COAHUILA ", id: "5056260139" },
    "9da9226f-6e878-41cc-81f6-23cb999e6593": { nombre: "MARIA DE JESUS CHARLES RODRIGUEZ", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTEREY, NUEVO LEON", id: "5157260250" },
    "9da9226f-6667-41cc-81f6-23cb903e6593": { nombre: "JUAN ANTONIO BELLI COBAXIN", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NUEVO LEON", id: "5258260361" },
   "9da922ff-6667-41cc-81f6-23cb903e6593": { nombre: "ANDRES SEGURA MONTER", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NUEVO LEON", id: "5359260472" },
    "9da922ff-6667-410c-80f6-23cb903e6592": { nombre: "OSCAR ANTONIO RODRIGUEZ DE LEON", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NUEVO LEON", id: "5460260583" },
   "9da9226f-6e07-8888-81f6-23cb903e6593": { nombre: "ANA ESTHER GUTIERREZ PRECIADO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "TLAJOMULCO DE ZUÑIGA, JALISCO", id: "5561260694" },
    "1da9226f-6e07-41cc-81f6-888b903e6593": { nombre: "MAYELA MARGARITA CARLOS CARLOS", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NUEVO LEON ", id: "5662260805" },
     "6da9226f-6e07-41cc-81f6-23cb903e6663": { nombre: "ENRRIQUE GARCIA MORALES", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "POZA RICA, VERACRUZ", id: "5763260916" },
   "9da92666-6e07-41cc-81f6-23cb903e6593": { nombre: "JOSE GUADALUPE JUAREZ MORALES", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "SOLEDAD DE GRACIANO SANCHEZ, SLP", id: "5864261027" },
   "0888226f-6e07-41cc-81f6-23cb903e6591": { nombre: "JOSE EMMANUEL JUAREZ CONTRERAS", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "SOLEDAD DE GRACIANO SANCHEZ, SLP", id: "5965261138" },
    "9da9226f-6e07-41cc-81f6-999b903e6598": { nombre: "PATRICIA ALEJANDRA TORRES ZUÑIGA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "GUADALAJARA, JALISCO", id: "6066261249" },
   "3da9226f-6e07-41cc-8155-23cb903e6593": { nombre: "VIRGINIA TORRES LUNA", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "GRAL. ESCOBEDO, NUEVO LEON", id: "6167261360" },
    "3da9226f-6e07-41cc-8155-23cb90000000": { nombre: "ANAYELI MOLINA MENDOZA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "TEOLOYUCAN, EDO MEX", id: "6268261471" },
    "3da9226f-6e07-41cc-8155-23cb90008765": { nombre: "FEDERICO ARENAS ALDABA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "LAGOS DE MORENO, JALISCO", id: "6369261582" },
    "3da9226f-6e07-41cc-8155-23cb90008888": { nombre: "TERESA BIANEY MOCTEZUMA CRUZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "NAUCALPAN DE JUAREZ, EDO,MEX", id: "6470261693" },
    "3da9226f-6e07-41cc-8155-23cb90000509": { nombre: "MARIA CONCEPCION LOPEZ HERNANDEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2024-11-15", emision: "2024-11-20", lugar: "NICOLAS ROMERO, EDO MEX", id: "6571261804" },
    "3da9226f-6e07-41cc-8155-23cb90000508": { nombre: "ERIKA RAMIREZ MARTINEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "TEMASCALCINGO, ESTADO DE MEXICO", id: "6672261915" },
    "3da9226f-6e07-41cc-8155-23cb90000505": { nombre: "GEOVANNA JAZMIN MONTOYA RUIZ", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NUEVO LEON", id: "6773262026" },
    "3da9226f-6e07-41cc-8155-23cb90000501": { nombre: "MARIA ESTHER MALDONADO NORIEGA", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTEREY, NUEVO LEON", id: "6874262137" },
    "3da9226f-6e07-41cc-8155-23cb90000502": { nombre: "FAUSTO MEJIA RUIZ", nivel: "SECUNDARIA", promedio: "8.0", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "TULANCINGO DE BRAVO, HIDALGO", id: "6975262248" },
    "2da9226f-6e07-41cc-81f6-23cb903e65c0": { nombre: "MARTHA GUADALUPE REYES ARENAS", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "ATIZAPAN DE ZARAGOZA, ESTADO DE MÉXICO", id: "7076262359" },
    "2da9226f-6e07-41cc-81f6-23cb903e65y0": { nombre: "ADOLFO HERNANDEZ HERNANDEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CUAUTITLAN IZCALLI, ESTADO DE MÉXICO", id: "7177262470" },
};
























































































































































































































    








































































































































































































