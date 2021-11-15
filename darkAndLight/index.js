// ✨ You got this!

const toggler = document.getElementById("toggle")
const header = document.getElementById("header")
const h1 = document.getElementById("h1")
const cardBackground = document.getElementsByClassName("post")
const button = document.getElementById("btn")

let counter = 0
toggler.addEventListener("click", function() {
    header.classList.toggle("dark")
    let i = 0
    for (i = 0; i < cardBackground.length; i++) {
        cardBackground[i].classList.toggle("dark")
    }
    counter += 1
    if (counter === 10) {
        header.classList.add("custom")
        let i = 0
        for (i = 0; i < cardBackground.length; i++) {
            cardBackground[i].classList.add("custom")
        }
    }
})


