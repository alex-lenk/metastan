$(document).ready(function () {
// Исправление бага в IE на телефонах
// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.head.appendChild(msViewportStyle)
    }

    $('.home-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('.demonstrations-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });
});
