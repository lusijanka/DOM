window.onload = function() {
	console.log('The page is fully loaded.');	
	var buttons = document.getElementsByClassName('button');
	for (i = 0; i <= buttons.length; i++) {
		message.innerHTML = 'New hello!';
		buttons.appendChild(message);
		//alert (message);
	};
};