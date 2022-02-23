// 在class block裡面增加html文字
$(".block1").html("更新公告");
// 修改block2的css樣式
$(".block2").css("background-color", "#F24");
$(".block2").css("border-radius", "100%");
// 增加或刪除 class
$(".block3").addClass("bigblock");
$(".block4").removeClass("bigblock");
// 增加html標籤
$(".block5").html("<div class=block>商品</div><div class=block>商品</div>");
// 在html前面跟後面增加文字
$(".block5").prepend("商品列表");
$(".block5").append("共有兩項");
// 在html裡面增加文字
$(".block6").text("<div class=block>商品</div><div class=block>商品</div>");
