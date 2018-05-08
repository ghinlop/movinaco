var isActive = null;

$(document).ready(function () {
    if ($('[toggle-menu]').length > 0) {
        var toggleMenu = $('[toggle-menu]');
        var toggleListControl = []
        for (let val of toggleMenu) {
            toggleListControl.push($(val).attr('toggle-menu'))
        }
        for (let toggle of toggleListControl) {
            toggleMenuClass(toggle);
        }
    }
    $('#over').click(function (e) {
        e.preventDefault();
        $(`#${isActive}`).removeClass('active');
        $('#over').removeClass('active');
    })
    var swiper = new Swiper('.header_slider', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }, fadeEffect: {
            crossFade: true
        },
        autoHeight: true,
        loop: true
    });

    var swiper = new Swiper('.sp_slider', {
        autoplay: {
            delay: 7000
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }, fadeEffect: {
            crossFade: true
        },
        loop: true,
        slidesPerView: 4,
        spaceBetween: 40,
        breakpoints: {
            // when window width is <= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is <= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is <= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
})

function toggleMenuClass(value) {
    let target = $(`[toggle-menu=${value}]`);
    target.click(function (e) {
        e.preventDefault();
        isActive = value;
        if ($('[over]').length > 0) {
            $('#over').toggleClass('active');
        }
        $(`#${value}`).toggleClass('active');
    });
}

$(function () {
    var content = $('[jqueryScroll]')
    var idList = [];
    if (content.length > 0 && content !== undefined) {
        for (let val of content) {
            idList.push($(val).attr('id'))
        }
        for (let scrolls of idList) {
            let ps = new PerfectScrollbar(`#${scrolls}`, { suppressScrollX: true });
        }
    }
});
$('.--js_dropdown').hover(
    function () {
        var isTarget = $(this).find('.--sub_drop')
        $(isTarget).addClass('active');
        $(this).find('a').toggleClass('acitve')
        var i = 0;
        let callOp = setInterval(function () {
            if (i < 1) {
                $(isTarget).attr('style', `opacity: ${i}`)
                i += .3;
            } else {
                $(isTarget).removeAttr('style');
                $(isTarget).addClass('show');
                clearInterval(callOp)
            }
        }, 50)
    },
    function () {
        var isTarget = $(this).find('.--sub_drop')
        $(isTarget).removeClass('active show');
    }
);