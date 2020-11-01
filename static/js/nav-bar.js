const $navBar = document.querySelector(".nav-container");
const $navMenuBtn = document.querySelector(".nav__menu-btn");

let curPoint = 0
const mainEndPoint = window.innerHeight;

window.addEventListener("scroll", (e) => {
    curPoint = window.scrollY;
    if (curPoint-mainEndPoint > 0) {
        $navBar.classList.add("nav--alt");
        $navMenuBtn.classList.add("menu-btn--alt");
    } else {
        $navBar.classList.remove("nav--alt");     
        $navMenuBtn.classList.remove("menu-btn--alt");
    }
});