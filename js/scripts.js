(function(){
  // Function used to shrink nav bar removing paddings and adding black background
  $(window).scroll(function() {
    if (50 < $(document).scrollTop()) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
  });

  $('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
  });
})()