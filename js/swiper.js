var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 12,
    breakpoints: {
      320: {  //当屏幕宽度大于等于320
        slidesPerView: 1,
        spaceBetween: 24
      },
      768: {  //当屏幕宽度大于等于768 
        slidesPerView: 2,
        spaceBetween: 24
      },
      1280: {  //当屏幕宽度大于等于1280
        slidesPerView: 3,
        spaceBetween: 24
      }
    },
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
  });