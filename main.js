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

const equal = document.querySelector('#equal-button')

//EVENT LISTENERS

clear.addEventListener('click', clearDisplay )

for(let num of numbers){
    num.addEventListener('click', numberPressed)}


for(let op of operators){
    op.addEventListener('click', operationPressed)}
    

 equal.addEventListener('click', calcResult)

 decimal.addEventListener('click', decimalDisplay)

// display.addEventListener('click', updateScreen)



// numbers.addEventListener('click', numberPressed)
//  for(let element of numberPressed){
//         element.addEventListener('click', (event)=>{
//             firstNumber = event.target.innerText
//             secondNumber = event.target.innerText
//         })
//     }


// numbers.addEventListener('click', numberPressed)  need to loop through it



//FUNCTIONS

function operationPressed(event){
        operation = event.target.value
    }


function numberPressed(event){
// if operator saved then second number
console.log(event.target.value)
        if(operation === '' ){  //checking to see if operator exsists
            firstNumber += event.target.value
    }else{ //checking to see if operator exsists
        secondNumber += event.target.value
    } updateScreen()
} 


function clearDisplay(){
    display.innerText = ''
    firstNumber = ''
    secondNumber = ''
    operation = ''
}


function updateScreen(){
    display.innerText = firstNumber + operation + secondNumber
}


function calcResult(){
    display.innerText = eval(display.innerText)
    }

function decimalDisplay(){
    display.innerText = parseFloat(display.innerText)
}