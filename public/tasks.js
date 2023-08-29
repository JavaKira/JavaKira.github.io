const serviceHint = document.getElementById("service");
const container = document.getElementById("container");
const tg = window.Telegram.WebApp;

tg.expand();
tg.BackButton.show();
tg.BackButton.onClick(() => {
    window.history.go(-1);
});

function insertTasks(task) {
    container.insertAdjacentHTML("beforeend",
        `<div class="bg">
                                <h3 class="text">${service.service_name}</h3>
                                <p class="hint">${service.service_descript}</p>
                              </div>
                              <br>`
    )
}