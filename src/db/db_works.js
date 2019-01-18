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
      alt: 'image: waterfall',
      caption: 'Waterfall',
      width: 899,
      height: 1348
    },
    {
      key: 'bm2',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-02.jpg`,
      alt: 'image: waterfall',
      caption: 'Waterfall',
      width: 899,
      height: 1348
    },
    {
      key: 'bm3',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-03.jpg`,
      alt: 'image: Otto, the Lipizzanner',
      caption: 'Otto, the Lipizzanner',
      width: 576,
      height: 455
    },
    {
      key: 'bm4',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-04.jpg`,
      alt: 'image: detail of Otto',
      caption: 'detail of Otto',
      width: 433,
      height: 576
    },
    {
      key: 'bm5',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-05.jpg`,
      alt: 'image: Ostrich',
      caption: 'Ostrich',
      width: 397,
      height: 576
    },
    {
      key: 'bm6',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-06.jpg`,
      alt: 'image: detail of Ostrich',
      caption: 'detail of Ostrich',
      width: 420,
      height: 576

    },
    {
      key: 'bm7',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-07.jpg`,
      alt: 'image: Railroad Men',
      caption: 'Railroad Men',
      width: 384,
      height: 576
    },
    {
      key: 'bm8',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-08.jpg`,
      alt: 'image: detail of Railroad Men',
      caption: 'detail of Railroad Men',
      width: 384,
      height: 576
    },
    {
      key: 'bm9',
      form: 'sculpture',
      category: "wildlife",
      src: `${stem.base}${stem.watermark}${stem.folder}bm-09.jpg`,
      alt: 'image: Young Longhorns',
      caption: 'Young Longhorns',
      width: 384,
      height: 576
    },
    {
      key: 'bm10',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-10.jpg`,
      alt: 'image: detail of Crocodillian',
      caption: 'detail of Crocodillian',
      width: 576,
      height: 362
    },
    {
      key: 'bm11',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-11.jpg`,
      alt: 'Crocodillian',
      caption: 'Crocodillian',
      width: 576,
      height: 350
    },
    {
      key: 'bm13',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-13.jpg`,
      alt: 'image: Broncos',
      caption: 'Broncos',
      width: 576,
      height: 389
    },
    {
      key: 'bm14',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-14.jpg`,
      alt: 'image: Bronco',
      caption: 'Bronco',
      width: 396,
      height: 576
    },
    {
      key: 'bm15',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-15.jpg`,
      alt: 'image: Bronco',
      caption: 'Bronco',
      width: 395,
      height: 576
    },
    {
      key: 'bm16',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-16.jpg`,
      alt: 'image: Olga Trio',
      caption: 'Olga Trio',
      width: 576,
      height: 365
    },
    {
      key: 'bm17',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-17.jpg`,
      alt: 'image: Olga I',
      caption: 'Olga I',
      width: 419,
      height: 576
    },
    {
      key: 'bm18',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-18.jpg`,
      alt: 'image: Olga II',
      caption: 'Olga II',
      width: 335,
      height: 576
    },
    {
      key: 'bm19',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-19.jpg`,
      alt: 'image: Olga III',
      caption: 'Olga III',
      width: 404,
      height: 576
    },
    {
      key: 'bm20',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-20.jpg`,
      alt: 'image: Olga Trio',
      caption: 'Olga Trio',
      width: 384,
      height: 576
    },
    {
      key: 'bm21',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-21.jpg`,
      alt: 'image: Stephanie',
      caption: 'Stephanie',
      width: 384,
      height: 576
    },
    {
      key: 'bm22',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-22.jpg`,
      alt: 'image: detail of Stephanie',
      caption: 'detail of Stephanie',
      width: 384,
      height: 576
    },
    {
      key: 'bm23',
      form: 'sculpture',
      category: 'portrait',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-23.jpg`,
      alt: 'image: Young Bride',
      caption: 'Young Bride',
      width: 384,
      height: 576
    },
    {
      key: 'bm24',
      form: 'sculpture',
      category: 'portrait',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-24.jpg`,
      alt: 'image: Young Bride',
      caption: 'Young Bride',
      width: 428,
      height: 576
    },
    {
      key: 'bm25',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-25.jpg`,
      alt: 'image: Climber',
      caption: 'Climber',
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
      alt: 'image: Summer Dress',
      caption: 'Summer Dress',
      width: 376,
      height: 576
    },
    {
      key: 'bm28',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-28.jpg`,
      alt: 'image: detail of Summer Dress',
      caption: 'detail of Summer Dress',
      width: 384,
      height: 576
    },
    {
      key: 'bm29',
      form: 'sculpture',
      category: 'portrait',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-29.jpg`,
      alt: 'image: Girl from Guam',
      caption: 'Girl from Guam',
      width: 411,
      height: 576
    },
    {
      key: 'bm30',
      form: 'sculpture',
      category: 'portrait',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-30.jpg`,
      alt: 'image: Girl from Guam',
      caption: 'Girl from Guam',
      width: 420,
      height: 576
    },
    {
      key: 'bm31',
      form: 'sculpture',
      category: 'portrait',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-31.jpg`,
      alt: 'image: Olga Bust',
      caption: 'Olga Bust',
      width: 421,
      height: 576
    },
    {
      key: 'bm32',
      form: 'sculpture',
      category: 'portrait',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-32.jpg`,
      alt: 'image: Olga Bust',
      caption: 'Olga Bust',
      width: 383,
      height: 576
    },
    {
      key: 'bm33',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-33.jpg`,
      alt: 'image: Unbridled',
      caption: 'Unbridled',
      width: 378,
      height: 576
    },
    {
      key: 'bm34',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-34.jpg`,
      alt: 'image: detail of Unbridled',
      caption: 'detail of Unbridled',
      width: 392,
      height: 576
    },
    {
      key: 'bm35',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-35.jpg`,
      alt: 'image: White Dog',
      caption: 'White Dog',
      width: 384,
      height: 576
    },
    {
      key: 'bm36',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-36.jpg`,
      alt: 'image: Rock Fish Model',
      caption: 'Rock Fish Model',
      width: 408,
      height: 576
    },
    {
      key: 'bm37',
      form: 'sculpture',
      category: 'wildlife',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-37.jpg`,
      alt: 'image: Alabaster Rock Fish',
      caption: 'Alabaster Rock Fish',
      width: 576,
      height: 381
    },
    {
      key: 'bm38',
      form: 'sculpture',
      category: 'portrait',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-38.jpg`,
      alt: 'image: Bob Hope Reverse',
      caption: 'Bob Hope Reverse',
      width: 576,
      height: 576
    },
    {
      key: 'bm39',
      form: 'sculpture',
      category: 'portrait',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-39.jpg`,
      alt: 'image: Bob Hope Obverse',
      caption: 'Bob Hope Obverse',
      width: 576,
      height: 576
    },
    {
      key: 'bm40',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-40.jpg`,
      alt: 'image: Time & Space',
      caption: 'Time & Space',
      width: 576,
      height: 476
    },
    {
      key: 'bm41',
      form: 'drawing',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-41.jpg`,
      alt: 'image: Seated Stephanie',
      caption: 'Seated Stephanie',
      width: 469,
      height: 576
    },
    {
      key: 'bm42',
      form: 'drawing',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-42.jpg`,
      alt: 'image: Stephanie front',
      caption: 'Stephanie front',
      width: 469,
      height: 576
    },
    {
      key: 'bm43',
      form: 'drawing',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-43.jpg`,
      alt: 'image: Stephanie back',
      caption: 'Stephanie back',
      width: 463,
      height: 576
    },
    {
      key: 'bm44',
      form: 'painting',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-44.jpg`,
      alt: 'image: Quayle & Potatos',
      caption: 'Quayle & Potatos',
      width: 576,
      height: 368
    },
    {
      key: 'bm45',
      form: 'painting',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-45.jpg`,
      alt: 'image: Self Portrait',
      caption: 'Self Portrait',
      width: 441,
      height: 576
    },
    {
      key: 'bm46',
      form: 'painting',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-46.jpg`,
      alt: 'image: San Juan Bautista Mission Bells',
      caption: 'San Juan Bautista Mission Bells',
      width: 457,
      height: 576
    },
    {
      key: '47',
      form: 'painting',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-47.jpg`,
      alt: 'image: Linda',
      caption: 'Linda',
      width: 369,
      height: 576
    },
    {
      key: 'bm52',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-52.jpg`,
      alt: 'image: Embryo',
      caption: 'Embryo',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm53',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-53.jpg`,
      alt: 'image: Embryo',
      caption: 'Embryo',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm54',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-54.jpg`,
      alt: 'image: His',
      caption: 'His',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm55',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-55.jpg`,
      alt: 'image: Small Mask',
      caption: 'Small Mask',
      width: 2742,
      height: 2009
    },
    {
      key: 'bm56',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-56.jpg`,
      alt: 'image: Small Mask',
      caption: 'Small Mask',
      width: 1441,
      height: 1677
    },
    {
      key: 'bm57',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-57.jpg`,
      alt: 'image: Floating Lady',
      caption: 'Floating Lady',
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
      alt: 'image: Flower',
      caption: 'Flower',
      width: 2055,
      height: 2753
    },
    {
      key: 'bm60',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-60.jpg`,
      alt: 'image: Bowtie',
      caption: 'Bowtie',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm61',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-61.jpg`,
      alt: 'image: Abstract VIII',
      caption: 'Abstract VIII',
      width: 2112,
      height: 2621
    },
    {
      key: 'bm62',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-62.jpg`,
      alt: 'image: Abstract VIII',
      caption: 'Abstract VIII',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm63',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-63.jpg`,
      alt: 'image: Abstract IX',
      caption: 'Abstract IX',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm64',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-64.jpg`,
      alt: 'image: Abstract IX',
      caption: 'Abstract IX',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm65',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-65.jpg`,
      alt: 'image: Reclining Woman',
      caption: 'Reclining Woman',
      width: 2816,
      height: 2112
    },
    {
      key: 'bm66',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-66.jpg`,
      alt: 'image: Reclining Woman',
      caption: 'Reclining Woman',
      width: 2816,
      height: 2112
    },
    {
      key: 'bm67',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-67.jpg`,
      alt: 'image: Torso front',
      caption: 'Torso front',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm68',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-68.jpg`,
      alt: 'image: Torso back',
      caption: 'Torso back',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm69',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-69.jpg`,
      alt: 'image: Tempest',
      caption: 'Tempest',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm70',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-70.jpg`,
      alt: 'image: Tempest',
      caption: 'Tempest',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm71',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-71.jpg`,
      alt: 'image: Face Flag',
      caption: 'Face Flag',
      width: 2816,
      height: 2112
    },
    {
      key: 'bm72',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-72.jpg`,
      alt: 'image: Face Flag',
      caption: 'Face Flag',
      width: 2816,
      height: 2112
    },
    {
      key: 'bm73',
      form: 'sculpture',
      category: 'abstract',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-73.jpg`,
      alt: 'image: Floating Lady',
      caption: 'Floating Lady',
      width: 2112,
      height: 2816
    },
    {
      key: 'bm74',
      form: 'painting',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-74.jpg`,
      alt: 'image: Woman at Easel',
      caption: 'Woman at Easel',
      width: 1936,
      height: 2592
    },
    {
      key: 'bm75',
      form: 'drawing',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-75.jpg`,
      alt: 'image: Leaning Woman',
      caption: 'Leaning Woman',
      width: 1726,
      height: 2382

    },
    {
      key: 'bm76',
      form: 'drawing',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-76.jpg`,
      alt: 'image: Seated Woman',
      caption: 'Seated Woman',
      width: 1779,
      height: 2295
    },
    {
      key: 'bm77',
      form: 'painting',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-77.jpg`,
      alt: 'image: Carmel Valley',
      caption: 'Carmel Valley',
      width: 2592,
      height: 1936
    },
    {
      key: 'bm78',
      form: 'painting',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-78.jpg`,
      alt: 'image: Frostbiting',
      caption: 'Frostbiting',
      width: 2218,
      height: 1903
    },
    {
      key: 'bm80',
      form: 'sculpture',
      category: 'figure',
      src: `${stem.base}${stem.watermark}${stem.folder}bm-80.jpg`,
      alt: 'image: Tempest',
      caption: 'Tempest',
      width: 1936,
      height: 2592
    }
  ];

export default works;
