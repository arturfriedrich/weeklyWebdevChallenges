// You got this! 💫

// 💻 Work: 25 mins
// ☕️ Short break: 5 mins
// 🌯 Long break: 15 mins

// get the components
const timeDisplay = document.getElementById("time-display")
const workBtn = document.getElementById("work-btn")
const shortBreakBtn = document.getElementById("short-break-btn")
const longBreakBtn = document.getElementById("long-break-btn")
const giveUpBtn = document.getElementById("give-up-btn")

// setting default values
let workDuration = 1500
let shortbrakeDuration = 300
let longbrakeDuration = 900
let isClockRunning = false
const timer = undefined
let stop = false

// start function
function start(button, duration) {
    stop = false
    isClockRunning = true
    // settint an interval that updates the timer every second
    var timer = setInterval(() => {
        timeDisplay.textContent = 
            (Math.floor(duration / 60)) + ":" + updateTime(duration % 60)
        duration--
        
        // if the clock hits 0 it gets turned off
        if ((duration % 60) + 1 === 0) {
            clearInterval(timer)
            zero()
        }

        // if the user uses the give up button the clock stops
        if (stop) {
            clearInterval(timer)
            zero()
        }
    }, 1000)
}

// event listeners to the buttons
workBtn.addEventListener("click", () => {
    start(workBtn, workDuration)
})

shortBreakBtn.addEventListener("click", () => {
    start(shortBreakBtn, shortbrakeDuration)
})

longBreakBtn.addEventListener("click", () => {
    start(longBreakBtn, longbrakeDuration) 
})

giveUpBtn.addEventListener("click", () => {
    stop = true
    clearInterval(timer)
    zero()
})

// disable the buttons while the clock is running
const running = setInterval(() => {
    if (isClockRunning) {
        workBtn.disabled = true
        shortBreakBtn.disabled = true
        longBreakBtn.disabled = true
    }
}, 1000)

// set back to the default state
function zero() {
    isClockRunning = false
    workBtn.disabled = false
    shortBreakBtn.disabled = false
    longBreakBtn.disabled = false
    timeDisplay.textContent = "0:00"
    console.log(stop)
}

// make the clock display prettier
function updateTime(k) { 
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}
