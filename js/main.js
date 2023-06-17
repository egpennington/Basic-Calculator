let num1 = prompt("Enter a number")
let num2 = prompt("Enter another number")
document.getElementById("number1-el").textContent = num1
document.getElementById("number2-el").textContent = num2

const addition = document.getElementById("addition-el")
const subtraction = document.getElementById("subtraction-el")
const division = document.getElementById("division-el")
const multiplication = document.getElementById("multiplication-el")
const total = document.getElementById("total-el")



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