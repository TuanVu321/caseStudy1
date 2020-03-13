function showList(bookList) {
    let html = '';
    for (let id = 0; id < bookList.length; id++) {
        html = html + '<tr>';
        html = html + '<td width="50px">';
        html = html + (id + 1);
        html = html + '</td>';
        html = html + "<td id=\"name" + (id) + "\">";
        html = html + bookList[id].getName();
        html = html + '</td>';
        html = html + "<td id=\"code" + (id) + "\">";
        html = html + bookList[id].getBook_code();
        html = html + '</td>';
        html = html + "<td id=\"type" + (id) + "\">";
        html = html + bookList[id].getType();
        html = html + '</td>';
        html = html + "<td id=\"number" + (id) + "\">";
        html = html + bookList[id].getNumber();
        html = html + '</td>';
        html = html + "<td id=\"write" + (id) + "\">";
        html = html + bookList[id].getBook_writing();
        html = html + '</td>';
        html = html + '<td>';
        html = html + "<button id =\"delete" + id + "\"  onclick=\"delete1(this.id.substring(this.id.length -1))\" >Delete</button>";
        html = html + '</td>';
        html = html + '<td>';
        html = html + "<button id =\"edit" + id + "\"  onclick=\"edit(this.id.substring(this.id.length -1))\">Edit</button>";
        html = html + '</td>';
        html = html + '<td>';
        html = html + "<button id =\"save" + id + "\"  onclick=\"save(this.id.substring(this.id.length -1))\">Save</button>";
        html = html + '</td>';
        html = html + '</tr>';
    }
    document.getElementById('table').innerHTML = html;
}

showList(bookList);


function delete1(id) {
    let r = confirm('Ban co muon xoa hay khong?');
    if (r == true) {
        bookList.splice(id, 1);
    }
    showList(bookList);
}

function edit(id) {
    toggle(id)

}

function save(id) {
    if (confirm("Bạn có muốn lưu?")) {
        changeToggle(id);
        localStorage.setItem("list",JSON.stringify(bookList));
    } else {
        toggle(id);
    }

}


function toggle(id) {
    document.getElementById("name" + id).innerHTML = "<td><input id=\"name-toggle" + id + "\" value=\"" + bookList[id].name + "\"/></td>";
    document.getElementById("code" + id).innerHTML = "<td><input id=\"code-toggle" + id + "\" value=\"" + bookList[id].book_code + "\"/></td>";
    document.getElementById("type" + id).innerHTML = "<td><input id=\"type-toggle" + id + "\" value=\"" + bookList[id].type + "\"/></td>";
    document.getElementById("number" + id).innerHTML = "<td><input type='number' id=\"number-toggle" + id + "\" value=\"" + bookList[id].number + "\"/></td>";
    document.getElementById("write" + id).innerHTML = "<td><input id=\"write-toggle" + id + "\" value=\"" + bookList[id].book_writing + "\"/></td>";

}


function changeToggle(id) {
    let nameToggle = document.getElementById("name-toggle" + id),
        book_codeToggle = document.getElementById("code-toggle" + id),
        typeToggle = document.getElementById("type-toggle" + id),
        numberToggle = document.getElementById("number-toggle" + id),
        book_writingToggle = document.getElementById("write-toggle" + id);

    bookList[id].name = nameToggle.value;
    bookList[id].book_code = book_codeToggle.value;
    bookList[id].type = typeToggle.value;
    bookList[id].number = numberToggle.value;
    bookList[id].book_writing = book_writingToggle.value;

    nameToggle.parentNode.innerHTML = "<td id=\"name" + id + "\">" + nameToggle.value + "</td>";
    book_codeToggle.parentNode.innerHTML = "<td id=\"code" + id + "\">" + book_codeToggle.value + "</td>";
    typeToggle.parentNode.innerHTML = "<td id=\"type" + id + "\">" + typeToggle.value + "</td>";
    numberToggle.parentNode.innerHTML = "<td id=\"number" + id + "\">" + numberToggle.value + "</td>";
    book_writingToggle.parentNode.innerHTML = "<td id=\"write" + id + "\">" + book_writingToggle.value + "</td>";

}


function add(name, book_code, number, book_writing, type) {
    let nameInput = document.getElementById('name-input').value,
        codeInput = document.getElementById('code-input').value,
        numberInput = document.getElementById('number-input').value,
        writeInput = document.getElementById('write-input').value,
        typeInput = document.getElementById('type-input').value;

    let book = new Book(nameInput, codeInput, numberInput, writeInput, typeInput);
    bookList.push(book);
    showList(bookList);
   localStorage.setItem("list",JSON.stringify(bookList));
    nameInput = "";
    codeInput = "";
    numberInput = "";
    writeInput = "";
    typeInput = "";

}


function search(name) {
    let html = "";
    for (let id = 0; id < bookList.length; id++) {
        if (bookList[id].name.includes(name)) {
            html = html + '<tr>';
            html = html + '<td width="50px">';
            html = html + (id + 1);
            html = html + '</td>';
            html = html + "<td id=\"name" + (id) + "\">";
            html = html + bookList[id].getName();
            html = html + '</td>';
            html = html + "<td id=\"code" + (id) + "\">";
            html = html + bookList[id].getBook_code();
            html = html + '</td>';
            html = html + "<td id=\"type" + (id) + "\">";
            html = html + bookList[id].getType();
            html = html + '</td>';
            html = html + "<td id=\"number" + (id) + "\">";
            html = html + bookList[id].getNumber();
            html = html + '</td>';
            html = html + "<td id=\"write" + (id) + "\">";
            html = html + bookList[id].getBook_writing();
            html = html + '</td>';
            html = html + '<td>';
            html = html + "<button id =\"delete" + id + "\"  onclick=\"delete1(this.id.substring(this.id.length -1))\" >Delete</button>";
            html = html + '</td>';
            html = html + '<td>';
            html = html + "<button id =\"edit" + id + "\"  onclick=\"edit(this.id.substring(this.id.length -1))\">Edit</button>";
            html = html + '</td>';
            html = html + '<td>';
            html = html + "<button id =\"save" + id + "\"  onclick=\"save(this.id.substring(this.id.length -1))\">Save</button>";
            html = html + '</td>';
            html = html + '</tr>';
        }

    }
    document.getElementById('table').innerHTML = html;
}


function searchBook() {
    let bookName = document.getElementById('search').value;
    search(bookName);
}

document.getElementById('search').addEventListener('keypress', function () {
    search(document.getElementById('search').value)
}, false);


function exit() {
    window.location.assign("login.html");
}

function change() {
    window.location.assign("front-end.html");
}