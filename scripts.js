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
//first Value
const clickedValues = [];
let buttons = document.querySelectorAll(".buttonContainer");
let displayPanel = document.querySelector(".display");
let equalTo = document.querySelector(".equalButton");

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        let excludedElement = document.querySelector(".excludeMe")
        console.log(excludedElement.textContent);
        if(event.target !== excludedElement) {
            clickedValues.push(event.target.textContent);
            displayPanel.textContent = clickedValues.join("");
        }
    });
});

//operator and second value
let operator = document.querySelector(".operatorButtons");
let displayFirstPanel = document.querySelector(".displayFirstContainer");
let buttonsSecondValue = document.querySelectorAll("#buttonContainerForSecondValue");

operator.addEventListener("click", () =>{
    let selectedOperator = event.target.textContent;
    let displayForOperator = clickedValues.join("") + selectedOperator;
    displayFirstPanel.textContent = displayForOperator;

    clickedValues.splice(0, clickedValues.length);
    buttonsSecondValue.forEach(button => {
        button.addEventListener("click", (event) => {
            let excludedElement = document.querySelector(".excludeMe")
            if(event.target !== excludedElement) {
                clickedValues.push(event.target.textContent);
                displayPanel.textContent = clickedValues.join("");
            }
        });
    });

    equalTo.addEventListener("click", () => {
        displayFirstPanel.textContent = displayForOperator + clickedValues.join("") + event.target.textContent;
    })
});