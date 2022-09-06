const countries = [
  {
    "index": "map_1",
    "country_name": "AFGHANISTAN",
    "visited": false
  },
  {
    "index": "map_2",
    "country_name": "ALBANIA",
    "visited": false
  },
  {
    "index": "map_3",
    "country_name": "ALGERIA",
    "visited": false
  },
  {
    "index": "map_4",
    "country_name": "ANDORRA",
    "visited": false
  },
  {
    "index": "map_5",
    "country_name": "ANGOLA",
    "visited": false
  },
  {
    "index": "map_6",
    "country_name": "ARGENTINA",
    "visited": true
  },
  {
    "index": "map_7",
    "country_name": "ARMENIA",
    "visited": false
  },
  {
    "index": "map_8",
    "country_name": "AUSTRALIA",
    "visited": false
  },
  {
    "index": "map_9",
    "country_name": "AUSTRIA",
    "visited": false
  },
  {
    "index": "map_10",
    "country_name": "AZERBAIJAN",
    "visited": false
  },
  {
    "index": "map_11",
    "country_name": "BAHAMAS",
    "visited": false
  },
  {
    "index": "map_12",
    "country_name": "BAHRAIN",
    "visited": false
  },
  {
    "index": "map_13",
    "country_name": "BANGLADESH",
    "visited": false
  },
  {
    "index": "map_14",
    "country_name": "BELARUS",
    "visited": false
  },
  {
    "index": "map_15",
    "country_name": "BELGIUM",
    "visited": false
  },
  {
    "index": "map_16",
    "country_name": "BELIZE",
    "visited": false
  },
  {
    "index": "map_17",
    "country_name": "BENIN",
    "visited": false
  },
  {
    "index": "map_18",
    "country_name": "BHUTAN",
    "visited": false
  },
  {
    "index": "map_19",
    "country_name": "BOLIVIA",
    "visited": false
  },
  {
    "index": "map_20",
    "country_name": "BOSNIA AND HERZEGOVINA",
    "visited": false
  },
  {
    "index": "map_21",
    "country_name": "BOTSWANA",
    "visited": false
  },
  {
    "index": "map_22",
    "country_name": "BRAZIL",
    "visited": true
  },
  {
    "index": "map_23",
    "country_name": "BRUNEI",
    "visited": false
  },
  {
    "index": "map_24",
    "country_name": "BULGARIA",
    "visited": false
  },
  {
    "index": "map_25",
    "country_name": "BURKINA FASO",
    "visited": false
  },
  {
    "index": "map_26",
    "country_name": "BURUNDI",
    "visited": false
  },
  {
    "index": "map_27",
    "country_name": "CAMBODIA",
    "visited": false
  },
  {
    "index": "map_28",
    "country_name": "CAMEROON",
    "visited": false
  },
  {
    "index": "map_29",
    "country_name": "CANADA",
    "visited": false
  },
  {
    "index": "map_30",
    "country_name": "CENTRAL AFRICAN REPUBLIC",
    "visited": false
  },
  {
    "index": "map_31",
    "country_name": "CHAD",
    "visited": false
  },
  {
    "index": "map_32",
    "country_name": "CHILE",
    "visited": false
  },
  {
    "index": "map_33",
    "country_name": "CHINA",
    "visited": false
  },
  {
    "index": "map_34",
    "country_name": "COLOMBIA",
    "visited": false
  },
  {
    "index": "map_35",
    "country_name": "COMOROS",
    "visited": false
  },
  {
    "index": "map_36",
    "country_name": "CONGO",
    "visited": false
  },
  {
    "index": "map_37",
    "country_name": "COSTA RICA",
    "visited": false
  },
  {
    "index": "map_38",
    "country_name": "CROATIA",
    "visited": false
  },
  {
    "index": "map_39",
    "country_name": "CUBA",
    "visited": false
  },
  {
    "index": "map_40",
    "country_name": "CYPRUS",
    "visited": true
  },
  {
    "index": "map_41",
    "country_name": "CZECH REPUBLIC",
    "visited": false
  },
  {
    "index": "map_42",
    "country_name": "CÔTE D&#39;IVOIRE",
    "visited": false
  },
  {
    "index": "map_43",
    "country_name": "DEMOCRATIC REPUBLIC OF THE CONGO",
    "visited": false
  },
  {
    "index": "map_44",
    "country_name": "DENMARK",
    "visited": false
  },
  {
    "index": "map_45",
    "country_name": "DJIBOUTI",
    "visited": false
  },
  {
    "index": "map_46",
    "country_name": "DOMINICAN REPUBLIC",
    "visited": false
  },
  {
    "index": "map_47",
    "country_name": "ECUADOR",
    "visited": false
  },
  {
    "index": "map_48",
    "country_name": "EGYPT",
    "visited": true
  },
  {
    "index": "map_49",
    "country_name": "EL SALVADOR",
    "visited": false
  },
  {
    "index": "map_50",
    "country_name": "EQUATORIAL GUINEA",
    "visited": false
  },
  {
    "index": "map_51",
    "country_name": "ERITREA",
    "visited": false
  },
  {
    "index": "map_52",
    "country_name": "ESTONIA",
    "visited": false
  },
  {
    "index": "map_53",
    "country_name": "ETHIOPIA",
    "visited": false
  },
  {
    "index": "map_54",
    "country_name": "FIJI",
    "visited": false
  },
  {
    "index": "map_55",
    "country_name": "FINLAND",
    "visited": false
  },
  {
    "index": "map_56",
    "country_name": "FRANCE",
    "visited": true
  },
  {
    "index": "map_57",
    "country_name": "FRENCH GUIANA",
    "visited": false
  },
  {
    "index": "map_58",
    "country_name": "GABON",
    "visited": false
  },
  {
    "index": "map_59",
    "country_name": "GEORGIA",
    "visited": false
  },
  {
    "index": "map_60",
    "country_name": "GERMANY",
    "visited": false
  },
  {
    "index": "map_61",
    "country_name": "GHANA",
    "visited": false
  },
  {
    "index": "map_62",
    "country_name": "GREECE",
    "visited": true
  },
  {
    "index": "map_63",
    "country_name": "GREENLAND",
    "visited": false
  },
  {
    "index": "map_64",
    "country_name": "GUATEMALA",
    "visited": false
  },
  {
    "index": "map_65",
    "country_name": "GUINEA",
    "visited": false
  },
  {
    "index": "map_66",
    "country_name": "GUINEA-BISSAU",
    "visited": false
  },
  {
    "index": "map_67",
    "country_name": "GUYANA",
    "visited": false
  },
  {
    "index": "map_68",
    "country_name": "HAITI",
    "visited": false
  },
  {
    "index": "map_69",
    "country_name": "HONDURAS",
    "visited": false
  },
  {
    "index": "map_70",
    "country_name": "HUNGARY",
    "visited": false
  },
  {
    "index": "map_71",
    "country_name": "ICELAND",
    "visited": false
  },
  {
    "index": "map_72",
    "country_name": "INDIA",
    "visited": false
  },
  {
    "index": "map_73",
    "country_name": "INDONESIA",
    "visited": true
  },
  {
    "index": "map_74",
    "country_name": "IRAN",
    "visited": false
  },
  {
    "index": "map_75",
    "country_name": "IRAQ",
    "visited": false
  },
  {
    "index": "map_76",
    "country_name": "IRELAND",
    "visited": false
  },
  {
    "index": "map_77",
    "country_name": "ISREAL",
    "visited": false
  },
  {
    "index": "map_78",
    "country_name": "ITALY",
    "visited": true
  },
  {
    "index": "map_79",
    "country_name": "JAMAICA",
    "visited": false
  },
  {
    "index": "map_80",
    "country_name": "JAPAN",
    "visited": false
  },
  {
    "index": "map_81",
    "country_name": "JORDAN",
    "visited": false
  },
  {
    "index": "map_82",
    "country_name": "KAZAKHSTAN",
    "visited": false
  },
  {
    "index": "map_83",
    "country_name": "KENYA",
    "visited": false
  },
  {
    "index": "map_84",
    "country_name": "KOSOVO",
    "visited": false
  },
  {
    "index": "map_85",
    "country_name": "KUWAIT",
    "visited": false
  },
  {
    "index": "map_86",
    "country_name": "KYRGYZSTAN",
    "visited": false
  },
  {
    "index": "map_87",
    "country_name": "LAOS",
    "visited": false
  },
  {
    "index": "map_88",
    "country_name": "LATVIA",
    "visited": false
  },
  {
    "index": "map_89",
    "country_name": "LEBANON",
    "visited": false
  },
  {
    "index": "map_90",
    "country_name": "LESOTHO",
    "visited": false
  },
  {
    "index": "map_91",
    "country_name": "LIBERIA",
    "visited": false
  },
  {
    "index": "map_92",
    "country_name": "LIBYA",
    "visited": false
  },
  {
    "index": "map_93",
    "country_name": "LIECHTENSTEIN",
    "visited": false
  },
  {
    "index": "map_94",
    "country_name": "LITHUANIA",
    "visited": false
  },
  {
    "index": "map_95",
    "country_name": "LUXEMBOURG",
    "visited": false
  },
  {
    "index": "map_96",
    "country_name": "MACEDONIA",
    "visited": false
  },
  {
    "index": "map_97",
    "country_name": "MADAGASCAR",
    "visited": false
  },
  {
    "index": "map_98",
    "country_name": "MALAWI",
    "visited": false
  },
  {
    "index": "map_99",
    "country_name": "MALAYSIA",
    "visited": true
  },
  {
    "index": "map_100",
    "country_name": "MALDIVES",
    "visited": false
  },
  {
    "index": "map_101",
    "country_name": "MALI",
    "visited": false
  },
  {
    "index": "map_102",
    "country_name": "MALTA",
    "visited": false
  },
  {
    "index": "map_103",
    "country_name": "MAURITANIA",
    "visited": false
  },
  {
    "index": "map_104",
    "country_name": "MAURITIUS",
    "visited": false
  },
  {
    "index": "map_105",
    "country_name": "MEXICO",
    "visited": false
  },
  {
    "index": "map_106",
    "country_name": "MOLDOVA",
    "visited": false
  },
  {
    "index": "map_107",
    "country_name": "MONGOLIA",
    "visited": false
  },
  {
    "index": "map_108",
    "country_name": "MONTENEGRO",
    "visited": false
  },
  {
    "index": "map_109",
    "country_name": "MOROCCO",
    "visited": false
  },
  {
    "index": "map_110",
    "country_name": "MOZAMBIQUE",
    "visited": false
  },
  {
    "index": "map_111",
    "country_name": "MYANMAR",
    "visited": false
  },
  {
    "index": "map_112",
    "country_name": "NAMIBIA",
    "visited": false
  },
  {
    "index": "map_113",
    "country_name": "NEPAL",
    "visited": false
  },
  {
    "index": "map_114",
    "country_name": "NETHERLANDS",
    "visited": false
  },
  {
    "index": "map_115",
    "country_name": "NEW ZEALAND",
    "visited": false
  },
  {
    "index": "map_116",
    "country_name": "NICARAGUA",
    "visited": false
  },
  {
    "index": "map_117",
    "country_name": "NIGER",
    "visited": false
  },
  {
    "index": "map_118",
    "country_name": "NIGERIA",
    "visited": false
  },
  {
    "index": "map_119",
    "country_name": "NORTH KOREA",
    "visited": false
  },
  {
    "index": "map_120",
    "country_name": "NORWAY",
    "visited": false
  },
  {
    "index": "map_121",
    "country_name": "OMAN",
    "visited": false
  },
  {
    "index": "map_122",
    "country_name": "PAKISTAN",
    "visited": false
  },
  {
    "index": "map_123",
    "country_name": "PALESTINE",
    "visited": false
  },
  {
    "index": "map_124",
    "country_name": "PANAMA",
    "visited": false
  },
  {
    "index": "map_125",
    "country_name": "PAPUA NEW GUINEA",
    "visited": false
  },
  {
    "index": "map_126",
    "country_name": "PARAGUAY",
    "visited": false
  },
  {
    "index": "map_127",
    "country_name": "PERU",
    "visited": false
  },
  {
    "index": "map_128",
    "country_name": "PHILIPPINES",
    "visited": false
  },
  {
    "index": "map_129",
    "country_name": "POLAND",
    "visited": true
  },
  {
    "index": "map_130",
    "country_name": "PORTUGAL",
    "visited": true
  },
  {
    "index": "map_131",
    "country_name": "PUETRO RICO",
    "visited": false
  },
  {
    "index": "map_132",
    "country_name": "QATAR",
    "visited": false
  },
  {
    "index": "map_133",
    "country_name": "ROMANIA",
    "visited": false
  },
  {
    "index": "map_134",
    "country_name": "RUSSIA",
    "visited": true
  },
  {
    "index": "map_135",
    "country_name": "RWANDA",
    "visited": false
  },
  {
    "index": "map_136",
    "country_name": "SAUDI ARABIA",
    "visited": false
  },
  {
    "index": "map_137",
    "country_name": "SENEGAL",
    "visited": false
  },
  {
    "index": "map_138",
    "country_name": "SERBIA",
    "visited": false
  },
  {
    "index": "map_139",
    "country_name": "SEYCHELLES",
    "visited": false
  },
  {
    "index": "map_140",
    "country_name": "SIERRA LEONE",
    "visited": false
  },
  {
    "index": "map_141",
    "country_name": "SINGAPORE",
    "visited": false
  },
  {
    "index": "map_142",
    "country_name": "SLOVAKIA",
    "visited": false
  },
  {
    "index": "map_143",
    "country_name": "SLOVENIA",
    "visited": false
  },
  {
    "index": "map_144",
    "country_name": "SOLOMON ISLANDS",
    "visited": false
  },
  {
    "index": "map_145",
    "country_name": "SOMALIA",
    "visited": false
  },
  {
    "index": "map_146",
    "country_name": "SOUTH AFRICA",
    "visited": false
  },
  {
    "index": "map_147",
    "country_name": "SOUTH KOREA",
    "visited": false
  },
  {
    "index": "map_148",
    "country_name": "SOUTH SUDAN",
    "visited": false
  },
  {
    "index": "map_149",
    "country_name": "SPAIN",
    "visited": true
  },
  {
    "index": "map_150",
    "country_name": "SRI LANKA",
    "visited": false
  },
  {
    "index": "map_151",
    "country_name": "SUDAN",
    "visited": false
  },
  {
    "index": "map_152",
    "country_name": "SURINAME",
    "visited": false
  },
  {
    "index": "map_153",
    "country_name": "SWAZILAND",
    "visited": false
  },
  {
    "index": "map_154",
    "country_name": "SWEDEN",
    "visited": false
  },
  {
    "index": "map_155",
    "country_name": "SWITZERLAND",
    "visited": false
  },
  {
    "index": "map_156",
    "country_name": "SYRIA",
    "visited": false
  },
  {
    "index": "map_157",
    "country_name": "SÃO TOMÉ AND PRÍNCIPE",
    "visited": false
  },
  {
    "index": "map_158",
    "country_name": "TAIWAN",
    "visited": false
  },
  {
    "index": "map_159",
    "country_name": "TAJIKISTAN",
    "visited": false
  },
  {
    "index": "map_160",
    "country_name": "TANZANIA",
    "visited": false
  },
  {
    "index": "map_161",
    "country_name": "THAILAND",
    "visited": true
  },
  {
    "index": "map_162",
    "country_name": "THE GAMBIA",
    "visited": false
  },
  {
    "index": "map_163",
    "country_name": "TIMOR-LESTE",
    "visited": false
  },
  {
    "index": "map_164",
    "country_name": "TOGO",
    "visited": false
  },
  {
    "index": "map_165",
    "country_name": "TUNISIA",
    "visited": false
  },
  {
    "index": "map_166",
    "country_name": "TURKEY",
    "visited": false
  },
  {
    "index": "map_167",
    "country_name": "TURKMENISTAN",
    "visited": false
  },
  {
    "index": "map_168",
    "country_name": "UGANDA",
    "visited": false
  },
  {
    "index": "map_169",
    "country_name": "UKRAINE",
    "visited": false
  },
  {
    "index": "map_170",
    "country_name": "UNITED ARAB EMIRATES",
    "visited": false
  },
  {
    "index": "map_171",
    "country_name": "UNITED KINGDOM",
    "visited": true
  },
  {
    "index": "map_172",
    "country_name": "UNITED STATES",
    "visited": false
  },
  {
    "index": "map_173",
    "country_name": "URUGUAY",
    "visited": false
  },
  {
    "index": "map_174",
    "country_name": "UZBEKISTAN",
    "visited": false
  },
  {
    "index": "map_175",
    "country_name": "VENEZUELA",
    "visited": false
  },
  {
    "index": "map_176",
    "country_name": "VIETNAM",
    "visited": false
  },
  {
    "index": "map_177",
    "country_name": "WESTERN SAHARA",
    "visited": false
  },
  {
    "index": "map_178",
    "country_name": "YEMEN",
    "visited": false
  },
  {
    "index": "map_179",
    "country_name": "ZAMBIA",
    "visited": false
  },
  {
    "index": "map_180",
    "country_name": "ZIMBABWE",
    "visited": false
  }
]

const visitedCountries = countries.filter((c)=> c.visited);

visitedCountries.forEach((vc)=>{
  const area = document.getElementById(vc.index);
  area.setAttribute('class', 'highlight');

})
