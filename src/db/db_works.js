const stem = {
    base: 'https://res.cloudinary.com/dpm/image/upload/',
    folder: 'bmoneypenny/work/',
    watermark: 'w_750/l_text:Verdana_12_normal:%C2%A9%20Brian%20Moneypenny,g_south_east,y_8,x_8,co_rgb:FFFFFF/',
    thumbnail: 'w_250,h_250,c_fill/v153288502/',
    ratio4_3: 'c_fill,h_300,w_400/',
    ratio3_4: 'c_fill,h_400,w_300/',
    ratio1_1: 'c_fill,h_400,w_400/'
};

const works = [
    {
      key: 'bm1',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-01.jpg`,
      alt: 'Marble Woman 001',
      caption: 'Marble Woman 001',
      width: 899,
      height: 1348
    },
    {
      key: 'bm2',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-02.jpg`,
      alt: 'Marble Woman 002',
      caption: 'Marble Woman 002',
      width: 899,
      height: 1348
    },
    {
      key: 'bm3',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-03.jpg`,
      alt: 'White Horse I 003',
      caption: 'White Horse I 003',
      width: 576,
      height: 455
    },
    {
      key: 'bm4',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-04.jpg`,
      alt: 'White Horse 004',
      caption: 'White Horse 004',
      width: 433,
      height: 576
    },
    {
      key: 'bm5',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-05.jpg`,
      alt: 'Ostrich 005',
      caption: 'Ostrich 005',
      width: 397,
      height: 576
    },
    {
      key: 'bm6',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-06.jpg`,
      alt: 'Ostrich 006',
      caption: 'Ostrich 006',
      width: 420,
      height: 576

    },
    {
      key: 'bm7',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-07.jpg`,
      alt: 'Chain Gang 007',
      caption: 'Chain Gang 007',
      width: 384,
      height: 576
    },
    {
      key: 'bm8',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-08.jpg`,
      alt: 'Chain Gang 008',
      caption: 'Chain Gang 008',
      width: 384,
      height: 576
    },
    {
      key: 'bm9',
      form: 'sculpture',
      category: "wildlife",
      src: `${stem.base}${stem.watermark}${stem.folder}bm-09.jpg`,
      alt: 'Steers 009',
      caption: 'Steers 009',
      width: 384,
      height: 576
    },
    {
      key: 'bm10',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-10.jpg`,
      alt: 'Alligator 010',
      caption: 'Alligator 010',
      width: 576,
      height: 362
    },
    {
      key: 'bm11',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-11.jpg`,
      alt: 'Alligator 011',
      caption: 'Alligator 011',
      width: 576,
      height: 350
    },
    {
      key: 'bm13',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-13.jpg`,
      alt: 'Broncos 013',
      caption: 'Broncos 013',
      width: 576,
      height: 389
    },
    {
      key: 'bm14',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-14.jpg`,
      alt: 'Broncos 014',
      caption: 'Broncos 014',
      width: 396,
      height: 576
    },
    {
      key: 'bm15',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-15.jpg`,
      alt: 'Broncos 015',
      caption: 'Broncos 015',
      width: 395,
      height: 576
    },
    {
      key: 'bm16',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-16.jpg`,
      alt: 'Three Women 016',
      caption: 'Three Women 016',
      width: 576,
      height: 365
    },
    {
      key: 'bm17',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-17.jpg`,
      alt: 'Three Women 017',
      caption: 'Three Women 017',
      width: 419,
      height: 576
    },
    {
      key: 'bm18',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-18.jpg`,
      alt: 'Three Women 018',
      caption: 'Three Women 018',
      width: 335,
      height: 576
    },
    {
      key: 'bm19',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-19.jpg`,
      alt: 'Three Women 019',
      caption: 'Three Women 019',
      width: 404,
      height: 576
    },
    {
      key: 'bm20',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-20.jpg`,
      alt: 'Three Women 020',
      caption: 'Three Women 020',
      width: 384,
      height: 576
    },
    {
      key: 'bm21',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-21.jpg`,
      alt: 'Standing Woman 021',
      caption: 'Standing Woman 021',
      description: 'Standing Woman 021',
      width: 384,
      height: 576
    },
    {
      key: 'bm22',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-22.jpg`,
      alt: 'Standing Woman 022',
      caption: 'Standing Woman 022',
      width: 384,
      height: 576
    },
    {
      key: 'bm23',
      form: 'sculpture',
      category: 'portrait',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-23.jpg`,
      alt: 'Girl with ponytail 023',
      caption: 'Girl with ponytail 023',
      width: 384,
      height: 576
    },
    {
      key: 'bm24',
      form: 'sculpture',
      category: 'portrait',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-24.jpg`,
      alt: 'Girl with ponytail 024',
      caption: 'Girl with ponytail 024',
      width: 428,
      height: 576
    },
    {
      key: 'bm25',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-25.jpg`,
      alt: 'Climber 025',
      caption: 'Climber 025',
      width: 366,
      height: 576
    },
    {
      key: 'bm26',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-26.jpg`,
      thumbnail: `${stem.base}${stem.thumbnail}${stem.folder}bm-26.jpg`,
      alt: 'Climber 026',
      caption: 'Climber 026',
      width: 351,
      height: 576
    },
    {
      key: 'bm27',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-27.jpg`,
      alt: 'Dancer 027',
      caption: 'Dancer 027',
      width: 376,
      height: 576
    },
    {
      key: 'bm28',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-28.jpg`,
      alt: 'Dancer 028',
      caption: 'Dancer 028',
      width: 384,
      height: 576
    },
    {
      key: 'bm29',
      form: 'sculpture',
      category: 'portrait',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-29.jpg`,
      alt: 'Bust I 029',
      caption: 'Bust I 029',
      width: 411,
      height: 576
    },
    {
      key: 'bm30',
      form: 'sculpture',
      category: 'portrait',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-30.jpg`,
      alt: 'Bust I 030',
      caption: 'Bust I 030',
      width: 420,
      height: 576
    },
    {
      key: 'bm31',
      form: 'sculpture',
      category: 'portrait',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-31.jpg`,
      alt: 'Bust II 031',
      caption: 'Bust II 031',
      width: 421,
      height: 576
    },
    {
      key: 'bm32',
      form: 'sculpture',
      category: 'portrait',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-32.jpg`,
      alt: 'Bust II 032',
      caption: 'Bust II 032',
      width: 383,
      height: 576
    },
    {
      key: 'bm33',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-33.jpg`,
      alt: 'White Horse II 033',
      caption: 'White Horse II 033',
      width: 378,
      height: 576
    },
    {
      key: 'bm34',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-34.jpg`,
      alt: 'White Horse II 034',
      caption: 'White Horse II 034',
      width: 392,
      height: 576
    },
    {
      key: 'bm35',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-35.jpg`,
      alt: 'White Dog 035',
      caption: 'White Dog 035',
      description: 'White Dog 035',
      width: 384,
      height: 576
    },
    {
      key: 'bm36',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-36.jpg`,
      alt: 'White Fish 036',
      caption: 'White Fish 036',
      width: 408,
      height: 576
    },
    {
      key: 'bm37',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-37.jpg`,
      alt: 'Marble Fish 037',
      caption: 'Marble Fish 037',
      width: 576,
      height: 381
    },
    {
      key: 'bm38',
      form: 'sculpture',
      category: 'portrait',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-38.jpg`,
      alt: 'Bob Hope I 038',
      caption: 'Bob Hope I 038',
      width: 576,
      height: 576
    },
    {
      key: 'bm39',
      form: 'sculpture',
      category: 'portrait',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-39.jpg`,
      alt: 'Bob Hope II 039',
      caption: 'Bob Hope II 039',
      width: 576,
      height: 576
    },
    {
      key: 'bm40',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-40.jpg`,
      alt: 'Frieze 040',
      caption: 'Frieze 040',
      width: 576,
      height: 476
    },
    {
      key: 'bm41',
      form: 'drawing',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-41.jpg`,
      alt: 'Drawn Lady I 041',
      caption: 'Drawn Lady I 041',
      width: 469,
      height: 576
    },
    {
      key: 'bm42',
      form: 'drawing',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-42.jpg`,
      alt: 'Drawn Lady II 042',
      caption: 'Drawn Lady II 042',
      width: 469,
      height: 576
    },
    {
      key: 'bm43',
      form: 'drawing',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-43.jpg`,
      alt: 'Drawn Lady III 043',
      caption: 'Drawn Lady III 043',
      width: 463,
      height: 576
    },
    {
      key: 'bm44',
      form: 'painting',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-44.jpg`,
      alt: 'Quayle 044',
      caption: 'Quayle 044',
      width: 576,
      height: 368
    },
    {
      key: 'bm45',
      form: 'painting',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-45.jpg`,
      alt: 'Self Portrait 045',
      caption: 'Self Portrait 045',
      width: 441,
      height: 576
    },
    {
      key: 'bm46',
      form: 'painting',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-46.jpg`,
      alt: 'Mission 046',
      caption: 'Mission 046',
      width: 457,
      height: 576
    },
    {
      key: '47',
      form: 'painting',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-47.jpg`,
      alt: 'Blue Lady 047',
      caption: 'Blue Lady 047',
      width: 369,
      height: 576
    },
    {
      key: 'bm52',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-52.jpg`,
      alt: 'Abstract I 052',
      caption: 'Abstract I 052',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm53',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-53.jpg`,
      alt: 'Abstract II 053',
      caption: 'Abstract II 053',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm54',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-54.jpg`,
      alt: 'Abstract III 054',
      caption: 'Abstract III 054',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm55',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-55.jpg`,
      alt: 'Abstract IV 055',
      caption: 'Abstract IV 055',
      width: 2742,
      height: 2009
    },
    {
      key: 'bm56',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-56.jpg`,
      alt: 'Bronze Face I 056',
      caption: 'Bronze Face I 056',
      width: 1441,
      height: 1677
    },
    {
      key: 'bm57',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-57.jpg`,
      alt: 'Bronze Face II 057',
      caption: 'Bronze Face II 057',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm58',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-58.jpg`,
      alt: 'Suspended Woman 058',
      caption: 'Suspended Woman 058',
      width: 1963,
      height: 2816
    },
    {
      key: 'bm59',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-59.jpg`,
      alt: 'Abstract V 059',
      caption: 'Abstract V 059',
      width: 2055,
      height: 2753
    },
    {
      key: 'bm60',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-60.jpg`,
      alt: 'Abstract VI 060',
      caption: 'Abstract VI 060',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm61',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-61.jpg`,
      alt: 'Abstract VII 061',
      caption: 'Abstract VII 061',
      width: 2112,
      height: 2621
    },
    {
      key: 'bm62',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-62.jpg`,
      alt: 'Abstract VIII 062',
      caption: 'Abstract VIII 062',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm63',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-63.jpg`,
      alt: 'Abstract IX 063',
      caption: 'Abstract IX 063',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm64',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-64.jpg`,
      alt: 'Abstract X 064',
      caption: 'Abstract X 064',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm65',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-65.jpg`,
      alt: 'Reclining Woman I',
      caption: 'Reclining Woman I',
      width: 2816,
      height: 2112
    },
    {
      key: 'bm66',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-66.jpg`,
      alt: 'Reclining Woman II 066',
      caption: 'Reclining Woman II 066',
      width: 2816,
      height: 2112
    },
    {
      key: 'bm67',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-67.jpg`,
      alt: 'Torso I 067',
      caption: 'Torso II 067',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm68',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-68.jpg`,
      alt: 'Torso II 068',
      caption: 'Torso II 068',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm69',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-69.jpg`,
      alt: 'Running Woman I 069',
      caption: 'Running Woman I 069',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm70',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-70.jpg`,
      alt: 'Running Woman II 070',
      caption: 'Running Woman II 070',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm71',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-71.jpg`,
      alt: 'Face Fragment I 071',
      caption: 'Face Fragment II 071',
      width: 2816,
      height: 2112
    },
    {
      key: 'bm72',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-72.jpg`,
      alt: 'Face Fragment II 072',
      caption: 'Face Fragment II 072',
      width: 2816,
      height: 2112
    },
    {
      key: 'bm73',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-73.jpg`,
      alt: 'Suspended Woman 073',
      caption: 'Suspended Woman 073',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm74',
      form: 'painting',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-74.jpg`,
      alt: 'Standing Woman I 074',
      caption: 'Standing Woman I 074',
      width: 1936,
      height: 2592
    },
    {
      key: 'bm75',
      form: 'drawing',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-75.jpg`,
      alt: 'Standing Woman II 075',
      caption: 'Standing Woman II 075',
      width: 1726,
      height: 2382

    },
    {
      key: 'bm76',
      form: 'drawing',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-76.jpg`,
      alt: 'Sitting Woman 076',
      caption: 'Sitting Woman 076',
      width: 1779,
      height: 2295
    },
    {
      key: 'bm77',
      form: 'painting',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-77.jpg`,
      alt: 'Field 077',
      caption: 'Field 077',
      width: 2592,
      height: 1936
    },
    {
      key: 'bm78',
      form: 'painting',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-78.jpg`,
      alt: 'Sailing 078',
      caption: 'Sailing 078',
      width: 2218,
      height: 1903
    },
    {
      key: 'bm79',
      form: 'drawing',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-79.jpg`,
      alt: 'Four Drawings 079',
      caption: 'Four Drawings 079',
      width: 1845,
      height: 1654
    },
    {
      key: 'bm80',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-80.jpg`,
      alt: 'Running Woman 080',
      caption: 'Running Woman 080',
      width: 1936,
      height: 2592
    }
  ];

export default works;
