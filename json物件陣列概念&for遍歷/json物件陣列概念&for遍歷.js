var menu = [];

// menu[0] = "東坡肉炒飯";
// menu[1] = "蔥爆羊肉";
// menu[2] = "花式炒鮭魚";

menu = ["東坡肉炒飯", "蔥爆羊肉", "花式炒鮭魚"];

menu.push("新疆烤山豬");

// 用.html會把內容替換掉，但用append就不會
$("#menu").html("<li>" + menu[0] + "</li>");
// $("#menu").append("<li>" + menu[0] + "</li>");
// $("#menu").append("<li>" + menu[1] + "</li>");
// $("#menu").append("<li>" + menu[2] + "</li>");
// $("#menu").append("<li>" + menu[3] + "</li>");

for (i = 0; i < menu.length; i++) {
  console.log("menu[]", i);
  $("#menu").append("<li>" + menu[i] + "</li>");
  $("#menu").css("background-color", "pink");
}

// shop = {};
// shop.name = "阿東熱炒";
// shop.addr = "台北市宵夜路";
// shop.phone = "02 12345678";

shop = {
  name: "阿東熱炒",
  addr: "台北市宵夜路",
  phone: "02 12345678",
  menu: ["東坡肉炒飯", "蔥爆羊肉", "花式炒鮭魚"],
};

shop.menu.push("新疆炒羊肉");
console.log(shop);

$("#shop").append("<li>商店名稱:" + shop.name + "</li>");
$("#shop").append("<li>商店地址:" + shop.addr + "</li>");
$("#shop").append("<li>商店電話:" + shop.phone + "</li>");

var menu_html = "";
menu_html += "<ul>";
for (var i = 0; i < shop.menu.length; i++) {
  menu_html += "<li>" + shop.menu[i] + "</li>";
}
menu_html += "</ul>";
$("#shop").append("<li>品項及菜單:" + menu_html + "</li>");
