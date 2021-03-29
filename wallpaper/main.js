// images setup
const images = [
  "https://ids.si.edu/ids/deliveryService?max_w=550&id=CHSDM-1996-108-1MattFlynn",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-1940-120-30MattFlynn",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-1940-120-5MattFlynn",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-D923932C025D2-000001",
  "https://ids.si.edu/ids/deliveryService?max_w=550&id=CHSDM-F41C276A68492_04",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-F0FF9A4550632-000001",
  "https://ids.si.edu/ids/deliveryService?max_w=550&id=CHSDM-1977-28-22-bMattFlynn",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-1954-136-1MattFlynn",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-7C77C6A47FE32-000001",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-161531_01-000001",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-1960-163-14MattFlynn",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-18318173EFB02",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-1998-19-133MattFlynn",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-1998-19-125MattFlynn", 
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-1991-89-43MattFlynn",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-695640D577F32_004_R-000001",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-194191_01-000001",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-1982-75-1MattFlynn",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-201243_01-000001",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-88C54473F07C2-000001",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-289545_01-000001",
];

// content setup
const texts = [
  ["1810", "Telemachus on the Island of Calypso"],
  ["1820", "Garden Seen Through an Alcove"],
  ["1830", "Painted Decoration of Walls"],
  ["1840", "Wallpaper with Alternative Pattern"],
  ["1850", "Waterlillies in Pond"],
  ["1860", "Rising Waves"],
  ["1870", "Harebell"],
  ["1880", "Branch of Roses"],
  ["1890", "Little Baby Blue"],
  ["1900", "Victorian Collectibles"],
  ["1910", "Sierras"],
  ["1920", "Leafless Tree"],
  ["1930", "Leaves & a Strawberry"],
  ["1940", "Coral & Pink Fishnet"],
  ["1950", "Powder Room Design"],
  ["1960", "The Instant Put On"],
  ["1970", "The Happy Cow"],
  ["1980", "Junk Food"],
  ["1990", "Meatballs on Green Weave"],
  ["2000", "Logo Wallpaper"],
  ["2010", "Landscape No. 1"],
];

// init plugin
rgbKineticSlider = new rgbKineticSlider({
  // images and content sources
  slideImages: images, // array of images >demo size : 1920 x 1080
  itemsTitles: texts, // array of titles / subtitles

  // displacement images sources
  backgroundDisplacementSprite: "https://i.ibb.co/N246LxD/map-9.jpg", // slide displacement image
  cursorDisplacementSprite: "https://i.ibb.co/KrVr51f/displace-circle.png", // cursor displacement image

  // cursor displacement effect
  cursorImgEffect: true, // enable cursor effect
  cursorTextEffect: false, // enable cursor text effect
  cursorScaleIntensity: 5, // cursor effect intensity
  cursorMomentum: 0.14, // lower is slower

  // swipe
  
  // slide transition
  slideTransitionDuration: .5, // transition duration
  transitionScaleIntensity: 30, // scale intensity during transition
  transitionScaleAmplitude: 160, // scale amplitude during transition

  // regular navigation
  nav: true, // enable navigation
  navElement: ".main-nav", // set nav class

  // image rgb effect
  imagesRgbEffect: false, // enable img rgb effect
  imagesRgbIntensity: 0.9, // set img rgb intensity
  navImagesRgbIntensity: 80, // set img rgb intensity for regular nav

  // texts settings
  textsDisplay: true, // show title
  textsSubTitleDisplay: true, // show subtitles
  textsTiltEffect: true, // enable text tilt
  googleFonts: ["Playfair Display:700", "Roboto:400"], // select google font to use
  buttonMode: false, // enable button mode for title
  textsRgbEffect: false, // enable text rgb effect
  textsRgbIntensity: 0.03, // set text rgb intensity
  navTextsRgbIntensity: 15, // set text rgb intensity for regular nav

  textTitleColor: "white", // title color
  textTitleSize: 125, // title size
  mobileTextTitleSize: 125, // title size
  textTitleLetterspacing: 3, // title letterspacing

  textSubTitleColor: "white", // subtitle color ex : 0x000000
  textSubTitleSize: 21, // subtitle size
  mobileTextSubTitleSize: 21, // mobile subtitle size
  textSubTitleLetterspacing: 2, // subtitle letter spacing
  textSubTitleOffsetTop: 90, // subtitle offset top
  mobileTextSubTitleOffsetTop: 90 // mobile subtitle offset top
});
