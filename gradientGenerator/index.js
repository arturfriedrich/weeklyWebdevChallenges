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
const splitter = document.getElementById("split")
const button = document.getElementById("apply")

// getting the values from the components
function getValue(picker) {
    return picker.value
} 

picker_1.addEventListener("change", function() {
    var color1 = getValue(picker_1)
})

picker_2.addEventListener("change", function() {
    var color2 = getValue(picker_2)
})

splitter.addEventListener("change", function() {
    var splitting = getValue(splitter)
})

button.addEventListener("click", function() {
    console.log(color2)
    document.body.style.background = `linear-gradient(${splitter}, ${color1}, ${color2})`
})

