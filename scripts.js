//functions for math operations

let firstNumber = 2;
let SecondNumber = 4;
let operator;


//add
function add(firstNumber, SecondNumber) {
    let additionResult = firstNumber + SecondNumber;
    console.log(additionResult);
}

//subtract
function subtract(firstNumber, SecondNumber) {
    let subtractResult = firstNumber - SecondNumber;
    console.log(subtractResult);
}

//multiply
function multiply(firstNumber, SecondNumber) {
    let multiplyResult = firstNumber * SecondNumber;
    console.log(multiplyResult);
}

//divide
function divide(firstNumber, SecondNumber) {
    let divisionResult = firstNumber / SecondNumber;
    console.log(divisionResult);
}

//operate
function operate(operator, firstNumber, SecondNumber) {
    add(firstNumber, SecondNumber);
}

//display screen
let displayValue;
let buttons = document.querySelector(".buttonContainer");
let displayPanel = document.querySelector(".display");

buttons.addEventListener("click", function displayScreen() {
    firstNumber = event.target.textContent;
    displayValue = firstNumber;
    displayPanel.textContent = displayValue;
});

let operands = document.querySelector("operands");
operands.addEventListener("click", function displayScreen() {
    let selectedOperand = event.target.textContent;
    displayValue = firstNumber + selectedOperand;
    displayPanel.textContent = displayValue;
})

buttons.addEventListener("click", function displayScreen() {
    let SecondNumber = event.target.textContent;
    displayValue = firstNumber + selectedOperand + SecondNumber;
    displayPanel.textContent = displayValue;
})

function displayScreen() {
    displayValue = 
    displayPanel.textContent = displayValue;
}







