let tg = window.Telegram.WebApp;
tg.expand();
tg.BackButton.show();
tg.BackButton.onClick(() => {
    window.history.go(-1);
});

function open() {
    window.open("https://t.me/TestNaProesd_bot/TestShortName", "_self")
}