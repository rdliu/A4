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
	$("#loginBtn").click(login);
	$("#registerBtn").click(register);
	$("#helpIcon").click(help);
}

function login(){
	//window.open("", "Login", "width = 200, height = 100");
	window.open("/login/login", "_self");
}
function register(){
	//window.open("", "Register", "width = 200, height = 100");
	window.open("/register/register", "_self");
}
function help(){
	window.open("/help/help", "_self");	
}

function submitInfo(e) {
	//for now just load next page

	//$("#submitBtn").text("TEST");
	//window.open("splash", "_blank");
	//window.location = website + 'project/splash.htm';
	var userName = document.getElementById('inputUsername');
	//document.getElementById('loginForm').inputUsername;
	window.open("/project/" + userName.value, "_self");
}

function initializeToothTip() {
	var tips = ["rand1", "rand2", "rand3", "rand4"];

	var max = 3;
	var min = 0;
	var n = Math.floor(Math.random() * (max - min + 1)) + min;

  	$("#toothTip").text(tips[n]);
}