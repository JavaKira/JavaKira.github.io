let tg = window.Telegram.WebApp;
tg.expand();
tg.BackButton.show();
tg.BackButton.onClick(() => {
    window.history.go(-1);
});

const container = document.getElementById("container");

fetch("/api/services")
    .then(res => {
        if (res.status === 200)
            res.json().then(json => {
                for (let i = 0; i < json.length; i++) {
                    container.insertAdjacentHTML("beforeend",
                        `<div class="bg">
                                <h3 class="text">${json[i].service_name}</h3>
                              </div>
                              <br>`
                    )
                }
            });
    });