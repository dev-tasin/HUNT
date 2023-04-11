$('.banner-slide-wrap').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    prevArrow: ".left",
    nextArrow: ".right",
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $('.service-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true ,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    prevArrow: ".up",
    nextArrow: ".down",
    vertical: true,
    verticalSwiping: true,
    rows: 0,
    centerMode: true,
    centerPadding: '0px',
  });

  $('.testi-slider1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true ,
    vertical: true,
    verticalSwiping: true,
    pauseOnHover: false,
    prevArrow: ".testi-up",
    nextArrow: ".testi-down", 
    centerMode: true,
    centerPadding: '0px',
    asNavFor: ".testi-details-slider"
  });

  $('.testi-details-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true ,
    vertical: true,
    verticalSwiping: true,
    pauseOnHover: false,
    arrows: false,
    asNavFor: ".testi-slider1"
  });

  $('.tasin').counterUp({
    delay: 10,
    time: 1000,
  });