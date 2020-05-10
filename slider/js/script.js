/*  Table of Contents 
01. MENU ACTIVATION
02. FITVIDES RESPONSIVE VIDEOS
03. MOBILE MENU
04. SHOW/HIDE MOBILE MENU
05. GALLERY JS
06. STICKY MENU JS
07. SCROLL TO TOP MENU JS
08. prettyPhoto JS
09. MatchHeight
10. FORM VALIDATION
11. Background Images
12. LIGHT SHORTCODES
13. MASONRY
*/

jQuery(document).ready(function($) {
    'use strict';


/*
=============================================== 01. MENU ACTIVATION  ===============================================
*/
    jQuery('nav#site-navigation ul.sf-menu, .header-top-right-avlar ul.sf-menu').superfish({
        popUpSelector: 'ul.sub-menu,.sf-mega', 	// within menu context
        delay:      	400,                	// one second delay on mouseout
        speed:      	200,               		// faster animation speed
        speedOut:    	200,             		// speed of the closing animation
        animation: 		{opacity: 'show'},		// animation out
        animationOut: 	{opacity: 'hide'},		// adnimation in
        cssArrows:     	true,              		// set to false
        autoArrows:  	true                    // disable generation of arrow mark-up
    });


/*
=============================================== 02. FITVIDES RESPONSIVE VIDEOS  ===============================================
*/
    $(".featured-blog-pro, .summary-post-pro, .invested-portfolio-feature, .invested-video-container .progression-video-bg, .page-content-pro ").fitVids();


/*
=============================================== 03. MOBILE MENU  ===============================================
*/
    $('ul.mobile-menu-pro').slimmenu({
        resizeWidth: '1200',
        collapserTitle: 'Menu',
        easingEffect:'easeInOutQuint',
        animSpeed:'medium',
        indentChildren: false,
        childrenIndenter: '- '
    });

/*
=============================================== 04. SHOW/HIDE MOBILE MENU  ===============================================
*/	
    var clickOrTouch = (('ontouchend' in window)) ? 'touchend' : 'click';

    $(".mobile-menu-icon-pro").on(clickOrTouch, function(e) {
        $(".site-header-pro").toggleClass("active-menu-icon-pro");
    });



/*
=============================================== 05. GALLERY JS  ===============================================
*/	
    $('.gallery-progression').flexslider({
        animation: "fade",      
        slideDirection: "horizontal", 
        slideshow: false,   
        slideshowSpeed: 7000,  
        animationDuration: 200,        
        directionNav: true,             
        controlNav: true,
        prevText: "",    
        nextText: "", 
    });



/*
=============================================== 06. STICKY MENU JS  ===============================================
*/	
    if ($(this).width() > 959) {
        $('#sticky-header-pro').scrollToFixed();
    }

    var header = $(".menu-default-pro");
    $(window).scroll(function() {

        if ($(this).width() > 959) {

            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                header.removeClass('menu-default-pro').addClass("menu-resized-pro");

            } else {
                header.removeClass("menu-resized-pro").addClass('menu-default-pro');
            }

        } 

    });



    $(window).scroll(function(){
        if ($(this).width() > 959) {
            $(".invested_header_footer #invested-bottom-header").css("bottom",Math.max(0,$(this).scrollTop()));
        }
    });



/*
=============================================== 07. SCROLL TO TOP MENU JS  ===============================================
*/
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 150,

    //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
    offset_opacity = 1200,

    //duration of the top scrolling animation (in ms)
    scroll_top_duration = 700,

    //grab the "back to top" link
    $back_to_top = $('#pro-scroll-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if( $(this).scrollTop() > offset_opacity ) { 
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0 ,
        }, scroll_top_duration
                              );
    });


/*
=============================================== 08. prettyPhoto JS  ===============================================
*/

    $(".type-portfolio  a[data-rel^='prettyPhoto'], .featured-blog-pro a[data-rel^='prettyPhoto'],.images a[data-rel^='prettyPhoto'], .progression-featured-portfolio-single a[data-rel^='prettyPhoto']").prettyPhoto({
        hook: 'data-rel',
        animation_speed: 'fast', /* fast/slow/normal */
        slideshow: 5000, /* false OR interval time in ms */
        show_title: false, /* true/false */
        deeplinking: false, /* Allow prettyPhoto to update the url to enable deeplinking. */
        overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
        custom_markup: '',
        default_width: 900,
        default_height: 506,
        social_tools: '' /* html or false to disable */
    });



/*
=============================================== 09. Match Height  ===============================================
*/	

    $(function() {
        $('.equal-height-progression').matchHeight({
            byRow: true,
        });
    });


/*
=============================================== 10. Form Validation  ===============================================
*/


    $("#CommentForm").validate();

    
/*
=============================================== 11. Background Images  ===============================================
*/
    $("body.home .homepage-highlight-pro").backstretch([ "images/demo/investmen-tquote.jpg" ],{ fade: 750, centeredY:true }); 
    $("body.approach .highlight-approach-1").backstretch([ "images/demo/approach-1.jpg" ],{ fade: 750, centeredY:true }); 
    $("body.approach .highlight-approach-2").backstretch([ "images/demo/shutterstock_71757706.jpg" ],{ fade: 750, centeredY:true }); 
    $("body.approach .highlight-approach-3").backstretch([ "images/demo/skyline-taller.jpg" ],{ fade: 750, centeredY:false }); 
    $("body.contact .progression-contact-img-1").backstretch([ "images/demo/sf.jpg" ],{ fade: 750, centeredY:false }); 


/*
=============================================== 12. Light Shortcodes  ===============================================
*/


    // Accordion
    $(".ls-sc-accordion").accordion({heightStyle: "content"});

    // Toggle
    $(".ls-sc-toggle-trigger").on('click', function(){$(this).toggleClass("active").next().slideToggle("fast");return false; });

    // Tabs
    $( ".ls-sc-tabs" ).tabs();


/*
=============================================== 13. MASONRY  ===============================================
*/

    // portfolio & team
    var $container_portfolio = $('.progression-portfolio-masonry, .progression-masonry-team').isotope();
    $container_portfolio.imagesLoaded( function() {
        $(".progression-masonry-item").addClass('opacity-progression');
        $container_portfolio.isotope({
            itemSelector: '.progression-masonry-item',
            transitionDuration: '0.4s',

            masonry: {
                columnWidth: '.progression-masonry-col-4',
            },hiddenStyle: {
                opacity: 0
            },
            visibleStyle: {
                opacity: 1
            }
        });
    });




    var $container_press = $('.progression-masonry-press, .progression-single-portfolio-masonry').isotope();
    $container_press.imagesLoaded( function() {
        $(".progression-masonry-item").addClass('opacity-progression');
        $container_press.isotope({
            itemSelector: '.progression-masonry-item',
            transitionDuration: '0.4s',

            masonry: {
                columnWidth: '.progression-masonry-col-3',
            },hiddenStyle: {
                opacity: 0
            },
            visibleStyle: {
                opacity: 1
            }
        });
    });


    $('.port-filter-group-1').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $container_press.isotope({ filter: filterValue });
    });

    $('.port-filter-group-1').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'li', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });





});
