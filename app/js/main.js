$(function () {
  //scroll
  $('a[href^="#"]').on("click", function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    console.log($(_href).offset());
  });
  //animation
  function animation(elem, dur, type) {
    setTimeout(function () {
      elem.addClass(type);
    }, dur);
  }
  //.main__title
  animation($(".main__img"), 0, "fadeInDown");
  animation($(".main__title"), 1000, "scaled");
  animation($(".main__description-title").first(), 2000, "scaled");
  animation($(".main__description-title").last(), 3000, "scaled");

  $(window).on("scroll", function () {
    const scrollBottom = $(this).scrollTop() + $(window).height();
    //.projects__content
    if (scrollBottom > $(".projects__content").offset().top) {
      animation($(".projects__content"), 0, "fadeInUp");
    }
    //.contacts__title
    if (scrollBottom > $(".contacts__title").offset().top) {
      $(".contacts__title").addClass("rotated");
      animation($(".contacts__link").first(), 1000, "scaled");
      animation($(".contacts__link").last(), 2000, "scaled");
    }
  });
});
