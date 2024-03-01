export const categories = [
  {
    id: 3,
    name: 'Kurabiyeler',
    photo_url:
    'https://www.telegraph.co.uk/content/dam/Travel/2019/January/france-food.jpg?imwidth=1400'
  },
  {
    id: 1,
    name: 'Yöresel Yemekler',
    photo_url: 'https://blog.turkishairlines.com/wp-content/uploads/2022/02/turk-yemekleri-yaprak-sarma.jpg'
  },
  {
    id: 2,
    name: 'İtalyan Yemekleri',
    photo_url:
      'https://images.unsplash.com/photo-1533777324565-a040eb52facd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
  },
  {
    id: 4,
    name: 'Meyve Püreleri (Smoothies)',
    photo_url:
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/still-life-of-three-fresh-smoothies-in-front-of-royalty-free-image-561093647-1544042068.jpg?crop=0.715xw:0.534xh;0.0945xw,0.451xh&resize=768:*'
  },
];

export const recipes = [
  {
    recipeId: 122,
    categoryId: 3,
    title: 'Yulaflı Kurabiye',
    photo_url: 'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2019/06/nobake-chocolate-cookies-1-650x975.jpg',
      "https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg",
      'https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg',
      'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e',
      'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg'
    ],
    time: '15',
    ingredients: [[0, '1 Su Bardağı'], [1, '1 Çay Kaşığı'], [2, '300 gram']],
    description: '-- Temizlenmiş ve soyulmuş iri patateslerle başlayın, bunları 5-6 santimetrelik kibrit çöpü şeklinde doğrayın. Çok soğuk su dolu bir kaba yerleştirin: su berrak olana kadar sürekli durulayın ve suyu değiştirin; iyice süzün ve kağıt havlu veya temiz tüy bırakmayan bir mutfak havlusuyla kurulayın. \n\n -- Bu arada, yağınızı 350 dereceye önceden ısıtın. Hazırladığınız patatesleri yağa koyun ve yaklaşık 5 dakika pişirin. Onlarda o sarımtırak renk oluşacak. \n\n  -- Not: Soğuk patatesleri sıcak yağa eklediğinizde, yağınızın sıcaklığı düşecek - yağınızın sıcaklığının 330 ila 325 derece arasında olmasını istersiniz. \n\n -- Yağdan çıkarın; süzün ve soğumaya bırakın. Şimdi - ya pişirmeye hazır olana kadar buzdolabında bekletin ya da tamamen soğutun ve 3 ay boyunca dondurun. Doğru bir şekilde dondurmak için - tamamen soğumuş patates kızartmalarını tepsiye tek bir tabaka halinde yerleştirin ve donana kadar dondurucuya koyun. Daha sonra onları poşetleyin.\n\n -- Pişirmeyi tamamlamak için - yağınızı 400 dereceye önceden ısıtın. Soğuk patates kızartmalarınızı ekleyin (ki bu yağın sıcaklığını düşürecek - bu da önemli çünkü yağ sıcaklığını yaklaşık 375 dereceye yakın istersiniz) ve pişene kadar birkaç dakika pişirin. Hafifçe tuzlayın ve tuzu iyi dağılması için iyice çalkalayın ve çok tuzlu olmamasına dikkat edin.'
  
 },
  {
    recipeId: 3,
    categoryId: 4,
    title: 'Karışık Mey Püreleri',
    photo_url:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
    photosArray: [
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=768:*',
      'https://www.vitamix.com/media/other/images/xVitamix-Triple-Berry-Smoothie-square-crop__1.jpg.pagespeed.ic.OgTC3ILD3R.jpg',
      'http://images.media-allrecipes.com/userphotos/960x960/3798204.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrzui8MM6W66I29VZwVvcjpGv99JW3O1owgupc3KwB65rhAyrZ'
    ],
    time: '10',
    ingredients: [
      [59, '1 adet'],
      [60, '200 gram'],
      [61, '1/2 litre'],
    ],
    description: 'Blender içerisine tüm malzemeleri ekleyin ve pürüzsüz olana kadar karıştırın. Daha sonra, isteğe bağlı olarak 2 su bardağı arasında paylaştırın ve üzerine istenirse böğürtlen ekleyin.'
  },
  
  {
    recipeId: 3,
    categoryId: 3,
    title: 'Balkabaklı Kurabiye',
    photo_url:
      'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/11/pumpkin-spice-cookies-4-650x975.jpg',
      'https://cdn.junglecreations.com/wp/junglecms/2018/07/4164c5bd-wide-thumbnail.jpg',
      'https://pinchofyum.com/wp-content/uploads/Crunchwrap-Inside.jpg',
      'https://monsonmadethis.com/wp-content/uploads/2017/10/IMG_20171015_161017_025-e1533869302263.jpg'
    ],
    time: '45',
    ingredients: [
      [0, '2 Yemek Kaşığı'],
      [22, '2 adet'],
      [23, '2 Yemek Kaşığı'],
      [7, '2 Tutam'],
      [3, '1 Çay Kaşığı'],
      [24, '1 Yemek Kaşığı'],
      [25, '1 lb'],
      [1, '2 Çay Kaşığı'],
      [4, '2 Çay Kaşığı'],,
      [27, '8'],
      [29, '1 Su Bardağı']
    ],
    description:
    '-- Orta ateşte orta boy bir tencerede 1 yemek kaşığı yağı ısıtın. Soğanı ekleyin ve yumuşayana kadar 5 dakika pişirin. Sarımsağı ekleyin ve kokusu çıkana kadar 1 dakika daha pişirin. Domates salçasını ekleyin ve soğan ve sarımsağı kaplayacak şekilde karıştırın. Kıymayı ekleyin ve tahta kaşıkla eti ufalayarak, pembeleşene kadar pişirin, yaklaşık 6 dakika. Yağını süzün. \n \n -- Kıymayı tencereye geri koyun ve biber, kırmızı toz biber, tuz ve karabiberle tatlandırın. Domates sosu ve kırmızı fasulyeyi ekleyin. Kaynatın, sonra ateşi kısın ve 15 dakika kadar kaynatın. Her tortillanın merkezine biraz chili koyun ve kenarları katlayacak yer bırakın. Üzerine Fritos koyun, sonra cheddar peyniri. Tortilla kenarlarını merkeze doğru katlayarak katlar oluşturun. Crunchwrap\'leri ters çevirin, böylece katlar altta kalır ve bir arada kalır. \n \n -- Orta boy bir tavada orta ateşte kalan 1 yemek kaşığı yağı ısıtın. Bir Crunchwrap\'i dikiş tarafı aşağı gelecek şekilde ekleyin ve tortilla altın rengini alana kadar her iki tarafını da 3 ila 5 dakika pişirin. Kalan Crunchwraps ile tekrarlayın.'},
  {
    recipeId: 1,
    categoryId: 3,
    title: 'Browni',
    photo_url: 'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
    photosArray: [
      'https://www.texanerin.com/content/uploads/2018/01/coconut-flour-brownies-1-650x975.jpg',
      'https://images-gmi-pmc.edge-generalmills.com/6fbc6859-e2b1-499d-b0fa-ada600c9cc3f.jpg',
      'http://www.recipe4living.com/assets/itemimages/400/400/3/83c29ac7418067c2e74f31c8abdd5a43_477607049.jpg',
      'https://www.franchisechatter.com/wp-content/uploads/2014/08/KFC-Photo-by-James.jpg'
    ],
    time: '30',
    ingredients: [
      [63, '300 gram Bitter (İri Parçalanmış)'],
      [16, '3 adet'],
      [42, '150 Gram'],
      [55, '1 Su Bardağı'],
      [12, '1 Su Bardağı'],
      [64, '1 Paket Vanilya'],
    ],
    description:'-- Tereyağını minik bir sos tenceresinin içerisinde eritin. \n \n -- Eridiği gibi ocaktan alın ve tereyağınız henüz sıcakken parça parça böldüğünüz çikolataları içerisine aktarın. Tereyağının sıcağı ile erimesini sağlayın. \n \n  -- Ardından tereyağlı çikolata karışımını oda sıcaklığında soğuması için bir kenara alın. \n \n -- Bir kabın içerisine yumurtaları alın, şekeri de ilave ederek güzelce çırpın. \n \n -- Çırpılan şekerle yumurtaların üzerine azar azar tereyağlı çikolatalı karışımı aktarın ve karıştırmaya devam edin. \n \n -- Tüm karışımı ekleyip karıştırdıktan sonra un ve vanilyayı eleyerek üzerine ilave edin. \n \n -- Spatula yardımıyla brownie harcını tüm malzemeler birleşinceye dek katlayarak karıştırın. \n \n Ardından yağlanmış ya da pişirme kağıdı serilmiş 20 cm\'lik kare kek kalıbına hazırladığınız karışımı aktarın. Üst kısmını spatulayla düzeltin. \n \n -- 160 derecede önceden ısıtılmış fansız fırında 30-35 dakika kadar pişirin. Üzeri hafif çatlak bir görünüm alınca fırından çıkarın ve oda sıcaklığında en az 1 saat kadar dinlendirin. \n \n -- Brownie hazır. Dinlendikçe kıvamı güzelleşecektir. Dinlendikten sonra dilimleyerek servis edebilirsiniz.'},
  {
    recipeId: 4,
    categoryId: 1,
    title: 'Kayseri Yağlaması',
    photo_url: 'https://cdn.yemek.com/mnresize/1250/833/uploads/2019/11/kayseri-yaglamasi-yemekcom.jpg',
    photosArray: [
      'http://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2014/04/WGC-Fish-Tacos-copy-2.jpg',
      'https://thecozyapron.com/wp-content/uploads/2018/03/baja-fish-tacos_thecozyapron_1.jpg',
      'https://www.simplyrecipes.com/wp-content/uploads/2017/06/2017-07-22-FishTacos-6.jpg'
    ],
    time: '35',
    ingredients: [
      [12, '4 Su Bardağı (Hamuru İçin)'],
      [1, '1,5 Çay Kaşığı (Hamuru İçin)'],
      [0, '3 Yemek Kaşığı (Hamuru İçin)'],
      [62, '1 Yemek Kaşığı Maya (Hamuru İçin)'],
      [18, '1,5 Su Bardağı (Ilık) (Hamuru İçin)'],
      [42, '4 Yemek Kaşığı (Kıyma Harcı İçin)'],
      [0, '1/2 Çay Bardağ Sıvı Yağ (Kıyma Harcı İçin)'],
      [22, '1 Adet Orta Boy (Kıyma Harcı İçin)'],
      [25, '500 gram Orta Yağlı (Kıyma Harcı İçin)'],
      [23, '1 Yemek Kaşığı (Kıyma Harcı İçin)'],
      [54, '2,5 Su Bardağı (Kıyma Harcı İçin)'],
      [4, '1 Çay Kaşığı (Kıyma Harcı İçin)'], 
      [18, '1,5 Su Bardağı Su (Kıyma Harcı İçin)'], 
    ],
    description:
      '-- In a medium shallow bowl, whisk together olive oil, lime juice, paprika, chili powder, cumin, and cayenne. Add cod, tossing until evenly coated. Let marinate 15 minutes. Meanwhile, make slaw: In a large bowl, whisk together mayonnaise, lime juice, cilantro, and honey. Stir in cabbage, corn, and jalapeño. Season with salt and pepper.\n\n -- In a large nonstick skillet over medium-high heat, heat vegetable oil. Remove cod from marinade and season both sides of each filet with salt and pepper. Add fish flesh side-down. Cook until opaque and cooked through, 3 to 5 minutes per side.\n\n -- Let rest 5 minutes before flaking with a fork. Assemble tacos: Serve fish over grilled tortillas with corn slaw and avocado. Squeeze lime juice on top and garnish with sour cream. '
  },
  {
    recipeId: 5,
    categoryId: 1,
    title: 'Tavuk Fijita',
    photo_url:
      'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Flavorful-Chicken-Fajitas_EXPS_GHBZ18_12540_B08_15_8b.jpg',
    photosArray: [
      'https://dadwithapan.com/wp-content/uploads/2015/07/Spicy-Chicken-Fajitas-22-1200x480.jpg',
      'https://3.bp.blogspot.com/-X-dHj7ORF9Q/XH4ssgTuSZI/AAAAAAAAEig/E46HP9wCfdsvyJFcMTX30cw-ICep8lF9ACHMYCw/s1600/chicken-fajitas-mexican-food-id-149559-buzzerg.jpg',
      'https://cdn-image.foodandwine.com/sites/default/files/styles/medium_2x/public/201403-xl-chipotle-chicken-fajitas.jpg?itok=ghVcI5SQ'
    ],
    time: 35,
    ingredients: [
      [9, '1/2 Çay Kaşığı'],
      [0, '4 Yemek Kaşığı'],
      [1, '1/2 Çay Kaşığı'],
      [30, '2 Yemek Kaşığı'],
      [31, '1 Çay Kaşığı'],
      [7, '1 Çay Kaşığı'],
      [24, '1/2 Çay Kaşığı'],
      [3, '1/2 Çay Kaşığı'],
      [21, '400 gram'],
      [27, '6 adet'],
      [36, '4 adet'],
      [37, '5 adet'],
      [38, '5 adet']
    ],
    description: 'Büyük bir kasede, 2 yemek kaşığı yağ, limon suyu ve baharatları birleştirin; tavuğu ekleyin. Kaplayın; üzerini kapatın. 1-4 saat buzdolabında bekletin. Büyük bir tavada, kalan yağda biber ve soğanları çıtır olana kadar soteleyin. Çıkarın ve sıcak tutun. Tavuğu süzün, marineyi atın. Aynı tavada, tavuğu orta-yüksek ateşte 5-6 dakika veya pembeleşmeyene kadar pişirin. Biber karışımını tavaya geri ekleyin; ısıtın. Tortilla hamurlarının ortasına doldurun; yarısını katlayın. İstenilen soslarla servis yapın.' },
  {
    recipeId: 0,
    categoryId: 0,
    title: 'Makarnalar',
    photo_url: 'https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg',
    photosArray: [
      "https://namelymarly.com/wp-content/uploads/2018/04/20180415_Beet_Lasagna_10.jpg",
      'https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width600/img/news_impact/photo/burger-fijpg-57e7e5907630c2ad.jpg',
      'https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492718105/articles/2013/09/24/burger-king-s-new-french-fries-took-ten-years-to-develop/130923-gross-burger-tease_izz59e',
      'https://aht.seriouseats.com/images/2012/02/20120221-193971-fast-food-fries-Burger-King-fries-2.jpg'
    ],
    time: '15',
    ingredients: [[0, '1 Su Bardağı'], [1, '1 Çay Kaşığı'], [2, '300 gram']],
    description:
      '-- Start with cleaned and peeled russet potatoes that you have cut into 3/8-inch match sticks. Place in bowl of very cold water: keep rinsing and changing the water until the water is clear; drain thoroughly and dry with paper towels or a clean lint-free kitchen towel.\n\n -- Meanwhile, you preheat your hot oil to 350 degrees F. Place prepared taters in oil and cook about 5 minutes. They will have that blond-tone color to them. \n\n -- Note: Once you add cold potatoes to the hot oil, the temperature of your oil is going to drop - you want it to be somewhere between 330 - 325 degrees F. \n\n -- Remove from oil; drain and cool. Now - either refrigerate until ready to finish cooking, or cool completely and freeze up to 3 months. To freeze properly - place completely cooled fries in single layer on tray and place in freezer until frozen. Then bag them.\n\n -- To finish cooking - preheat your oil to 400* F. Add your cold fries (which will drop the oil temp - which is fine because you want it near the 375 degrees F. temp) and cook a few minutes until done. Lightly salt them and shake well so that the salt distributes well and they are not salty.'
  },
  {
    recipeId: 8,
    categoryId: 2,
    title: 'Lazanya',
    photo_url: 'https://images8.alphacoders.com/817/817353.jpg',
    photosArray: [
      'https://previews.123rf.com/images/somegirl/somegirl1509/somegirl150900048/46103208-top-view-of-a-delicious-traditional-italian-lasagna-made-with-minced-beef-bolognese-sauce-topped-wit.jpg',
      'https://truffle-assets.imgix.net/87f324e4-YOUTUBE-NO-TXT.00_03_19_14.Imagen_fija001.jpg',
      'https://images4.alphacoders.com/817/817350.jpg'
    ],
    time: 60,
    ingredients: [
      [22, '1 adet'],
      [25, '400 gram'],
      [51, '5 tutam'],
      [52, '400 gram'],
      [53, '400 gram'],
      [55, '2 Yemek Kaşığı'],
      [56, '1/4 Su Bardağı'],
      [10, '1/2 Su Bardağı'],
      [1, '1/2 Çay Kaşığı'],
      [58, '1 Çay Kaşığı'],
      [4, '1/4 Çay Kaşığı'],
      [16, '1 large'],
      [46, '400 gram'],
      [48, '1 Su Bardağı'],
    ],
    description:
      '-- Cook noodles according to package directions; drain. Meanwhile, in a Dutch oven, cook sausage, beef and onion over medium heat 8-10 minutes or until meat is no longer pink, breaking up meat into crumbles. Add garlic; cook 1 minute. Drain. Stir in tomatoes, tomato paste, water, sugar, 3 Yemek Kaşığı parsley, basil, fennel, 1/2 Çay Kaşığı salt and pepper; bring to a boil. Reduce heat; simmer, uncovered, 30 minutes, stirring occasionally. In a small bowl, mix egg, ricotta cheese, and remaining parsley and salt. Preheat oven to 375°. Spread 2 Su Bardağı meat sauce into an ungreased 13x9-in. baking dish. Layer with 3 noodles and a third of the ricotta mixture. Sprinkle with 1 Su Bardağo mozzarella cheese and 2 Yemek Kaşığı Parmesan cheese.\n\n -- Repeat layers twice. Top with remaining meat sauce and cheeses (dish will be full). Bake, covered, 25 minutes. Bake, uncovered, 25 minutes longer or until bubbly. Let stand 15 minutes before serving.'
  }
];

export const ingredients = [
  {
    ingredientId: 0,
    name: 'Sıvı Yağ',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/27252067/thumb/11.jpg'
  },
  {
    ingredientId: 1,
    name: 'Tuz',
    photo_url:
      'https://image.freepik.com/free-photo/sea-salt-wooden-bowl-isolated-white-background_29402-416.jpg'
  },
  {
    ingredientId: 2,
    name: 'Patates',
    photo_url: 'http://www.valleyspuds.com/wp-content/uploads/Russet-Potatoes-cut.jpg'
  },
  {
    ingredientId: 3,
    name: 'Kırmızı Biber',
    photo_url:
      'https://image.freepik.com/free-photo/red-chilli-pepper-powder-isolated-white-background_55610-28.jpg'
  },
  {
    ingredientId: 4,
    name: 'Karabiber',
    photo_url: 'https://ak0.picdn.net/shutterstock/videos/26741680/thumb/1.jpg'
  },
  {
    ingredientId: 5,
    name: 'Kereviz Tuzu',
    photo_url: 'https://www.hasiroglugurme.com/images/urunler/Koftelik-Esmer-Bulgur-resim-297.jpg'
  },
  {
    ingredientId: 6,
    name: 'Kurutulmuş Adaçayı',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/Esxjvv7/super-slow-motion-dried-sage-falling-on-white-background_n1xg2gxzg__F0000.png'
  },
  {
    ingredientId: 7,
    name: 'Sarımsak Tozu',
    photo_url:
      'https://us.123rf.com/450wm/belchonock/belchonock1808/belchonock180818180/106007144-bowl-of-dry-garlic-powder-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 8,
    name: 'Yenibahar',
    photo_url:
      'https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/6/9/2695/allspice-berries-jamaican-ground-1.jpg'
  },
  {
    ingredientId: 9,
    name: 'Kekik',
    photo_url: 'https://frutascharito.es/886-large_default/oregano.jpg'
  },
  {
    ingredientId: 10,
    name: 'Fesleğen',
    photo_url: 'https://www.honeychop.com/wp-content/uploads/2015/09/Dried-Mint.png'
  },
  {
    ingredientId: 11,
    name: 'Mercanköşk',
    photo_url: 'https://images-na.ssl-images-amazon.com/images/I/71YATIBqBYL._SX355_.jpg'
  },
  {
    ingredientId: 12,
    name: 'Un',
    photo_url:
      'https://images.assetsdelivery.com/compings_v2/seregam/seregam1309/seregam130900036.jpg'
  },
  {
    ingredientId: 13,
    name: 'Esmer Şeker',
    photo_url:
      'https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/BALQTtekliuc6iu4u/rotating-brown-sugar-in-a-white-container-on-white-background_sis0xtbyl_thumbnail-full01.png'
  },
  {
    ingredientId: 14,
    name: 'Kaşer Tuzu',
    photo_url:
      'https://d1yn1kh78jj1rr.cloudfront.net/image/preview/r64-6MxPQjlatyfjp/storyblocks-top-view-of-ceramic-salt-cellar-with-coarse-grained-sea-salt-isolated-on-white-background_SPzKionPuV_SB_PM.jpg'
  },
  {
    ingredientId: 15,
    name: 'Tüm Tavuk',
    photo_url:
      'https://image.shutterstock.com/image-photo/two-raw-chicken-drumsticks-isolated-260nw-632125991.jpg'
  },
  {
    ingredientId: 16,
    name: 'Yumurta',
    photo_url:
      'https://image.shutterstock.com/image-photo/egg-whites-yolk-Su Bardağo-isolated-260nw-1072453787.jpg'
  },
  {
    ingredientId: 17,
    name: 'Yağ',
    photo_url:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fgettyimages-464433694_0.jpg%3Fitok%3DK42YR2GV&w=400&c=sc&poi=face&q=85'
  },
  {
    ingredientId: 18,
    name: 'Su',
    photo_url: 'https://i.lezzet.com.tr/images-xxlarge-secondary/1-litre-kac-bardak-eder-gunde-kac-bardak-su-icmeliyiz-d2223d8c-d752-4232-b14f-87c16b6b48ca.jpg'
  },
  {
    ingredientId: 19,
    name: 'Soğan Tozu',
    photo_url:
      'https://image.shutterstock.com/image-photo/mixed-spices-isolated-on-white-260nw-662383828.jpg'
  },
  {
    ingredientId: 20,
    name: 'MSG',
    photo_url:
      'https://img.freepik.com/free-photo/monosodium-glutamate-wood-spoon-white-background_55883-399.jpg?size=626&ext=jpg'
  },
  {
    ingredientId: 21,
    name: 'Tavuk Göğsü',
    photo_url:
      'https://us.123rf.com/450wm/utima/utima1602/utima160200063/53405187-raw-chicken-breast-fillets.jpg?ver=6'
  },
  {
    ingredientId: 22,
    name: 'Kuru Soğan',
    photo_url: 'https://i.lezzet.com.tr/images-800x600/8e54d51c-4aee-46fa-9699-33991c3224a9-b2240ad3-52c8-4ebe-8e24-163da9ab735a'
  },
  {
    ingredientId: 23,
    name: 'Domates Salçası',
    photo_url:
      'https://www.zeytinana.com.tr/takip/resimler/zeytinana-ev-yapimi-domates-salcasi-700-gr.jpg'
  },
  {
    ingredientId: 24,
    name: 'Toz Biber',
    photo_url:
      'https://us.123rf.com/450wm/nuttapong/nuttapong1505/nuttapong150500009/40458002-paprika-powder-isolated-on-white-background.jpg?ver=6'
  },
  {
    ingredientId: 25,
    name: 'Dana Kıyma',
    photo_url:
      'https://images.radio.com/kmoxam/s3fs-public/styles/nts_image_cover_tall_775x425/public/dreamstime_s_39607998.jpg?XCM.w1UGOp9sVKkWGQZe7_JIsRddxoIK&itok=3M6KcFLH&c=73fb6497175b4c1a5c79e3ede816656a'
  },
  {
    ingredientId: 26,
    name: 'Barbunya',
    photo_url:
      'https://www.seriouseats.com/images/2014/04/20140414-pile-of-beans-primary-1500x1125.jpg'
  },
  {
    ingredientId: 27,
    name: 'Tortilla',
    photo_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/NCI_flour_tortillas.jpg'
  },
  {
    ingredientId: 28,
    name: 'Firto',
    photo_url:
      'https://previews.123rf.com/images/ksena32/ksena321510/ksena32151000090/45863494-fried-fish-on-a-white-background.jpg'
  },
  {
    ingredientId: 29,
    name: 'Rendelenmiş Kaşar',
    photo_url:
      'https://image.shutterstock.com/image-photo/top-view-small-bowl-filled-260nw-284460308.jpg'
  },
  {
    ingredientId: 30,
    name: 'Lime Limon',
    photo_url: 'https://ak8.picdn.net/shutterstock/videos/23271748/thumb/1.jpg'
  },

  {
    ingredientId: 31,
    name: 'Kimyon',
    photo_url:
      'https://image.shutterstock.com/image-photo/pile-cumin-powder-isolated-on-260nw-1193262853.jpg'
  },
  {
    ingredientId: 32,
    name: 'Kırmızı Biber',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/11461337/thumb/1.jpg'
  },
  {
    ingredientId: 33,
    name: 'Alabalık',
    photo_url:
      'https://image.shutterstock.com/image-photo/roach-river-fish-isolated-on-260nw-277764143.jpg'
  },
  {
    ingredientId: 34,
    name: 'Avakado',
    photo_url:
      'https://www.redwallpapers.com/public/redwallpapers-large-thumb/avocado-cut-stone-leaves-white-background-free-stock-photos-images-hd-wallpaper.jpg'
  },
  {
    ingredientId: 35,
    name: 'Pulbiber',
    photo_url:
      'https://as1.ftcdn.net/jpg/02/06/55/10/500_F_206551074_mVczUrAWOSMaw8kR48FQDQBqDw47jCtL.jpg'
  },
  {
    ingredientId: 36,
    name: 'Soğan',
    photo_url: 'http://www.allwhitebackground.com/images/2/2650.jpg'
  },
  {
    ingredientId: 37,
    name: 'Yeşil Biber',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/4055509/thumb/1.jpg'
  },
  {
    ingredientId: 38,
    name: 'Kırmızı Biber',
    photo_url: 'https://ak9.picdn.net/shutterstock/videos/10314179/thumb/1.jpg'
  },
  {
    ingredientId: 39,
    name: 'Pizza Hamuru',
    photo_url:
      'https://image.shutterstock.com/image-photo/fresh-raw-dough-pizza-bread-260nw-518950903.jpg'
  },
  {
    ingredientId: 40,
    name: 'Ketçap',
    photo_url:
      'https://st2.depositphotos.com/5262887/11050/i/950/depositphotos_110501208-stock-photo-ketchup-bowl-isolated-on-white.jpg'
  },
  {
    ingredientId: 41,
    name: 'Acı Sos',
    photo_url:
      'https://media.istockphoto.com/photos/opened-can-of-spaghetti-sauce-on-a-white-background-picture-id497704752?k=6&m=497704752&s=612x612&w=0&h=JnL54buYu1Z3fGtd8uNdjFxiAKwlxoDluD6jbIfSaZI='
  },
  {
    ingredientId: 42,
    name: 'Tereyağı',
    photo_url: 'https://sogutsofrasi.com/cdn/shop/products/01122020201842.jpg?v=1633895015'
  },
  {
    ingredientId: 43,
    name: 'Krema',
    photo_url:
      'https://media.istockphoto.com/photos/mayonnaise-in-bowl-isolated-on-white-background-picture-id614981116?k=6&m=614981116&s=612x612&w=0&h=LtbsI2HQXOTERYuP9YJ2PJfRF3W6DcyZ798fxMcQWC0='
  },
  {
    ingredientId: 44,
    name: 'Yoğurt',
    photo_url:
      'https://st.depositphotos.com/2757384/3317/i/950/depositphotos_33170129-stock-photo-pouring-a-glass-of-milk.jpg'
  },
  {
    ingredientId: 45,
    name: 'Peynir',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3619997/thumb/1.jpg'
  },
  {
    ingredientId: 46,
    name: 'Mozarella',
    photo_url:
      'https://t3.ftcdn.net/jpg/02/06/73/98/500_F_206739841_suPu6qDPHlowFqx9qo8fLqV8sNevL2g3.jpg'
  },
  {
    ingredientId: 47,
    name: 'Kereviz Sapları',
    photo_url:
      'https://cdn4.eyeem.com/thumb/6d1b3957c7caa9b73c3e0f820ef854b931808139-1538043742765/w/750'
  },
  {
    ingredientId: 48,
    name: 'Parmesan Peyniri',
    photo_url: 'https://ak7.picdn.net/shutterstock/videos/3721877/thumb/1.jpg'
  },
  {
    ingredientId: 49,
    name: 'Pancetta',
    photo_url:
      'https://previews.123rf.com/images/onlyfabrizio/onlyfabrizio1606/onlyfabrizio160600002/60198502-raw-stripes-of-pancetta-stesa-on-a-white-background.jpg'
  },
  {
    ingredientId: 50,
    name: 'Spagetti',
    photo_url:
      'https://previews.123rf.com/images/mfron/mfron1204/mfron120400098/13306773-bunch-of-spaghetti-nudeln-isoliert-auf-wei%C3%9Fem-hintergrund.jpg'
  },
  {
    ingredientId: 51,
    name: 'Sarımsak',
    photo_url: 'https://image.freepik.com/free-photo/fresh-garlic-white-background_1339-17012.jpg'
  },
  {
    ingredientId: 52,
    name: 'Lazanya Hamuru',
    photo_url:
      'https://previews.123rf.com/images/velkol/velkol1110/velkol111000004/11083085-an-image-of-raw-lasagna-on-white-background.jpg'
  },
  {
    ingredientId: 53,
    name: 'İtalyan Sosu',
    photo_url:
      'https://previews.123rf.com/images/arinahabich/arinahabich1504/arinahabich150400858/38827029-raw-italian-sausage-on-a-white-background-.jpg'
  },
  {
    ingredientId: 54,
    name: 'Domates Püresi',
    photo_url:
      'https://zeytininadigemlik.com/wp-content/uploads/2021/09/15-kahvatiik-knserve.webp'
  },
  {
    ingredientId: 55,
    name: 'Şeker',
    photo_url:
      'https://previews.123rf.com/images/sommai/sommai1411/sommai141100034/33199985-sugar-cubes-in-a-bowl-isolated-on-white-background.jpg'
  },
  {
    ingredientId: 56,
    name: 'Maydanoz',
    photo_url:
      'https://t4.ftcdn.net/jpg/02/15/78/05/240_F_215780551_Eid0xpP1M2fokvuEcvJj8uqhROLJkb3p.jpg'
  },
  {
    ingredientId: 57,
    name: 'Ricotta Peyniri',
    photo_url:
      'https://previews.123rf.com/images/barkstudio/barkstudio1608/barkstudio160800351/61418602-ricotta-cheese-into-a-bowl-in-white-background.jpg'
  },
  {
    ingredientId: 58,
    name: 'Rezene tohumu',
    photo_url:
      'https://previews.123rf.com/images/pinkomelet/pinkomelet1710/pinkomelet171000227/88851299-close-up-the-fennel-seed-on-white-background.jpg'
  },
  {
    ingredientId: 59,
    name: 'Muz',
    photo_url:
      'https://cdn.myikas.com/images/4afecb76-ba28-4669-a6c5-11f86304598d/d2dab9f3-fec8-478c-a09f-3db7a2e8a285/3840/img-3869.webp'
  },
  {
    ingredientId: 60,
    name: 'Donmuş Çilek',
    photo_url:
      'https://www.cascadianfarm.com/wp-content/uploads/2018/12/Strawberries_Main_0218.png'
  },
  {
    ingredientId: 61,
    name: 'Yoğurt',
    photo_url:
      'http://images.media-allrecipes.com/userphotos/960x960/3758635.jpg'
  },
  {
    ingredientId: 62,
    name: 'Maya',
    photo_url:
      'https://www.shutterstock.com/image-photo/dry-yeast-wooden-scoop-on-600nw-1057206197.jpg'
  },
  {
    ingredientId: 63,
    name: 'Bitter Çikolata',
    photo_url: 'https://www.cikolatasepeti.com/resim/bitter-cikolata-yuzde-70-kakao-0-2212.jpg'
  },
  {
    ingredientId: 64,
    name: 'Vanilya',
    photo_url: 'https://ardenmarket.com.tr/media/catalog/product/cache/0b154ba1d9ffbc98998b9163ce10b49b/d/r/dr.oetker_ekerli_vanilin_10_lu_50_g.jpg'
  }
];
