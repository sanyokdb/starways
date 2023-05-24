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

// $('.cargo-form__input').keyup(function(){
//   if($(this).val().match(/^\d{1}$/))
//     $(this).next('.cargo-form__input').focus();
//   else
//     $(this).val('');
//   // Находим следующий элемент input
//   var nextInput = $(this).nextAll('.cargo-form__input').first();
//   // Если следующий элемент input существует, то устанавливаем на него фокус
//   if (nextInput.length)
//     nextInput.focus();
// });

$(".cargo-form__input").keyup(function() {
  if (this.value.length == this.maxLength) {
    $(this).nextAll('.cargo-form__input:enabled:first').focus();
  }
});