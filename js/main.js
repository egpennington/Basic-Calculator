let num1
let num2
let sumCheck
let number1El = document.getElementById("number1-el")
let number2El = document.getElementById("number2-el")
document.getElementById("number2-el").textContent
let reload = document.getElementById("reload-el")
let start = document.getElementById("start-el")

const addition = document.getElementById("addition-el")
const subtraction = document.getElementById("subtraction-el")
const division = document.getElementById("division-el")
const multiplication = document.getElementById("multiplication-el")
const total = document.getElementById("total-el")
const message = document.getElementById("message-el")
const message2 = document.getElementById("message2-el")

start.addEventListener("click", function() {
    num1 = prompt("Enter a debit")
    num2 = prompt("Enter credit")
    number1El.textContent = "Credit: " + num1
    number2El.textContent = "Debit: " + num2
    let sumCheck = num1 - num2

    if (sumCheck == 0) {
        message2.textContent = "Debit and Credit balance"
    } else if (sumCheck % 9 === 0 && sumCheck % 2 === 0) {
        message.textContent = "Possible error: due to transposition, or credit/debit posted backwards"
     } else if (sumCheck % 9 === 0) {
        message.textContent = "Possible error: due to transposition"
     } else if (sumCheck % 2 === 0) {
        message.textContent = "Possible error: credit/debit posted backwards"
     } else {
        message2.textContent = "No error detected"
     }
})


addition.addEventListener("click", function() {
    let result = +num1 + +num2
    total.textContent = "Sum: " + result
})

subtraction.addEventListener("click", function() {
    let result = num1 - num2
    total.textContent = "Sum: " + result
})

division.addEventListener("click", function() {
    let result = num1 / num2
    let n = result.toFixed(2)
    total.textContent = "Sum: " + n
})

multiplication.addEventListener("click", function() {
    let result = num1 * num2
    total.textContent = "Sum: " + result
})

reload.addEventListener("dblclick", function() {
    window.location.reload()
})