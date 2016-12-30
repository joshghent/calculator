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

  for (let i = 0; i < operators.length; i++) {
    if (lastKeyInDisplayArray == operators[i]) {
      lastKeyPressedType = 'operator';
    } else {
      lastKeyPressedType = 'number';
    }
  }

  return lastKeyPressedType;
}

function number_key_pressed(num) {
  calculatorDisplayContents.push(num);
  display.value = calculatorDisplayContents.join('');
}

// Bind the number keys to the work as if the number keys on the browser are clicked
keyboardJS.bind('1', (e) => { number_key_pressed(1); });
keyboardJS.bind('2', (e) => { number_key_pressed(2); });
keyboardJS.bind('3', (e) => { number_key_pressed(3); });
keyboardJS.bind('4', (e) => { number_key_pressed(4); });
keyboardJS.bind('5', (e) => { number_key_pressed(5); });
keyboardJS.bind('6', (e) => { number_key_pressed(6); });
keyboardJS.bind('7', (e) => { number_key_pressed(7); });
keyboardJS.bind('8', (e) => { number_key_pressed(8); });
keyboardJS.bind('9', (e) => { number_key_pressed(9); });
keyboardJS.bind('0', (e) => { number_key_pressed(0); });

// This function runs when an operator key, multiple, add etc. is pressed
// The type is a parameter passed to identify the operation of the key that was pressed
function operator_key_pressed(type) {
    // Only allow the pressing on a number key if the last key pressed does not match an operator and the display is not blank
  if (getKeyTypeLastPressed() != 'operator' && calculatorDisplayContents.join('') != '') {
        // Divide type
    if (type == '/') {
        calculatorDisplayContents.push('÷');
        display.value = calculatorDisplayContents.join('');
      }
        // Multiple type
    else if (type == '*') {
        calculatorDisplayContents.push('×');
        display.value = calculatorDisplayContents.join('');
      }
        // Add type
    else if (type == '+') {
        calculatorDisplayContents.push('+');
        display.value = calculatorDisplayContents.join('');
      }
        // Subtract type
    else if (type == '-') {
        calculatorDisplayContents.push('-');
        display.value = calculatorDisplayContents.join('');
      } else if (type == 'decimal') {
          calculatorDisplayContents.push('.');
          display.value = calculatorDisplayContents.join('');
        }
        // In the case that it did not find one of those four types (unlikely but always include error handling!)
    else {
          console.log('Error :(');
        }
  }
}

// This function runs when the equals button is pressed
function evaluate_display_value() {
    // First let's make a seperate array from the display array so we can work with it without messing with the users display.
  const computation_logic_array = calculatorDisplayContents;

    // Next we join the calculatorDisplayContents as eval() requires a string
    // I'm terrible at naming variables, don't hate :D
  let string_to_do_calculation_on = computation_logic_array.join('');

    // Replace the multiple and divide symbols with the actual ones so we can run eval
  string_to_do_calculation_on = string_to_do_calculation_on.replace(/×/g, '*').replace(/÷/g, '/');

    // Next we do eval and store the output as a variable
  const output_calculation = eval(string_to_do_calculation_on);

    // Output the calculation to the display
  display.value = output_calculation;

    // Reset the display array to the sum (this should also prevent you from pressing number keys, I think)
  calculatorDisplayContents = [output_calculation];
}

function square_number() {
    // First we want to get the output of the current display in case people want to do things like (5 + 3)^2
  evaluate_display_value();

    // Next we get the value from the display value and multiple it by itself and store it as the variable 'square_number_output'
    // Since we just ran the evaluate_display_value function then there can only be 1 item in the display value array
  const squareNumberOutput = calculatorDisplayContents[0] * calculatorDisplayContents[0];

    // Then we reset the display value
  display.value = squareNumberOutput;

    // And then we reset the display array
  calculatorDisplayContents = [square_number_output];
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
