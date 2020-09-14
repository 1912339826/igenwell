$('#goToTop').hide(); //隐藏go to top按钮
$(function () {
    goToTop()
    $(window).scroll(function () {
        goToTop()
    });
    $('#goToTop').click(function () {
        $('html , body').animate({
            scrollTop: 0
        }, 'slow');
    });
});

function goToTop() {
    if ($(window).scrollTop() > 500) {
        $('#goToTop').fadeIn();
    } else {
        $('#goToTop').fadeOut();
    }
}