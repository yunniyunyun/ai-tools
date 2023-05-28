$(".navbar-toggler").click(function () {
  $(".navbar-collapse-list").toggleClass("show");
});

$("#scrollToTop").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0
    },
    500
  );
});