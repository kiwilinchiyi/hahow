let itemurl =
  "https://awiclass.monoame.com/api/command.php?type=get&name=itemdata";

// []物件 {}陣列
let shoplist = {
  name: "MyBuyList 購物清單",
  time: "2022/9/10",
  list: [
    { name: "吹風機", price: 300 },
    { name: "麥克風", price: 9000 },
    { name: "筆記型電腦", price: 54555 },
    { name: "iphone13", price: 32000 },
    { name: "神奇海螺", price: 5000 },
  ],
};
console.log(shoplist);

// 載入ajax資料
$.ajax({
  url: itemurl,
  success: function (res) {
    console.log(JSON.parse(res));
    shoplist.list = JSON.parse(res);
    showlist();
  },
});

let item_html =
  "<li id={{id}} class='buy_item'>{{num}}.{{item}}<div class='price'>{{price}}</div><div class='del_btn' id={{del_id}} data-del-id='{{delid}}'>X</div></li>";

let total_html =
  "<li class='buy_item total'>總價<div class='price'>{{price}}</div></li>";
function showlist() {
  // 先將items_list內容清空，再把內容新增進去
  $("#items_list").html("");
  let total_price = 0;

  // 設item等於shoplist.list[i]，再用replace把item_html的東西換掉
  for (i = 0; i < shoplist.list.length; i++) {
    let item = shoplist.list[i];
    let item_id = "buyitem_" + i;
    let del_item_id = "del_buyitem_" + i;
    total_price += parseInt(item.price);
    console.log(total_price);
    let current_item_html = item_html
      .replace("{{num}}", i + 1)
      .replace("{{item}}", item.name)
      .replace("{{id}}", item_id)
      .replace("{{del_id}}", del_item_id)
      .replace("{{price}}", item.price)
      .replace("{{delid}}", i);

    $("#items_list").append(current_item_html);
    // delbtn id buyitem_1
    $("#" + del_item_id).click(function () {
      remove_item($(this).attr("data-del-id"));
    });
  }

  // 算總價的部分用replace替換掉內容
  let current_total_html = total_html.replace("{{price}}", total_price);
  $("#items_list").append(current_total_html);
}

showlist();
// 新增商品進來，click事件觸發function
$(".addbtn").click(function () {
  shoplist.list.push({
    name: $("#input_name").val(),
    price: $("#input_price").val(),
  });
  $("#input_name").val("");
  $("#input_price").val("");
  showlist();
});

function remove_item(id) {
  shoplist.list.splice(id, 1);
  showlist();
}
