$(document).ready(function () {
    var owl = $("#banner-carousel");

    owl.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        center: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        onInitialized: function (event) {
            $(".carousel-text").removeClass("animate-animationSliderText");
            var currentItem = $(event.target).find('.owl-item.active .carousel-text');
            currentItem.addClass("animate-animationSliderText");
        },
        onTranslated: function (event) {
            $(".carousel-text").removeClass("animate-animationSliderText");
            var currentItem = $(event.target).find('.owl-item.active .carousel-text');
            currentItem.addClass("animate-animationSliderText");
        }
    });

    $(".custom-prev").click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $(".custom-next").click(function () {
        owl.trigger('next.owl.carousel');
    });


    $('#product-carousel, #gallery-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });

    $('#product-carousel-prev, #gallery-carousel-prev').click(function () {
        $('#product-carousel, #gallery-carousel').trigger('prev.owl.carousel');
    });

    $('#product-carousel-next, #gallery-carousel-next').click(function () {
        $('#product-carousel, #gallery-carousel').trigger('next.owl.carousel');
    });

    $("#testimonial-carousel").owlCarousel({
        items: 2,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: false,
        dots: false
    });

    $("#client-carousel").owlCarousel({
        items: 4,
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            }
        }
    });

    setTimeout(() => {
        $("#loader").hide();
    }, 2000);
});