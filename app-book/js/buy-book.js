let dataOrder = JSON.parse(localStorage.getItem("order"));
let list = JSON.parse(localStorage.getItem("list"));
let a = dataOrder[0];

function display(bookList) {
    let html = "";
    html = html + "<table>";
    html = html + "<tr>";
    html = html + "<td>";
    html = html + "Tên sách: ";
    html = html + "</td>";
    html = html + "<td>";
    html = html + bookList[a].name;
    html = html + "</td>";
    html = html + "</tr>";
    html = html + "<tr>";
    html = html + "<td>";
    html = html + "Tác giả: ";
    html = html + "</td>";
    html = html + "<td>";
    html = html + bookList[a].book_writing;
    html = html + "</td>";
    html = html + "</tr>";
    html = html + "<tr>";
    html = html + "<td>";
    html = html + "Thể loại: ";
    html = html + "</td>";
    html = html + "<td>";
    html = html + bookList[a].type;
    html = html + "</td>";
    html = html + "</tr>";
    html = html + "<tr>";
    html = html + "<td>";
    html = html + "Số lượng: ";
    html = html + "</td>";
    html = html + "<td>";
    html = html + bookList[a].number;
    html = html + "</td>";
    html = html + "</tr>";
    html = html + "<tr>";
    html = html + "<td>";
    html = html + "Mã sách: ";
    html = html + "</td>";
    html = html + "<td>";
    html = html + bookList[a].book_code;
    html = html + "</td>";
    html = html + "</tr>";
    html = html + "<tr>";
    html = html + "<td>";
    html = html + "Địa chỉ giao sách ";
    html = html + "</td>";
    html = html + "<td>";
    html = html + "<input type='text'>";
    html = html + "</td>";
    html = html + "</tr>";
    html = html + "<tr>";
    html = html + "<td>";
    html = html + "Số lượng muốn mua: ";
    html = html + "</td>";
    html = html + "<td>";
    html = html + "<input id=\"number-buy\" type='number'>";
    html = html + "</td>";
    html = html + "</tr>";
    html = html + "<table>";
    html = html + "<button id =\"order" + a + "\"  onclick=\"finish(this.id.substring(this.id.length -1))\" >Mua sách</button>";


    document.getElementById('buy-table').innerHTML = html;
}


display(list);

function changeNumber(id, a) {
        list[id].number -= a;
    localStorage.setItem("list", JSON.stringify(list));


}

function finish(id) {
    let a = document.getElementById('number-buy').value;
    if(a==""){
        alert("Bạn chưa nhập số lượng sách!")
    }else{
        if (list[id].number >= a) {
            changeNumber(id, a);
            alert("Đã đặt hàng xong");
            order = [];
            localStorage.setItem("order", JSON.stringify(order));
            window.location.assign("front-end.html")
        } else {
            alert('Số sách bạn mua vượt quá số lượng chúng tôi có');
        }
    }


}