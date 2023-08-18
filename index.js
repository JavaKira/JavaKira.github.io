import * as users from "db/users.js";

function setUserName(userName) {
    const userNameSpan = document.getElementById("userName");
    userNameSpan.innerText = userName;
}

let tg = window.Telegram.WebApp;
setUserName(tg.initDataUnsafe.user.first_name)
tg.expand();