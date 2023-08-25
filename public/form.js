let tg = window.Telegram.WebApp;
tg.expand();
tg.BackButton.show();
tg.BackButton.onClick(() => {
    window.history.go(-1);
});

const avatarImg = document.getElementById("avatar");
const profileTitleText = document.getElementById("profileTitle");
const profileDescriptionText = document.getElementById("profileDescription");
const ongoingExecuteOrdersText = document.getElementById("ongoingExecuteOrders");
const executedOrdersText = document.getElementById("executedOrders");

function setForm(avatarUrl,
                    title,
                    description,
                    ongoingOrders,
                    executedOrders) {
    avatarImg.src = avatarUrl;
    profileTitleText.innerText = title;
    profileDescriptionText.innerText = description;
    ongoingExecuteOrdersText.innerText = ongoingOrders;
    executedOrdersText.innerText = executedOrders;
}

function setUser(user, photoLink) {
    setForm(
        photoLink,
        user.tg_full_name + ", " + user.age + ", " + user.city,
            user.prof_about,
            0,
        0
        )
}

fetch("api/user/" + tg.initDataUnsafe.user.id)
    .then(res => {
        if (res.status === 200) {
            res.json().then(user => {
                fetch("api/photo/" + user.prof_photo_id).then(photoLink => {
                    setUser(user, photoLink);
                })
            })
        }
    });