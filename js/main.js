$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 3000, function () {
                window.location.hash = hash;
            });
        }
    });
    $(window).scroll(function () {
        if (document.body.scrollTop >= 580) {
            $('nav ul li a').attr('id', 'scrollMenuColor');
        };
    });
    $(".spoiler-title").click(function () {
        $(".spoiler-body").slideToggle("slow");
    });
    $(window).scroll(function () {
        if (document.body.scrollTop >= 1000) {
            $('.html #svg #bar').css({
                strokeDashoffset: 540
            });;
            $('.html').attr('data-pct', 90);
            $('.css #svg #bar').css({
                strokeDashoffset: 540
            });;
            $('.css').attr('data-pct', 90);
            $('.js #svg #bar').css({
                strokeDashoffset: 480
            });;
            $('.js').attr('data-pct', 80);
            $('.jquery #svg #bar').css({
                strokeDashoffset: 420
            });;
            $('.jquery').attr('data-pct', 70);
            $('.angular #svg #bar').css({
                strokeDashoffset: 390
            });;
            $('.angular').attr('data-pct', 65);
            $('.bootstrap #svg #bar').css({
                strokeDashoffset: 420
            });;
            $('.bootstrap').attr('data-pct', 70);
            $('.less #svg #bar').css({
                strokeDashoffset: 390
            });;
            $('.less').attr('data-pct', 65);
        };
    });
});