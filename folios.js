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
    "2da9226f-6e07-41cc-81f6-23cb903e65y0": { nombre: "ADOLFO HERNANDEZ HERNANDEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CUAUTITLAN IZCALLI, ESTADO DE MÉXICO", id: "7177262470" }
// --- NUEVOS FOLIOS ADICIONALES ---
    "2da9226f-6e07-41cc-81f6-23cb903e65z1": { nombre: "RICARDO VALLES MENDOZA", nivel: "SECUNDARIA", promedio: "8.7", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CHIHUAHUA, CHIHUAHUA", id: "7278262581" },
    "3ea9226f-7e07-42cc-81f6-23cb903e65a2": { nombre: "LETICIA VARGAS SALAZAR", nivel: "PRIMARIA", promedio: "9.1", conclusion: "2025-10-10", emision: "2025-10-15", lugar: "GUADALAJARA, JALISCO", id: "7379262692" },
    "4fa9226f-8e07-43cc-81f6-23cb903e65b3": { nombre: "SAMUEL RUIZ ESPARZA", nivel: "SECUNDARIA", promedio: "8.4", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "AGUASCALIENTES, AGS", id: "7480262703" },
    "5ga9226f-9e07-44cc-81f6-23cb903e65c4": { nombre: "BEATRIZ ADRIANA SOLIS", nivel: "SECUNDARIA", promedio: "8.9", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "LEON, GUANAJUATO", id: "7581262814" },
    "6ha9226f-0e07-45cc-81f6-23cb903e65d5": { nombre: "MARCOS ANTONIO PEÑA", nivel: "PRIMARIA", promedio: "8.2", conclusion: "2024-05-12", emision: "2024-05-20", lugar: "MERIDA, YUCATAN", id: "7682262925" },
    "7ia9226f-1e07-46cc-81f6-23cb903e65e6": { nombre: "CLAUDIA IVETTE LOZANO", nivel: "SECUNDARIA", promedio: "9.0", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "SALTILLO, COAHUILA", id: "7783263036" },
    "8ja9226f-2e07-47cc-81f6-23cb903e65f7": { nombre: "FRANCISCO JAVIER RIVAS", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-08-20", emision: "2025-08-25", lugar: "TIJUANA, BAJA CALIFORNIA", id: "7884263147" },
    "9ka9226f-3e07-48cc-81f6-23cb903e65g8": { nombre: "GABRIELA MONTES LARA", nivel: "PRIMARIA", promedio: "8.6", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "HERMOSILLO, SONORA", id: "7985263258" },
    "0la9226f-4e07-49cc-81f6-23cb903e65h9": { nombre: "HUGO ARMANDO NAVARRO", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MEXICALI, BAJA CALIFORNIA", id: "8086263369" },
    "1ma9226f-5e07-50cc-81f6-23cb903e65i0": { nombre: "SILVIA PATRICIA DUARTE", nivel: "SECUNDARIA", promedio: "8.8", conclusion: "2025-09-30", emision: "2025-10-05", lugar: "ZAPOPAN, JALISCO", id: "8187263470" },
    "2na9226f-6e07-51cc-81f6-23cb903e65j1": { nombre: "OMAR ALEJANDRO VAZQUEZ", nivel: "PRIMARIA", promedio: "8.1", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "TOLUCA, ESTADO DE MEXICO", id: "8288263581" },
    "3oa9226f-7e07-52cc-81f6-23cb903e65k2": { nombre: "MONICA ALEJANDRA RANGEL", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "DURANGO, DURANGO", id: "8389263692" },
    "4pa9226f-8e07-53cc-81f6-23cb903e65l3": { nombre: "FELIPE DE JESUS GOMEZ", nivel: "SECUNDARIA", promedio: "8.9", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "PUEBLA, PUEBLA", id: "8490263703" },
    "5qa9226f-9e07-54cc-81f6-23cb903e65m4": { nombre: "YOLANDA REYES FUENTES", nivel: "PRIMARIA", promedio: "8.4", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "PACHUCA, HIDALGO", id: "8591263814" },
    "6ra9226f-0e07-55cc-81f6-23cb903e65n5": { nombre: "RAUL SANTIAGO ORTIZ", nivel: "SECUNDARIA", promedio: "8.6", conclusion: "2025-06-18", emision: "2025-06-25", lugar: "MORELIA, MICHOACAN", id: "8692263925" },
    "7sa9226f-1e07-56cc-81f6-23cb903e65o6": { nombre: "ESTHER LILIA MORALES", nivel: "SECUNDARIA", promedio: "9.2", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "OAXACA, OAXACA", id: "8793264036" },
    "8ta9226f-2e07-57cc-81f6-23cb903e65p7": { nombre: "ALFONSO HERRERA SOSA", nivel: "PRIMARIA", promedio: "8.0", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CELAYA, GUANAJUATO", id: "8894264147" },
    "9ua9226f-3e07-58cc-81f6-23cb903e65q8": { nombre: "IRMA GRACIELA OROZCO", nivel: "SECUNDARIA", promedio: "8.7", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CANCUN, QUINTANA ROO", id: "8995264258" },
    "0va9226f-4e07-59cc-81f6-23cb903e65r9": { nombre: "MANUEL ALBERTO PLATA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "TAMPICO, TAMAULIPAS", id: "9096264369" },
    "1wa9226f-5e07-60cc-81f6-23cb903e65s0": { nombre: "DIANA LAURA MEDINA", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-07-04", emision: "2025-07-10", lugar: "VILLAHERMOSA, TABASCO", id: "9197264470" },
    "2xa9226f-6e07-61cc-81f6-23cb903e65t1": { nombre: "SERGIO ARTURO CALVILLO", nivel: "SECUNDARIA", promedio: "8.8", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CUERNAVACA, MORELOS", id: "9298264581" },
    "3ya9226f-7e07-62cc-81f6-23cb903e65u2": { nombre: "ARACELI SANTOS BRAVO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "XALAPA, VERACRUZ", id: "9399264692" },
    "4za9226f-8e07-63cc-81f6-23cb903e65v3": { nombre: "JOEL ISMAEL CISNEROS", nivel: "PRIMARIA", promedio: "8.2", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CAMPECHE, CAMPECHE", id: "9400264703" },
    "5ab9226f-9e07-64cc-81f6-23cb903e65w4": { nombre: "MIGUEL ANGEL TOVAR", nivel: "SECUNDARIA", promedio: "8.4", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CIUDAD JUAREZ, CHIHUAHUA", id: "9501264814" },
    "6bc9226f-0e07-65cc-81f6-23cb903e65x5": { nombre: "LUCIA FERNANDA VEGA", nivel: "SECUNDARIA", promedio: "9.3", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MAZATLAN, SINALOA", id: "9602264925" },
    "7cd9226f-1e07-66cc-81f6-23cb903e65y6": { nombre: "DANIEL EDUARDO PARRA", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-03-22", emision: "2025-03-30", lugar: "ENSENADA, BAJA CALIFORNIA", id: "9703265036" },
    "8de9226f-2e07-67cc-81f6-23cb903e65z7": { nombre: "KARLA VANESSA LOPEZ", nivel: "SECUNDARIA", promedio: "8.6", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CHETUMAL, QUINTANA ROO", id: "9804265147" },
    "9ef9226f-3e07-68cc-81f6-23cb903e65a8": { nombre: "FERNANDO SOLARES GIL", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "GUADALUPE, NUEVO LEON", id: "9905265258" },
    "0fg9226f-4e07-69cc-81f6-23cb903e65b9": { nombre: "ADRIAN MARCELO GUAJARDO", nivel: "PRIMARIA", promedio: "8.9", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "SAN NICOLAS, NUEVO LEON", id: "1006265369" },
    "1gh9226f-5e07-70cc-81f6-23cb903e65c0": { nombre: "TERESA DE JESUS ROQUE", nivel: "SECUNDARIA", promedio: "8.7", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "APODACA, NUEVO LEON", id: "1017265470" },
    "2hi9226f-6e07-71cc-81f6-23cb903e65d1": { nombre: "RODRIGO GAONA MEZA", nivel: "SECUNDARIA", promedio: "8.1", conclusion: "2025-12-01", emision: "2025-12-05", lugar: "MANZANILLO, COLIMA", id: "1028265581" },
    "3ij9226f-7e07-72cc-81f6-23cb903e65e2": { nombre: "SARA ELENA DELGADO", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "LA PAZ, BAJA CALIFORNIA SUR", id: "1039265692" },
    "4jk9226f-8e07-73cc-81f6-23cb903e65f3": { nombre: "ESTEBAN QUINTERO ROSAS", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CHILPANCINGO, GUERRERO", id: "1040265703" },
    "5kl9226f-9e07-74cc-81f6-23cb903e65g4": { nombre: "GLORIA ESTRELLA LUNA", nivel: "SECUNDARIA", promedio: "9.4", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "TUXTLA GUTIERREZ, CHIAPAS", id: "1051265814" },
    "6lm9226f-0e07-75cc-81f6-23cb903e65h5": { nombre: "VICTOR MANUEL ALVAREZ", nivel: "PRIMARIA", promedio: "8.6", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "TAPACHULA, CHIAPAS", id: "1062265925" },
    "7mn9226f-1e07-76cc-81f6-23cb903e65i6": { nombre: "PATRICIA NOEMI JUAREZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "COSTA RICA, SINALOA", id: "1073266036" },
    "8no9226f-2e07-77cc-81f6-23cb903e65j7": { nombre: "ARMANDO LARA VALDEZ", nivel: "SECUNDARIA", promedio: "8.8", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CULIACAN, SINALOA", id: "1084266147" },
    "9op9226f-3e07-78cc-81f6-23cb903e65k8": { nombre: "XIMENA ALEJANDRA RUIZ", nivel: "PRIMARIA", promedio: "8.0", conclusion: "2025-01-20", emision: "2025-01-25", lugar: "URUAPAN, MICHOACAN", id: "1095266258" },
    "0pq9226f-4e07-79cc-81f6-23cb903e65l9": { nombre: "GUSTAVO ADOLFO INFANTE", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "ZACATECAS, ZACATECAS", id: "1106266369" },
    "1qr9226f-5e07-80cc-81f6-23cb903e65m0": { nombre: "LORENA ISABEL BERNAL", nivel: "SECUNDARIA", promedio: "9.0", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "FRESNILLO, ZACATECAS", id: "1117266470" },
    "2rs9226f-6e07-81cc-81f6-23cb903e65n1": { nombre: "IGNACIO LOPEZ TARSO", nivel: "PRIMARIA", promedio: "8.4", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CORDOBA, VERACRUZ", id: "1128266581" },
    "3st9226f-7e07-82cc-81f6-23cb903e65o2": { nombre: "MIRIAM LIZBETH GOMEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "ORIZABA, VERACRUZ", id: "1139266692" },
    "4tu9226f-8e07-83cc-81f6-23cb903e65p3": { nombre: "ERNESTO ALONSO REYES", nivel: "SECUNDARIA", promedio: "8.2", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MINATITLAN, VERACRUZ", id: "1140266703" },
    "5uv9226f-9e07-84cc-81f6-23cb903e65q4": { nombre: "PAOLA CRISTINA SALAS", nivel: "PRIMARIA", promedio: "8.9", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "COATZACOALCOS, VERACRUZ", id: "1151266814" },
    "6vw9226f-0e07-85cc-81f6-23cb903e65r5": { nombre: "JACOBO ZABLUDOVSKY", nivel: "SECUNDARIA", promedio: "8.6", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CIUDAD DE MEXICO, CDMX", id: "1162266925" },
    "7wx9226f-1e07-86cc-81f6-23cb903e65s6": { nombre: "NORMA ANGELICA PEÑA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "GOMEZ PALACIO, DURANGO", id: "1173267036" },
    "8xy9226f-2e07-87cc-81f6-23cb903e65t7": { nombre: "TOMAS DE JESÚS LÓPEZ", nivel: "PRIMARIA", promedio: "8.3", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "JIUTEPEC, MORELOS", id: "1184267147" },
    "9yz9226f-3e07-88cc-81f6-23cb903e65u8": { nombre: "ANDREA MICHELLE MORA", nivel: "SECUNDARIA", promedio: "9.1", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "METEPEC, ESTADO DE MEXICO", id: "1195267258" },
    "0za9226f-4e07-89cc-81f6-23cb903e65v9": { nombre: "BENJAMIN FRANKLIN RUIZ", nivel: "SECUNDARIA", promedio: "8.4", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CHOLULA, PUEBLA", id: "1206267369" },
    "1ab9226f-5e07-90cc-81f6-23cb903e65w0": { nombre: "GUADALUPE VICTORIA MARIN", nivel: "PRIMARIA", promedio: "8.7", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "SAN JUAN DEL RIO, QRO", id: "1217267470" }
};
























































































































































































































    








































































































































































































