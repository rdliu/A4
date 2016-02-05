'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#loginBtn").click(goToLogin);
	$("#registerBtn").click(goToRegister);


	$("#loginForm").submit(goToGame);
	$("#backButtonI").click(goToIndex);
	$("#backButton").click(goToGameB);

	$("#mouthButton").click(goToMouth);
	$("#settingsButton").click(goToSettings);

	$("#helpIcon").click(goToHelp);
}

function goToLogin(){
	//window.open("", "Login", "width = 200, height = 100");
	window.open("/login/login", "_self");
}
function goToRegister(){
	//window.open("", "Register", "width = 200, height = 100");
	window.open("/register/register", "_self");
}
function goToGame(e){
	e.preventDefault();
	//window.open("", "Login", "width = 200, height = 100");
	var userName = document.getElementById('inputUsername');
	window.open("/game/" + userName.value, "_self");
}

function goToGameB(){
	window.open("/game/game", "_self");
}

function goToIndex(){
	window.open("/", "_self");
}

function goToMouth(){
	window.open("/mouth/mouth", "_self");
}
function goToSettings(){
	window.open("/settings/settings", "_self");
}
function goToHelp(){
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