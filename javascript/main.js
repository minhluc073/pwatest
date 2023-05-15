/*
 * Choose themes
 * Type text
 * Header fixed
 * Counter
 * Modal down
 * Number
 * Progress bar
 * counter
 * Page transition
 * Fullscreen
 * Scroll animation
 * preload
 */

(function ($) {
  "use strict";

  /* Choose themes
  ------------------------------------------------------------------------------------- */
  const choose_themes = function () {
    $(".choose-themes").on("click", function (e) {
      e.preventDefault();
      $("body").toggleClass("is-dark");
      $(".sun").toggleClass("moon");
      $(".choose-themes").toggleClass("day");
    });
  };
  /* Type text
  ------------------------------------------------------------------------------------- */
  const type_text = function () {
    var typed = new Typed(".auto-type", {
      strings: ["UX/UI Designer", "Developer", "Freelancer"],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 900,
      loop: true,
    });
    var typed = new Typed(".type-2", {
      strings: ["HIRE ME"],
      typeSpeed: 100,
      // backDelay: 900,
      backSpeed: 100,

      loop: true,
    });
  };
  /* Header fixed
  ------------------------------------------------------------------------------------- */
  const header_fixed = function () {
    if ($("header").hasClass("header-fixed")) {
      var nav = $("#header");

      if (nav.length) {
        var offsetTop = nav.offset().top,
          headerHeight = nav.height(),
          injectSpace = $("<div>", {
            height: headerHeight,
          });
        injectSpace.hide();

        if ($("header").hasClass("style-absolute")) {
          injectSpace.hide();
        } else {
          injectSpace.insertAfter(nav);
        }

        $(window).on("load scroll", function () {
          if ($(window).scrollTop() > offsetTop + headerHeight) {
            nav.addClass("is-fixed");
            injectSpace.show();
          } else {
            nav.removeClass("is-fixed");
            injectSpace.hide();
          }

          if ($(window).scrollTop() > 150) {
            nav.addClass("is-small");
          } else {
            nav.removeClass("is-small");
          }
        });
      }
    }
  };
  /* Counter
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
  /* Modal down 
  ------------------------------------------------------------------------------------- */
  const modal_down = function () {
    const body = $("body");
    const modalNav = $(".menu-popup");
    if (modalNav.length) {
      const close = function () {
        modalNav.removeClass("modal-menu--open");
      };

      $("#nav-filter").on("click", function () {
        modalNav.toggleClass("modal-menu--open");
      });
      $(".modal-menu__backdrop,.title-button-group, .menu-content li a").on(
        "click",
        function () {
          close();
        }
      );
    }
  };
  /* Number
  ------------------------------------------------------------------------------------- */
  const number = function () {
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
  };
  /* Progress bar
  ------------------------------------------------------------------------------------- */
  // const progress_bar = function () {
  //   const skills = {
  //     item1: 90,
  //     item2: 95,
  //     item3: 93,
  //     item4: 80,
  //     item5: 90,
  //   };

  //   $.each(skills, function (key, value) {
  //     var skillbar = $("." + key);

  //     skillbar.animate(
  //       {
  //         width: value + "%",
  //       },
  //       5000,
  //       function () {
  //         $(".rank-skill").fadeIn();
  //       }
  //     );
  //   });
  // };

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

  /* Page transition
  ------------------------------------------------------------------------------------- */
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

        if (window.innerWidth < 1190) {
          // $(wrapper).scrollTo({
          //   top: 0,
          //   left: 0,
          //   behavior: "smooth",
          // });
          $(wrapper).animate({ scrollTop: 0 }, 0);
          // $(page).removeClass(enter);
        }
      }
      return false;
    });
  };
  /* Fullscreen
  ------------------------------------------------------------------------------------- */
  const tf_fullscreen = function () {
    var tfheight = jQuery(window).height();
    $(".tf-fullscreen").css({ height: tfheight, oveflow: "hidden" });
  };
  /* Scroll animation
  ------------------------------------------------------------------------------------- */
  const scroll_animation = function () {
    $(".wedo-section").scroll(function () {
      AOS.init({
        duration: 1000,
        once: false,
      });
    });

    if (window.innerWidth < 1190) {
      $(".animate-down").attr("data-aos", "");
    }
  };
  /* cursor
  -------------------------------------------------------------------------*/
  const cursor = function () {
    var myCursor = jQuery(".tf-mouse");
    if (myCursor.length) {
      if ($("body")) {
        const e = document.querySelector(".tf-mouse-inner"),
          t = document.querySelector(".tf-mouse-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on(
            "mouseenter",
            "a, .nav-menu, .choose-themes",
            function () {
              e.classList.add("mouse-hover"), t.classList.add("mouse-hover");
            }
          ),
          $("body").on(
            "mouseleave",
            "a, .nav-menu, .choose-themes",
            function () {
              ($(this).is("a") && $(this).closest(".nav-menu").length) ||
                (e.classList.remove("mouse-hover"),
                t.classList.remove("mouse-hover"));
            }
          ),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  };

  /* Preload
  ------------------------------------------------------------------------------------- */
  const preloader = function () {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    )
      ? true
      : false;
    var preloader = $("#preloader");
    if (!isMobile) {
      setTimeout(function () {
        preloader.addClass("preloaded");
      }, 100);
      setTimeout(function () {
        preloader.remove();
      }, 900);
    } else {
      preloader.remove();
    }
  };
  const wedo_onload = function () {
    setTimeout(function () {
      preloader();
    }, 500);
  };

  /* Dom Ready */
  $(function () {
    choose_themes();
    header_fixed();
    modal_down();
    counter();
    // progress_bar();
    flatProgressBar();
    number();
    page_transition();
    tf_fullscreen();
    type_text();
    // scroll_animation();
    cursor();

    wedo_onload();
    $(window).load(function () {
      //   flatOwl();
      //   Parallax();
      inViewport();
    });
  });
})(jQuery);
