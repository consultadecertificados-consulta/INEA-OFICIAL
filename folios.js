// folios.js - Base de datos completa de certificados INEA (60 Registros)
const baseDatos = {
   
     "3da9226f-6e07-41cc-8155-23cb903e659311": { nombre: "CLAUDIA LIZBETH GARCIA CHAVEZ", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-07-15", emision: "2025-07-20", lugar: "MONTERREY, NUEVO LEON", id: "6167261360" },
    "3da9226f-6e07-41cc-8155-23cb9000000011": { nombre: "MARCO ANTONIO GONZALEZ HERNANDEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-07-15", emision: "2025-07-20", lugar: "VALLE HERMOSO, TAMAULIPAS", id: "6268261471" },
    "3da9226f-6e07-41cc-8155-23cb90008765110": { nombre: "VICTOR OTILIO TRUJILLO GUZMAN", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2018-07-15", emision: "2018-07-20", lugar: "TONALÁ, CHIAPAS", id: "6369261582" },
    "3da9226f-6e07-41cc-8155-23cb9000888811": { nombre: "JOSE LUIS GUERRERO GOMEZ", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2015-07-15", emision: "2015-07-20", lugar: "TIJUANA, BAJA CALIFORNIA", id: "6470261693" },
    "3da9226f-6e07-41cc-8155-23cb9000050911": { nombre: "JUANA LOPEZ DE LA CRUZ", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2021-07-15", emision: "2021-07-20", lugar: "CANCUN, QUINTANA ROO", id: "6571261804" },
    "3da9226f-6e07-41cc-8155-23cb90000508110": { nombre: "MOISES ABRAHAM SAVIÑON DOMINGUEZ", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2015-07-15", emision: "2015-07-20", lugar: "CANCÚN, QUINTANA ROO", id: "6672261915" },
    "3da9226f-6e07-41cc-8155-23cb90000505110": { nombre: "ISRAEL TURRADO CONTRERAS", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-07-15", emision: "2025-07-20", lugar: "TLAJOMULCO DE ZÚÑIGA, JALISCO", id: "6773262026" },
    "3da9226f-6e07-41cc-8155-23cb90000501112": { nombre: "MARIA ISABEL GUEVARA PESINA", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2020-07-15", emision: "2020-07-20", lugar: "REYNOSA, TAMAULIPAS", id: "6874262137" },
    "3da9226f-6e07-41cc-8155-23cb90000502119": { nombre: "ROSENDA VELAZQUEZ MARTINEZ", nivel: "PRIMARIA", promedio: "8.5", conclusion: "2025-07-15", emision: "2025-07-20", lugar: "VERACRUZ, VER", id: "6975262248" },
    "2da9226f-6e07-41cc-81f6-23cb903e65c01198": { nombre: "JAVIER FRANCISCO HERNANDEZ HERNANDEZ", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2025-07-15", emision: "2025-07-20", lugar: "CHIMALHUACAN, EDO MEX", id: "7076262359" },
    "2da9226f-6e07-41cc-81f6-23cb903e65y01154": { nombre: "SOFIA SANCHEZ REYNA", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2015-07-15", emision: "2015-07-20", lugar: "LAS CHOAPAS, VER", id: "7177262470" },
   // --- NUEVOS REGISTROS SIMULADOS (50 ADICIONALES) ---
    "a1b2c3d4-e5f6-47a8-b9c0-1d2e3f4a5b6ll": { nombre: "LAURA JUAREZ HERNANDEZ", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2015-07-15", emision: "2015-07-20", lugar: "TIJUANA, BC", id: "7278262471" },
    "b2c3d4e5-f6a7-48b9-c0d1-2e3f4a5b6c72": { nombre: "SERGIO SAMUEL SIMBRON SANTES", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2025-07-15", emision: "2025-07-20", lugar: "REYNOSA, TAMAULIPAS", id: "7379262582" },
    "c3d4e5f6-a7b8-49c0-d1e2-3f4a5b6c7d00": { nombre: "IMELDA LEYVA VAZQUEZ", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2018-07-15", emision: "2018-07-20", lugar: "CULIACÁN, SINALOA", id: "7480262693" },
    "d4e5f6a7-b8c9-40d1-e2f3-4a5b6c7d8e94": { nombre: "RICARDO ELISEO ARMENTA RAMIREZ", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2022-07-15", emision: "2022-07-20", lugar: "SARIC, SONORA", id: "7581262804" },
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
    "3b4c5d6e-7f89-490a-1b2c-3d4e5f6a7b83": { nombre: "ANALLELY ABARCA RAMOS", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2018-11-15", emision: "2018-11-20", lugar: "TLAJOMULCO DE ZUÑIGA, JALISCO", id: "1420266003" },
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
    "8c9d0e1f-3a3b-44c5-d6e7-f890a1b2c3d88": { nombre: "MARCO ANTONIO CASTILLO VALENCIA", nivel: "SECUNDARIA", promedio: "8.3", conclusion: "2025-07-15", emision: "2025-07-20", lugar: "IZTAPALAPA, CDMX", id: "2935267658" },
    "9d0e1f2a-4b4c-45d6-e7f8-90a1b2c3d4e9": { nombre: "ISMAEL OSVALDO RUIZ SALDAÑA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2019-11-15", emision: "2019-11-20", lugar: "COATEPEC, VERACRUZ", id: "3036267769" },
    "0e1f2a3b-5c5d-46e7-f890-a1b2c3d4e5f0": { nombre: "ILIANA NAYELI VAZQUEZ SUAREZ", nivel: "SECUNDARIA", promedio: "9.0", conclusion: "2016-11-15", emision: "2016-11-20", lugar: "ZUMPANGO , ESTADO DE MÉXICO", id: "3137267870" },
     // --- SEGUNDA TANDA DE REGISTROS SIMULADOS (50 ADICIONALES) ---
    "f7a1b2c3-d4e5-4a6b-c7d8-e9f0a1b2c3d1": { nombre: "JORGE DE JESUS SANCHEZ RAMOS", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2017-11-15", emision: "2017-11-20", lugar: "PUEBLA, PUEBLA", id: "3238267981" },
    "e6b2c3d4-f5a6-4b7c-d8e9-f0a1b2c3d4e2": { nombre: "LUCERO IVETTE CANO RODRIGUEZ", nivel: "SECUNDARIA", promedio: "8.2", conclusion: "2015-11-15", emision: "2015-11-20", lugar: "CUAUTITLAN IZCALLI, ESTADO DE MEXICO", id: "3339268092" },
    "d5c3d4e5-a6f7-4c8d-e9f0-a1b2c3d4e5f3": { nombre: "MARGARITA MEDINA SANDOVAL", nivel: "SECUNDARIA", promedio: "8.2", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "ZAPOPAN, JALISCO", id: "3440268203" },
    "c4d4e5f6-b7a8-4d9e-f0a1-b2c3d4e5f6a4": { nombre: "RICARDO DANIEL FERNANDEZ MEDINA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "ZAPOPAN, JALISCO", id: "3541268314" },
    "b3e5f6a7-c8b9-4e0f-a1b2-c3d4e5f6a7b5": { nombre: "ISABEL GUADALUPE ESPINOZA CHAPA", nivel: "SECUNDARIA", promedio: "8.2", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "SAN JOSE GARCIA, NUEVO LEÓN", id: "3642268425" },
    "a2f6a7b8-d9c0-4f1a-b2c3-d4e5f6a7b8c6": { nombre: "DIEGO VENTURA ALFARO OVIEDO", nivel: "SECUNDARIA", promedio: "8.2", conclusion: "2018-11-15", emision: "2018-11-20", lugar: "MONTERREY, NL", id: "3743268536" },
    "91a7b8c9-e0d1-4a2b-c3d4-e5f6a7b8c9d7": { nombre: "TERESA DE JESUS ESTRADA ESTRADA", nivel: "PRIMARIA", promedio: "8.2", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "JUAREZ, NUEVO LEON", id: "3844268647" },
    "80b8c9d0-f1e2-4b3c-d4e5-f6a7b8c9d0e8": { nombre: "IRVING ALEJANDRO RIVERA LUNA", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2020-11-15", emision: "2020-11-20", lugar: "VENUSTIANO CARRANZA, CDMX", id: "3945268758" },
    "79c9d0e1-a2f3-4c4d-e5f6-a7b8c9d0e1f9": { nombre: "EVELIO DOMINGUEZ OSTO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2016-11-15", emision: "2016-11-20", lugar: "SANTIAGO TUXTLA, VERACRUZ", id: "4046268869" },
    "68d0e1f2-b3a4-4d5e-f6a7-b8c9d0e1f2a0": { nombre: "DONATO DOMINGUEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2015-08-23", emision: "2015-08-26", lugar: "SANTIAGO TUXTLA, VERACRUZ", id: "4147268970" },
    "57e1f2a3-c4b5-4e6f-a7b8-c9d0e1f2a3b1": { nombre: "MAYRA RODRIGUEZ CARRILLO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "ZUMPANGO, ESTADO DE MÉXICO", id: "4248269081" },
    "46f2a3b4-d5c6-4f7a-b8c9-d0e1f2a3b4c2": { nombre: "ROCIO ELIZABETH PLASCENCIA RAMIREZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2020-11-15", emision: "2020-11-20", lugar: "GUADALAJARA, JALISCO", id: "4349269192" },
    "35a3b4c5-e6d7-4a8b-c9d0-e1f2a3b4c5d3": { nombre: "BRIGIDA DELGADO RAMIREZ", nivel: "PRIMARIA", promedio: "8.2", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "GUADALUPE, NUEVO LEON", id: "4450269303" },
    "24b4c5d6-f7e8-4b9c-d0e1-f2a3b4c5d6e4": { nombre: "INGRID RUBY CONTRERAS RAMIREZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "CHAPALA, JALISCO", id: "4551269414" },
    "13c5d6e7-a8f9-4c0a-1b2c-3d4e5f6a7b85": { nombre: "JAVIER CABALLERO CARPIO", nivel: "PRIMARIA", promedio: "8.2", conclusion: "2022-11-15", emision: "2022-11-20", lugar: "TULTEPEC, ESTADO DE MÉXICO", id: "4652269525" },
    "02d6e7f8-b9a0-4d1b-2c3d-4e5f6a7b8c96": { nombre: "WILLIAM ALBEIRO LIÑAN ORNELAS", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "SAN NICOLAS DE LA GARZA, NUEVO LEON", id: "4753269636" },
    "91e7f890-c0b1-4e2c-3d4e-5f6a7b8c9d07": { nombre: "JOSE FRANCISCO GAETA SALGADO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2023-11-15", emision: "2023-11-20", lugar: "NAUCALPAN DE JUAREZ,EDO MEX", id: "4854269747" },
    "80f890a1-d1c2-4f3d-4e5f-6a7b8c9d0e18": { nombre: "CESAR DANILO LIÑAN ORNELAS", nivel: "SECUNDARIA", promedio: "8.6", conclusion: "2026-04-20", emision: "2026-04-27", lugar: "SAN NICOLAS DE LA GARZA, NUEVO LEON", id: "4955269858" },
    "79a90a1b-e2d3-4a4e-5f6a-7b8c9d0e1f29": { nombre: "MARIA SELENE TREJO RANGEL", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "REYNOSA, TAMAULIPAS", id: "5056269969" },
    "68b0b1c2-f3e4-4b5f-6a7b-8c9d0e1f2a30": { nombre: "JOSE LUIS HERNANDEZ GOMEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2020-11-15", emision: "2020-11-20", lugar: "NEZAHUALCÓYOTL, EDO MEX", id: "5157270070" },
    "57c1c2d3-a4f5-4c6a-7b8c-9d0e1f2a3b41": { nombre: "JOSE JOAQUIN VILLALOBOS MORENO", nivel: "SECUNDARIA", promedio: "6.8", conclusion: "14-06-2022", emision: "2022-06-14", lugar: "ECATEPEC, EDO MEX", id: "5258270181" },
    "46d2d3e4-b5a6-4d7b-8c9d-0e1f2a3b4c52": { nombre: "RENE SANTOS ARIAS", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2020-11-15", emision: "2020-11-20", lugar: "SOTEAPAN, VERACRUZ", id: "5359270292" },
    "35e3e4f5-c6b7-4e8c-9d0e-1f2a3b4c5d63": { nombre: "JAIR ANUAR ESQUIVEL AMBRIZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2024-11-15", emision: "2024-11-20", lugar: "TLALNEPANTLA,EDO MEX", id: "5460270403" },
    "24f4f5a6-d7c8-4f9d-0e1f-2a3b4c5d6e74": { nombre: "FRANSISCANO MARTINEZ CRISANTO", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2015-11-15", emision: "2015-11-20", lugar: "TEZONAPA, VERACRUZ", id: "5561270514" },
    "13a5a6b7-e8d9-4a0e-1f2a-3b4c5d6e7f85": { nombre: "OSCAR CORREA MIMILA", nivel: "SECUNDARIA", promedio: "8.2", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "ECATEPEC, EDO MEX", id: "5662270625" },
    "02b6b7c8-f9a0-4b1f-2a3b-4c5d6e7f8906": { nombre: "ANA MARIA SAMANIEGO CHAVEZ", nivel: "SECUNDARIA", promedio: "8.2", conclusion: "2025-11-15", emision: "2025-11-20", lugar: "GUADALUPE, NL", id: "5763270736" },
    "91c7c8d9-a0b1-4c2a-3b4c-5d6e7f890a17": { nombre: "MARCOS ELOY RAMOS HERNANDEZ", nivel: "SECUNDARIA", promedio: "8.5", conclusion: "2015-11-15", emision: "2015-11-20", lugar: "APODACA, NUEVO LEÓN", id: "5864270847" },
    "0d8d9e0-b1c2-4d3b-4c5d-6e7f890a1b28": { nombre: "GIOVANNI DAVID TOVAR SERVIN", nivel: "SECUNDARIA", promedio: "8.5", conclus






























































































































































































    



















































































































































































































































































































































































































    








































































































































































































