$(document).ready(function(){

    $('.products__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L5.1092 5L1 9L5.1092 13L9.21839 17" /></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1" /></svg></button>',
        infinite: false,
    });

    $('.question__item-title').on('click', function(){

        $('.question__item').removeClass('question__item-active');
        $(this).parent().addClass('question__item-active');
        
    });

  });