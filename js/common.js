// $('body').hide()

$('.preloader').delay(400).fadeOut('slow', function () {
  $(this).attr('style', 'display: none !important');
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $(".header--fixed .header-top").addClass("header-top--scrolled");
    $(".header--fixed").removeClass("header--dark");
  } else {
    $(".header--fixed .header-top").removeClass("header-top--scrolled");
    $(".header--fixed.header--home").addClass("header--dark");
  }
});

$(document).on("click", ".js-lang__btn", function() {
  $(this).toggleClass('active');
  $('.js-lang__dropdown').toggleClass('active');
});
$(document).on("click", ".js-phone__num, .js-phone__modal-close", function() {
  // $(this).toggleClass('active');
  $('.js-phone__modal').toggleClass('active');
});

$(document).on("click", ".menu__btn", function() {
  $(this).toggleClass('active');
  $('.menu__list').toggleClass('active');
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

// accordion
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

$(window).scroll(function(){
  if($(window).scrollTop() > 100) {
    $('.scrollup').addClass("active");
  } else {
    $('.scrollup').removeClass("active");
  }
});

$('.scrollup').click(function(){
  $('html, body').animate({scrollTop: 0}, 600);
  return false;
});



// cargo-form__input
document.addEventListener("DOMContentLoaded", () => {
  const inputElements = [...document.querySelectorAll('.cargo-form__input')];
  inputElements.forEach((ele,index)=>{
    ele.addEventListener('keydown',(e)=>{
      // if the keycode is backspace & the current field is empty
      // focus the input before the current. Then the event happens
      // which will clear the "before" input box.
      if(e.keyCode === 8 && e.target.value==='') {
          inputElements[Math.max(0,index-1)].focus();
      } 
    });
    ele.addEventListener('input',(e)=>{
      // take the first character of the input
      // this actually breaks if you input an emoji like 👨‍👩‍👧‍👦....
      // but I'm willing to overlook insane security code practices.
      const [first,...rest] = e.target.value;
      e.target.value = first ?? ''; // first will be undefined when backspace was entered, so set the input to ""
      const lastInputBox = index===inputElements.length-1;
      const didInsertContent = first!==undefined;
      if(didInsertContent && !lastInputBox) {
        // continue to input the rest of the string
        inputElements[index+1].focus();
        inputElements[index+1].value = rest.join('');
        inputElements[index+1].dispatchEvent(new Event('input'));
      }
    });
  });
});


