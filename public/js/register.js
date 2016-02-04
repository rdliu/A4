'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	initializeToothTip();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#loginForm").submit(goToGame);
	//$("#registerBtn").click(goToGame);
}

function goToGame(e){
	e.preventDefault();
	//window.open("", "Register", "width = 200, height = 100");
	var userName = document.getElementById('inputUsername');
	window.open("/game/" + userName.value, "_self");
}
//code reuse when more time.
function initializeToothTip() {
	var tips = ["rand1", "rand2", "rand3", "rand4"];

	var max = 3;
	var min = 0;
	var n = Math.floor(Math.random() * (max - min + 1)) + min;

  	$("#toothTip").text(tips[n]);
}