var num = 12;
function check() {
  if (num <= 10) {
    $(".text").text("數量極少");
    $(".text").css("color", "#ff6505");
    $(".text").css("border-color", "#ff6505");
    $(".fill_stock").addClass("fill_stock_open");
  } else if ((num > 10) & (num < 20)) {
    $(".text").text("賣得不錯噢！");
    $(".text").css("color", "#ffcd05");
    $(".text").css("border-color", "#ffcd05");
    $(".fill_stock").removeClass("fill_stock_open");
  } else {
    $(".text").text("還剩很多 ");
    $(".text").css("color", "#fff");
    $(".text").css("border-color", "#fff");
  }
}

function click(num_var) {
  num = num + num_var;
  $(".num").text(num);
}

$(".minus").click(function () {
  console.log("minus");
  click(-1);
  check();
});

$(".add").click(function () {
  click(1);
  check();
});

var waittime = 0;
$(".fill_stock").click(function () {
  // $(".fill_stock").text("☎️聯絡中....");
  setInterval(function () {
    waittime += 1;
    $(".fill_stock").text("☎️聯絡中...." + waittime);
  }, 1000);
});
