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
        height: "900px",
        width:"1920px"
    });
});
