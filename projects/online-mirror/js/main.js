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




//dragables
$( function() {
    $( "#dove-sticker" ).draggable();
  } );

$( function() {
    $( "#bubble-sticker" ).draggable();
  } );

$( function() {
    $( "#rose-sticker" ).draggable();
  } );

$( function() {
    $( "#cloud-sticker" ).draggable();
  } );

$( function() {
    $( "#pearl-sticker" ).draggable();
  } );

$( function() {
    $( "#tiara-sticker" ).draggable();
  } );
//

//add stickers


$(function() {
  $('#rose-button').click(function() {
    console.log("click rose");
    $('#rose-sticker').removeClass("hidden");
  });
});

$(function() {
  $('#cloud-button').click(function() {
    console.log("click cloud");
    $('#cloud-sticker').removeClass("hidden");
  });
});

$(function() {
  $('#tiara-button').click(function() {
    console.log("click tiara");
    $('#tiara-sticker').removeClass("hidden");
  });
});

$(function() {
  $('#pearl-button').click(function() {
    console.log("click pearl");
    $('#pearl-sticker').removeClass("hidden");
  });
});

$(function() {
  $('#dove-button').click(function() {
    console.log("click dove");
    $('#dove-sticker').removeClass("hidden");
  });
});

$(function() {
  $('#bubble-button').click(function() {
    console.log("click bubble");
    $('#bubble-sticker').removeClass("hidden");
  });
});


//add stickers end



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







