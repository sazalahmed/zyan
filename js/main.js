$(function () {

    "use strict";

    //=====MENU FIX JS======   
    if ($('.main_menu').offset() != undefined) {
        var navoff = $('.main_menu').offset().top;
        $(window).scroll(function () {
            var scrolling = $(this).scrollTop();

            if (scrolling > navoff) {
                $('.main_menu').addClass('menu_fix');
            } else {
                $('.main_menu').removeClass('menu_fix');
            }
        });
    }


    //=====venobox js=====
    $('.venobox').venobox();


    //=====counter js=======   
    $('.counter').countUp();


    //====BARFILLER JS========
    $(document).ready(function () {
        $('#bar1').barfiller({ barColor: '#55E6A5' });
        $('#bar2').barfiller({ barColor: '#55E6A5' });
        $('#bar3').barfiller({ barColor: '#55E6A5' });
        $('#bar4').barfiller({ barColor: '#55E6A5' });
        $('#bar5').barfiller({ barColor: '#55E6A5' });
        $('#bar6').barfiller({ barColor: '#55E6A5' });
    });


    //======TESTIMONIAL SLIDER======   
    $('.testi_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });


    //======BRAND SLIDER======   
    $('.marquee_animi').marquee({
        speed: 100,
        gap: 0,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true,
        pauseOnHover: true
    });


    //======STICKY SIDEBAR======
    $("#sticky_sidebar").stickit({
        top: 100,
    });


});
