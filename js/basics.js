/**
 * Created by lianxiang on 2018/10/9.
 */

(function ($) {

    var flag = true;
    var section2 = $(".section2");
    var section3 = $(".section3");
    var section4 = $(".section4");

    var statis_24 = $(".statis_24"), statis_500 = $(".statis_500"), statis_30 = $(".statis_30"),
        statis_600 = $(".statis_600");
    var start_animate = $(".start-animate");

    function startAnimate() {
        var windowScroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var reg = /upset/;

        if (section2.offset().top - windowScroll < windowHeight - 100 && flag) {
            flag = false;
            plusNum(24, 1, 50, statis_24.find("h3"));
            plusNum(500, 10, 30, statis_500.find("h3"));
            plusNum(30, 1, 40, statis_30.find("h3"));
            plusNum(600, 10, 25, statis_600.find("h3"))
        }

        var b_img = $(".b-img");
        var right_3_b = $(".right_3_b");
        var slideshow = $(".slideshow");

        if (b_img.offset().top - windowScroll < windowHeight - 50) {
            b_img.find(".zhez").css({display: "block"});
            b_img.find("img").css({display: "block"});
        }
        if (b_img.offset().top - windowScroll < windowHeight - 60) {
            b_img.find("img").css({transform: "scale(1)"});
            b_img.find(".zhez").css({transform: "rotateZ(0deg)"});
        }
        if (right_3_b.offset().top - windowScroll < windowHeight - 50) {
            right_3_b.css({display: "block"});
        }
        if (right_3_b.offset().top - windowScroll < windowHeight - 50) {
            right_3_b.css({transform: "scale(1)"});
        }
        if (slideshow.offset().top - windowScroll < windowHeight - 50) {
            slideshow.find(".zhez").css({display: "block"});
            slideshow.find("img").css({display: "block"});
        }
        if (slideshow.offset().top - windowScroll < windowHeight - 60) {
            slideshow.find("img").css({transform: "scale(1)"});
            slideshow.find(".zhez").css({transform: "rotateZ(0deg)"})
        }
        // if (section3.offset().top - windowScroll < windowHeight - 100) {
        //     if (!reg.test(ContentClass)) {
        //         Content.addClass("upset");
        //     }
        // } else {
        //     if (reg.test(ContentClass)) {
        //         Content.removeClass("upset");
        //     }
        // }
        // if (section4.offset().top - windowScroll < windowHeight - 100) {
        //     if (!reg.test(bgWhiteClass)) {
        //         bgWhite.addClass("upset");
        //     }
        // } else {
        //     if (reg.test(bgWhiteClass)) {
        //         bgWhite.removeClass("upset");
        //     }
        // }
        if (windowScroll > 100) {
            start_animate.hide();
            $(".g_senav").css({transform: "translate(0, -50%)"});
        } else {
            start_animate.show();
            $(".g_senav").css({transform: "translate(100%, -50%)"});
        }

        if (windowScroll > 900) {
            $(".bg-txt").css({opacity: 0});
            $(".head").css({background: "rgba(145, 145, 145, 0.5)"});
            $(".head li").css("height", "0.8rem");
            $(".head li a").css("padding-top", "0");
            $(".head .logo").css({"height": "0.8rem", background: "none"})
        } else {
            $(".bg-txt").css({opacity: 1});
            $(".head").css({background: "rgba(255,255,255,0)"});
            $(".head li").css("height", "1.3rem");
            $(".head .logo").css({"height": "1.3rem", background: "#fff"})
        }
    }

    startAnimate();

    $(window).scroll(function () {
        startAnimate();
    });

    start_animate.on("click", function () {
        $('html,body').animate({scrollTop: '500px'}, 1000);
    });

    $(".bg-txt").css({transform: "translateY(-40%)"});

    $(".g_senitmtop").click(function () {
        $('html,body').animate({scrollTop: "0px"}, 1000);
    });

    function plusNum(target, b, time, ele) {
        var number = 0;
        var timer = setInterval(function () {
            number += b;
            $(ele).html(number);
            if (number >= target) {
                $(ele).html(target);
                clearInterval(timer)
            }
        }, time);
    }

    var kh_ul = $(".kh_ul");
    var kh_li = parseInt(kh_ul.find("li").css("height"));
    $(".belowPage").on("click", function () {
        var kh_top = parseInt(kh_ul.css("top"));

        if (kh_top < (kh_ul.height()+kh_li)) {
            kh_ul.css("top", -kh_ul.height()+kh_li+"px");
            return;
        }

        kh_ul.css("top", kh_top - kh_li + "px");
    });
    $(".upPage").on("click", function () {
        var kh_top = parseInt(kh_ul.css("top"));

        if (kh_top <= 0) {
            kh_ul.css("top", 0);
            return;
        }

        kh_ul.css("top", kh_top + kh_li + "px");
    });
})($);