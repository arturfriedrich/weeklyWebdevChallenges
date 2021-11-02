// Tasks: 

// - write the JS so that the word count appears on the screen
// - update the count as the user types

// Bonus Tasks:

// - display the longest word
// - add spell check
// - add character count

const textareaEl = document.getElementById("txtid")
const countEl = document.getElementById("count")
const charCountEl = document.getElementById("char-count")
const longestWordEL = document.getElementById("longest-word")

textareaEl.addEventListener("keydown", function() {
    countEl.textContent = textareaEl.value.split(" ").length
    charCountEl.textContent = textareaEl.value.split("").length
    let words = textareaEl.value.split(" ")
    let longestWord = ""
    if (words[words.length - 1].length > longestWord.length && words[words.length - 1] !== " ") {
        longestWord = words[words.length - 1]
        console.log(longestWord)
    }
})