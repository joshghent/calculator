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

var display_value_array = [];
var display = document.getElementById('display');
var number_keys = document.querySelectorAll('span.number');

function number_key_pressed(num){
    display_value_array.push(num);
    display.value = display_value_array.join('');
}