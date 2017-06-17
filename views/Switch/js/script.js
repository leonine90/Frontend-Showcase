$(document).ready(function(){
  $('.switch').on('click','.slider',function(evt){
    evt.stopPropagation();
    console.log("Clicked!");
    $(this).closest('body').toggleClass('switchedOn');
  });
});
