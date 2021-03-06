// Array containing the numbers and operators that will be displayed on screen
// If the user enters 2 + 2 the array will be [2, '+', 2]
let calculatorDisplayContents = [];

// Get the display element
const display = document.getElementById('display');

// Array of operators
const operators = ['÷', '×', '+', '-', '.'];

// Returns 'number' if the last keypressed was a number and 'operator' if the last key pressed was an operator
function getKeyTypeLastPressed() {
  const lastKeyInDisplayArray = calculatorDisplayContents[calculatorDisplayContents.length - 1];

  let lastKeyPressedType;

  if (operators.indexOf(lastKeyInDisplayArray) < 0) {
    lastKeyPressedType = 'number';
  } else {
    lastKeyPressedType = 'operator';
  }

  return lastKeyPressedType;
}

function displayNotFull() {
  if (calculatorDisplayContents.length >= 18) {
    return false;
  }
}

function numberKeyPressed(num) {
  if (displayNotFull() === false) {
    return false;
  }

  calculatorDisplayContents.push(num);
  display.value = calculatorDisplayContents.join('');
}

// This function runs when an operator key, multiple, add etc. is pressed
// The type is a parameter passed to identify the operation of the key that was pressed
function operatorKeyPress(type) {
    // Only allow the pressing on a number key if the last key pressed does not match an operator and the display is not blank
  if (getKeyTypeLastPressed() !== 'operator' && calculatorDisplayContents.join('') !== '' && displayNotFull() === false) {
    // Divide type
    if (type === '/') {
      calculatorDisplayContents.push('÷');
      display.value = calculatorDisplayContents.join('');
    // Multiple type
    } else if (type === '*') {
      calculatorDisplayContents.push('×');
      display.value = calculatorDisplayContents.join('');
    // Add type
    } else if (type === '+') {
      calculatorDisplayContents.push('+');
      display.value = calculatorDisplayContents.join('');
    // Subtract type
    } else if (type === '-') {
      calculatorDisplayContents.push('-');
      display.value = calculatorDisplayContents.join('');
    } else if (type === 'decimal') {
      calculatorDisplayContents.push('.');
      display.value = calculatorDisplayContents.join('');
    } else {
      console.error('Sorry there was a problem processing your calculation');
    }
  }
}

// This function runs when the equals button is pressed
function calculate() {
    // First let's make a seperate array from the display array so we can work with it without messing with the users display.
  const logicArray = calculatorDisplayContents;

  if (logicArray.length === 0) {
    return false;
  }

  // Next we join the calculatorDisplayContents as eval() requires a string
  // I'm terrible at naming variables, don't hate :D
  let userCalculation = logicArray.join('');

  // Replace the multiple and divide symbols with the actual ones so we can run eval
  userCalculation = userCalculation.replace(/×/g, '*').replace(/÷/g, '/');

  // Next we do eval and store the output as a variable
  const calculationOutput = eval(userCalculation);

  // Output the calculation to the display
  display.value = calculationOutput;

  // Reset the display array to the sum (this should also prevent you from pressing number keys, I think)
  calculatorDisplayContents = [calculationOutput];
}

function squareNumber() {
  // First we want to get the output of the current display in case people want to do things like (5 + 3)^2
  if (calculate() === false) {
    return false;
  }
  
  // Next we get the value from the display value and multiple it by itself and store it as the variable 'square_number_output'
  // Since we just ran the evaluateDisplayValue function then there can only be 1 item in the display value array
  const squareNumberOutput = calculatorDisplayContents[0] * calculatorDisplayContents[0];

  // Then we reset the display value
  display.value = squareNumberOutput;

  // And then we reset the display array
  calculatorDisplayContents = [squareNumberOutput];
}

// Removes last element of the calculatorDisplayContents and then re-renders the display value.
function backspace() {
  calculatorDisplayContents.pop();
  display.value = calculatorDisplayContents.join('');
}

function reset() {
  calculatorDisplayContents = [];
  display.value = calculatorDisplayContents.join('');
}
