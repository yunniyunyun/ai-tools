$(".navbar-toggler").click(function () {
  $(".navbar-collapse-list").toggleClass("show");
});
$(".qa-list> li>a").click(function (event) {
  event.preventDefault();
  $(this).find("div").toggleClass("hide-icon");
  $(this).find("p").toggleClass("show");
});
$("#scrollToTop").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0
    },
    500
  );
});