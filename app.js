var currentNumber = 0;
var output = 0;

var display = document.getElementById('display');

var init = function(){
    var assignButtons = function(id, number){
        document.getElementById(id).addEventListener('click', function(){
            currentNumber += number;
            display.innerHTML += number + ' ';
        });
    }
    assignButtons('zero', 0);
    assignButtons('one', 1);
    assignButtons('two', 2);
    assignButtons('three', 3);
    assignButtons('four', 4);
    assignButtons('five', 5);
    assignButtons('six', 6);
    assignButtons('seven', 7);
    assignButtons('eight', 8);
    assignButtons('nine', 9);
    
    var sumButton = document.getElementById('sumButton');
    sumButton.addEventListener('click', calculate);
};


var calculate = function(){
    
};