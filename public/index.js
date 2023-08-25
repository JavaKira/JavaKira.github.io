let tg = window.Telegram.WebApp;
tg.expand();

function setUserName(userName) {
    const userNameSpan = document.getElementById("userName");
    userNameSpan.innerText = userName;
}

function wrongUser() {
    tg.showPopup({
        title: "Ошибка",
        message: "Вы не зарегестрировали анкету!",
        buttons: [
            {
                text: "Вернуться в бота",
                type: "close"
            }
        ]
    });
}

fetch("api/user/" + tg.initDataUnsafe.user.id)
    .then(res => {
        if (res.status === 200)
            return res.json().then(json => setUserName(json.name))
        else
            wrongUser();
    });
