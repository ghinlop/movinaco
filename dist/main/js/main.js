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

    var sp = new Swiper('.sp_slider', {
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
            375: {
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
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });
    var news = new Swiper('.news_slider', {
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
            375: {
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
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;

    var currentID = null;
    $('[tabs-role]').find('[tab-action]').click((e) => {
        e.preventDefault();
        let id = e.currentTarget.hash.split('#')[1];
        var isTarget = $('#' + id);
        var op = 0;
        if (isTarget && id !== currentID) {
            var tabContent = $('[tabs-content]').find('#' + id);
            $('[tab-action]').removeClass('active show');
            $('[tabs-content]').find(`.active.show`).removeClass('active show');
            $(tabContent).addClass('active');
            $(isTarget).addClass('active')
            setTimeout(() => {
                $(isTarget).addClass('show')
                var opSet = setInterval(() => {
                    if (op <= 1) {
                        $(tabContent).attr('style', 'opacity:' + op);
                        op = op + 0.3;
                    } else {
                        $(tabContent).removeAttr('style');
                        clearInterval(opSet);
                        $(tabContent).addClass('show');
                    }
                }, 50);
            }, 400)
            currentID = id;
        }
    });
})

function toggleMenuClass(value) {
    let target = $(`[toggle-menu=${value}]`);
    target.click(function (e) {
        e.preventDefault();
        isActive = value;
        if ($(target).attr('over') !== undefined) {
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