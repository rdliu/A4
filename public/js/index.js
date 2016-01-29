'use strict';

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

	$("#submitBtn").text("TEST");
	window.open("/views/splash", "_blank");
}