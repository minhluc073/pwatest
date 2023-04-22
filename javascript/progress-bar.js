$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    const skills = {
      item1: 90,
      item2: 95,
      item3: 93,
      item4: 80,
      item5: 90,
    };

    $.each(skills, function (key, value) {
      var skillbar = $("." + key);

      skillbar.animate(
        {
          width: value + "%",
        },
        3000,
        function () {
          $(".rank-skill").fadeIn();
        }
      );
    });
  }
});

// count
