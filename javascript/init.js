$(".anima").attr("data-aos", "fade-down");
$(".wedo-section").scroll(function () {
  AOS.init({
    duration: 1000,

    disable: function () {
      var maxWidth = 1190;
      return window.innerWidth < maxWidth;
    },
  });
});

// AOS.init({
//   duration: 1000,
// });
