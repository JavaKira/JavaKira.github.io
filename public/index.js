function setUserName(userName) {
    const userNameSpan = document.getElementById("userName");
    userNameSpan.innerText = userName;
}

let tg = window.Telegram.WebApp;
tg.expand();

fetch("api/user/" + tg.initDataUnsafe.user.id)
    .then(res => res.json())
    .then(json => setUserName(json.name))
