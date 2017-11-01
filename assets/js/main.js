$( window ).resize(function() {
    $window = $(window);
    if( $window .width() > 767){

        $('section[data-type="background"]').each(function(){
            var $bgobj = $(this); // assigning the object

            $(window).scroll(function() {

                // Scroll the background at var speed
                // the yPos is a negative value because we're scrolling it UP!                              
                var yPos = -( ($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));

                // Put together our final background position
                var coords = '50% '+ yPos + 'px';

                // Move the background
                $bgobj.css({ backgroundPosition: coords });

            }); // window scroll Ends

        });    
    }
});



$(document).ready(function(){
    $window = $(window);
    if( $window.width() > 767){
        // Cache the Window object

        $('section[data-type="background"]').each(function(){
            var $bgobj = $(this); // assigning the object

            $(window).scroll(function() {

                // Scroll the background at var speed
                // the yPos is a negative value because we're scrolling it UP!                              
                var yPos = -( ($window.scrollTop() - $bgobj.offset().top) / $bgobj.data('speed'));

                // Put together our final background position
                var coords = '50% '+ yPos + 'px';

                // Move the background
                $bgobj.css({ backgroundPosition: coords });

            }); // window scroll Ends

        });    
    }
});

/* ===============================
    http://callmenick.com/2014/02/11/simple-tabbed-content-area-with-css-and-jquery/
=============================== */
// Tabbable Content
$(document).ready(function(){
    $("ul#tabs li").click(function(e){
        if (!$(this).hasClass("active")) {
            var tabNum = $(this).index();
            var nthChild = tabNum+1;
            $("ul#tabs li.active").removeClass("active");
            $(this).addClass("active");
            $("ul#tab li.active").removeClass("active");
            $("ul#tab li:nth-child("+nthChild+")").addClass("active");
        }
    });
});


// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 400) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(window).scroll(function() {
    if ($(".button").offset().top > 415) {
        $(".button").addClass("button-collapse");
    } else {
        $(".button").removeClass("button-collapse");
    }
});


/* ===============================
    http://callmenick.com/2015/01/25/animating-css-only-hamburger-menu-icons/
=============================== */
(function() {

    "use strict";

    var toggles = document.querySelectorAll(".cmn-toggle-switch");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
        });
    }

})();


$(document).ready(function(){
    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});