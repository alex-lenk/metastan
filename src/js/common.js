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

// Определяем мобильный браузер
    function MobileDetect() {
        var UA = navigator.userAgent.toLowerCase();
        return (/android|webos|iris|bolt|mobile|iphone|ipad|ipod|iemobile|blackberry|windows phone|opera mobi|opera mini/i.test(UA)) ? true : false;
    }

    var articleMeta = $(".article-meta"),
        articleMetaFixed = 'fixed';

    $window = $(window);

// Если браузер не мобильный, работаем
    if (!MobileDetect()) {
        if (articleMeta.length) {
            // Определяем координаты верха блока навигации
            $h = articleMeta.offset().top;
            $window.scroll(function () {
                // Если прокрутили скролл ниже макушки блока, включаем фиксацию
                if ($window.scrollTop() > $h) {
                    articleMeta.addClass(articleMetaFixed);
                } else {
                    //Иначе возвращаем всё назад
                    articleMeta.removeClass(articleMetaFixed);
                }
            });
        }
    }


    $('.count-minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.count-plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    // BEGIN
    $(".order-next").click(
        function () {
            var basketStepsActive = "basket-steps__active",
                hidden = 'hidden';
            $('#basket-step-1').removeClass(basketStepsActive);
            $('#basket-step-2').addClass(basketStepsActive);
            $('#msCart').addClass(hidden);
            $('.ms2_form').removeClass(hidden);
        }
    );
    // END

    // BEGIN
    $(".nav-menu__toggle").click(
        function () {
            $('.menu').toggleClass('menu-opened');
        }
    );
    // END


    // BEGIN
    var catListItemOpened = 'catalog-list__item-opened',
        catListItemEffect = 'catalog-list__item-effect';

    $('.catalog-list__item').hover(
        function () {
            $(this).addClass(catListItemOpened).delay(600).addClass(catListItemEffect);
        },
        function () {
            $(this).removeClass(catListItemEffect).delay(600).removeClass(catListItemOpened);
        }
    );

    // END

    var swiperMain = new Swiper('.swiper-main', {
        slidesPerView: 1
    });

    var swiperThrumb = new Swiper('.gallery-thumbs', {
        direction: 'vertical',
        spaceBetween: 20,
        centeredSlides: true,
        slidesPerView: 4,
        slideToClickedSlide: true
    });
    swiperMain.controller.control = swiperThrumb;
    swiperThrumb.controller.control = swiperMain;
    // END


});


window.onload = function () {
    function setCurrentSlide(ele, index) {
        $(".characteristic-top .swiper-slide").removeClass("selected");
        ele.addClass("selected");
        //characteristic-top.initialSlide=index;
    }

    var characteristicTop = new Swiper(".characteristic-top", {
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 5,
        freeMode: true,
        loop: false,
        onTab: function (swiper) {
            var n = characteristicTop.clickedIndex;
            alert(1);
        }
    });
    characteristicTop.slides.each(function (index, val) {
        var ele = $(this);
        ele.on("click", function () {
            setCurrentSlide(ele, index);
            characteristicContent.slideTo(index, 500, false);
            //mySwiper.initialSlide=index;
        });
    });

    var characteristicContent = new Swiper(".characteristic-content", {
        direction: "horizontal",
        loop: false,
        autoHeight: true,
        onSlideChangeEnd: function (swiper) {
            var n = swiper.activeIndex;
            setCurrentSlide($(".characteristic-top .swiper-slide").eq(n), n);
            characteristicTop.slideTo(n, 500, false);
        }
    });
};
