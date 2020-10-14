layui.use('carousel', function () {
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
        elem: '#carousel',
        width: '100%',
        arrow: 'always',
        anim: 'fade',
        // autoplay: true,
        autoplay: false,
        height: "46.88vw",
        width:"100vw"
    });
});

$(".to_page").click(function (e) { 
    e.preventDefault();
    window.location.href = $(this).data().name
});


