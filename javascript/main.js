/*
 * Header Fixed
 * scrollEffect
 * show search
 * Categories slideToggle
 * accordion
 * parallax
 * goTop
 * counter
 * filter
 * popUpLightBox
 * gallery
 * flatProgressBar
 * load more
 * load more2
 * fasterPreview
 * UpImg
 * delete_img
 * tfTabs
 * btn nav menu
 * btnCategory
 * dropOptionForm
 * progressProduct
 * Modal_Right
 * rangeSlider
 * btnQuantity
 * stickSidebar
 * preload
 */

(function ($) {
  "use strict";

  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  $(".choose-themes").on("click", function (e) {
    e.preventDefault();
    $("body").toggleClass("is-dark");
    $(".sun").toggleClass("moon");
    $(".choose-themes").toggleClass("day");
  });

  /* counter
  ------------------------------------------------------------------------------------- */
  var counter = function () {
    if ($(".wrap-counter").length > 0) {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $(".wrap-counter").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          if ($().countTo) {
            $(".wrap-counter")
              .find(".counter-number")
              .each(function () {
                var to = $(this).data("to"),
                  speed = $(this).data("speed"),
                  formatter = $(this).data("formatter");
                $(this).countTo({
                  to: to,
                  speed: speed,
                  formatter: formatter,
                });
              });
          }
          a = 1;
        }
      });
    }
  };

  $(".number").each(function () {
    var size = $(this).text().split(".")[1]
      ? $(this).text().split(".")[1].length
      : 0;
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 5000,
          step: function (func) {
            $(this).text(parseFloat(func).toFixed(size));
          },
        }
      );
  });

  /* Modal_Right
  ------------------------------------------------------------------------------------- */
  var Modal_Right = function () {
    const body = $("body");
    const modalNav = $(".menu-popup");
    if (modalNav.length) {
      // const open = function () {
      //   modalNav.addClass("modal-menu--open");
      // };
      const close = function () {
        modalNav.removeClass("modal-menu--open");
      };

      $("#nav-filter").on("click", function () {
        modalNav.toggleClass("modal-menu--open");
        // open();
      });
      $(".modal-menu__backdrop,.title-button-group, .menu-content li a").on(
        "click",
        function () {
          close();
        }
      );
    }
  };

  function page_transition() {
    var section = jQuery(".wedo-section");
    var allLi = jQuery(".menu-content li");
    var button = jQuery(".menu-content a");
    var wrapper = jQuery(".wrapper");
    var enter = wrapper.data("enter");
    var exit = wrapper.data("exit");
    button.on("click", function () {
      var element = jQuery(this);
      var href = element.attr("href");
      // if (element.parent().hasClass("elisc_tm_button")) {
      //   jQuery('.menu .menu-content a[href="' + href + '"]').trigger("click");
      //   hashtag();
      //   return false;
      // }
      var sectionID = jQuery(href);
      var parent = element.closest("li");
      if (!parent.hasClass("active")) {
        allLi.removeClass("active");
        wrapper.find(section).removeClass("animated " + enter);
        if (wrapper.hasClass("opened")) {
          wrapper.find(section).addClass("animated " + exit);
        }
        parent.addClass("active");
        //   wrapper.addClass("opened");
        wrapper
          .find(sectionID)
          .removeClass("animated " + exit)
          .addClass("animated " + enter);
        jQuery(section).addClass("hidden");
        jQuery(sectionID).removeClass("hidden").addClass("active");
      }
      return false;
    });
  }

  /* preload
  ------------------------------------------------------------------------------------- */
  var preload = function () {
    $(".preload").fadeOut("slow", function () {
      setTimeout(function () {
        $(".preload").remove();
      }, 1000);
    });
  };

  /* Dom Ready */
  $(function () {
    Modal_Right();
    counter();
    page_transition();
    preload();
  });
})(jQuery);
