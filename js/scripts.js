(function(){

  // Function used to shrink nav bar removing paddings and adding black background
  $(window).scroll(function() {
    if (50 < $(document).scrollTop()) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
  });

  $('.nav-trigger').click(function () {
    $(this).toggleClass('active');
    $("#main-list-div").toggleClass("show_list");
    $("#main-list-div").fadeIn();
  });
})()