const $scrollBtn = document.querySelector(".scroll-btn");
const $totalSection = document.querySelector(".main-total-section");
const $sectionList = document.querySelectorAll(".main-section");

const ITEM_NUM = $sectionList.length;
const HEIGHT = screen.availHeight;
const TOTAL_HEIGHT = HEIGHT * ITEM_NUM;
const SPEED = 600;

let curIndex = 0;

$scrollBtn.addEventListener("click", () => {
    if (curIndex < ITEM_NUM - 1 ) {
        console.log("clicked")
        $totalSection.style.transition = `${SPEED}ms`;
        $totalSection.style.transform = `translate3d(0px, -${HEIGHT * (curIndex + 1)}px, 0px)`;
    }
    curIndex++;
});
