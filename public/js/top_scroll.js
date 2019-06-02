
$(function() {
    var pageTop = $('.page-top');
    pageTop.hide();
    $(window).scroll(function () {
        console.log($(this).scrollTop())
        if ($(this).scrollTop() > 500) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });
    pageTop.click(function () {
        $('body, html').animate({scrollTop:0}, 500, 'swing');
    return false;
    });
});

