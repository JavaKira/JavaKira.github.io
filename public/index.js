let tg = window.Telegram.WebApp;
tg.expand();

function setUser(user) {
    setUserName(user.tg_full_name)
}

function setUserName(userName) {
    const userNameSpan = document.getElementById("userName");
    userNameSpan.innerText = userName;
}

function wrongUser() {
    tg.showAlert("Для пользования нашей биржей необходимо будет заполнить анкету. Вернитесь в бота и используйте /start", () => {
        tg.close();
    });
}

fetch("api/user/" + tg.initDataUnsafe.user.id)
    .then(res => {
        if (res.status === 200)
            return res.json().then(json => setUser(json))
        else
            wrongUser();
    });
