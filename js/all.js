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
  $(this).parent().find(".dropdown-menu-c").toggleClass("show");
  // $(".dropdown-menu-c").toggleClass("show");
});

// 切換按鈕文字
$(".new-to-old").click(function (e) {
  e.preventDefault();
  // $(".dropdown-menu-c").toggleClass("show");
  $(this).parent().parent().parent().find(".dropdown-menu-c").toggleClass("show");
  $(".dropdown-btnText").text($(".new-to-old").text());
});

$(".old-to-new").click(function (e) {
  e.preventDefault();
  // $(".dropdown-menu-c").toggleClass("show");
  $(this).parent().parent().parent().find(".dropdown-menu-c").toggleClass("show");
  $(".dropdown-btnText").text($(".old-to-new").text());
});


$(".ai-model").click(function (e) {
  e.preventDefault();
  $(this).parent().find("span").toggleClass("choose");
  $(this).parent().siblings().find("span").removeClass("choose");
});

$(".bar-filter").click(function (e) {
  e.preventDefault();
  $(this).parent().addClass("active");
  $(this).parent().siblings().removeClass("active");
});

$(".page-item").click(function (e) {
  e.preventDefault();
  $(this).parent().addClass("active");
  $(this).parent().siblings().removeClass("active");
});
