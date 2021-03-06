(function() {

  // Function used to shrink nav bar removing paddings and adding black background
  $(window).scroll(function() {
    if(50 < $(document).scrollTop()) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
  });

  $('.nav-trigger').click(function() {
    $(this).toggleClass('active');
    $("#main-list-div").toggleClass("show_list");
    $("#main-list-div").fadeIn();
  });

  (function() {
    const scrollTop = $('.scroll-top');
    let appear = false;
    window.addEventListener("scroll", function() {
      if(100 < window.scrollY) {
        if(appear == false) {
          appear = true;
          scrollTop.stop().animate({"right": "30px"}, 300);
        }
      } else {
        if(appear) {
          appear = false;
          scrollTop.stop().animate({"right": "-50px"}, 300);
        }
      }
    })
  })();

  (function() {
    $logo_anchor = $('.logo a');
    $('.logo').hover(
      function() {
        $logo_anchor.addClass('logo-hover');
      },
      function() {
        $logo_anchor.removeClass('logo-hover');
      }
    );

    setInterval(() => {
      if($logo_anchor.hasClass("logo-hover")) {
        $logo_anchor.removeClass('logo-hover');
      } else {
        $logo_anchor.addClass('logo-hover');
      }
    }, 2000);
  })();
})();