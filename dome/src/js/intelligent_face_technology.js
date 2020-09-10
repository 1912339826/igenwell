$("#intelligent_face_technology").click(function (e) {
  e.preventDefault();
  $(".tab_control").hide()
});
// 点击产品中心
$("#product_center").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  if ($(".tab_control").is(":hidden")) {
    $(".tab_control").show()
  } else {
    $(".tab_control").hide()
  }

});
$(".tab_control").click(function (e) {
  e.preventDefault();
  e.stopPropagation();
  $(".tab_control").show()
});

$(".search_button").click(function (e) {
  e.preventDefault();
  $(this).hide()
  $(".search_input").show()
});