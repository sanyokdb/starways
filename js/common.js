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

// $(".cargo-form__input").keyup(function() {
//   if (this.value.length == this.maxLength) {
//     $(this).nextAll('.cargo-form__input:enabled:first').focus();
//   }
// });

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