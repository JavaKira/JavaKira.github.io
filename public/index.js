function setUserName(userName) {
    const userNameSpan = document.getElementById("userName");
    userNameSpan.innerText = userName;
}

let tg = window.Telegram.WebApp;
tg.expand();

setUserName(tg.initDataUnsafe.user.id);

fetch("api/user/" + tg.initDataUnsafe.user.id)
    .then(res => res.json())
    .then(json => setUserName(json.text))
