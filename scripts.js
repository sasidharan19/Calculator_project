//functions for math operations

//add
function add(firstNumber, SecondNumber) {
    let additionResult = firstNumber + SecondNumber;
    return additionResult;
}

//subtract
function subtract(firstNumber, SecondNumber) {
    let subtractResult = firstNumber - SecondNumber;
    return subtractResult;
}

//multiply
function multiply(firstNumber, SecondNumber) {
    let multiplyResult = firstNumber * SecondNumber;
    return multiplyResult;
}

//divide
function divide(firstNumber, SecondNumber) {
    let divisionResult = firstNumber / SecondNumber;
    return divisionResult;
}

//operate
function operate(operator, firstNumber, secondNumber) {
    let result;

    if (operator === '+') {
        displayPanel.textContent = add(firstNumber, secondNumber);
    }
    else if (operator === '-') {
        displayPanel.textContent = subtract(firstNumber, secondNumber);
    }
    else if (operator === '×') {
        displayPanel.textContent = multiply(firstNumber, secondNumber);
    }
    else if (operator === '÷') {
        if (secondNumber === 0) {
            alert("Oops dividing by 0 will be infinity!!")
        } else {
            displayPanel.textContent = divide(firstNumber, secondNumber);
        }
    }
}

//display screen
//first Value
const clickedValues = [];
let buttons = document.querySelectorAll(".buttonContainer");
let displayPanel = document.querySelector(".display");
let equalTo = document.querySelector(".equalButton");
let temporary;

buttons.forEach(button => {
    temporary = 1;
    button.addEventListener("click", (event) => {
        if (temporary === 1) {
            let excludedElement = document.querySelector(".excludeMe");
            if(event.target !== excludedElement) {
                clickedValues.push(Number(event.target.textContent));
                displayPanel.textContent = clickedValues.join("");
                calculateFirstNumber();
            }    
        }

        if (temporary === 2) {
            excludedElement = document.querySelector(".excludeMe")
                if(event.target !== excludedElement) {
                    clickedValues.push(Number(event.target.textContent));
                    displayPanel.textContent = clickedValues.join("");
                    calculateSecondNumber();
                }           
        }
    });
});

let firstNumber;
let secondNumber;
function calculateFirstNumber() {
    if (clickedValues.length > 0) {
        let numberString = clickedValues.join("");
        firstNumber = parseInt(numberString);
    } 
}

//operator and second value
let operator = document.querySelector(".operatorButtons");
let displayFirstPanel = document.querySelector(".displayFirstContainer");
let buttonsSecondValue = document.querySelectorAll("#buttonContainerForSecondValue");
let displayForOperator;
let selectedOperator;
let operatorClickedTimes = 0;

operator.addEventListener("click", () =>{
    operatorClickedTimes++;
    if(operatorClickedTimes === 1){
        selectedOperator = event.target.textContent;
        displayForOperator = displayPanel.textContent + selectedOperator;
        displayFirstPanel.textContent = displayForOperator;
        temporary = 2;
        clickedValues.splice(0, clickedValues.length);
    }

    if(operatorClickedTimes > 1){
        operate(selectedOperator, firstNumber, secondNumber);
        selectedOperator = event.target.textContent;
        displayForOperator = displayPanel.textContent + selectedOperator;
        displayFirstPanel.textContent = displayPanel.textContent + selectedOperator;
        firstNumber = displayPanel.textContent;
        clickedValues.splice(0, clickedValues.length);
    }
});


function calculateSecondNumber() {
    if (clickedValues.length > 0) {
        let numberString = clickedValues.join("");
        secondNumber = parseInt(numberString);
        return secondNumber;
    }
}

equalTo.addEventListener("click", () => {
    displayFirstPanel.textContent = displayForOperator + clickedValues.join("") + event.target.textContent;
    operate(selectedOperator, firstNumber, secondNumber);
})

let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    displayFirstPanel.textContent = "";
    displayPanel.textContent = "";
    clickedValues.splice(0, clickedValues.length);
    firstNumber = 0;
    secondNumber = 0;
    temporary = 1;
    operatorClickedTimes = 0;
})

let backspace = document.querySelector(".backspace_img");
backspace.addEventListener("click", () => {
    displayPanel.textContent = displayPanel.textContent.slice(0, -1);
})