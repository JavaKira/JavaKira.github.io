const serviceHint = document.getElementById("service");
const container = document.getElementById("container");
const tg = window.Telegram.WebApp;
const service = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

serviceHint.innerText = service;

tg.expand();
tg.BackButton.show();
tg.BackButton.onClick(() => {
    window.history.go(-1);
});

function insertTasks(task) {
    container.insertAdjacentHTML("beforeend",
        `<div class="bg">
                                <h3 class="text">${task.name_task}</h3>
                                <p class="hint">${task.body_task}</p>
                                <p class="hint">Срок: ${task.time_task}</p>
                                <p class="hint">Вознаграждение: ${task.price_task}</p>
                                <button class="button">Отозваться</button>
                                <br>
                                <button class="button">Профиль заказчика</button>
                              </div>
                              <br>`
    )
}

fetch(`/api/tasks/${service}`)
    .then(res => {
        if (res.status === 200)
            res.json().then(json => {
                for (let i = 0; i < json.length; i++) {
                    insertTasks(json[i]);
                }
            });
    });