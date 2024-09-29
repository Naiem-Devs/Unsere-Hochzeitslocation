(function ($) {
  "use strict";

  // menu 
  $('.siteBar-btn').click(function (event) {
    event.preventDefault()
    // $(this).toggleClass('active');
    $('.mobile-menu').toggleClass('siteBar');
  });





  // niceSelect
  $('select').niceSelect();


  // owlCarousel
  $(".place-card-slider ").owlCarousel({
    loop: true,
    margin: 30,
    smartSpeed: 1000,
    items: 1,
    navText: [
      '<i><img src="assets/img/left-arrow.svg" alt=""> </i>',
      '<i><img src="assets/img/right-arrow.svg" alt=""></i>'
    ],
    nav: true,
    dots: true
  });


  // owlCarousel
  $(".wedding__slider").owlCarousel({
    loop: true,
    margin: 30,
    items: 5,
    smartSpeed: 1000,
    navText: [
      '<i><img src="assets/img/left-arrow-long.svg" alt=""> <img src="assets/img/ar-left-bg.png" class="ar-left-bg" alt=""></i>',
      '<i><img src="assets/img/right-arrow-long.svg" alt=""> <img src="assets/img/ar-right-bg.png" class="ar-right-bg" alt=""></i>'
    ],
    center: true,
    nav: true,
    dots: true,
    responsive: {
      0: {
        nav: false,
        margin: 20,
        stagePadding: 60,
        items: 1
      },
      767: {
        margin: 20,
        items: 3
      },
      992: {
        items: 3
      },
      1200: {
        items: 5
      }
    }
  });

  // owlCarousel
  $(".brand-active").owlCarousel({
    loop: true,
    margin: 30,
    items: 6,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 2
      },
      767: {
        items: 3
      },
      992: {
        items: 6
      }
    }
  });

    // custome range slider
    const range = document.getElementById('range'),
    tooltip = document.getElementById('tooltip'),
    setValue = () => {
      const newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
      newPosition = 16 - (newValue * 0.32);
      tooltip.innerHTML = `<span>${range.value}</span>`;
      tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
      document.documentElement.style.setProperty("--range-progress", `calc(${newValue}% + (${newPosition}px))`);
    };
  document.addEventListener("DOMContentLoaded", setValue);
  range.addEventListener('input', setValue);


  // page Animation
  // AOS.init({
  //   mirror: true,
  //   duration: 1500,
  //   initClassName: 'aos-init',
  //   once: true,
  // });

  // data-aos="fade-up" 
  // data-aos-delay="300" 


})(jQuery);

