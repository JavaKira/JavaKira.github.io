const container = document.getElementById("container");
const tg = window.Telegram.WebApp;

tg.expand();
tg.BackButton.show();
tg.BackButton.onClick(() => {
    window.history.go(-1);
});


function insertService(service) {
    container.insertAdjacentHTML("beforeend",
        `<div class="bg" onclick="redirect2ServicePage('${service.service_name}')">
                                <h3 class="text">${service.service_name}</h3>
                                <p class="hint">${service.service_descript}</p>
                              </div>
                              <br>`
    )
}

function redirect2ServicePage(service_name) {
    window.open(`/freelancer/tasks/${service_name}`, "_self");
}

fetch("/api/services")
    .then(res => {
        if (res.status === 200)
            res.json().then(json => {
                for (let i = 0; i < json.length; i++) {
                    insertService(json[i]);
                }
            });
    });