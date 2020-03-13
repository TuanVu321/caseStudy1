

function check(username, password) {
    let count = 0;
    for (let i = 0; i < login.length; i++) {
        if (login[i].getUsername() == username && login[i].getPassword() == password) {
            count++
        }
    }
    if (count > 0) {
        window.location.assign("display.html");
    } else {
        alert('Sai mật khẩu hoặc tài khoản');
        window.location.reload();
    }
}

function login0() {
    let username = document.getElementById('input-username').value;
    let password = document.getElementById('input-password').value;
    if (username == "" || password == "") {
        alert('Bạn chưa điền tài khoản hoặc mật khẩu')
    } else {
        check(username, password);
    }

}