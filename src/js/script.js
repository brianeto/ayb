// COUNTER
$(window).scroll(startCounter);
    function startCounter() {
    var hT = $('.js-numero-contadores').offset().top,
        hH = $('.js-numero-contadores').outerHeight(),
        wH = $(window).height();
        if ($(window).scrollTop() > hT+hH-wH) {
            $(window).off("scroll", startCounter);
            $('.js-numero-contadores').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    }

// CAROUSEL
$('.owl-carousel').owlCarousel({
    nav:true,
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})