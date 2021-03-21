// images setup
const images = [
  "https://ids.si.edu/ids/deliveryService?max_w=550&id=CHSDM-1996-108-1MattFlynn",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-1940-120-30MattFlynn",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-D923932C025D2-000001",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-1947-81-4MattFlynn",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-1947-81-11MattFlynn",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-1991-89-160MattFlynn",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-1992-129-1-aMattFlynn",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-1969-70-3MattFlynn",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-201243_01-000001",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-17915087BB932-000001",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-1996-104-12MattFlynn",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-7633-1-2013MattFlynn",
  "https://ids.si.edu/ids/deliveryService?max_w=800&id=CHSDM-289545_01-000001",
];

// content setup
const texts = [
  ["1815", "Telemachus on the Island of Calypso"],
  ["1820", "Garden Seen Through an Alcove"],
  ["1840", "Wallpaper with Alternative Pattern"],
  ["1946", "Silver Springs"],
  ["1947", "Pair O'Dice Club"],
  ["1952", "Cocktail or Bar Paper"],
  ["1955", "Abstract Leaf and Plant Shapes"],
  ["1967", "Razzmatazz"],
  ["1990", "Meatballs on Green Weave"],
  ["1994", "Loves Me Loves Me Not"],
  ["1997", "Broken Leg"],
  ["2013", "Cosmo"],
  ["2017", "Landscape No. 1"],
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
