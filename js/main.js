const swiper = new Swiper('.swiper-container', {
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const swiperPlay = new Swiper('.swiper-container', {
    autoplay: {
      delay: 5000,
    },
   });