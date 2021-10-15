//drag
$(function() {

  $('.img').draggable();
  });



//click z 
$('.img').click(function() {
   // set ohters element to the initial level
   $(this).siblings('.img').css('z-index', 10);
   // set clicked element to a higher level
   $(this).css('z-index', 11);
});

//random placement

$('.img').append(function() {
    var a = Math.random() * 100 - 50;
    $(this).css('transform', 'rotate(' + a + 'deg) scale(1.25)');
}, function() {
    $(this).css('transform', 'none');
});



$('.img').each(function(i,el){

    var tLeft = Math.floor(Math.random()*1000),
        tTop  = Math.floor(Math.random()*900);

    $(el).css({position:'absolute', left: tLeft, top: tTop});

});

