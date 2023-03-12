const leftButton = document.querySelector(".left-button")
const rightButton = document.querySelector(".right-button")
const images = document.querySelectorAll("img")
const nbrImg = images.length
let activeEl = 0;

function rightClick() {
    if (activeEl < nbrImg - 1) {
        images[activeEl].classList.remove("active")
        images[activeEl + 1].classList.add("active")
        activeEl++
    } else {
        images[activeEl].classList.remove("active")
        activeEl = 0;
        images[activeEl].classList.add("active")
    }
}

function leftClick() {
    if (activeEl > 0) {
        images[activeEl].classList.remove("active")
        images[activeEl - 1].classList.add("active")
        activeEl--
    } else {
        images[activeEl].classList.remove("active")
        activeEl = nbrImg - 1;
        images[activeEl].classList.add("active")
    }
}

rightButton.addEventListener("click", rightClick)
leftButton.addEventListener("click", leftClick)