// folios.js - Base de datos completa de certificados INEA (60 Registros)
const baseDatos = {
    // --- FOLIOS ORIGINALES (UUID) ---
    "9da9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "ANTONIO EMBARCADERO NAVA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "TLALNEPANTLA, EDO MEX", id: "0410255274" },
    "8ea8226f-5f07-41cc-81f6-23cb903e7502": { nombre: "NANCY KARINA RODRIGUEZ DUEÑES", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "SALTILL0, COAHUILA", id: "0511255380" },
    "8da9226f-6e07-41cc-81f6-23cb903e6591": { nombre: "FANNY SANCHEZ ISIDORO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MIGUEL HIDALGO, CDMX", id: "1420256273" },
    "7da9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "JOAQUIN GONZALEZ GONZALEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "COATZACOALCOS, VER", id: "1319256162" },
    "2da9226f-6e07-41cc-81f6-23cb903e6333": { nombre: "RICARDO AVILA HUERTA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "TLAXCALA, TLAXCALA", id: "1521256384" },
    "0da9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "MACARIO SANTIAGO DEL ANGEL", nivel: "PRIMARIA", promedio: "8.5", conclusion: "15-11-2025", emision: "20-11-2025", lugar: "TEMPOAL, VERACRUZ", id: "1622256495" },
    "4da9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "RENE ALONSO CHAVEZ LUGO", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2015-10-15", emision: "2015-10-20", lugar: "CHIHUAHUA, CHIHUAHUA", id: "1723256506" },
    "3da9226f-6e07-41cc-81f6-23cb903e6593": { nombre: "MARTHA PATRICIA BRIONES GONZALEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-10-15", emision: "2025-10-20", lugar: "SALTILLO, COAHUILA", id: "1824256617" },
    "2da9226f-6e07-41cc-81f6-23cb903e6590": { nombre: "CARLOS MICHAEL GARCIA LIMA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-10-15", emision: "2025-10-20", lugar: "PUEBLA, PUEBLA", id: "1925256728" },
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
    "1na8226f-6e07-41cc-81f6-23cb903e6091": { nombre: "MARIA DE LOURDES RAMOS LOPEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MARTINEZ DE LA TORRE, VER", id: "3137258050" },
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
     "0aa9226f-6e07-99cc-81f6-23cb903e659-": { nombre: "-ANUEL DE JESUS HERNANDEZ MARTINEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "COATZACOALCOS, VERACRUZ", id: "4854259917" },
   "9da9226f-6e088-41cc-81f6-23cb903e6593": { nombre: "EDUARDO MARISCAL RODRIGUEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2023-11-15", emision: "2023-11-20", lugar: "TALA,JALISCO", id: "4955260028" },
    "9da9226f-6e888-41cc-81f6-23cb903e6593": { nombre: "----------", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "SAN LUIS POTOSI", id: "5056260139" },
    "9da9226f-6e878-41cc-81f6-23cb999e6593": { nombre: "PEDRO GUZMAN CHAGALA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "SAN ANDRES TUXTLA, VER", id: "5157260250" },
    "9da9226f-6667-41cc-81f6-23cb903e6593": { nombre: "YARET ZAMAHI CORPUS SENA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "TAMAULIPAS, TAMAULIPAS", id: "5258260361" },
   "9da922ff-6667-41cc-81f6-23cb903e6593": { nombre: "MANUEL MARTINEZ GONZALEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NUEVO LEON", id: "5359260472" },
    "9da922ff-6667-410c-80f6-23cb903e6592": { nombre: "CANDELARIA SANCHEZ TREJO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "POZA RICA, VERACRUZ", id: "5460260583" },
   "9da9226f-6e07-8888-81f6-23cb903e6593": { nombre: "VALERIA MONSERRAT MACIAS MENDEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "MONTERREY, NUEVO LEON", id: "5561260694" },
    "1da9226f-6e07-41cc-81f6-888b903e6593": { nombre: "ANTONIA CRUZ RAMOS", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-09-20", emision: "2025-09-25", lugar: "REYNOSA, TAMAULIPAS", id: "5662260805" },
     "6da9226f-6e07-41cc-81f6-23cb903e6666": { nombre: "RAMIRO OCHOA BRICEÑO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "REYNOSA, TAMAULIPAS", id: "5763260916" },
   "9da92666-6e07-41cc-81f6-23cb903e6593": { nombre: "VICTORIA NAYELI JULIAN LOPEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-12-15", emision: "2025-11-20", lugar: "TLAQUEPAQUE, JALISCO", id: "5864261027" },
   "0888226f-6e07-41cc-81f6-23cb903e6591": { nombre: "JUAN SALVADOR SANTIAGO VALDERAMA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "GUADALAJARA, JALISCO", id: "5965261138" },
    "9da9226f-6e07-41cc-81f6-999b903e6598": { nombre: "VICTOR MANUEL ESQUIVEL JUAREZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "COAHUILA, COAHUILA", id: "6066261249" },
   "3da9226f-6e07-41cc-8155-23cb903e6593": { nombre: "ISABEL MILLAN", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "YECAPIXTLA, MORELOS", id: "6167261360" },
    "folio-inf-51": { nombre: "RAMON VALDEZ SOTO", nivel: "SECUNDARIA", promedio: "7.8", conclusion: "2025-02-28", emision: "2025-03-04", lugar: "DURANGO, DGO", id: "6268261471" },
    "folio-inf-52": { nombre: "IRENE CALDERA M.", nivel: "SECUNDARIA", promedio: "9.5", conclusion: "2025-03-02", emision: "2025-03-07", lugar: "MAZATLAN, SIN", id: "6369261582" },
    "folio-inf-53": { nombre: "RUBEN DARIO LIMA", nivel: "PRIMARIA", promedio: "8.4", conclusion: "2025-03-05", emision: "2025-03-10", lugar: "ENSENADA, BC", id: "6470261693" },
    "folio-inf-54": { nombre: "KARINA MENA ROJO", nivel: "SECUNDARIA", promedio: "8.7", conclusion: "2025-03-08", emision: "2025-03-13", lugar: "CELAYA, GTO", id: "6571261804" },
    "folio-inf-55": { nombre: "SERGIO OSORIO T.", nivel: "SECUNDARIA", promedio: "7.9", conclusion: "2025-03-11", emision: "2025-03-16", lugar: "REYNOSA, TAMPS", id: "6672261915" },
    "folio-inf-56": { nombre: "PAOLA NUÑEZ REAL", nivel: "PRIMARIA", promedio: "9.1", conclusion: "2025-03-14", emision: "2025-03-19", lugar: "TORREON, COAH", id: "6773262026" },
    "folio-inf-57": { nombre: "MANUEL IBARRA VAL", nivel: "SECUNDARIA", promedio: "8.0", conclusion: "2025-03-17", emision: "2025-03-22", lugar: "CIUDAD JUAREZ", id: "6874262137" },
    "folio-inf-58": { nombre: "GLORIA ESTEFAN O.", nivel: "SECUNDARIA", promedio: "9.6", conclusion: "2025-03-20", emision: "2025-03-25", lugar: "GUADALAJARA, JAL", id: "6975262248" },
    "folio-inf-59": { nombre: "ALVARO OBREGON S.", nivel: "PRIMARIA", promedio: "7.4", conclusion: "2025-03-23", emision: "2025-03-28", lugar: "TAPACHULA, CHIS", id: "7076262359" },
    "folio-inf-60": { nombre: "LORENA HERRERA P.", nivel: "SECUNDARIA", promedio: "8.9", conclusion: "2025-03-25", emision: "2025-03-30", lugar: "ACAPULCO, GRO", id: "7177262470" }

};

























































































































































































































