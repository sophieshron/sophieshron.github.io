var myName = 'sophie';

console.log (myName);


$("#s").click(function(){
  console.log ('click');
  $("#s").toggleClass("sans");
});

$("#o").click(function(){
  console.log ('click');
  $("#o").toggleClass("sans");
});

$("#p").click(function(){
  console.log ('click');
  $("#p").toggleClass("sans");
});

$("#h").click(function(){
  console.log ('click');
  $("#h").toggleClass("sans");
});

$("#i").click(function(){
  console.log ('click');
  $("#i").toggleClass("sans");
});

$("#e").click(function(){
  console.log ('click');
  $("#e").toggleClass("sans");
});


$(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;

  console.log('keypress:', key);

  if ( key == 'a' ) {
    img = 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Pan_Blue_Circle.png';
  } else if ( key == 'b' ) {
    img = 'https://www.freeiconspng.com/uploads/pink-triangle-png-7.png';
  } else if ( key == 'c' ) {
    img = 'https://www.freeiconspng.com/uploads/orange-square-image-2.png';
  }  else if ( key == 'd' ) {
    img = 'https://img.pngio.com/green-rectangle-png-96-images-in-collection-page-2-green-rectangle-png-2000_1478.png';
  }  else if ( key == 'e' ) {
    img = 'https://img.pngio.com/green-rectangle-png-96-images-in-collection-page-2-green-rectangle-png-2000_1478.png';
  }  else if ( key == 'f' ) {
    img = 'https://www.freeiconspng.com/uploads/pink-triangle-png-7.png';
  }  else if ( key == 'g','h','i','j','k','l') {
    img = 'https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png';
  }  else if ( key == 'm','n','o','p','q','r') {
    img = 'https://upload.wikimedia.org/wikipedia/commons/4/44/Plain_Yellow_Star.png';
  }  else if ( key == 's','t','u','v','w','x') {
    img = 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Pan_Blue_Circle.png';
  }  else if ( key == 'y','z') {
    img = 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Pan_Blue_Circle.png';
  }
  
  
  

  // etc.

  if ( img ) {
    $('body').append('<img src="' + img + '" style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 8vw;">');
  } else {
    $('body').append('<h2 style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); font-size: ' + Math.random() * 200 + 'px;">' + key + '</h2>');
  }
});


