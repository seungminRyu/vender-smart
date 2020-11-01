const $menuBtn = document.querySelector(".nav__menu-btn");
const $menu = document.querySelector(".nav-right")


$menuBtn.addEventListener("click", () => {
    $menu.classList.toggle("menu-active");
});
