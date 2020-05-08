//screenshot

//gallery menu
$(function() {
  $('.camera').click(function() {
    $('.gallery-pop-container').toggleClass("visible");
  });
});



$(function() {
  $('.gallery-pop-x').click(function() {
    console.log("click x");
    $('.gallery-pop-container').removeClass("visible");
  });
});



//BACKGROUND change tulip
$(function() {
  $('#tulip').click(function() {
    console.log("click tulip");
    $('body').css("background-image", "url(img/tulip-bg.png)");
  });
});
//background change tulip end

//background change clouds
$(function() {
  $('#clouds').click(function() {
    console.log("click clouds");
    $('body').css("background-image", "url(img/clouds.png)");
  });
});
//background change clouds end

//background change beach
$(function() {
  $('#beach').click(function() {
    console.log("click beach");
    $('body').css({"background-image": "url(img/beach.jpg)", "background-size": "100vw"});
  });
});
//background change beach end

//background change butterfly
$(function() {
  $('#butterfly').click(function() {
    console.log("click butterfly");
    $('body').css({"background-image": "url(img/butterfly.jpg)", "background-size": "100vw"});
  });
});
//BACKGROUND change butterfly end

//MIRROR change circle
$(function() {
  $('#circle-mirror').click(function() {
    console.log("click mirror");
    $('#circle-mirror-frame').addClass("visible");
    $('#videoElement').addClass("circle-crop");       
    $('#gold-frame').addClass("hidden");
    $('#pink-mirror-frame').addClass("hidden");
    $('#videoElement').removeClass("rounded-crop");

  });
});
//mirror change circle end

//mirror change gold
$(function() {
  $('#gold-mirror').click(function() {
    console.log("click gold");
    $('#gold-frame').removeClass("hidden");
    $('#circle-mirror-frame').removeClass("visible");       
    $('#videoElement').removeClass("circle-crop");
    $('#videoElement').removeClass("rounded-crop");
    $('#pink-mirror-frame').addClass("hidden");

  });
});
//mirror change gold end

//mirror change pink
$(function() {
  $('#pink-mirror').click(function() {
    console.log("click pink");
    $('#pink-mirror-frame').addClass("visible");
    $('#pink-mirror-frame').removeClass("hidden");
    $('#circle-mirror-frame').removeClass("visible"); 
    $('#gold-frame').addClass("hidden");      
    $('#videoElement').removeClass("circle-crop");
    $('#videoElement').addClass("rounded-crop");
  });
});
//mirror change pink end


//POPUPS
//popup bg
$(function() {
  $('#background').hover(function() {
    console.log("click");
    $('#background-pop').toggleClass('visible');
  });
});

$(function() {
  $('#background-pop').hover(function() {
    $('#background-pop').toggleClass('visible');
  });
});
//endpopup bg

//popup mirror
$(function() {
  $('#mirror').hover(function() {
    $('#mirror-pop').toggleClass('visible');
  });
});

$(function() {
  $('#mirror-pop').hover(function() {
    $('#mirror-pop').toggleClass('visible');
  });
});
//endpopup mirror

//popup stickers
$(function() {
  $('#stickers').hover(function() {
    $('#stickers-pop').toggleClass('visible');
  });
});

$(function() {
  $('#stickers-pop').hover(function() {
    $('#stickers-pop').toggleClass('visible');
  });
});
//endpopup stickers
//END POPUPS


//add stickers
$(function() {
  $('#bubble-button').click(function() {
    console.log("click bubble");
    // Use class names for the stickers instead of IDs. 
    // You can only have 1 unique ID per page. classes don't have this limitation.
    $('body').append('<img class="bubble-sticker" src="img/bubble.png">');
    $('.bubble-sticker').draggable();
  });
});

$(function() {
  $('#tiara-button').click(function() {
    console.log("click tiara");
    // Use class names for the stickers instead of IDs. 
    // You can only have 1 unique ID per page. classes don't have this limitation.
    $('body').append('<img class="tiara-sticker" src="img/tiara.png">');
    $('.tiara-sticker').draggable();
  });
});

$(function() {
  $('#cloud-button').click(function() {
    console.log("click cloud");
    // Use class names for the stickers instead of IDs. 
    // You can only have 1 unique ID per page. classes don't have this limitation.
    $('body').append('<img class="cloud-sticker" src="img/cloud-sticker.png">');
    $('.cloud-sticker').draggable();
  });
});

$(function() {
  $('#rose-button').click(function() {
    console.log("click rose");
    // Use class names for the stickers instead of IDs. 
    // You can only have 1 unique ID per page. classes don't have this limitation.
    $('body').append('<img class="rose-sticker" src="img/rose.png">');
    $('.rose-sticker').draggable();
  });
});

$(function() {
  $('#dove-button').click(function() {
    console.log("click dove");
    // Use class names for the stickers instead of IDs. 
    // You can only have 1 unique ID per page. classes don't have this limitation.
    $('body').append('<img class="dove-sticker" src="img/dove.png">');
    $('.dove-sticker').draggable();
  });
});

$(function() {
  $('#pearl-button').click(function() {
    console.log("click pearl");
    // Use class names for the stickers instead of IDs. 
    // You can only have 1 unique ID per page. classes don't have this limitation.
    $('body').append('<img class="pearl-sticker" src="img/pearl.png">');
    $('.pearl-sticker').draggable();
  });
});

$(function() {
  $('#goldfish-button').click(function() {
    console.log("click goldfish");
    // Use class names for the stickers instead of IDs. 
    // You can only have 1 unique ID per page. classes don't have this limitation.
    $('body').append('<img class="goldfish-sticker" src="img/goldfish.png">');
    $('.goldfish-sticker').draggable();
  });
});
// add stickers end


//video stream
var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}
//video stream end



//mobile 

//mobile end







