var recordset = [
  { id:'1', locat: '2115315', type: 'Bautizo', rmsID: 'TH-1951-23240-52713-77', title: 'Carúpano - Santa Rosa 1890-91, 1908-12', size: 2993 },
  { id:'2', locat: '2115315', type: 'Defuncion', rmsID: 'M9HM-RM5', title: 'Carúpano - Santa Catalina 1920-1938', size: 120 },
  { id:'3', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJ3', title: 'Guiria - Inmaculada Concepción 1881-1898', size: 120 },
  { id:'4', locat: '2115315', type: 'Matrimonio', rmsID: 'M94X-9TY', title: 'Carúpano - Santa Rosa 1896-1913', size: 108 },
  { id:'5', locat: '2423652', type: 'Matrimonio', rmsID: 'M9H9-9F8', title: 'Guiria - Inmaculada Concepción 1862-1907', size: 150 },
  { id:'6', locat: '2104138', type: 'Bautizo', rmsID: 'TH-1942-23241-36297-62', title: 'Río Caribe - San Miguel 1891-1927', size: 0 },
  { id:'7', locat: '2104138', type: 'Matrimonio', rmsID: 'M94B-F7F', title: 'Río Caribe - San Miguel 1907-1951', size: 271 },
  { id:'9', locat: '2118623', type: 'Bautizo', rmsID: 'M99T-ZY2', title: 'El Pilar - Nuestra Señora del Pilar 1832-1836', size: 0 },
  { id:'10', locat: '2115315', type: 'Bautizo', rmsID: 'M94X-9TN', title: 'Carúpano - Santa Rosa 1925-1928', size: 220 },
  { id:'11', locat: '2115315', type: 'Bautizo', rmsID: 'M9HM-RMV', title: 'Carúpano - Santa Catalina 1921-1923', size: 161 },
  { id:'12', locat: '2115315', type: 'Matrimonio', rmsID: 'M94X-9TT', title: 'Carúpano - Santa Rosa 1874-1896', size: 157 },
  { id:'13', locat: '2115315', type: 'Matrimonio', rmsID: 'M9HM-RMP', title: 'Carúpano - Santa Catalina 1920-1946', size: 138 },
  { id:'14', locat: '445650', type: 'Matrimonio', rmsID: 'TH-909-65256-140773-14', title: 'Tucupita - Registro Civil 1944-1950', size: 0 },
  { id:'15', locat: '5366', type: 'Defuncion', rmsID: 'M99T-85P', title: 'Caicara - Santo Domingo 1912-1966', size: 83 },
  { id:'16', locat: '2423652', type: 'Matrimonio', rmsID: 'M9H9-9FD', title: 'Guiria - Inmaculada Concepción 1916-1944', size: 204 },
  { id:'17', locat: '2115315', type: 'Sin Imagen', rmsID: '', title: 'Carúpano - Todas las Parroquias ', size: 0 },
  { id:'18', locat: '2423652', type: 'Sin Imagen', rmsID: '', title: 'Guiria - Todas las Parroquias ', size: 0 },
  { id:'19', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SN1', title: 'Guiria - Inmaculada Concepción 1835-1850', size: 197 },
  { id:'20', locat: '5366', type: 'Defuncion', rmsID: 'TH-909-60370-81718-24', title: 'Caicara - Santo Domingo 1980-2014', size: 0 },
  { id:'21', locat: '1136041', type: 'Bautizo', rmsID: 'TH-909-83452-15137-1', title: 'La Asuncion - La Asuncion 1953', size: 33 },
  { id:'22', locat: '5366', type: 'Matrimonio', rmsID: 'M99T-852', title: 'Caicara - Santo Domingo 1895-1914', size: 0 },
  { id:'23', locat: '445650', type: 'Bautizo', rmsID: 'TH-1961-29382-15266-44', title: 'Tucupita - San Jose 1906, 1908-1910', size: 0 },
  { id:'24', locat: '5355', type: 'Bautizo', rmsID: 'TH-1961-29382-15266-44', title: 'Pedernales - San Isidro 1907, 1910', size: 0 },
  { id:'25', locat: '445650', type: 'Bautizo', rmsID: 'TH-1961-29382-15266-44', title: 'Tucupita - El Calvario Feb 1910', size: 0 },
  { id:'26', locat: '5355', type: 'Bautizo', rmsID: 'TH-1961-29382-15266-44', title: 'Macareo - Ermita Ene 1910', size: 0 },
  { id:'27', locat: '5355', type: 'Bautizo', rmsID: 'TH-1961-29382-15266-44', title: 'Macareito - Caserio Feb 1910', size: 0 },
  { id:'28', locat: '5355', type: 'Bautizo', rmsID: 'TH-1961-29382-15266-44', title: 'Curiapo - Santa Barbara Ene 1910', size: 0 },
  { id:'29', locat: '5355', type: 'Bautizo', rmsID: 'TH-1961-29382-15266-44', title: 'Amacuro - San Jose Ene 1910', size: 0 },
  { id:'30', locat: '5355', type: 'Bautizo', rmsID: 'TH-1961-29382-15266-44', title: 'La Horqueta - Caserio Jul 1910', size: 0 },
  { id:'31', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJM', title: 'Guiria - Inmaculada Concepción 1850-1862', size: 128 },
  { id:'32', locat: '2115315', type: 'Matrimonio', rmsID: 'M94X-9TP', title: 'Carúpano - Santa Rosa 1842-1847', size: 52 },
  { id:'33', locat: '2115315', type: 'Libros Historicos', rmsID: 'TH-909-63313-35349-35', title: 'Carúpano - Tavera Acosta ', size: 0 },
  { id:'34', locat: '5366', type: 'Sin Imagen', rmsID: '', title: 'Caicara - Todas las Parroquias ', size: 0 },
  { id:'35', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJ9', title: 'Guiria - Inmaculada Concepción 1862-1872', size: 182 },
  { id:'36', locat: '5368', type: 'Bautizo', rmsID: 'M99R-59M', title: 'Porlamar - Santisima Trinidad 1971-1975', size: 0 },
  { id:'37', locat: '2115315', type: 'Bautizo', rmsID: 'M94X-9TV', title: 'Carúpano - Santa Rosa 1929-1933', size: 255 },
  { id:'38', locat: '2115315', type: 'Bautizo', rmsID: 'M9HM-RM2', title: 'Carúpano - Santa Catalina 1925-1928', size: 203 },
  { id:'39', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJS', title: 'Guiria - Inmaculada Concepción 1872-1881', size: 250 },
  { id:'40', locat: '2115315', type: 'Bautizo', rmsID: 'M94X-9TJ', title: 'Carúpano - Santa Rosa 1928-1929', size: 107 },
  { id:'41', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJQ', title: 'Guiria - Inmaculada Concepción 1885-1893', size: 193 },
  { id:'42', locat: '2115315', type: 'Bautizo', rmsID: 'M9HM-RML', title: 'Carúpano - Santa Catalina 1928-1931', size: 200 },
  { id:'43', locat: '2961196', type: 'Bautizo', rmsID: 'M9MY-57K', title: 'Caracas - Santiago de Leon 1592-1616', size: 0 },
  { id:'44', locat: '2117896', type: 'Matrimonio', rmsID: 'M99Y-JC9', title: 'Punta de Piedras - San Simon 1890-1891', size: 6 },
  { id:'45', locat: '10990626', type: 'Matrimonio', rmsID: 'M9H9-9FN', title: 'Macuro - San Cristobal 1931-1940', size: 11 },
  { id:'46', locat: '10990626', type: 'Bautizo', rmsID: 'M9H9-9FF', title: 'Macuro - San Cristobal 1931-1942', size: 95 },
  { id:'47', locat: '2115315', type: 'Bautizo', rmsID: 'M94X-9TF', title: 'Carúpano - Santa Rosa 1920-1925', size: 181 },
  { id:'48', locat: '2115315', type: 'Matrimonio', rmsID: 'M9SF-PZL', title: 'Carúpano - Santa Rosa 1913-1940', size: 246 },
  { id:'49', locat: '2115315', type: 'Defuncion', rmsID: 'M94B-2RF', title: 'Carúpano - Santa Rosa 1918-1924', size: 163 },
  { id:'50', locat: '2104609', type: 'Bautizo', rmsID: 'M9C4-749', title: 'San Jose de Aerocuar - San Jose 1887-1893', size: 149 },
  { id:'51', locat: '2104609', type: 'Defuncion', rmsID: 'M9C4-746', title: 'San Jose de Aerocuar - San Jose 1909-1928', size: 22 },
  { id:'52', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJ7', title: 'Guiria - Inmaculada Concepción 1893-1897', size: 146 },
  { id:'53', locat: '2104609', type: 'Bautizo', rmsID: 'M9C4-74S', title: 'San Jose de Aerocuar - San Jose 1893-1907', size: 147 },
  { id:'54', locat: '2115491', type: 'Matrimonio', rmsID: 'M9H7-24X', title: 'Cariaco - San Felipe 1915-1957', size: 88 },
  { id:'55', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJW', title: 'Guiria - Inmaculada Concepción 1897-1907', size: 389 },
  { id:'56', locat: '2106125', type: 'Bautizo', rmsID: 'M9CH-PXH', title: 'Tunapuy - San Juan Bautista 1847-1850', size: 38 },
  { id:'57', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJ4', title: 'Guiria - Inmaculada Concepción 1907-1912', size: 196 },
  { id:'58', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJH', title: 'Guiria - Inmaculada Concepción 1912-1917', size: 160 },
  { id:'59', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJC', title: 'Guiria - Inmaculada Concepción 1917-1920', size: 112 },
  { id:'60', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJZ', title: 'Guiria - Inmaculada Concepción 1920-1926', size: 204 },
  { id:'61', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJ8', title: 'Guiria - Inmaculada Concepción 1926-1929', size: 214 },
  { id:'62', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJD', title: 'Guiria - Inmaculada Concepción 1929-1936', size: 249 },
  { id:'63', locat: '2947673', type: 'Bautizo', rmsID: 'TH-1942-20420-25838-95', title: 'Mexquitic de Carmona - San Miguel 1817-1821', size: 471 },
  { id:'64', locat: '2423652', type: 'Defuncion', rmsID: 'M9H9-9F6', title: 'Guiria - Inmaculada Concepción 1888-1941', size: 192 },
  { id:'65', locat: '2423652', type: 'Defuncion', rmsID: 'M9H9-9FX', title: 'Guiria - Inmaculada Concepción 1850-1862', size: 140 },
  { id:'66', locat: '2109974', type: 'Bautizo', rmsID: 'M948-VC5', title: 'Guaraunos - Guarauno 1892-1895', size: 92 },
  { id:'67', locat: '6916037', type: 'Defuncion', rmsID: 'TH-1951-20446-38322', title: 'Bocas - San Geronimo 1804-1815', size: 136 },
  { id:'68', locat: '2106125', type: 'Matrimonio', rmsID: 'M9CH-PXN', title: 'Tunapuy - San Juan Bautista 1894-1994', size: 136 },
  { id:'69', locat: '2947673', type: 'Matrimonio', rmsID: 'TH-1951-20470-16583-63', title: 'Mexquitic de Carmona - San Miguel 1778-1781', size: 317 },
  { id:'70', locat: '2106125', type: 'Defuncion', rmsID: 'M94D-BQF', title: 'Tunapuy - San Juan Bautista 1847-1850', size: 22 },
  { id:'71', locat: '442485', type: 'Bautizo', rmsID: 'M9CH-PX6', title: 'Guariquen - San Simon 1903-1918', size: 104 },
  { id:'72', locat: '2106125', type: 'Bautizo', rmsID: 'M9CH-PXD', title: 'Tunapuy - San Juan Bautista 1895-1904', size: 154 },
  { id:'73', locat: '2110398', type: 'Bautizo', rmsID: 'M9H7-DK9', title: 'Irapa - San Jose 1918-1939', size: 110 },
  { id:'74', locat: '2110398', type: 'Bautizo', rmsID: 'M9H7-DVB', title: 'Irapa - San Jose 1909-1911', size: 133 },
  { id:'75', locat: '2106125', type: 'Bautizo', rmsID: 'M9CH-PXX', title: 'Tunapuy - San Juan Bautista 1918-1919', size: 29 },
  { id:'76', locat: '2106125', type: 'Bautizo', rmsID: 'M9CH-PXF', title: 'Tunapuy - San Juan Bautista 1920-1937', size: 44 },
  { id:'77', locat: '2110398', type: 'Bautizo', rmsID: 'M9H7-DV1', title: 'Irapa - San Jose 1911-1913', size: 94 },
  { id:'78', locat: '2110398', type: 'Bautizo', rmsID: 'M9H7-DVR', title: 'Irapa - San Jose 1905-1907', size: 79 },
  { id:'79', locat: '2106575', type: 'Bautizo', rmsID: 'M9H7-DV5', title: 'Soro - San Jose 1899-1904', size: 35 },
  { id:'80', locat: '2106575', type: 'Bautizo', rmsID: 'M9H7-DVT', title: 'Soro - San Jose 1905-1936', size: 79 },
  { id:'81', locat: '2106125', type: 'Bautizo', rmsID: 'M99T-ZYV', title: 'Tunapuy - San Juan Bautista 1893-1967', size: 122 },
  { id:'82', locat: '5492', type: 'Defuncion', rmsID: 'M9M1-81V', title: 'Maroa - Registro Civil 1972', size: 12 },
  { id:'83', locat: '5492', type: 'Matrimonio', rmsID: 'M9M1-64J', title: 'Maroa - Registro Civil 1975', size: 11 },
  { id:'84', locat: '11582127', type: 'Matrimonio', rmsID: 'TH-909-87512-45273-60', title: 'El Valle - Nuestra Sra. del Valle 1978', size: 958 },
  { id:'85', locat: '2106125', type: 'Bautizo', rmsID: 'M9CH-PXZ', title: 'Tunapuy - San Juan Bautista 1889-1892', size: 92 },
  { id:'86', locat: '2106125', type: 'Sin Imagen', rmsID: '', title: 'Tunapuy - Todas las Parroquias ', size: 0 },
  { id:'87', locat: '2104138', type: 'Sin Imagen', rmsID: '', title: 'Río Caribe - Todas las Parroquias ', size: 0 },
  { id:'88', locat: '2106125', type: 'Bautizo', rmsID: 'M9CH-PXC', title: 'Tunapuy - San Juan Bautista 1867-1889', size: 192 },
  { id:'89', locat: '5366', type: 'Bautizo', rmsID: 'TH-909-57048-19138-53', title: 'Caicara - Santo Domingo 1915-1926', size: 751 },
  { id:'90', locat: '7940320', type: 'Libros Historicos', rmsID: 'TH-909-63319-103765-90', title: 'Valencia - Luis Alberto Sucre 1972', size: 650 },
  { id:'91', locat: '10990575', type: 'Matrimonio', rmsID: 'M9CH-PXQ', title: 'Yaguaraparo - San Juan Bautista 1889-1957', size: 117 },
];

var projects = [
  // '<tr><td>Vzla</td><td>Sucre</td><td>Soro</td><td>B</td><td>1905-1936</td></tr>',
  '<tr><td>    </td><td>Sucre</td><td>Rio Caribe</td><td>B</td><td>1891-1927</td></tr>'
  // '<tr><td>Méx</td><td>SL Potosi</td><td>Bocas</td><td>D</td><td>1804-1876</td></tr>',
];

var localidades = [ 
  { pais: 'Venezuela', code: 58,
      estados: [
        { name:'Sucre', code:293, 
          ciudades : [
            {name:'Cariaco', code:6}, 
            {name:'Carúpano', code:1}, 
            {name:'El Pilar', code:7},
            {name:'Guaraunos', code:22},
            {name:'Guariquén', code:31},
            {name:'Güiria', code:2},
            {name:'Irapa', code:27},
            {name:'Macuro', code:21},
            {name:'Río Caribe', code:3},
            {name:'San José de Areocuar', code:5},
            {name:'Soro', code:28},
            {name:'Tunapuy', code:4},
            {name:'Yaguaraparo', code:33},
          ]
        },
	      // { name:'Dtto. Federal', code:212, 
       //    ciudades : [
       //      {name:'Caracas', code:26},
       //    ]
       //  },
       { name:'Amazonas', code:248, 
          ciudades : [
            {name:'Maróa', code:29},
          ]
        },
        { name:'Carabobo', code:241, 
          ciudades : [
            {name:'Valencia', code:32},
          ]
        },
        { name:'Delta Amacuro', code:287, 
          ciudades : [
            {name:'Amacuro', code:18},
            {name:'Curiapo', code:13},
            {name:'La Horqueta', code:15},
            {name:'Macareito', code:14},
            {name:'Macareo', code:17},
            {name:'Pedernales', code:16},
            {name:'Tucupita', code:8},
            
          ]
        },
        { name:'Monagas', code:291, 
          ciudades : [
            {name:'Caicara', code:9},
          ]
        },
        { name:'Nueva Esparta', code:295, 
          ciudades : [
            {name:'El Valle', code:30},
            {name:'La Asunción', code:10},
            {name:'Porlamar', code:12},
            {name:'Punta de Piedras', code:19},
          ]
        }
      ]
    },
  { pais: 'México', code: 52,
      estados: [
        { name: "San Luis Potosi", code: 444,
          ciudades: [
            {name:'Bocas', code: 24},
            {name:'Mexquitic de Carmona', code: 23},
          ]
        }
      ]
    }
 ];


// Cambiar fecha de actualizacion
document.getElementById('update').innerHTML = "Oct 01, 2023";

// Extrae el año actual y lo agrega al copyright
const fechaActual = new Date();
const actualYear = fechaActual.getFullYear();
document.getElementById("copyright").textContent = "© 2020 - " + actualYear;


var updates = [
  '<li class="list-group-item"><small>10/01/2023 | Completado  Matrimonios de Rio Caribe 1907-1951 San Miguel Arcangel.</small></li>',
  '<li class="list-group-item"><small>04/05/2023 | Agregado  Matrimonios de Yaguaraparo 1889-1957 San Juan Bautista.</small></li>',
  '<li class="list-group-item"><small>04/09/2023 | Se agrega libro de Paleografia a la Nueva Biblioteca de Libros.</small></li>',
  '<li class="list-group-item"><small>04/08/2023 | Agregado Libro Historico de Apellidos de Valencia 1972.</small></li>',
  '<li class="list-group-item"><small>04/05/2023 | Agregado hijos de Matrimonios de Tunapuy 1894-1999 San Juan Bautista.</small></li>',
  '<li class="list-group-item"><small>03/14/2023 | Agregado Tomo # de Soro - Bautizos 1899-1904 San Jose.</small></li>',
  '<li class="list-group-item"><small>02/25/2023 | Agregado Tomo # de Caicara - Bautizos 1915-1926 Santo Domingo.</small></li>',
  '<li class="list-group-item"><small>02/18/2023 | Agregado Tomo # de Tunapuy - Bautizos 1867-1889 San Juan Bautista.</small></li>',
  '<li class="list-group-item"><small>02/11/2023 | Creacion de Padres de multiples hijos en Tunapuy y Guiria.</small></li>',
  '<li class="list-group-item"><small>01/14/2023 | Agregado Tomo # de Tunapuy - Bautizos 1889-1892 San Juan Bautista.</small></li>',
  '<li class="list-group-item"><small>12/24/2022 | Agregado El Valle de Nueva Esparta - Matrimonios 1978 Ntra. Sra. del Valle</small></li>',
  '<li class="list-group-item"><small>12/24/2022 | Agregado Maroa, Amazonas - Matrimonios 1975 Registro Civil.</small></li>',
  '<li class="list-group-item"><small>12/24/2022 | Agregado Maroa, Amazonas - Defunciones 1972 Registro Civil.</small></li>',
  '<li class="list-group-item"><small>12/16/2022 | Agregado Tomo # de Tunapuy - Defunciones 1893 - 1967 San Juan Bautista.</small></li>',
  '<li class="list-group-item"><small>11/26/2022 | Agregado Tomo 7 de Irapa - Bautizos 1911-1913 San Juan Bautista.</small></li>',
  '<li class="list-group-item"><small>11/26/2022 | Agregado Tomo 4 de Irapa - Bautizos 1905-1907 San Juan Bautista.</small></li>',
  '<li class="list-group-item"><small>11/16/2022 | Agregado Tomo 7 de Irapa - Bautizos 1911-1913 San Juan Bautista.</small></li>',
  '<li class="list-group-item"><small>11/08/2022 | Agregado Tomo 7 de Tunapuy - Bautizos 1920-1937 San Juan Buatista.</small></li>',
  '<li class="list-group-item"><small>10/01/2022 | Agregado Tomo # de Irapa - Bautizos 1909-1911 San José.</small></li>',
  '<li class="list-group-item"><small>10/01/2022 | Agregado Tomo # de Tunapuy - Bautizos 1918-1919 San Juan Bautista.</small></li>',
  '<li class="list-group-item"><small>09/16/2022 | Agregado Tomo ? de Irapa - Bautizos 1918-1939 San José.</small></li>',
  '<li class="list-group-item"><small>07/28/2022 | Agregado Tomo 4 de Tunapuy - Bautizos 1895-1904 San Juan Bautista.</small></li>',
  '<li class="list-group-item"><small>06/19/2022 | Agregado Tomo 6 de Tunapuy - Bautizos 1903-1918 San Juan Bautista.</small></li>',
  '<li class="list-group-item"><small>06/18/2022 | Agregado Tomo 2 de Tunapuy - Bautizos, Matrimonios y Defunciones 1847-1850 San Juan Bautista.</small></li>',
  '<li class="list-group-item"><small>05/15/2022 | Agregado Tomo 19 de Tunapuy - Matrimonios 1894-1999 San Juan Bautista.</small></li>',
  '<li class="list-group-item"><small>05/14/2022 | Removida funcionalidad de ver imagen del evento en FamilySearch.</small></li>',
  '<li class="list-group-item"><small>04/09/2022 | Finalizado Tomo # de Carupano - Bautizos 1890-1912 Santa Rosa.</small></li>',
  '<li class="list-group-item"><small>04/08/2022 | Agregado - Tomo 3 de Matrimonios 1778-17811 San Miguel.</small></li>',  
  '<li class="list-group-item"><small>04/05/2022 | Finalizado - Tomo # de Bocas, San Luis Potosi, Mexico - Defunciones 1804-1815 Parroquia San Geronimo.</small></li>',
  '<li class="list-group-item"><small>03/28/2022 | Finalizado - Tomo 1 de Guaraunos, Sucre, Venezuela - Bautizos 1892-1895 Parroquia Guarauno.</small></li>',
  '<li class="list-group-item"><small>03/19/2022 | Finalizado - Tomo 2 de Defunciones 1850-1962 Inmaculada Concepción.</small></li>',
  '<li class="list-group-item"><small>02/28/2022 | Agregada funcionalidad para ver tabla en pantalla completa.</small></li>',
  '<li class="list-group-item"><small>02/26/2022 | Finalizado - Tomo 1 de Defunciones 1888-1941 Inmaculada Concepción.</small></li>',
  '<li class="list-group-item"><small>02/19/2022 | Agregado - Libro de Imágenes - Bautizos 1817-1821 San Miguel.</small></li>',
  '<li class="list-group-item"><small>02/19/2022 | Incluido - México en Índice Genealógico.</small></li>',
  '<li class="list-group-item"><small>02/13/2022 | Finalizado - Tomo 14 de Guiria - Bautizos 1929-1936 Inmaculada Concepción.</small></li>',
  '<li class="list-group-item"><small>02/03/2022 | Finalizado - Tomo 13 de Guiria -  Bautizos 1926-1929 Inmaculada Concepción.</small></li>',
  '<li class="list-group-item"><small>01/24/2022 | Agregada página con Lista de <a href="../nombres/">Nombres</a> en Índice Genealógico.</small></li>',
  '<li class="list-group-item"><small>01/23/2022 | Finalizado - Tomo 12 de Guiria -  Bautizos 1920-1926 Inmaculada Concepción.</small></li>',
  '<li class="list-group-item"><small>01/12/2022 | Finalizado - Tomo 11 de Guiria -  Bautizos 1917-1920 Inmaculada Concepción.</small></li>',
  '<li class="list-group-item"><small>01/11/2022 | Agregados - Bautizos 1902-1904 Santa Rosa - Carupano.</small></li>',
  '<li class="list-group-item"><small>01/03/2021 | Finalizado Tomo 10 de Bautizos 1912-1914.</small></li>',
  '<li class="list-group-item"><small>01/01/2022 | Agregada página con Lista de <a href="../apellidos/">Apellidos</a> en Índice Genealógico.</small></li>',
  '<li class="list-group-item"><small>12/25/2021 | Finalizado Tomo 9 de Bautizos 1907-1912.</small></li>',
  '<li class="list-group-item"><small>12/24/2021 | Primeros 10.000 índices cambiados de imágenes a registros.</small></li>',
  '<li class="list-group-item"><small>12/13/2021 | Alcanzados los 50 mil índices.</small></li>',
  '<li class="list-group-item"><small>01/28/2021 | Se abre una página de <a href="https://www.facebook.com/IndiceGenealogico/">Facebook</a> para Índice Genealógico.</small></li>',
  '<li class="list-group-item"><small>10/25/2020 | Se da inicio al proyecto de Índice Genealógico.</small></li>', 
];