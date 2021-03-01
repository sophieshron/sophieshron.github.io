



//video stream

//video stream end

//button

function display_random_image() 

{
     var theImages = [{
        src: "img/2.jpg",
        width: "1500",
        height: "900"
    }, {
        src: "img/3.jpg",
        width: "1500",
        height: "900"
    }, {
        src: "img/4.jpg",
        width: "1500",
        height: "900"
    }, {
        src: "img/5.jpg",
        width: "1500",
        height: "900"
    }, {
        src: "img/6.jpg",
        width: "1500",
        height: "900"
    },{
        src: "img/7.jpg",
        width: "1500",
        height: "900"
    },{
        src: "img/8.jpg",
        width: "1500",
        height: "900"
    },{
        src: "img/9.jpg",
        width: "1500",
        height: "900"
    },{
        src: "img/10.jpg",
        width: "1500",
        height: "900"
    },{
        src: "img/11.jpg",
        width: "1500",
        height: "900"
    },{
        src: "img/12.jpg",
        width: "1500",
        height: "900"
    },{
        src: "img/13.jpg",
        width: "1500",
        height: "900"
    },{
        src: "img/14.jpg",
        width: "1500",
        height: "900"
    },{
        src: "img/15.jpg",
        width: "1500",
        height: "900"
    },{
        src: "img/16.jpg",
        width: "1500",
        height: "900"
    },{
        src: "img/17.jpg",
        width: "1500",
        height: "900"
    },{
        src: "img/18.jpg",
        width: "1500",
        height: "900"
    },{
        src: "img/19.jpg",
        width: "1500",
        height: "900"
    },{
        src: "img/20.jpg",
        width: "1500",
        height: "900"
    },{
        src: "img/21.jpg",
        width: "1500",
        height: "900"
    },{
        src: "img/22.jpg",
        width: "1500",
        height: "900"
    },{
        src: "img/23.jpg",
        width: "1500",
        height: "900"
    },{
        src: "img/24.jpg",
        width: "1500",
        height: "900"
    },{
        src: "img/25.jpg",
        width: "1500",
        height: "900"
    },{
        src: "img/26.jpg",
        width: "1500",
        height: "900"
    },];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}

//button end

//mobile 

//mobile end







