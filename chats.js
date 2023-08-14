function addChat(id, avatarUrl, title, lastMessage) {
    let ordersList = document.getElementById("chatsList");
    ordersList.innerHTML +=
        `<div class="bg" onclick="openChat(` + id + `)">
            <div class="container2">
                <div class="el">
                    <img class="avatarSmall" src="https://yt3.googleusercontent.com/ytc/AGIKgqNVH4fYdH6c-pMZ-sUSCRsOmAeKe7S4Xx6bvW22=s900-c-k-c0x00ffffff-no-rj" alt="">
                </div>
                <div class="el">
                    <h3 class="text">` + title + `</h3>
                    <p class="hint" >` + lastMessage + `</p>
                </div>
            </div>
        </div>`;
}

function openChat(id) {
    window.open("/chat?id=" + id, "_self")
}

addChat(1, "","Название чата 1", "elit ut aliquam purus sit")

let tg = window.Telegram.WebApp;
tg.expand();
tg.BackButton.show();
tg.BackButton.onClick(() => {
    window.history.go(-1);
    tg.BackButton.hide();
});