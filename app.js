var currentNumber = 0;
var output = 0;

var display = document.getElementById('display');

var init = {
    assignButtons: function(id, number){
        document.getElementById(id).addEventListener('click', function(){
            currentNumber += number;
        });
    }
};

var calculate = function(){
    
};