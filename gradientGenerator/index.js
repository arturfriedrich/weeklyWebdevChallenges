// Task: Write a function to:
// - Generate a gradient using the colors from the pickers and split percentage from the slider. 
// - Use the gradient as the form background.

// Stretch goals:
// - Add more colors.
// - Add a 'Surprise Me' button which generates random gradients (and updates the inputs).
// - Check for contrast between the gradient and the text.

// importing the components
const picker_1 = document.getElementById("picker-1")
const picker_2 = document.getElementById("picker-2")
const picker_3 = document.getElementById("picker-3")
const splitter = document.getElementById("split")
const inputForm = document.getElementById("gradient")
const surpriseBtn = document.getElementById("random")

// changing the gardient to the input values
function changeGradient() {
    let inputGrad = `linear-gradient(90deg, ${picker_1.value} ${splitter.value - 100}%, ${picker_2.value} ${splitter.value}%, ${picker_3.value} 100%)`
    document.body.style.backgroundImage = inputGrad
    inputForm.style.backgroundImage = inputGrad
}

picker_1.addEventListener("input", changeGradient)
picker_2.addEventListener("input", changeGradient)
splitter.addEventListener("input", changeGradient)



// generate random gradient
function randomGradient() {
    let randNum = Math.floor(Math.random() * 1)
    let randGrad = `linear-gradient(90deg, ${'#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')} ${randNum - 100}%, ${'#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')} ${randNum}%, ${'#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')} 100%)`
    document.body.style.backgroundImage = randGrad
    inputForm.style.backgroundImage = randGrad
}

surpriseBtn.addEventListener("click", randomGradient())