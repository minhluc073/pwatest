/**
 * flatSpacer
 * flatOwl
 * flatGallery
 * inViewport
 * flatEqualizeHeight
 * flatContentBox
 * searchIcon
 * flatTabs
 * flatAccordions
 * flatProgressBar
 * googleMap
 * flatCounter
 * flatIsotope
 * swClick
 * Parallax
 */

(function ($) {
  "use strict";

  var inViewport = function () {
    $('[data-inviewport="yes"]').waypoint(
      function () {
        $(this).trigger("on-appear");
      },
      { offset: "90%", triggerOnce: true }
    );

    $(window).on("load", function () {
      setTimeout(function () {
        $.waypoints("refresh");
      }, 100);
    });
  };

  var flatProgressBar = function () {
    if ($().waypoint) {
      $(".progress-bg").on("on-appear", function () {
        $(this).each(function () {
          var percent = parseInt($(this).data("percent"));

          $(this)
            .find(".progress-animate")
            .animate(
              {
                width: percent + "%",
              },
              1000,
              "easeInCirc"
            );

          $(this)
            .parent(".themesflat-progress")
            .find(".perc")
            .addClass("show")
            .animate(
              {
                width: percent + "%",
              },
              1000,
              "easeInCirc"
            );
        });
      });
    }
  };

  // Dom Ready
  $(function () {
    flatProgressBar();

    $(window).load(function () {
      //   flatOwl();
      //   Parallax();
      inViewport();
    });
  });
})(jQuery);
