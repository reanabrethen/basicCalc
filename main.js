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

// numbers.addEventListener('click', numberPressed)  need to loop through it



//FUNCTIONS

function calcResult(){

}

function operationPressed(op){

}

function numberPressed(number){


// if operator saved then second number


        for(let i = 0; i < number.length; i++){
        if(firstNumber === ''){  //checking to see if operator exsists
            firstNumber += number[i] 
    }else if(secondNumber === ''){ //checking to see if operator exsists
        secondNumber += number[i]
    }
} return number
}


function clearDisplay(){
    display.value = ''
}


function updateScreen(){

}