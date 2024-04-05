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
let buttons = document.querySelector(".buttonContainer");
buttons.addEventListener("click", function displayScreen() {
    let displayPanel = document.querySelector(".display");
    let buttonValue = event.target.textContent;
    displayPanel.textContent = buttonValue;
});

