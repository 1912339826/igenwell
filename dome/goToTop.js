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
    $(".ban_son").click(function (e) {
        e.preventDefault();
        if ($(this).data().name != "product_center") {
            window.location.href = $(this).data().name + ".html"
        }
    });
    // 解决当前项目a标签无法跳转的问题。。。。
    $("a").click(function (e) {
        e.preventDefault();
        if ($(this).attr("href") != "") {
            window.location.href = $(this).attr("href")
        }

    })
    // 从场景进入的页面
    if (!!window.location.search.split("?")[1]) {
        var key = window.location.search.split("?")[1].split("=")[0];
        var value = window.location.search.split("?")[1].split("=")[1];
        if (key == "before" && value == "classic_scene") {
            $("#before_classic_scene").show()
        }
    } else {
        // before_classic_scene隐藏的时候把之后的箭头隐藏
        $("#before_classic_scene").next().hide()
    }
});

function goToTop() {
    if ($(window).scrollTop() > 500) {
        $('#goToTop').fadeIn();
    } else {
        $('#goToTop').fadeOut();
    }
}