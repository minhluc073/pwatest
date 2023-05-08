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
  const counter = function () {
    if ($(".wrap-counter").length > 0) {
      var a = 0;
      $(".wedo-section").scroll(function () {
        var oTop = $(".wrap-counter").offset().top - window.innerHeight;
        if (a == 0 && $(".wedo-section").scrollTop() > oTop) {
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
          duration: 8000,
          step: function (func) {
            $(this).text(parseFloat(func).toFixed(size));
          },
        }
      );
  });

  /* Modal_Right
  ------------------------------------------------------------------------------------- */
  const Modal_Right = function () {
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
  const progress_bar = function () {
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
        5000,
        function () {
          $(".rank-skill").fadeIn();
        }
      );
    });
  };

  const page_transition = function () {
    var page = $(".wedo-section");
    var all_element = $(".menu-content li");
    var nav = $(".menu-content a, .wedo-link-item");
    var wrapper = $(".wrapper");
    var enter = wrapper.data("enter");
    var exit = wrapper.data("exit");
    nav.on("click", function () {
      var element = $(this);
      var href = element.attr("href");
      var page_attribute = $(href);
      var parent = element.closest("li");
      if (!parent.hasClass("active")) {
        all_element.removeClass("active");
        wrapper.find(page).removeClass("animated " + enter);
        parent.addClass("active");
        wrapper
          .find(page_attribute)
          .removeClass("animated " + exit)
          .addClass("animated " + enter);
        $(page).addClass("hidden");
        $(page_attribute).removeClass("hidden").addClass("active");
        $(page).animate({ scrollTop: 0 }, 0);
      }
      return false;
    });
  };

  const tf_fullscreen = function () {
    var tfheight = jQuery(window).height();
    $(".tf-fullscreen").css({ height: tfheight, oveflow: "hidden" });
  };

  /* preload
  ------------------------------------------------------------------------------------- */
  const preloader = function () {
    let preloaderWrapper = document.getElementById("preloader");
    window.onload = () => {
      let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
        navigator.userAgent
      )
        ? true
        : false;
      if (!isMobile) {
        setTimeout(function () {
          preloaderWrapper.classList.add("preloaded");
        }, 300);
        setTimeout(function () {
          preloaderWrapper.remove();
        }, 1500);
      } else {
        preloaderWrapper.remove();
      }
    };
  };

  /* Dom Ready */
  $(function () {
    Modal_Right();
    counter();
    progress_bar();
    page_transition();
    tf_fullscreen();
    preloader();
  });
})(jQuery);
