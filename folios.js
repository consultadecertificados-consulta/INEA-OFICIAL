// folios.js - Base de datos completa de certificados INEA (60 Registros)
const baseDatos = {
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
    // --- NUEVOS REGISTROS SIMULADOS (50 ADICIONALES) ---
    "a1b2c3d4-e5f6-47a8-b9c0-1d2e3f4a5b61": { nombre: "-------", nivel: "SECUNDARIA", promedio: "8.7", conclusion: "2026-01-15", emision: "2026-01-20", lugar: "MONTERREY, NUEVO LEON", id: "7278262471" },
    "b2c3d4e5-f6a7-48b9-c0d1-2e3f4a5b6c72": { nombre: "BEATRIZ ADRIANA LUNA", nivel: "PRIMARIA", promedio: "9.2", conclusion: "2026-01-18", emision: "2026-01-25", lugar: "GUADALAJARA, JALISCO", id: "7379262582" },
    "c3d4e5f6-a7b8-49c0-d1e2-3f4a5b6c7d83": { nombre: "CARLOS DANIEL VILLA", nivel: "SECUNDARIA", promedio: "8.0", conclusion: "2026-01-20", emision: "2026-01-28", lugar: "PUEBLA, PUEBLA", id: "7480262693" },
    "d4e5f6a7-b8c9-40d1-e2f3-4a5b6c7d8e94": { nombre: "DIANA LAURA ESQUIVEL", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2026-01-22", emision: "2026-01-30", lugar: "TOLUCA, EDO MEX", id: "7581262804" },
    "e5f6a7b8-c9d0-41e2-f3a4-5b6c7d8e9f05": { nombre: "EDUARDO GOMEZ FARÍAS", nivel: "PRIMARIA", promedio: "7.9", conclusion: "2026-01-25", emision: "2026-02-02", lugar: "REYNOSA, TAMAULIPAS", id: "7682262915" },
    "f6a7b8c9-d0e1-42f3-a4b5-6c7d8e9f0a16": { nombre: "FABIOLA TORRES RIVAS", nivel: "SECUNDARIA", promedio: "9.4", conclusion: "2026-01-28", emision: "2026-02-05", lugar: "MERIDA, YUCATAN", id: "7783263026" },
    "a7b8c9d0-e1f2-43a4-b5c6-7d8e9f0a1b27": { nombre: "GABRIEL SOSA CASTRO", nivel: "SECUNDARIA", promedio: "8.8", conclusion: "2026-02-01", emision: "2026-02-10", lugar: "SALTILLO, COAHUILA", id: "7884263137" },
    "b8c9d0e1-f2a3-44b5-c6d7-8e9f0a1b2c38": { nombre: "HUGO ENRIQUE MEZA", nivel: "PRIMARIA", promedio: "8.2", conclusion: "2026-02-03", emision: "2026-02-12", lugar: "TIJUANA, BC", id: "7985263248" },
    "c9d0e1f2-a3b4-45c6-d7e8-9f0a1b2c3d49": { nombre: "IRIS XIMENA VALDEZ", nivel: "SECUNDARIA", promedio: "9.1", conclusion: "2026-02-05", emision: "2026-02-15", lugar: "LEON, GUANAJUATO", id: "8086263359" },
    "d0e1f2a3-b4c5-46d7-e8f9-0a1b2c3d4e50": { nombre: "JORGE LUIS PERAZA", nivel: "SECUNDARIA", promedio: "8.6", conclusion: "2026-02-08", emision: "2026-02-18", lugar: "CANCUN, Q. ROO", id: "8187263470" },
    "e1f2a3b4-c5d6-47e8-f90a-1b2c3d4e5f61": { nombre: "KARLA VANESSA LOPEZ", nivel: "PRIMARIA", promedio: "9.5", conclusion: "2026-02-10", emision: "2026-02-20", lugar: "VERACRUZ, VER", id: "8288263581" },
    "f2a3b4c5-d6e7-48f9-0a1b-2c3d4e5f6a72": { nombre: "LUIS ALBERTO MORALES", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2026-02-12", emision: "2026-02-22", lugar: "MORELIA, MICHOACAN", id: "8389263692" },
    "a3b4c5d6-e7f8-490a-1b2c-3d4e5f6a7b83": { nombre: "MONICA IVETTE SALAS", nivel: "SECUNDARIA", promedio: "8.9", conclusion: "2026-02-15", emision: "2026-02-25", lugar: "QUERETARO, QRO", id: "8490263803" },
    "b4c5d6e7-f890-4a1b-2c3d-4e5f6a7b8c94": { nombre: "NORBERTO DIAZ RUIZ", nivel: "PRIMARIA", promedio: "8.1", conclusion: "2026-02-18", emision: "2026-02-28", lugar: "PACHUCA, HIDALGO", id: "8591263914" },
    "c5d6e7f8-90a1-4b2c-3d4e-5f6a7b8c9d05": { nombre: "OSVALDO PEÑA NIETO", nivel: "SECUNDARIA", promedio: "8.4", conclusion: "2026-02-20", emision: "2026-03-02", lugar: "OAXACA, OAXACA", id: "8692264025" },
    "d6e7f890-a1b2-4c3d-4e5f-6a7b8c9d0e16": { nombre: "PATRICIA NOEMI SOLIS", nivel: "SECUNDARIA", promedio: "9.0", conclusion: "2026-02-22", emision: "2026-03-05", lugar: "TLAXCALA, TLAX", id: "8793264136" },
    "e7f890a1-b2c3-4d4e-5f6a-7b8c9d0e1f27": { nombre: "QUINTIN FLORES HERRERA", nivel: "PRIMARIA", promedio: "8.7", conclusion: "2026-02-25", emision: "2026-03-08", lugar: "COLIMA, COLIMA", id: "8894264247" },
    "f890a1b2-c3d4-4e5f-6a7b-8c9d0e1f2a38": { nombre: "ROSA MARIA ESPARZA", nivel: "SECUNDARIA", promedio: "8.8", conclusion: "2026-02-28", emision: "2026-03-10", lugar: "ZACATECAS, ZAC", id: "8995264358" },
    "90a1b2c3-d4e5-4f6a-7b8c-9d0e1f2a3b49": { nombre: "SERGIO ARTURO MARIN", nivel: "SECUNDARIA", promedio: "8.2", conclusion: "2026-03-02", emision: "2026-03-12", lugar: "CUERNAVACA, MORELOS", id: "9096264469" },
    "0a1b2c3d-4e5f-46a7-b8c9-d0e1f2a3b4c0": { nombre: "TANIA LIZBETH OCHOA", nivel: "PRIMARIA", promedio: "9.3", conclusion: "2026-03-05", emision: "2026-03-15", lugar: "CULIACAN, SINALOA", id: "9197264570" },
    "1b2c3d4e-5f6a-47b8-c9d0-e1f2a3b4c5d1": { nombre: "URIELL VARGAS LARA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2026-03-08", emision: "2026-03-18", lugar: "DURANGO, DURANGO", id: "9298264681" },
    "2c3d4e5f-6a7b-48c9-d0e1-f2a3b4c5d6e2": { nombre: "VALERIA CAMPOS LUNA", nivel: "SECUNDARIA", promedio: "8.9", conclusion: "2026-03-10", emision: "2026-03-20", lugar: "SAN LUIS POTOSI, SLP", id: "9399264792" },
    "3d4e5f6a-7b8c-49d0-e1f2-a3b4c5d6e7f3": { nombre: "WALTER ELIAS CALLE", nivel: "PRIMARIA", promedio: "8.0", conclusion: "2026-03-12", emision: "2026-03-22", lugar: "XALAPA, VERACRUZ", id: "9410264903" },
    "4e5f6a7b-8c9d-40e1-f2a3-b4c5d6e7f894": { nombre: "XIMENA NAVARRO RUIZ", nivel: "SECUNDARIA", promedio: "9.6", conclusion: "2026-03-15", emision: "2026-03-25", lugar: "CHETUMAL, Q. ROO", id: "9511265014" },
    "5f6a7b8c-9d0e-41f2-a3b4-c5d6e7f890a5": { nombre: "YAIR ALEJANDRO CRUZ", nivel: "SECUNDARIA", promedio: "8.4", conclusion: "2026-03-18", emision: "2026-03-28", lugar: "VILLAHERMOSA, TAB", id: "9612265125" },
    "6a7b8c9d-0e1f-42a3-b4c5-d6e7f890a1b6": { nombre: "ZULEMA NOEMI ORTIZ", nivel: "PRIMARIA", promedio: "8.7", conclusion: "2026-03-20", emision: "2026-03-30", lugar: "HERMOSILLO, SONORA", id: "9713265236" },
    "7b8c9d0e-1f2a-43b4-c5d6-e7f890a1b2c7": { nombre: "ADAN MENDOZA SERNA", nivel: "SECUNDARIA", promedio: "8.1", conclusion: "2026-03-22", emision: "2026-04-02", lugar: "CHIHUAHUA, CHIH", id: "9814265347" },
    "8c9d0e1f-2a3b-44c5-d6e7-f890a1b2c3d8": { nombre: "BRENDA JAZMIN RIOS", nivel: "SECUNDARIA", promedio: "9.0", conclusion: "2026-03-25", emision: "2026-04-05", lugar: "LA PAZ, BCS", id: "9915265458" },
    "9d0e1f2a-3b4c-45d6-e7f8-90a1b2c3d4e9": { nombre: "CESAR AUGUSTO SILVA", nivel: "PRIMARIA", promedio: "8.3", conclusion: "2026-03-28", emision: "2026-04-08", lugar: "CAMPECHE, CAMP", id: "1016265569" },
    "0e1f2a3b-4c5d-46e7-f890-a1b2c3d4e5f0": { nombre: "DORA ELIA MARTINEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2026-03-30", emision: "2026-04-10", lugar: "TUXTLA, CHIAPAS", id: "1117265670" },
    "1f2a3b4c-5d6e-47f8-90a1-b2c3d4e5f6a1": { nombre: "ESTEBAN QUITO ROJAS", nivel: "SECUNDARIA", promedio: "8.2", conclusion: "2026-04-02", emision: "2026-04-12", lugar: "TEPIC, NAYARIT", id: "1218265781" },
    "2a3b4c5d-6e7f-4809-a1b2-c3d4e5f6a7b2": { nombre: "FLOR DE MARIA POOT", nivel: "PRIMARIA", promedio: "9.1", conclusion: "2026-04-05", emision: "2026-04-15", lugar: "MERIDA, YUCATAN", id: "1319265892" },
    "3b4c5d6e-7f89-490a-1b2c-3d4e5f6a7b83": { nombre: "GERARDO LOZA REYES", nivel: "SECUNDARIA", promedio: "8.4", conclusion: "2026-04-08", emision: "2026-04-18", lugar: "GUADALAJARA, JALISCO", id: "1420266003" },
    "4c5d6e7f-890a-4a1b-2c3d-4e5f6a7b8c94": { nombre: "HECTOR MANUEL VELA", nivel: "SECUNDARIA", promedio: "8.8", conclusion: "2026-04-10", emision: "2026-04-20", lugar: "MONTERREY, NL", id: "1521266114" },
    "5d6e7f89-0a1b-4b2c-3d4e-5f6a7b8c9d05": { nombre: "IVETTE ALEJANDRA", nivel: "PRIMARIA", promedio: "9.7", conclusion: "2026-04-12", emision: "2026-04-22", lugar: "CIUDAD DE MEXICO", id: "1622266225" },
    "6d7e8f90-a1b2-4c3d-4e5f-6a7b8c9d0e16": { nombre: "JAVIER DUARTE FRUTOS", nivel: "SECUNDARIA", promedio: "7.8", conclusion: "2026-04-15", emision: "2026-04-25", lugar: "VERACRUZ, VER", id: "1723266336" },
    "7e8f90a1-b2c3-4d4e-5f6a-7b8c9d0e1f27": { nombre: "KAREN LIZETH SALAS", nivel: "SECUNDARIA", promedio: "8.6", conclusion: "2026-04-18", emision: "2026-04-28", lugar: "AGUASCALIENTES, AGS", id: "1824266447" },
    "8f90a1b2-c3d4-4e5f-6a7b-8c9d0e1f2a38": { nombre: "LEONARDO DICAPRIO M.", nivel: "PRIMARIA", promedio: "8.0", conclusion: "2026-04-20", emision: "2026-04-30", lugar: "MATAHUALA, SLP", id: "1925266558" },
    "90a1b2c3-d4e5-4f6a-7b8c-9d0e1f2a3b49": { nombre: "MIRIAM GUADALUPE", nivel: "SECUNDARIA", promedio: "9.2", conclusion: "2026-04-22", emision: "2026-05-02", lugar: "APODACA, NL", id: "2026266669" },
    "a1b2c3d4-4e5f-46a7-b8c9-d0e1f2a3b4c0": { nombre: "NIDIA ARACELI LARA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2026-04-25", emision: "2026-05-05", lugar: "CELAYA, GUANAJUATO", id: "2127266770" },
    "b2c3d4e5-5f6a-47b8-c9d0-e1f2a3b4c5d1": { nombre: "OSCAR IVAN BERNAL", nivel: "PRIMARIA", promedio: "8.3", conclusion: "2026-04-28", emision: "2026-05-08", lugar: "COACALCO, EDO MEX", id: "2228266881" },
    "c3d4e5f6-6a7b-48c9-d0e1-f2a3b4c5d6e2": { nombre: "PAOLA MONSERRAT", nivel: "SECUNDARIA", promedio: "8.9", conclusion: "2026-05-02", emision: "2026-05-12", lugar: "MANZANILLO, COLIMA", id: "2329266992" },
    "d4e5f6a7-7b8c-49d0-e1f2-a3b4c5d6e7f3": { nombre: "RAUL HERNANDEZ JR", nivel: "SECUNDARIA", promedio: "8.1", conclusion: "2026-05-05", emision: "2026-05-15", lugar: "GUAYMAS, SONORA", id: "2430267103" },
    "e5f6a7b8-8c9d-40e1-f2a3-b4c5d6e7f894": { nombre: "SARA ELIZONDO RUIZ", nivel: "PRIMARIA", promedio: "9.5", conclusion: "2026-05-08", emision: "2026-05-18", lugar: "MONTERREY, NL", id: "2531267214" },
    "f6a7b8c9-9d0e-41f2-a3b4-c5d6e7f890a5": { nombre: "TOMAS SANTIAGO SOSA", nivel: "SECUNDARIA", promedio: "8.4", conclusion: "2026-05-10", emision: "2026-05-20", lugar: "PUEBLA, PUEBLA", id: "2632267325" },
    "6a7b8c9d-1e1f-42a3-b4c5-d6e7f890a1b6": { nombre: "URSULA CORBERO M.", nivel: "SECUNDARIA", promedio: "8.7", conclusion: "2026-05-12", emision: "2026-05-22", lugar: "CIUDAD JUAREZ, CHIH", id: "2733267436" },
    "7b8c9d0e-2f2a-43b4-c5d6-e7f890a1b2c7": { nombre: "VICTOR MANUEL DIAZ", nivel: "PRIMARIA", promedio: "8.2", conclusion: "2026-05-15", emision: "2026-05-25", lugar: "ENSENADA, BC", id: "2834267547" },
    "8c9d0e1f-3a3b-44c5-d6e7-f890a1b2c3d8": { nombre: "WENDY GUEVARA", nivel: "SECUNDARIA", promedio: "9.0", conclusion: "2026-05-18", emision: "2026-05-28", lugar: "LEON, GUANAJUATO", id: "2935267658" },
    "9d0e1f2a-4b4c-45d6-e7f8-90a1b2c3d4e9": { nombre: "YOLANDA ANDRADE", nivel: "SECUNDARIA", promedio: "8.6", conclusion: "2026-05-20", emision: "2026-05-30", lugar: "CDMX", id: "3036267769" },
    "0e1f2a3b-5c5d-46e7-f890-a1b2c3d4e5f0": { nombre: "ZENON EL GRANJERO", nivel: "PRIMARIA", promedio: "9.1", conclusion: "2026-05-22", emision: "2026-06-01", lugar: "LAGOS DE MORENO, JAL", id: "3137267870" }
};
























































































































































































































    








































































































































































































