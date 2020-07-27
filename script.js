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
      return 'Cannot divide by 0'
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
  } else if (isNaN(value) === true && value !== 'clear' && op === '') {
    op = value;
  } else if (isNaN(value) === false && op !== '' && temp2 === ''){
    temp2 = value;
    text.value = temp2;
  } else if (isNaN(value) === false && op !== '' && temp2 !== ''){
    temp2 += value;
    text.value = temp2;
  } else if (isNaN(value) === true && temp !== '' & temp2 !== ''){
    temp = operate(op, parseInt(temp), parseInt(temp2));
    text.value = temp;
  } else if (isNaN(value) === true && value === 'dec' && op === '') {
    temp = value;
    text.value = temp;
  } else if (isNaN(value) === true && value === 'dec' && op !== '') {
    temp2 = value;
    text.value = temp2;
  } else if (isNaN(value) === true && value === 'clear') {
    clear();
  }
}

function clear() {
  temp = '';
  temp2 = '';
  op = '';
  text.value = '0';
}