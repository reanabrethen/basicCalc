//GLOBAL VARIABLES

let firstNumber = ''
let secondNumber = ''
let operation = ''



//QUERY SELECTORS

const display = document.querySelector('#result')

const clear = document.querySelector('#clear-button')

const numbers = document.querySelectorAll('.number')

const decimal = document.querySelector('.decimal')

const operators = document.querySelectorAll('.operator')



//EVENT LISTENERS

clear.addEventListener('click', clearDisplay )

// numbers.addEventListener('click', numberPressed)


numbers.forEach(number => {
    number.addEventListener("click", e => {
        if (operator === "") { // Read first number if no operator set yet
            firstNum += e.target.innerText;
            console.log(firstNum)
        } else { // Read second number
            secondNum += e.target.innerText;
            console.log(secondNum)
        }
    });
});

//FUNCTIONS

function calcResult(){

}

function operationPressed(op){

}

// function numberPressed(number){
//     for(let i = 0; i < number.length; i++){
//         if(firstNumber === 0){
//             firstNumber += number[i] 
//     }else if(secondNumber === 0){
//         secondNumber += number[i]
//     }
// } return number
// }


function clearDisplay(){
    display.value = ''
}


function updateScreen(){

}