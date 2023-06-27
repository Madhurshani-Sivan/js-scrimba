let num1 = 8
let num2 = 2

let num1El = document.getElementById("num1-el")
let num2El = document.getElementById("num2-el")
let sumEl = document.getElementById("sum-el")

num1El.textContent = num1
num2El.textContent = num2

function add() {
  let sum = num1 + num2
  sumEl.textContent = "Sum: " + sum
}

function subtract() {
  let sum = num1 - num2
  sumEl.textContent = "Sum: " + sum
}

function divide() {
  let sum = num1 / num2
  sumEl.textContent = "Sum: " + sum
}

function multiply() {
  let sum = num1 * num2
  sumEl.textContent = "Sum: " + sum
}