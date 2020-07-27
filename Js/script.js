$(function () {
    $(document).scroll(function () {
        var top = $(document).scrollTop();
        if (top > 100) {
            $('header').addClass('scroll');
            $('header a').removeClass('cl');
            /*$('.cl').css("color", "#343a40");*/
        } else {
            $('header').removeClass('scroll');
            $('header a').addClass('cl');
            //            $('.cl').css("color", "#fff");
        }
    });
    'use strict';

    // Smoothly scroll to element
    $(".navbar li:not(:last-child) > a").click(function (e) {

        e.preventDefault();
        $("html, body").animate({
            scrollTop: $('#' + $(this).data("scroll")).offset().top
        }, 1000)
        // console.log('#' + $(this).data("scroll"));

    });




})
