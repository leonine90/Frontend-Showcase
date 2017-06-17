$(document).function(){
  if ($('#section2').offset().top >= $(window).scrollTop()){
    $('.nav2').toggleClass('active');
  };
}
