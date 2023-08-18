import * as users from "db/users"

function setUserName(userName) {
    const userNameSpan = document.getElementById("userName");
    userNameSpan.innerText = userName;
}

let tg = window.Telegram.WebApp;
setUserName(users.test());
tg.expand();