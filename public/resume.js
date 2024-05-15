$(document).ready(function() {
    $('a[href*=\\#]').bind('click', function(e) {
            e.preventDefault(); 
            var target = $(this).attr("href"); 
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 300);

            return false;
    });

      // Closes responsive menu when a scroll trigger link is clicked
      $("a.nav-link").click(function() {
        $(".navbar-collapse").collapse("hide");
      });
    
      $("body").scrollspy({
        target: "#navbar-php"
      });
    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $("#liveToast").toast("show")

});

$(window).scroll(function() {
        var scrollDistance = $(window).scrollTop() + 1;
        $('.detail').each(function(i) {
        if ($(this).position().top - 200 <= scrollDistance) {
                $('.nav-item a.active').removeClass('active');
                $('.nav-item a').eq(i).addClass('active');
        }
    });
}).scroll();


