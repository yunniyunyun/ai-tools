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


// 開起選單
$(".dropdown-btn").click(function (e) {
  $(".dropdown-menu-c").toggleClass("show");
});

// 切換按鈕文字
$(".new-to-old").click(function (e) {
  e.preventDefault();
  $(".dropdown-menu-c").toggleClass("show");
  $(".dropdown-btnText").text($(".new-to-old").text());
});

$(".old-to-new").click(function (e) {
  e.preventDefault();
  $(".dropdown-menu-c").toggleClass("show");
  $(".dropdown-btnText").text($(".old-to-new").text());
});