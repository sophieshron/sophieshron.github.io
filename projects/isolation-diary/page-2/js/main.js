var myName = 'plz work';

console.log (myName);

$("#index").click(function(){
  console.log ('click');
  $('html,body').scrollTop(400);
});

$('html,body').scrollTop(0);


$('.small').click(function() {
  var small = $(this); // this particular text we clicked
  var id = small.data('id'); // get the id of this text from the data-attribute
  var img = $('.img[data-id="' + id + '"]'); // find the matching text element by passing in the id
  var allImgElements = $('.img');
  
  allImgElements.removeClass('show'); // remove the show class from all text elements before adding it to this one
  img.addClass('show'); // add the show class to this particular text element
});









