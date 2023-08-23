function setUserName(userName) {
    const userNameSpan = document.getElementById("userName");
    userNameSpan.innerText = userName;
}

fetch("api/test")
    .then(res => res.text())
    .then(obj => setUserName(obj))

let tg = window.Telegram.WebApp;
tg.expand();