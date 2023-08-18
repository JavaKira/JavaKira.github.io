let tg = window.Telegram.WebApp;
const userNameSpan = document.getElementById("userName");
userNameSpan.innerText = tg.initDataUnsafe.user.first_name;
tg.expand();
tg.BackButton.show();
tg.BackButton.onClick(() => {
    window.history.go(-1);
});