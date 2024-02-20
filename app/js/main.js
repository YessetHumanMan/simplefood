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
  
});

$(".product-catalog__btn-close").on("click" , function () {
  $(".product-catalog__menu-page").removeClass("active");

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

var swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const mixer = mixitup('.popular-categories__filter-content');