
/*==============================================================================

	Author Name		:	Fullstackdev
	Product Name    :	MyVCard - Responsive & Resume/CV/vCard Template
	File Name       :   myvcard.js

--------------------------------------------------------------------------------
	Jquery content
--------------------------------------------------------------------------------


	01. Menu functioning 

	02. Typed.js (Text typing effect)

	03. fun fact counter

	04. Initializing Skill Bars

	05. Portfolio sorting

	06. Magnific Popup

    07. Map setting
	
    08. slide background image setting

    09. Video background setting



================================================================================*/


;$(function() {
    
    "use strict";

    var $portfolio = $('.portfolio-items'),
        $blog = $('.blog-posts');

    $('html').removeClass('no-js').addClass('js');
   

    /*========================================
    =          01.Menu functioning            =
    ========================================*/

    $('.toggle-menu').on("click", function(e) {
        $('.toggle-menu__btn').toggleClass('toggle-menu__btn--active');
        $('.l-menu').toggleClass('l-menu--active');
        $('.menu').toggleClass('menu--active');
        $('.intro-text').toggleClass('intro-text--is-hide');
        $('.main-bg').toggleClass('main-bg--dim');
        $('.main-bg').toggleClass('main-bg--deactive');
        $('body').toggleClass('show-menu');

    });
    //for menu items hover effects	
    $('.menu').on("mouseenter","li", function() {
        $('.menu > .menu__items > li').addClass('low-opacity');
        $(this).removeClass('low-opacity');  //no need to chache object here because we use it only once
    });

    $('.menu').on("mouseleave","li", function() {
        $('.menu > .menu__items > li').removeClass('low-opacity');
    });

    //for all menu link 
    $('.menu').on("click","a", function(e) {
        $('.toggle-menu__btn').toggleClass('toggle-menu__btn--active');
        $('.l-menu').toggleClass('l-menu--active');
        $('.menu').toggleClass('menu--active');
        $('.intro-text').toggleClass('intro-text--is-hide');
        $('.main-bg').toggleClass('main-bg--dim');
        $('.main-bg').toggleClass('main-bg--deactive');
        $('body').removeClass('show-menu').addClass('show-section');

        $('.section.active').removeClass('active');
        $('#' + $(this).data('section')).addClass('active');  //no need to chache object here because we use it only once

    });

    //for home link
    
    $('.menu').on("click","a.home-link", function(e) {
        $('body').removeClass('show-menu show-section');
        $('.section.active').removeClass('active');
    });


    /*=========================================================================
    	02. Typed.js (Text typing effect)
    =========================================================================*/
    $('#typed').typed({
        stringsElement: $('#typed-strings'),
        loop: true,
        backDelay: 2000
    });

    /*=========================================================================
    	03. fun fact counter
    =========================================================================*/


    $(".menu").on("click","a[data-section='about']", function(e) {

        $('.funfact > h4').each(function() {
            var $this = $(this);//CACHE JQUERY OBJECTS
            var parts = $this.text().match(/^(\d+)(.*)/);
            if (parts.length < 2) return;

            var scale = 30;
            var delay = 50;
            var end = 0 + parts[1];
            var next = 0;
            var suffix = parts[2];

            var runUp = function() {
                var show = Math.ceil(next);
                $this.text('' + show + suffix);
                if (show == end) return;
                next = next + (end - next) / scale;
                window.setTimeout(runUp, delay);
            };
            runUp();
        });

    });

    /*=========================================================================
    	04. Initializing Skill Bars
    =========================================================================*/

    
    $(".menu").on("click","a[data-section='resume']", function(e) {

        $('.skill > .skill__percent').each(function() {
            var $this = $(this); //CACHE JQUERY OBJECTS
            var $bar = $this.next(".skill__bar").find(".skill__bar__percent");
            var parts = $this.text().match(/^(\d+)(.*)/);
            if (parts.length < 2) return;

            var scale = 30;
            var delay = 50;
            var end = 0 + parts[1];
            var next = 0;
            var suffix = parts[2];

            var runUp = function() {
                var show = Math.ceil(next);
                $this.text('' + show + suffix);
                $bar.css('width', show + '%');
                if (show == end) return;
                next = next + (end - next) / scale;
                window.setTimeout(runUp, delay);
            };
            runUp();
        });

    });





    /*=========================================
    =           05. Portfolio sorting            =
    =========================================*/


    /*----------  sorting function new ----------*/


    $("#portfolio-nav").on("click",'button', function(e) {

    	 var $portbutton = $(this); //CACHE JQUERY OBJECTS
    	                      
        // Remove the current active class
        $("#portfolio-nav button.port-btn--active").removeClass('port-btn--active');

        // Add the port-btn--active class to the clicked button
        $portbutton.addClass('port-btn--active');

        // Get the button text (filter value)
        var filterValue = $portbutton.data("rel");

        // If we clicked "All", we show all items
        if (filterValue === "all") {
            $('.portfolio__item').show("slow");
        } else {
            // Else, we find the portfolio entries that match the clicked button
            // And then add the class of .hidden1
            $(".portfolio__item").each(function() {
            	var $this=$(this);  //CACHE JQUERY OBJECTS
                if ($this.hasClass(filterValue)) {
                    $this.show("slow");
                } else {
                    $this.hide("slow");
                }
            });
        }

        return false; //to avoid page refresh
    });




    /*=========================================================================
    	06. Magnific Popup
    =========================================================================*/
    $('.has-popup').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });

    /*===================================
    =            07. Map setting            =
    ===================================*/

    function myMap() {
        var myCenter = new google.maps.LatLng(40.7128, -74.0059);
        var mapCanvas = document.getElementById("map");
        var mapOptions = { center: myCenter, zoom: 5, scrollwheel: false };
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({ position: myCenter });
        marker.setMap(map);
    }

    myMap();

    /*===================================
    = 08. slide background image setting  =
    ===================================*/
    $('#my-carousal').carousel({
        pause: "false"
    });






});
