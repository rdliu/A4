'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#registerBtn").click(register);
}

function register(e){
	//window.open("", "Register", "width = 200, height = 100");
	window.open("/register/register", "_self");
}