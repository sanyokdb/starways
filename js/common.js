// $('body').hide()

$(document).on("click", ".js-lang__btn", function() {
  $(this).toggleClass('active');
  $('.js-lang__dropdown').toggleClass('active');
});

$(document).on("click", ".js-phone__num, .js-phone__modal-close", function() {
  // $(this).toggleClass('active');
  $('.js-phone__modal').toggleClass('active');
});


// mask
$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};
$.mask.definitions['9'] = '';
$.mask.definitions['n'] = '[0-9]';
$(function(){
  $("#phone").click(function(){$(this).setCursorPosition(5);}).mask("+998 nn nnn-nn-nn");
  $("#phone2").click(function(){$(this).setCursorPosition(5);}).mask("+998 nn nnn-nn-nn");
  $("#phone3").click(function(){$(this).setCursorPosition(5);}).mask("+998 nn nnn-nn-nn");
});


$(".header-title-slider").slick({
  slidesToShow: 1,
  speed: 300,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  infinite: true,
  fade: true,
  adaptiveHeight: true,
  pauseOnHover:false
});
