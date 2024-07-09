$(function() {

  $('.select-style').styler();


$(window).on('scroll', function(){
  $('.header').toggleClass('header--fixed', $(this).scrollTop() > 50);
});

$('.reviews__slider').slick({
  dots:true,
  infinite:false,
  prevArrow: '<button type="button" class="reviews__arrow reviews__arrow--prev"><svg class="reviews__arrow-svg reviews__arrow-svg--prev" "images/sprite.svg#slider-prev-icon"></button>',
  nextArrow: '<button type="button" class="reviews__arrow reviews__arrow--next"><svg class="reviews__arrow-svg reviews__arrow-svg--next" "images/sprite.svg#slider-next-icon"></button>'
  

});

$(".burger").on("click" , function (e) {
  e.preventDefault();
  $(".burger-page").addClass("active");
  $("body").addClass("lock");
});

$(".burger-page__btn-close").on("click" , function () {
  $(".burger-page").removeClass("active");
  $("body").removeClass("lock");
});

$(document).mouseup(function (e) {
  var div = $(".burger-page");
  if(!div.is(e.target) && div.has(e.target).length === 0) {
      $(".burger-page").removeClass("active");
      $("body").removeClass("lock");
  }
});

$(".product-catalog__hero-btn").on("click" , function (e) {
  e.preventDefault();
  $(".product-catalog__menu-page").addClass("active");
  $("body").addClass("lock-catalog");
});

$(".product-catalog__btn-close").on("click" , function () {
  $(".product-catalog__menu-page").removeClass("active");
  $("body").removeClass("lock-catalog");
});


$('.product-catalog__input').ionRangeSlider({
  type: "double",
  prefix:"$",
  onStart: function (data) {
    $('.product-catalog__form-from').text(data.from);
    $('.product-catalog__form-to').text(data.to);
  },
  onChange: function (data) {
    $('.product-catalog__form-from').text(data.from);
    $('.product-catalog__form-to').text(data.to);
},
});

});





const slider = document.querySelector('.swiper');

let mySwiper;

function mobileSlider() {
    if (window.innerWidth <= 576 && slider.dataset.mobile == 'false') {
        mySwiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
             
        });

        slider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 576) {
        slider.dataset.mobile = 'false';
        if (slider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
    }
}

mobileSlider()

window.addEventListener('resize', () => {
    mobileSlider();
});



const mixer = mixitup('.popular-categories__filter-content');