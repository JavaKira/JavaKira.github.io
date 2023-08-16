const avatarImg = document.getElementById("avatar");
const profileTitleText = document.getElementById("profileTitle");
const profileDescriptionText = document.getElementById("profileDescription");
const ongoingFulfillOrdersText = document.getElementById("ongoingFulfillOrders");
const ongoingExecuteOrdersText = document.getElementById("ongoingExecuteOrders");
const executedOrdersText = document.getElementById("executedOrders");
const balanceText = document.getElementById("balance");
const frozenBalanceText = document.getElementById("frozenBalance");

function setProfile(avatarUrl,
                    title,
                    description,
                    ongoingFulfillOrders,
                    ongoingExecuteOrders,
                    executedOrders,
                    balance,
                    frozenBalance) {
    avatarImg.src = avatarUrl;
    profileTitleText.innerText = title;
    profileDescriptionText.innerText = description;
    ongoingFulfillOrdersText.innerText = ongoingFulfillOrders;
    ongoingExecuteOrdersText.innerText = ongoingExecuteOrders;
    executedOrdersText.innerText = executedOrders;
    balanceText.innerText = balance;
    frozenBalanceText.innerText = frozenBalance;
}

setProfile(
    "https://yt3.googleusercontent.com/ytc/AGIKgqNVH4fYdH6c-pMZ-sUSCRsOmAeKe7S4Xx6bvW22=s900-c-k-c0x00ffffff-no-rj",
    "Имя профиля, 18 лет",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Tincidunt ornare massa eget egestas. Nisi lacus sed viverra tellus in. Odio eu feugiat pretium nibh ipsum consequat.",
    "1",
    "0",
    "0",
    "100",
    "0"
)

let tg = window.Telegram.WebApp;
tg.expand();
tg.BackButton.show();
tg.BackButton.onClick(() => {
    window.history.go(-1);
    tg.BackButton.hide();
});