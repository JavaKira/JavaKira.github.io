const tg = window.Telegram.WebApp;
const avatarImg = document.getElementById("avatar");
const profileTitleText = document.getElementById("profileTitle");
const profileAgeHint = document.getElementById("profileAge");
const profileCityHint = document.getElementById("profileCity");
const profileDescriptionText = document.getElementById("profileDescription");
const ongoingExecuteOrdersText = document.getElementById("ongoingExecuteOrders");
const executedOrdersText = document.getElementById("executedOrders");
const userId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

tg.expand();
tg.BackButton.show();
tg.BackButton.onClick(() => {
    window.history.go(-1);
});

function setForm(avatarUrl,
                 title,
                 city,
                 age,
                 description,
                 ongoingOrders,
                 executedOrders) {
    avatarImg.src = avatarUrl;
    profileTitleText.innerText = title;
    profileAgeHint.innerText = age;
    profileCityHint.innerText = city;
    profileDescriptionText.innerText = description;
    ongoingExecuteOrdersText.innerText = ongoingOrders;
    executedOrdersText.innerText = executedOrders;
}

function setUser(user) {
    setForm(
        `api/file/${user.prof_photo_id}`,
        user.tg_full_name,
        user.city,
        user.age,
        user.prof_about,
        0,
        0
    )
}

fetch("api/user/" + userId)
    .then(res => {
        if (res.status === 200) {
            res.json().then(user => setUser(user))
        }
    });