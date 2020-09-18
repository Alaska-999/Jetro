jQuery(document).ready(function () {
  jQuery(".slider__inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: false,
    adaptiveHeight: true,
    asNavFor: ".slider__nav",
    infinite: true,
    nextArrow: '<button class="slick-arrow slick-next"></button>',
    prevArrow: '<button class="slick-arrow slick-prev"></button>',
  });

  $(".slider__nav").slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: ".slider__inner",
    focusOnSelect: true,
    infinite: false,
    arrows: false,
  });

  $(".header__menu-btn").on("click", function () {
    $(".header__menu-list").slideToggle();
  });
});
