'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#mouthButton").click(goToMouth);
	$("#settingsButton").click(goToSettings);
	//$("#registerBtn").click(register);
}

//pass data across session
//code-reuse when more time, compile.  reduce redundancy.
function goToMouth(){
	window.open("/mouth/mouth", "_self");
}
function goToSettings(){
	window.open("/settings/settings", "_self");
}


function register(e){
	//window.open("", "Register", "width = 200, height = 100");
	//window.open("/register/register", "_self");
}