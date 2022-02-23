let item_template = "<li class='{{class}}'>{{num}}.{{name}}({{date}})</li>";
let data_url =
  "https://awiclass.monoame.com/api/command.php?type=get&name=tododata";
let tododata;
$.ajax({
  url: data_url,
  success: function (res) {
    console.log(JSON.parse(res));
    tododata = JSON.parse(res);
    for (i = 0; i < tododata.length; i++) {
      let item = tododata[i];
      let now_class = "";
      if (item.done == true) {
        now_class = "done";
      }
      //   let now_class=(item.done==true)?"done":"";
      let now_item = item_template
        .replace("{{name}}", item.name)
        .replace("{{num}}", i + 1)
        .replace("{{date}}", item.date)
        .replace("{{class}}", now_class);
      $("#listitem").append(now_item);
    }
  },
});
