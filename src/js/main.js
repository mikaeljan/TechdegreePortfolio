$(document).ready(function() {
    //Smooth scrolling feature
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        let target = this.hash;
        let $target = $(target);
        let headerHeight = $(".nav").height();

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1100, 'swing', function () {
            window.location.hash = target;
        });
    });
    // End Smooth scrolling feature

    //Carousel scrolling
    // if($(window).width() > 700) {
    //     $('#portfolio').slick({
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         autoplay: false,
    //         autoplaySpeed: 4000,
    //     });
    // }
    // $('#portfolio').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    // });


    //End carousel scrolling
});