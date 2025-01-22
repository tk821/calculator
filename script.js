function add(num1, num2) {
    return num1 + num2;
}

function subtract(total, difference) {
    return total - difference;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(dividend, divisor) {
    return dividend / divisor;
}

function operate(op, num1, num2) {
    operator = null;
    switch (op) {
        case '+':
            return add(num1, num2);
        case '-': 
            return subtract(num1, num2)
        case 'x': 
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return 'Error';
    }
}

function newNum(num) {
    console.log(num);
    if (exists(operator)) {
        if (exists(numberOne)) {
            numberTwo = num;
            updateDisplay(num);
        }
        else {
            alert('Error: tried to assign num2 with no num1');
        }
    }
    else {
        numberOne = num;
        updateDisplay(num);
    }
}

function newOp(op) {
    console.log(op);
    if(!exists(numberTwo)) {
        operator = op;
    }
    else {
        equals();
        operator = op;
    }
}

function equals() {
    console.log('=');
    if (exists(numberOne) && exists(numberTwo) && exists(operator)) {
            let result = operate(operator, numberOne, numberTwo);
            updateDisplay(result);
            numberOne = result;
            numberTwo = null;
            console.log(result);       
    }
}

function exists(item) {
    return (item !== undefined && item !== null);
}

function updateDisplay(num) {
    const displayWindow = document.getElementById('display-text');
    displayWindow.textContent = num;
    
}

function clear() {
    console.log('Clear');
    numberOne = null;
    numberTwo = null;
    operator = null;
    updateDisplay(0);
}

let numberBtns = [];
for (let i = 0; i < 10; i++) {
    numberBtns.push(document.getElementById(i));
}
const numBtns = numberBtns;
numberBtns = null;
for (let i = 0; i < 10; i++) { //adds event listeners for each number button
    numBtns[i].addEventListener('click', () => newNum(i));
}

//adds event listeners for each individual operator
const clrBtn = document.getElementById('clear');
clrBtn.addEventListener('click', clear);

const equalBtn = document.getElementById('=');
equalBtn.addEventListener('click', equals);

const divBtn = document.getElementById('/');
divBtn.addEventListener('click', () => newOp('/'));
const multBtn = document.getElementById('x');
multBtn.addEventListener('click', () => newOp('x'));
const subBtn = document.getElementById('-');
subBtn.addEventListener('click', () => newOp('-'));
const addBtn = document.getElementById('+');
addBtn.addEventListener('click', () => newOp('+'));


let numberOne;
let numberTwo;
let operator;
