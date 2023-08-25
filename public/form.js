let tg = window.Telegram.WebApp;
tg.expand();
tg.BackButton.show();
tg.BackButton.onClick(() => {
    window.history.go(-1);
});

const avatarImg = document.getElementById("avatar");
const profileTitleText = document.getElementById("profileTitle");
const profileDescriptionText = document.getElementById("profileDescription");
const ongoingFulfillOrdersText = document.getElementById("ongoingFulfillOrders");
const ongoingExecuteOrdersText = document.getElementById("ongoingExecuteOrders");
const executedOrdersText = document.getElementById("executedOrders");
const balanceText = document.getElementById("balance");
const frozenBalanceText = document.getElementById("frozenBalance");

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

function setUser(user) {
    setForm(
        "https://yt3.googleusercontent.com/ytc/AGIKgqNVH4fYdH6c-pMZ-sUSCRsOmAeKe7S4Xx6bvW22=s900-c-k-c0x00ffffff-no-rj",
        user.tg_full_name + ", " + user.age + ", " + user.city,
            user.prof_about,
            0,
        0
        )
}

fetch("api/user/" + tg.initDataUnsafe.user.id)
    .then(res => {
        if (res.status === 200)
            return res.json().then(json => setUser(json))
    });