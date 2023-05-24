// $('body').hide()

$(document).on("click", ".js-lang__btn", function() {
  $(this).toggleClass('active');
  $('.js-lang__dropdown').toggleClass('active');
});

$(document).on("click", ".js-phone__num, .js-phone__modal-close", function() {
  // $(this).toggleClass('active');
  $('.js-phone__modal').toggleClass('active');
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


$('.accordion__content').hide();
$('.accordion__item').click(function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active").find(".accordion__content").slideUp();
  } else {
    $(".accordion__item.active .accordion__content").slideUp();
    $(".accordion__item.active").removeClass("active");
    $(this).addClass("active").find(".accordion__content").slideDown();
  }
  return false;
});