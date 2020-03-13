function display(bookList) {
    let html = "";
    for (let id = 0; id < bookList.length; id++) {

        html = html + "<table class=\"out-put1\">";
        html = html + "<tr>";
        html = html + "<td rowspan='5' style='width: 284px'>";
        html = html + "<img src='image/sach.jpg'>";
        html = html + "</td>";
        html = html + "<td>";
        html = html + "Tên sách: " + bookList[id].name;
        html = html + "</td>";
        html = html + "</tr>";
        html = html + "<tr>";
        html = html + "<td>";
        html = html + "Tác giả: " + bookList[id].book_writing;
        html = html + "</td>";
        html = html + "</tr>";
        html = html + "<tr>";
        html = html + "<td>";
        html = html + "Thể loại: " + bookList[id].type;
        html = html + "</td>";
        html = html + "</tr>";
        html = html + "<tr>";
        html = html + "<td>";
        html = html + "Số lượng: " + bookList[id].number;
        html = html + "</td>";
        html = html + "</tr>";
        html = html + "<tr>";
        html = html + "<td>";
        html = html + "Mã sách: " + bookList[id].book_code;
        html = html + "</td>";
        html = html + "</tr>";
        html = html + "<table>";
        html = html + "<button id =\"buy" + id + "\"  onclick=\"buy(this.id.substring(this.id.length -1))\" >Mua sách</button>";
    }
    document.getElementById('front-end-table').innerHTML = html;
}
let list = JSON.parse(localStorage.getItem("list"));


display(list);



let  order =[];

function buy(a) {
    if(confirm("Bạn có đồng ý mua quyển sách này?")){
    order.push(a);
    localStorage.setItem("order",JSON.stringify(order));
    window.location.assign("buy-book.html")
  }

}


