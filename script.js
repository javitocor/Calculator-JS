const calculator =  function calculator(){
  function add(...args) {
    if([...args].length === 0) return 0;
    return [...args].reduce(function sum(sum, value){return sum + value}, 0);
  }
  function subtract(...args) {
    if([...args].length === 0) return 0;
    return [...args].reduce(function sum(diff, value){return diff - value});
  }
  function divide(x, y) {
    if(y === 0){
      return 'ERROR! Cannot divide by 0'
    }
    return x / y;
  }
  function multiply(...args) {
    if([...args].length === 0) return 0;
    return [...args].reduce(function sum(prod, value){return prod * value}, 1);
  }
  return { add, subtract, divide, multiply }
}

function operate (operator, value1, value2) {
  value1 = checkNumber(value1);
  value2 = checkNumber(value2);
  if(operator === 'add'){
    return calculator().add(value1, value2);
  } else if (operator === 'sub'){
    return calculator().subtract(value1, value2);
  } else if (operator === 'mult') {
    return calculator().multiply(value1, value2);
  } else if (operator === 'div'){
    return calculator().divide(value1, value2);
  }
};

const buttons = document.querySelectorAll('input[type="button"]');
buttons.forEach(button => button.addEventListener('click', function () {
  getValue(button.id);
}));

let temp = '';
let temp2 = '';
let op = '';
const text = document.querySelector('input[type="text"]');

function getValue(value) {
  if(isNaN(value) === false && op === '') {
    temp += value;
    text.value = temp;
  } else if (isNaN(value) === true && temp === '' && temp2 === '') {
    op = '';
    temp = '';
    temp2 = '';
  } else if (isNaN(value) === true && value !== 'clear' && value !== 'dec' && op === '' && value !== 'back') {
    op = value;
  } else if (isNaN(value) === false && op !== ''){
    temp2 += value;
    text.value = temp2;
  } else if (isNaN(value) === true && temp !== '' & temp2 !== '' && value !== 'clear' && value !== 'dec' && value !== 'back'){
    temp = operate(op, temp, temp2);
    temp2 = '';
    text.value = temp;
  } else if (isNaN(value) === true && value === 'dec' && op === '' && !temp.includes('.')) {
    temp += '.';
    text.value = temp;
  } else if (isNaN(value) === true && value === 'dec' && op !== '' && !temp2.includes('.')) {
    temp2 += '.';
    text.value = temp2;
  } else if (isNaN(value) === true && value === 'clear') {
    clear();
  } else if (isNaN(value) === true && value !== 'clear'  && value !== 'dec' && value !== 'back' && op !== '') {
    op = value;
  } else if (isNaN(value) === true && value === 'back' && op === '') {
    temp = text.value.slice(0, -1);
    text.value = temp;
  } else if (isNaN(value) === true && value === 'back' && op !== '') {
    temp2 = text.value.slice(0, -1);
    text.value = temp2;
  }
}

function clear() {
  temp = '';
  temp2 = '';
  op = '';
  text.value = '0';
}

function checkNumber(number) {
  if(/^\d+\.\d+$/.test(number)){
    return number = parseFloat(number);
  } else {
    return number = parseInt(number);
  }
};

const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');
const btn9 = document.getElementById('9');
const btn0 = document.getElementById('0');
const btnDecimal = document.getElementById('dec');
const btnEqual = document.getElementById('equal');
const btnDivide = document.getElementById('div');
const btnMultiply = document.getElementById('mult');
const btnSubtract = document.getElementById('sub');
const btnAdd = document.getElementById('add');
const btnClear = document.getElementById('clear');
const btnBack = document.getElementById('back');


document.addEventListener("keypress", e => {
  console.log(e.key);
  switch (e.key) {
    case '1':
        btn1.click();
        break;
    case '2':
        btn2.click();
        break;
    case '3':
        btn3.click();
        break;
    case '4':
        btn4.click();
        break;
    case '5':
        btn5.click();
        break;
    case '6':
        btn6.click();
        break;
    case '7':
        btn7.click();
        break;
    case '8':
        btn8.click();
        break;
    case '9':
        btn9.click();
        break;
    case '0':
        btn0.click();
        break;
    case '.':
        btnDecimal.click();
        break;
    case '=':
        btnEqual.click();
        break;
    case '/':
        btnDivide.click();
        break;
    case '*':
        btnMultiply.click();
        break;
    case '-':
        btnSubtract.click();
        break;
    case '+':
        btnAdd.click();
        break;
    case 'c':
      btnClear.click();
      break;
    case 'Enter':
      btnEqual.click();
      break;
    case 'Backspace':
      btnBack.click();
      break;
  }
});
