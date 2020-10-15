$("#About_Us").click(function (e) {
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

var map = new BMap.Map("container");
// 创建地图实例  
var point = new BMap.Point(getLocation().X, getLocation().Y);

// 创建点坐标  
window.setTimeout(() => {
  map.addControl(new BMap.NavigationControl());
  map.addControl(new BMap.ScaleControl());
  map.addControl(new BMap.OverviewMapControl());
  map.centerAndZoom(point, 20);
  var marker = new BMap.Marker(point); // 创建标注    
  map.addOverlay(marker); // 将标注添加到地图中 
  // 初始化地图，设置中心点坐标和地图级别  
}, 2000);