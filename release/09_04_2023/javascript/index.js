$(document).ready(function () {
  const categoryOne = $('.header__category-one');
  const categoryTwo = $('.header__category-two');
  const categoryThree = $('.header__category-three');

  const addShow = (arr) => arr.forEach((item) => $(item).addClass('show'));
  const removeShow = (arr) => arr.forEach((item) => item.removeClass('show'));

  categoryOne.mouseenter(() => addShow([categoryTwo]));
  categoryOne.mouseleave(() => removeShow([categoryTwo, categoryThree]));
  categoryTwo.mouseenter(() => addShow([categoryOne, categoryTwo, categoryThree]));
  categoryTwo.mouseleave(() => removeShow([categoryTwo, categoryThree]));
  categoryThree.mouseenter(() => addShow([categoryOne, categoryTwo, categoryThree]));

  $('.slider__wrapper-one').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="slider__arrow fa-solid fa-angle-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="slider__arrow fa-solid fa-angle-left"></i></button>`,
  });

  $('.slider__list-five').slick({
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: `<button type='button' class='slider__btn-control slider__btn-prev slick-prev slick-arrow'><i class="slider__arrow fa-solid fa-angle-left"></i></button>`,
    nextArrow: `<button type='button' class='slider__btn-control slider__btn-next slick-next slick-arrow'><i class="slider__arrow fa-solid fa-angle-left"></i></button>`,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },

      {
        breakpoint: 423,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.my-learning__list').slick({
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    prevArrow: `<button type='button' class='slider__btn-control slider__btn-prev slick-prev slick-arrow'><i class="slider__arrow fa-solid fa-angle-left"></i></button>`,
    nextArrow: `<button type='button' class='slider__btn-control slider__btn-next slick-next slick-arrow'><i class="slider__arrow fa-solid fa-angle-left"></i></button>`,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 423,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
