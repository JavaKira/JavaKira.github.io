function addOrder(id, title, description) {
    let ordersList = document.getElementById("ordersList");
    ordersList.innerHTML +=
        `<div class="bg" onclick="openOrder(` + id + `)">
                <h3 class="text">` + title + `</h3>
                <p class="hint">` + description + `</p>
                </div>`
}

function openOrder(id) {
    window.open("/order?id=" + id, "_self")
}

addOrder(1, "Название заказа 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum lectus mauris. Et odio pellentesque diam volutpat commodo sed egestas egestas. Tristique magna sit amet purus gravida. Fermentum leo vel orci porta non pulvinar neque laoreet.")

let tg = window.Telegram.WebApp;
tg.expand();
tg.BackButton.show();
tg.BackButton.onClick(() => {
    window.history.go(-1);
    tg.BackButton.hide();
});