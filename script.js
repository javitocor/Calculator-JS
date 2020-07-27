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
  if(isNaN(value) === false && temp === '' && op === '') {
    temp = value;
    text.value = temp;
  } else if (isNaN(value) === false && temp !== '' && op === '') {
    temp += value;
    text.value = temp;
  } else if (isNaN(value) === true && value !== 'clear' && value !== 'dec' && op === '') {
    op = value;
  } else if (isNaN(value) === false && op !== '' && temp2 === ''){
    temp2 = value;
    text.value = temp2;
  } else if (isNaN(value) === false && op !== '' && temp2 !== ''){
    temp2 += value;
    text.value = temp2;
  } else if (isNaN(value) === true && temp !== '' & temp2 !== '' && value !== 'clear' && value !== 'dec'){
    temp = operate(op, temp, temp2);
    temp2 = '';
    text.value = temp;
  } else if (isNaN(value) === true && value === 'dec' && op === '') {
    temp += '.';
    text.value = temp;
  } else if (isNaN(value) === true && value === 'dec' && op !== '') {
    temp2 += '.';
    text.value = temp2;
  } else if (isNaN(value) === true && value === 'clear') {
    clear();
  } else if (isNaN(value) === true && value !== 'clear'  && value !== 'dec' && op !== '') {
    op = value;
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
}