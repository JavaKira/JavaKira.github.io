const serviceHint = document.getElementById("service");
const container = document.getElementById("container");
const tg = window.Telegram.WebApp;
const service = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

serviceHint.innerText = decodeURIComponent(service);

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
                                <button class="button" onclick="openForm('${task.id}')">Отозваться</button>
                                <br>
                                <button class="button" onclick="openProfile('${task.user_id}')">Профиль заказчика</button>
                              </div>
                              <br>`
    )
}

function openForm(id) {
    window.open(`/freelancer/taskForm/${id}`, "_self");
}

function openProfile(userId) {
    window.open(`/freelancer/profile/${userId}`, "_self");
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