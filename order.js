const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
document.getElementById("orderTitle").innerText = id;

let tg = window.Telegram.WebApp;
tg.expand();
tg.BackButton.show();
tg.BackButton.onClick(() => {
    window.history.go(-1);
});