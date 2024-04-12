//functions for math operations

//add
function add(firstNumber, SecondNumber) {
    let additionResult = firstNumber + SecondNumber;
    return additionResult;
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
function operate(operator, firstNumber, secondNumber) {
    let result;

    if (operator === '+') {
        displayPanel.textContent = add(firstNumber, secondNumber);
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
            let excludedElement = document.querySelector(".excludeMe")
            if(event.target !== excludedElement) {
                clickedValues.push(Number(event.target.textContent));
                displayPanel.textContent = clickedValues.join("");
                calculateFirstNumber();
                console.log("first");
            }    
        }

        if (temporary === 2) {
            excludedElement = document.querySelector(".excludeMe")
                if(event.target !== excludedElement) {
                    clickedValues.push(Number(event.target.textContent));
                    displayPanel.textContent = clickedValues.join("");
                    calculateSecondNumber();
                    console.log("second");          
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
        console.log("firstnumber: " + firstNumber); 
    } 
}


//operator and second value
let operator = document.querySelector(".operatorButtons");
let displayFirstPanel = document.querySelector(".displayFirstContainer");
let buttonsSecondValue = document.querySelectorAll("#buttonContainerForSecondValue");
let displayForOperator;
let selectedOperator;

operator.addEventListener("click", () =>{
    selectedOperator = event.target.textContent;
    console.log(selectedOperator);
    displayForOperator = clickedValues.join("") + selectedOperator;
    displayFirstPanel.textContent = displayForOperator;
    temporary = 2;
    clickedValues.splice(0, clickedValues.length);

    console.log(typeof selectedOperator);

    /* buttonsSecondValue.forEach(button => {
        button.addEventListener("click", (event) => {
            if (temporary === 2) {
                let excludedElement = document.querySelector(".excludeMe")
                if(event.target !== excludedElement) {
                    clickedValues.push(Number(event.target.textContent));              
                }
                displayPanel.textContent = clickedValues.join("");
                calculateSecondNumber();
                console.log("second");
            }
        });

    }); */


    /*equalTo.addEventListener("click", () => {
        displayFirstPanel.textContent = displayForOperator + clickedValues.join("") + event.target.textContent;
        displayPanel.textContent = "abc";
        console.log(displayPanel.textContent);
        operate(selectedOperator, firstNumber, secondNumber);
    }) */
    
});


function calculateSecondNumber() {
    if (clickedValues.length > 0) {
        let numberString = clickedValues.join("");
        secondNumber = parseInt(numberString);
        console.log("secondnumber: " + secondNumber);
        return secondNumber;
    }
}

equalTo.addEventListener("click", () => {
    displayFirstPanel.textContent = displayForOperator + clickedValues.join("") + event.target.textContent;
    operate(selectedOperator, firstNumber, secondNumber);
})

