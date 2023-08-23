function setUserName(userName) {
    const userNameSpan = document.getElementById("userName");
    userNameSpan.innerText = userName;
}

fetch("api/test")
    .then(res => res.json())
    .then(json => setUserName(json.text))

let tg = window.Telegram.WebApp;
tg.expand();