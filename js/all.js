var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: { 
    320: {  //当屏幕宽度大于等于320
      slidesPerView: 1,
      spaceBetween: 30
    },
    768: {  //当屏幕宽度大于等于768 
      slidesPerView: 2,
      spaceBetween: 20
    },
    1280: {  //当屏幕宽度大于等于1280
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$(".navbar-toggler").click(function () {
  $(".navbar-collapse-list").toggleClass("show");
});
$(".qa-list> li>a").click(function (event) {
  event.preventDefault();
  $(this).find("div").toggleClass("hide-icon");
  // $(this).find("p").toggleClass("show");
  $(this).find("p").slideToggle();
});
$("#scrollToTop").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0
    },
    500
  );
});