/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */

(function ($) {
    "use strict";
    var mainApp = {


        plusMain: function () {

            //FUNCTION TO SCROLL BETWEEN LEFT MENU LINKS
            $(function () {
                $('nav a').bind('click', function (event) {
                    var $anchor = $(this);

                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000, 'easeInOutExpo');
                    /*
                    if you don't want to use the easing effects:
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000);
                    */
                    event.preventDefault();
                });
            });


            // MAIN FUNTION FOR TRIGGER LEFT MENU


            $('.Icon-trigger span').click(function () {
                if (
            $('.left-panel').css('left') == '-160px') {
                    $('.left-panel').animate({ left: '0px' });
                }
                else
                    $('.left-panel').animate({ left: '-160px' });
            });

            /** VEGAS BACKGROUND  IMAGE  **/
            $(function () {
                $.vegas('slideshow', {
                    backgrounds: [
                      { src: 'assets/img/4.jpg' }
                      //CHANGE THIS IMAGE WITH YOUR ORIGINAL IMAGE
                        //THIS IMAGE ARE FOR DEMO PURPOSE ONLY, YOU CAN NOT USE THEM WITHOUT AUTHORS PERMISSION
                         //SEE DOCUMENTATION FOR ORIGINAL URLs/LINKs OF IMAGE                         
                    ]
                })('overlay', {
                    /** SLIDESHOW OVERLAY IMAGE **/
                    src: 'assets/plugins/vegas/overlays/01.png' // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
                });


            });

            /*
            YOU CAN WRITE 
            YOUR SCRIPTS HERE
            
            */



        },

        initialization: function () {
            mainApp.plusMain();

        }


    }
    // INITIALIZING ///

    $(document).ready(function () {
        mainApp.plusMain();
    });


}(jQuery));


