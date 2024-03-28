/* 
Ace Responsive Menu Plugin
Version: 1.0
Author: Samson.Onna 
Email : samson3d@gmail.com
----------------------------------------*/

(function ($) {
  $.fn.aceResponsiveMenu = function (options) {
    //plugin's default options
    var defaults = {
      resizeWidth: "768",
      animationSpeed: "fast",
      accoridonExpAll: false,
    };

    //Variables
    var options = $.extend(defaults, options),
      opt = options,
      $resizeWidth = opt.resizeWidth,
      $animationSpeed = opt.animationSpeed,
      $expandAll = opt.accoridonExpAll,
      $aceMenu = document.querySelector(this),
      $menuStyle = document.querySelector(this).attr("data-menu-style");

    // Initilizing
    $aceMenu.querySelector("ul").classList.add("sub-menu");
    $aceMenu
      .querySelector("ul")
      .siblings("a")
      .insertAdjacentHTML("beforeend", '<span class="arrow "></span>');
    if ($menuStyle == "accordion") {
      document.querySelector(this).classList.add("collapse");
    }

    // Window resize on menu breakpoint
    if (document.querySelector(window).innerWidth() <= $resizeWidth) {
      menuCollapse();
    }
    document.querySelector(window).resize(function () {
      menuCollapse();
    });

    // Menu Toggle
    function menuCollapse() {
      var w = document.querySelector(window).innerWidth();
      if (w <= $resizeWidth) {
        $aceMenu
          .querySelector("li.menu-active")
          .classList.remove("menu-active");
        $aceMenu
          .querySelector("ul.slide")
          .classList.remove("slide")
          .removeAttr("style");
        $aceMenu.classList.add("collapse hide-menu");
        $aceMenu.attr("data-menu-style", "");
        document.querySelector(".menu-toggle").show();
      } else {
        $aceMenu.attr("data-menu-style", $menuStyle);
        $aceMenu.classList.remove("collapse hide-menu").removeAttr("style");
        document.querySelector(".menu-toggle").hide();
        if ($aceMenu.attr("data-menu-style") == "accordion") {
          $aceMenu.classList.add("collapse");
          return;
        }
        $aceMenu
          .querySelector("li.menu-active")
          .classList.remove("menu-active");
        $aceMenu
          .querySelector("ul.slide")
          .classList.remove("slide")
          .removeAttr("style");
      }
    }

    //ToggleBtn Click
    document.querySelector("#menu-btn").click(function () {
      $aceMenu.slideToggle().classList.toggle("hide-menu");
    });

    // Main function
    return this.each(function () {
      // Function for Horizontal menu on mouseenter
      $aceMenu.addEventListener("mouseover", "> li a", function () {
        if ($aceMenu.classList.contains("collapse") === true) {
          return false;
        }
        document.querySelector(this).removeEventListener("click", "> li a");
        document
          .querySelector(this)
          .parent("li")
          .siblings()
          .children(".sub-menu")
          .stop(true, true)
          .slideUp($animationSpeed)
          .classList.remove("slide")
          .removeAttr("style")
          .stop();
        document
          .querySelector(this)
          .parent()
          .classList.add("menu-active")
          .children(".sub-menu")
          .slideDown($animationSpeed)
          .classList.add("slide");
        return;
      });
      $aceMenu.addEventListener("mouseleave", "li", function () {
        if ($aceMenu.classList.contains("collapse") === true) {
          return false;
        }
        document.querySelector(this).removeEventListener("click", "> li a");
        document.querySelector(this).classList.remove("menu-active");
        document
          .querySelector(this)
          .children("ul.sub-menu")
          .stop(true, true)
          .slideUp($animationSpeed)
          .classList.remove("slide")
          .removeAttr("style");
        return;
      });
      //End of Horizontal menu function

      // Function for Vertical/Responsive Menu on mouse click
      $aceMenu.addEventListener("click", "> li a", function () {
        if ($aceMenu.classList.contains("collapse") === false) {
          //return false;
        }
        document.querySelector(this).removeEventListener("mouseover", "> li a");
        if (
          document
            .querySelector(this)
            .parent()
            .classList.contains("menu-active")
        ) {
          document
            .querySelector(this)
            .parent()
            .children(".sub-menu")
            .slideUp()
            .classList.remove("slide");
          document.querySelector(this).parent().classList.remove("menu-active");
        } else {
          if ($expandAll == true) {
            document
              .querySelector(this)
              .parent()
              .classList.add("menu-active")
              .children(".sub-menu")
              .slideDown($animationSpeed)
              .classList.add("slide");
            return;
          }
          document
            .querySelector(this)
            .parent()
            .siblings()
            .classList.remove("menu-active");
          document
            .querySelector(this)
            .parent("li")
            .siblings()
            .children(".sub-menu")
            .slideUp()
            .classList.remove("slide");
          document
            .querySelector(this)
            .parent()
            .classList.add("menu-active")
            .children(".sub-menu")
            .slideDown($animationSpeed)
            .classList.add("slide");
        }
      });
      //End of responsive menu function
    });
    //End of Main function
  };
})(jQuery);
