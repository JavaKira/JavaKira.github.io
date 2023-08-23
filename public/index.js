function setUserName(userName) {
    const userNameSpan = document.getElementById("userName");
    userNameSpan.innerText = userName;
}

fetch("api/test")
    .then(res => setUserName(response.text()))

let tg = window.Telegram.WebApp;
tg.expand();