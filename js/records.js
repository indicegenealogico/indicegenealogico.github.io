var recordset = [
  { id: '1', locat: '2115315', type: 'Bautizo',    rmsID: 'TH-1951-23240-52713-77', title: 'Carúpano - Santa Rosa 1890-91, 1908-12', size: 729 },
	{ id: '2', locat: '2115315', type: 'Defuncion',  rmsID: 'M99B-7H4', title: 'Carúpano - Santa Catalina 1920-1938', size: 33 },
	{ id: '3', locat: '2423652', type: 'Bautizo',    rmsID: 'M9SM-SJ3', title: 'Guiria - Inmaculada Concpción 1881-1898', size: 0 },
	{ id: '4', locat: '2115315', type: 'Matrimonio', rmsID: 'M99Y-2P1', title: 'Carúpano - Santa Rosa 1896-1913', size: 101 },
	{ id: '5', locat: '2423652', type: 'Matrimonio', rmsID: 'M99Y-743', title: 'Guiria - Inmaculada Concpción 1862-1907', size: 0 },
	{ id: '7', locat: '2104138', type: 'Matrimonio', rmsID: 'M99B-QGN', title: 'Río Caribe - San Miguel 1907-1951', size: 0 },
  { id: '9', locat: '2118623', type: 'Bautizo',    rmsID: 'M99T-ZY2', title: 'El Pilar - Nuestra Señora del Pilar 1832-1836', size: 0 },
	{ id:'10', locat: '2115315', type: 'Bautizo',    rmsID: 'M99Y-2PK', title: 'Carúpano - Santa Rosa 1925-1928', size: 200 },
	{ id:'11', locat: '2115315', type: 'Bautizo',    rmsID: 'M99B-7H9', title: 'Carúpano - Santa Catalina 1920-1923', size: 145 },
	{ id:'12', locat: '2115315', type: 'Matrimonio', rmsID: 'M99Y-2PB', title: 'Carúpano - Santa Rosa 1874-1896', size: 149 },
	{ id:'13', locat: '2115315', type: 'Matrimonio', rmsID: 'M99B-7HW', title: 'Carúpano - Santa Catalina 1920-1946', size: 0 },
	{ id:'14', locat: '442650',  type: 'Matrimonio', rmsID: 'TH-909-65256-140773-14', title: 'Tucupita - Reg. Civil 1938, 1950', size: 0 },
  { id:'15', locat: '5366',    type: 'Defuncion',  rmsID: 'M99T-85P', title: 'Caicara - Santo Domingo 1912-1966', size: 83 },
  { id:'16', locat: '2423652', type: 'Matrimonio', rmsID: 'M99Y-74Q', title: 'Guiria - Inmaculada Concpción 1916-1944', size: 0 },
  { id:'17', locat: '', type: '',    rmsID: '', title: '', size: 0 },
  { id:'18', locat: '', type: '',    rmsID: '', title: '', size: 0 },
  { id:'19', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SN1', title: 'Guiria - Inmaculada Concepción 1835-1845', size: 0 },
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
  { id:'31', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJM', title: 'Guiria - Inmaculada Concepción 1850-1862', size: 0 },
  { id:'32', locat: '2115315', type: 'Matrimonio', rmsID: 'M99Y-2PT', title: 'Carúpano - Santa Rosa 1835-1836, 1842-1847', size: 0 },
	{ id:'34', locat: '5366', type: 'Sin Imagen', rmsID: '', title: 'Caicara - Todas las Parroquias ', size: 0 },
	{ id:'35', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJ9', title: 'Guiria - Inmaculada Concepción 1881-1898', size: 0 },
	{ id:'36', locat: '5368', type: 'Bautizo', rmsID: 'M99R-59M', title: 'Porlamar - Santisima Trinidad 1971-1975', size: 0 },
  { id:'37', locat: '2115315', type: 'Bautizo', rmsID: 'M99Y-2PL', title: 'Carúpano - Santa Rosa 1929-1933', size: 200 },
  { id:'38', locat: '2115315', type: 'Bautizo', rmsID: 'M99B-7H3', title: 'Carúpano - Santa Rosa 1925-1928', size: 200 },
  { id:'39', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJS', title: 'Guiria - Inmaculada Concpción 1872-1881', size: 200 },
  { id:'40', locat: '2115315', type: 'Bautizo', rmsID: 'M99Y-2P2', title: 'Carúpano - Santa Rosa 1928-1929', size: 107 },
  { id:'41', locat: '2423652', type: 'Bautizo', rmsID: 'M9SM-SJQ', title: 'Guiria - Inmaculada Concepción 1885-1893', size: 192 },
  { id:'42', locat: '2115315', type: 'Bautizo', rmsID: 'M99B-7HQ', title: 'Carúpano - Santa Catalina 1928-1931', size: 200 },
  { id:'43', locat: '2115315', type: 'Bautizo', rmsID: 'M99B-7HS', title: 'Carúpano - Santa Catalina 1921-1925', size: 205 },
  { id:'44', locat: '2117896', type: 'Matrimonio', rmsID: 'M99Y-JC9', title: 'Punta de Piedras - San Simon 1890-1891', size: 6 },
];

var localidades = [ 
    { estado:'Sucre', 
      code:293, 
      cities : [
      	{city:'Carúpano', code:1}, 
      	{city:'El Pilar', code:7}, 
      	{city:'Guiria', code:2},
        {city:'Macuro', code:21},
        {city:'Río Caribe', code:3},
      ]
  	},
    { estado:'Delta Amacuro', 
      code:287, 
      cities : [
        {city:'Amacuro', code:18},
        {city:'Curiapo', code:13},
        {city:'La Horqueta', code:15},
        {city:'Macareito', code:14},
        {city:'Macareo', code:17},
        {city:'Pedernales', code:16},
        {city:'Tucupita', code:8},
        
      ]
  	},
    { estado:'Monagas', 
      code:291, 
      cities : [
        {city:'Caicara', code:9},
      ]
    },
    { estado:'Nueva Esparta', 
      code:295, 
      cities : [
        {city:'La Asuncion', code:10},
        {city:'Porlamar', code:12},
        {city:'Punta de Piedras', code:19},
      ]
    },
    // { estado:'Estado', 
    //   code:Codigo, 
    //   cities : [
    //     { city:'Ciudad', code:codigo}
    //   ]
    // }
 ];

// var aside = [
// 	{category: 'Matrimonios', 
// 	items: [
// 		{ alias: 'Cpno. 1874-96 Sta. Rosa*', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2115315&rmsId=M99Y-2PB&imageIndex=0' },
//     	{ alias: 'Cpno. 1896-1913 Sta. Rosa', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2115315&rmsId=M99Y-2P1&imageIndex=0' }, 
//     	{ alias: 'Cpno. 1920-46 Sta. Catalina*', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2115315&rmsId=M99B-7HW&imageIndex=0' },
//     	{ alias: 'Guiria 1862-1907 Inma. Concepcion', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2423652&rmsId=M99Y-743&imageIndex=0'},
//     	{ alias: 'Guiria 1916-44 Inma. Concepcion', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2423652&rmsId=M99Y-74Q&imageIndex=0' },
//     	{ alias: 'Tucupita Reg. Civil 1938, 1950', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=442650&rmsId=TH-909-65256-140773-14&imageIndex=0'},
//     	{ alias: 'Caicara 1895-1914 Sto. Domingo', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=5366&rmsId=M99T-852&imageIndex=0' }, 
//   ]},
// 	{category: 'Bautizos', 
// 	items: [
// 		{ alias: 'Cpno. 1890-92, 1908-12 Sta. Rosa ', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2115315&rmsId=TH-1951-23240-52713-77&imageIndex=0' },
// 		{ alias: 'Cpno. 1925-28 Sta. Rosa', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2115315&rmsId=M99Y-2PK&imageIndex=0' }, 
// 		{ alias: 'Cpno. 1920-23 Sta. Catalina', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2115315&rmsId=M99B-7H9&imageIndex=0' },
// 		{ alias: 'Guiria 1835-45 Inma. Concepcion', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2423652&rmsId=M9SM-SN1&imageIndex=0' },
//     { alias: 'Guiria 1881-98 Inma. Concepcion ', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2423652&rmsId=M9SM-SJ3&imageIndex=0'  },
// 		{ alias: 'La Asuncion  1953 Nueva Esparta', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=1136041&rmsId=TH-909-83452-15137-1&imageIndex=0' },
// 		{ alias: 'El Pilar 1832-36 - Ntra. Sra. del Pilar', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2118623&rmsId=M99T-ZY2&imageIndex=0' },
// 		{ alias: 'La Horqueta Jul 1910', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=5355&rmsId=TH-1961-29382-15266-44&imageIndex=62&singleView=true' },
// 		{ alias: 'Macareito Feb 1910', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=5355&rmsId=TH-1961-29382-15266-44&imageIndex=60&singleView=true' },
// 		{ alias: 'Macareo Ene 1910 Ermita', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=5355&rmsId=TH-1961-29382-15266-44&imageIndex=53&singleView=true' },
// 		{ alias: 'Pedernales 1907, 1910 San Isidro', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=5355&rmsId=TH-1961-29382-15266-44&imageIndex=18&singleView=true' },
// 		{ alias: 'Tucupita 1906, 1908-1910 San Jose', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=445650&rmsId=TH-1961-29382-15266-44&imageIndex=2&singleView=true' },
// 		{ alias: 'Tucupita Feb 1910 El Calvario', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=445650&rmsId=TH-1961-29382-15266-44&imageIndex=50&singleView=true' }, 
// 	]},
       
//   {category: 'Defunciones', 
//   items: [ 
//     	{ alias: 'Cpno. 1920-38 Sta. Catalina', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2115315&rmsId=M99B-7H4&imageIndex=0' }, 
//     	{ alias: 'Caicara 1912-66 Sto. Domingo', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=5366&rmsId=M99T-85P&imageIndex=0' },
//     	{ alias: 'Caicara 1980-2014 Sto. Domingo', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=5366&rmsId=TH-909-60370-81718-24&imageIndex=0' },
//   ]}
// ]
