// vars
let number = []
const resetBtn = document.getElementById("reset")
const phoneDisplay = document.getElementById("phone-display")
const numbersArea = document.querySelector(".numbers")
const sendBtn = document.querySelector("#send")

// event listeners
numbersArea.addEventListener("click", function() {
    number.push(event.target.id)
    let numberString = number.join("")
    phoneDisplay.innerHTML = `${numberString}` 
    }
)

resetBtn.addEventListener("click", function() {
    document.getElementById("phone-display").textContent = " "
    document.getElementById("pager-display").innerHTML = " "
    number = []
})

sendBtn.addEventListener("click", function() {
    let numberString = number.join("")
    document.getElementById("pager-display").innerHTML = `${numberString}`
})

//fxns
let playSound = () => new Audio("assets/pager.wav").play()
