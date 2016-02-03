// ==============       PLAN        ===============
/*
    Have buttons in HTML
    Assign the buttons to numbers
    Function buttons have their own function (cray cray ikr)
    Clicking an operator will log the current calculator display value to an array as well as another for the operator.
        For example
            Click 1234 and click +
            this will clear the display and give an array of ['1234' '+']
    Clicking equals will join the array and eval it and then spit out the result on screen
    Clicking AC will clear the array and display
    
*/
// ================================================


/*
    Checks
        * If the last keypress was the . or a operator then only allow numbers and not allow sum
        * You should be prevented from pressing a number when you click equals
*/

// TODO: Add if statement to check when a button is pressed to see if the display-value_array is < 21 chars, if it is then refuse input

var display_value_array = [];
var display = document.getElementById('display');
var number_keys = document.querySelectorAll('span.number');
// Array of operators
var operators = ['÷', '×', '+', '-', '.'];

// Returns 'number' if the last keypressed was a number and 'operator' if the last key pressed was an operator
function last_key_pressed(){
    var last_key_in_display_array = display_value_array[display_value_array.length - 1];
    for(var i = 0; i < operators.length; i++){
        if(last_key_in_display_array == operators[i]){
            return 'operator';
        }
        else{
            return 'number';
        }
    }
}

function number_key_pressed(num) {
    display_value_array.push(num);
    display.value = display_value_array.join('');
}

// Bind the number keys to the work as if the number keys on the browser are clicked
keyboardJS.bind('1', function(e){number_key_pressed(1)});
keyboardJS.bind('2', function(e){number_key_pressed(2)});
keyboardJS.bind('3', function(e){number_key_pressed(3)});
keyboardJS.bind('4', function(e){number_key_pressed(4)});
keyboardJS.bind('5', function(e){number_key_pressed(5)});
keyboardJS.bind('6', function(e){number_key_pressed(6)});
keyboardJS.bind('7', function(e){number_key_pressed(7)});
keyboardJS.bind('8', function(e){number_key_pressed(8)});
keyboardJS.bind('9', function(e){number_key_pressed(9)});
keyboardJS.bind('0', function(e){number_key_pressed(0)});

// This function runs when an operator key, multiple, add etc. is pressed
// The type is a parameter passed to identify the operation of the key that was pressed
function operator_key_pressed(type) {
    // Only allow the pressing on a number key if the last key pressed does not match an operator and the display is not blank
    if (last_key_pressed() != 'operator' && display_value_array.join('') != '') {
        // Divide type
        if (type == '/') {
            display_value_array.push('÷');
            display.value = display_value_array.join('');
        }
        // Multiple type
        else if (type == '*') {
            display_value_array.push('×');
            display.value = display_value_array.join('');
        }
        // Add type
        else if (type == '+') {
            display_value_array.push('+');
            display.value = display_value_array.join('');
        }
        // Subtract type
        else if (type == '-') {
            display_value_array.push('-');
            display.value = display_value_array.join('');
        } else if (type == "decimal") {
            display_value_array.push('.');
            display.value = display_value_array.join('');
        }
        // In the case that it did not find one of those four types (unlikely but always include error handling!)
        else {
            console.log('Error :(');
        }
    }
    // Allow minus if blank
    /*else if(last_key_pressed == '-' && display_value_array.join('') == ''){
        display_value_array.push('-');
        display.value = display_value_array.join('');         
    }*/
}

// This function runs when the equals button is pressed
function evaluate_display_value() {
    // First let's make a seperate array from the display array so we can work with it without messing with the users display.
    var computation_logic_array = display_value_array;

    // Next we join the display_value_array as eval() requires a string
    // I'm terrible at naming variables, don't hate :D
    var string_to_do_calculation_on = computation_logic_array.join('');

    // Replace the multiple and divide symbols with the actual ones so we can run eval
    string_to_do_calculation_on = string_to_do_calculation_on.replace(/×/g, '*').replace(/÷/g, '/');

    // Next we do eval and store the output as a variable
    var output_calculation = eval(string_to_do_calculation_on);

    // Output the calculation to the display
    display.value = output_calculation;

    // Reset the display array to the sum (this should also prevent you from pressing number keys, I think)
    display_value_array = [output_calculation];
}

function square_number() {
    // First we want to get the output of the current display in case people want to do things like (5 + 3)^2
    evaluate_display_value();

    // Next we get the value from the display value and multiple it by itself and store it as the variable 'square_number_output'
    // Since we just ran the evaluate_display_value function then there can only be 1 item in the display value array
    var square_number_output = display_value_array[0] * display_value_array[0]

    // Then we reset the display value
    display.value = square_number_output;

    // And then we reset the display array
    display_value_array = [square_number_output];
}

// Removes last element of the display_value_array and then re-renders the display value.
function backspace() {
    display_value_array.pop();
    display.value = display_value_array.join('');
}

function reset() {
    display_value_array = [];
    display.value = display_value_array.join('');
}