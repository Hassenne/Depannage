/* Show and hide menu */
$(document).ready(function () {
    'use strict';
    $(window).scroll(function () {
        'use strict';
        if ($(window).scrollTop() < 80) {
            $('.navbar').css({
                'margin-top': '0px'
                , 'opacity': '1'
            });
            $('.navbar-default').css({
                'background-color': '#fff'
            });
        }
        else {
            $('.navbar').css({
                'margin-top': '0px'
                , 'opacity': '1'
            });
            $('.navbar-default').css({
                //                'background-color': 'rgba(59, 59 , 59, 0.7)'
                //                , 
                'border-color': '#444'
            });
            $('.navbar-brand img').css({
                'height': '35px'
                , 'padding-top': '0px'
            });
            $('.navbar-nav > li > a ').css({
                'padding-top': '15px'
            });
        }
    });
});
/* Smooth scrolling */
$(document).ready(function () {
    'use strict';
    $('.nav-item ,#scroll-to-top').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
/*active menu item in click */
$(document).ready(function () {
    'use strict';
    $('.navbar-nav li a').click(function () {
        'use strict';
        $('.navbar-nav li a').parent().removeClass("active");
        $(this).parent().addClass("active");
    });
});
/*Higlight menu item on scroll*/
$(document).ready(function () {
    'use strict';
    $(window).scroll(function () {
        'use strict';
        $("section").each(function () {
            'use strict';
            var ss = $(this).attr("id");
            var hse = $(this).outerHeight();
            var grltop = $(this).offset().top - 70;
            if ($(window).scrollTop() > grltop && $(window).scrollTop() < grltop + hse) {
                $(".navbar-nav li a[href='#" + ss + "']").parent().addClass("active");
            }
            else {
                $(".navbar-nav li a[href='#" + ss + "']").parent().removeClass("active");
            }
        });
    });
});
/* add auto padding to header */
//$(document).ready(function() {
//    
//    'use strict';
//    
//    setInterval( function() {
//        
//        'use strict';
//        
//        var windowHeight = $(window).height();
//        
//        var containerHeight = $(".header-container").height();
//        
//        var padTop = windowHeight - containerHeight;
//        
//        $(".header-container").css({
//            
//            'padding-top': Math.round( padTop / 2) + 'px',
//            'padding-bottom': Math.round( padTop / 2) + 'px'
//            
//        });
//        
//        
//    }, 10)
//    
//    
//});
/* Add bx slider to scrrens*/
$(document).ready(function () {
    $('.bxslider').bxSlider({
        slideWidth: 292.5
        , auto: true
        , minSlides: 1
        , maxSlides: 3
        , slideMargin: 50
    });
});
/* Add counter */
$(document).ready(function () {
    $('.counter-num').counterUp({
        delay: 10
        , time: 2000
    });
});
/* add animation*/
$(document).ready(function () {
    'use strict';
    new WOW().init();
});
/* video */
/** Document Ready Functions **/
/********************************************************************/
$(document).ready(function () {
    // Resive video
    scaleVideoContainer();
    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');
    $(window).on('resize', function () {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });
});
/** Reusable Functions **/
/********************************************************************/
function scaleVideoContainer() {
    var height = $(window).height();
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height', unitHeight);
}

function initBannerVideoSize(element) {
    $(element).each(function () {
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });
    scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element) {
    var windowWidth = $(window).width()
        , windowHeight = $(window).height()
        , videoWidth
        , videoHeight;
    console.log(windowHeight);
    $(element).each(function () {
        var videoAspectRatio = $(this).data('height') / $(this).data('width')
            , windowAspectRatio = windowHeight / windowWidth;
        if (videoAspectRatio > windowAspectRatio) {
            videoWidth = windowWidth;
            videoHeight = videoWidth * videoAspectRatio;
            $(this).css({
                'top': -(videoHeight - windowHeight) / 2 + 'px'
                , 'margin-left': 0
            });
        }
        else {
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({
                'margin-top': 0
                , 'margin-left': -(videoWidth - windowWidth) / 2 + 'px'
            });
        }
        $(this).width(videoWidth).height(videoHeight);
        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
    });
}