// 滑鼠點擊以後，觸及class buybtn的function因此更改文字變成已經購買以及增加class buyed
// 若$("")裡面放的是class，這樣如果同時有兩個標籤有同樣的屬性就會被一起觸發，但若放this的時候，就不會有這個問題。
$(".buybtn").click(function () {
  $(this).text("已經購買");
  $(this).addClass("buyed");
});

// 當點擊到selbtn這個屬性，觸發function將show_info及show_cata這個屬性變更成selbtn這個屬性的文字內容
// if函式指的是，若點擊.selbtn且ATTR屬性式花的時候，利用APPEND在後面顯示想要顯式的文字，否則則顯示else的內容
$(".selbtn").click(function () {
  $(".show_info").text($(this).text());
  $(".show_cata").text($(this).attr("data-cata"));
  if ($(this).attr("data-cata") == "flower") {
    $(".show_cata").append(",他買的是花！！");
  } else {
    $(".show_cata").append(",他買的不是花！！");
  }
});
// 滑鼠移入之後觸發的事件
$(".mbtn").mouseenter(function () {
  $(this).css("background", "#333");
  $(this).css("color", "#fff");
  $(this).text("使用者進入了！");
});

// 滑鼠移出之後觸發的事件
$(".mbtn").mouseleave(function () {
  $(this).css("background", "#FFF");
  $(this).css("color", "#333");
  $(this).text("使用者離開了！");
});

setTimeout(function () {
  $(".timerbox").css("background", "red");
}, 5000);

nowtime = 0;
setInterval(function () {
  nowtime = nowtime + 1;
  $(".countbox").text("已經經過" + nowtime + "秒");
}, 1000);
