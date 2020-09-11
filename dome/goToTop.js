$(function () {
    $('#goToTop').hide(); //隐藏go to top按钮

    $(window).scroll(function () {
        // console.log($(this).scrollTop());

        //当window的scrolltop距离大于1时，go to 
        if ($(this).scrollTop() > 500) {
            $('#goToTop').fadeIn();
        } else {
            $('#goToTop').fadeOut();
        }
    });
    $('#goToTop').click(function () {
        $('html , body').animate({
            scrollTop: 0
        }, 'slow');
    });
});