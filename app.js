var calculator = {
	init: function(){
		// Create main calculator container
		var container = document.createElement('div');
		container.id = 'calculator';
		document.body.appendChild(container);

		// Create numerical keypad
		var buttons = document.createElement('div');
		// Generate numbers 1 - 9 and assign them to the button created
		for(i = 0; i < 9; i++){
			buttons.id = 'number' + i;
			container.appendChild(buttons);
		}

		// Add the screen
		var display = document.createElement('div');
		container.appendChild(display);

		// CSS for when I can be bothered

	}
	computation: function(){
		input = [];
	}
}