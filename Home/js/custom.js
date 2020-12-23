// Document read
(function ($) {
    "use strict";

    var $window = $(window);

$(document).ready(function() {
        $(".redirect").click(function() {
            window.location.href = this.id + '/project-astitva';
        });
    });
	
	
	
	
	//////// -Preloader- /////////
    // $window.on('load', function () {
    //     var loading = $('.loading');
    //     $(loading).hide(); // Hide preloader when document is fully loaded
    // });

//////// -Mobile Menu- /////////
    var icon = $(".icon");
    var mobnav = $(".mobilenav");
    var topmen = $(".top-menu");
    var midmen = $(".mid-menu");
    var botmen = $(".bottom-menu");
    var close = $(".close-menu");
    $(icon).on('click', function () {
        $(mobnav).fadeToggle(500);
        $(topmen).toggleClass("top-animate");
        $(midmen).toggleClass("mid-animate");
        $(botmen).toggleClass("bottom-animate");
    });

    $(close).on('click', function () {
        $(mobnav).hide();
        $(topmen).removeClass("top-animate");
        $(midmen).removeClass("mid-animate");
        $(botmen).removeClass("bottom-animate");

    });


//////// -Smooth Scroll- /////////
    smoothScroll.init({
        selector: '[data-scroll]',
        selectorHeader: '[data-scroll-header]',
        speed: 1000, // Scrolling Time in Milliseconds(ms) // 1000ms = 1sec //
        easing: 'easeInOutCubic',
        offset: 0,
        updateURL: true,
        callback: function (anchor, toggle) {
        }
    });

//////// -Scroll to top button- /////////
    var scrolls = $('.scrollToTop');
    $window.on('scroll', function () {
        if ($(this).scrollTop() > 900) {
            $(scrolls).fadeIn();
        } else {
            $(scrolls).fadeOut();
        }

    });

    $(scrolls).on('click', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });


//////// -Sticky Header- /////////
    var scroll_position = 0;

    if($(window).width()>768) {
        $window.on('scroll', function () {
            scroll_position = $(this).scrollTop();
            var headers = $('.header');
            if(scroll_position > 150) { // After scrolling above 300px height show the sticky menu
                $(headers).css('position', 'fixed'); // Make header fixed position
                $(headers).css('background', '#1a1919'); // Change the sticky header background
                $(headers).css('z-index', '100');  // Stack order of the header
            } else {
                $(headers).css('position', 'absolute'); // Return to normal header under 300px height scroll
                $(headers).css('background', 'transparent'); // Change to normal transparent background
            }
        });
    } else {
        var headers = $('.header');
        $window.on('scroll', function () {
            scroll_position = $(this).scrollTop();
            if(scroll_position > 150) {
                $(headers).css('position', 'fixed'); // Make header fixed position
                $(headers).css('background', '#1a1919'); // Change the sticky header background 
            } else {
                $(headers).css('position', 'absolute'); // Return to normal header under 300px height scroll
                $(headers).css('background', 'transparent'); // Change to normal transparent background
            }
        });
        $(headers).css('z-index', '100');  // Stack order of the header
    }

    //////// -Parallax Sections- /////////
    var first_parallax = $('.parallax-window');
    var second_parallax = $('.parallax-adventages');
    var parallax_testimonials = $('.parallax-testimonial');
    var single_image_parallax = $('.single-parallax');
    $(first_parallax).parallax();
    $(second_parallax).parallax();
    $(parallax_testimonials).parallax();
    $(single_image_parallax).parallax();


//////// -Slick Slider for Testimonials- /////////
    var testim = $('.testimonials');
    $(testim).slick({
        centerMode: true,
        centerPadding: '80px',
        slidesToShow: 1,  // Default items to show
        dots: true,
        arrows: false,
        autoplay: true,
        autplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '60px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    centerMode: true,
                    slidesToShow: 1,
                    centerPadding: '40px'
                }
            }
        ]
    });

//////// -Slick Slider for Our Team- /////////
    var center = $('.center');
    $(center).slick({
        centerMode: true,
        // infinite: true,
        centerPadding: '30px',
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3, //  Default items to show

        responsive: [
            {
            breakpoint: 1024,
            settings: {
            arrows:true,    
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1
            }
        },
            {
                breakpoint: 768,
                settings: {
                    arrows:true,    
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows:false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 320,
                settings: {
                    arrows:false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


})(jQuery);






