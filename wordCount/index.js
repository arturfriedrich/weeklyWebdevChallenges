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
    var longestWord = "";
    for(let i = 0; i < words.length; i++){
        if(words[i].length > longestWord.length){
        longestWord = words[i];
        }
    }
    longestWordEL.textContent = longestWord
    if (textareaEl.value === "") {
        countEl.textContent = ""
        charCountEl.textContent = ""
        longestWordEL.textContent = ""
    }
})