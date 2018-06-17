$(document).ready(function() {
  $("#splotLight").slick({
    dots: true,
    autoplay: true,
    infinite: true,
    arrows: false
  });

  $(".pillarTeam").slick({
    dots: true,
    autoplay: false,
    infinite: true,
    arrows: true,
    centerMode: true,
    slideToShow : 4
  });
});
