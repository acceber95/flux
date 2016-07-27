// nav bar JS
$(document).ready(function() {
  // change nav bar color when you scroll down
  $(window).scroll(function() {
    if ($(document).scrollTop() > $("#section-programming").position().top - 25) { // scroll height
      $(".navbar-fixed-top").css("background", "rgba(0,0,0,0.6)");
    } else {
      $(".navbar-fixed-top").css("background-color", "transparent");
      $('.nav li a').removeClass();
    }

    // change active tab
    var scrollPos = $(document).scrollTop();
    $('.nav a').each(function() {
      var currLink = $(this);
      var section = $(currLink.attr("href"));
      var sectionOffset = section.position().top - 100;

      if (sectionOffset <= scrollPos && sectionOffset + section.height() > scrollPos) {
        $('.nav li a').removeClass("nav-active");
        currLink.addClass("nav-active");
      } else {
        currLink.removeClass("nav-active");
      }
    });

  });
});

//smooth scrolling
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
