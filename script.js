const burgerButton = document.querySelector(".burger");
const menuBlock = document.querySelector(".menu");
const closeButton = document.querySelector(".menu__button");

burgerButton.addEventListener("click", burgerButtonHandler);

function burgerButtonHandler() {
   menuBlock.classList.add("menu_show");
}

closeButton.addEventListener("click", closeButtonHandler);

function closeButtonHandler() {
   menuBlock.classList.remove("menu_show")
}
