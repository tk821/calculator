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

function operate(operator, num1, num2) {
    switch (operator) {
        case 'add':
            return add(num1, num2);
        case 'subtract': 
            return subtract(num1, num2)
        case 'multiply': 
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
        default:
            return 'Error';
    }
}

function newNum(num) {
    console.log(num);
}

function newOp(op) {
    console.log(op);
}

function updateDisplay(num) {
    const displayWindow = document.getElementById('display-text');
    displayWindow.textContent = num;
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
clrBtn.addEventListener('click', () => clear);
const equalBtn = document.getElementById('=');
equalBtn.addEventListener('click', () => newOp('='));
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
