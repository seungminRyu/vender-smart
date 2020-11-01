const $mukathonSpan = document.querySelector(".mukathon");
const $mukathonP = document.querySelector(".mukathon-description");

$mukathonSpan.addEventListener("click", () => {
    $mukathonSpan.style.animationPlayState = "running";
    $mukathonP.style.animationPlayState = "running";
});