var recordset = [
  { id: '1', locat: '2115315', type: 'Bautizo',    rmsID: 'TH-1951-23240-52713-77', title: 'Carúpano - Santa Rosa 1890-91, 1908-12', size: 729 },
	{ id: '2', locat: '2115315', type: 'Defuncion',  rmsID: 'M99B-7H4', title: 'Carúpano - Santa Catalina 1920-1938', size: 33 },
	{ id: '3', locat: '2423652', type: 'Bautizo',    rmsID: 'M9SM-SJ3', title: 'Guiria - Inmaculada Concpción 1881-1898', size: 0 },
	{ id: '4', locat: '2115315', type: 'Matrimonio', rmsID: 'M99Y-2P1', title: 'Carúpano - Santa Rosa 1896-1913', size: 101 },
	{ id: '5', locat: '2423652', type: 'Matrimonio', rmsID: 'M99Y-743', title: 'Guiria - Inmaculada Concpción 1862-1907', size: 0 },
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

];

var localidades = [ 
    { estado:'Sucre', 
      code:293, 
      cities : [
      	{ city:'Carúpano', code:1}, 
      	{ city:'El Pilar', code:7}, 
      	{ city:'Guiria', code:2}
      ]
  	},
    { estado:'Delta Amacuro', 
      code:287, 
      cities : [
        { city:'Tucupita', code:8}
      ]
  	},
    { estado:'Monagas', 
      code:291, 
      cities : [
        { city:'Caicara', code:9}
      ]
    },
    // { estado:'Estado', 
    //   code:Codigo, 
    //   cities : [
    //     { city:'Ciudad', code:codigo}
    //   ]
    // }
 ];

var aside = [
	{category: 'Matrimonios', 
	items: [
		{ alias: 'Cpno. 1874-96 Sta. Rosa*', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2115315&rmsId=M99Y-2PB&imageIndex=0' },
    { alias: 'Cpno. 1896-1913 Sta. Rosa', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2115315&rmsId=M99Y-2P1&imageIndex=0' }, 
    { alias: 'Cpno. 1920-46 Sta. Catalina*', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2115315&rmsId=M99B-7HW&imageIndex=0' },
    { alias: 'Guiria 1862-1907 Inma. Concepcion', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2423652&rmsId=M99Y-743&imageIndex=0'},
    { alias: 'Guiria 1916-44 Inma. Concepcion', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2423652&rmsId=M99Y-74Q&imageIndex=0' },
    { alias: 'Tucupita Reg. Civil 1938, 1950', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=442650&rmsId=TH-909-65256-140773-14&imageIndex=0'}, 
  ]},
	{category: 'Bautizos', 
	items: [
		{ alias: 'Cpno. 1890-92, 1908-12 Sta. Rosa ', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2115315&rmsId=TH-1951-23240-52713-77&imageIndex=0' },
		{ alias: 'Cpno. 1925-28 Sta. Rosa', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2115315&rmsId=M99Y-2PK&imageIndex=0' }, 
		{ alias: 'Cpno. 1920-23 Sta. Catalina', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2115315&rmsId=M99B-7H9&imageIndex=0' },
		{ alias: 'Guiria 1835-45 Inma. Concepcion', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2423652&rmsId=M9SM-SN1&imageIndex=0' },
    { alias: 'Guiria 1881-98 Inma. Concepcion ', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2423652&rmsId=M9SM-SJ3&imageIndex=0'  },
		{ alias: 'El Pilar 1832-36 - Ntra. Sra. del Pilar', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2118623&rmsId=M99T-ZY2&imageIndex=0' }, 
	]},
       
  {category: 'Defunciones', 
  items: [ 
    { alias: 'Cpno. 1920-38 Sta. Catalina', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=2115315&rmsId=M99B-7H4&imageIndex=0' }, 
    { alias: 'Caicara 1912-66 Sto. Domingo', link: 'https://www.familysearch.org/records/images/image-details?page=1&place=5366&rmsId=M99T-85P&imageIndex=0' },
  ]}
]
