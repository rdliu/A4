'use strict';

var website = "http://a4-proto.herokuapp.com/";
// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#submitBtn").click(submitInfo);

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