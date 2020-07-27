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
  if(operator === '+'){
    calculator().add(value1, value2);
  } else if (operator === '-'){
    calculator().subtract(value1, value2);
  } else if (operator === '*') {
    calculator().multiply(value1, value2);
  } else if (operator === '/'){
    calculator().divide(value1, value2);
  }
};