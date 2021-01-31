(function(){

  const recommendSection = document.querySelector('.recommend');
  const recommendSectionSp = document.querySelector('.recommend-sp');
  const renderResponsive = () => {
    if(screen.width <= 768) {
      recommendSection.style.display = "none";
      recommendSectionSp.style.display = "block"
    } else {
      recommendSection.style.display = "block";
      recommendSectionSp.style.display = "none";
    }
  }

  renderResponsive();

  window.addEventListener("resize", () => {
    renderResponsive();
  })

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