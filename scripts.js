//functions for math operations

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
const clickedValues = [];
let buttons = document.querySelectorAll(".buttonContainer");
let displayPanel = document.querySelector(".display");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        clickedValues.push(event.target.textContent);
        displayPanel.textContent = clickedValues.join("");
    });
});
 