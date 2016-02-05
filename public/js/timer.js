$(document).ready(function() {
	initializeTimer();
})

var toggle = 1;
function initializeTimer() {
	$("#wash").click(startTimer);
	$("#brush").click(startTimer);
	$("#floss").click(startTimer);
}

function startTimer(){
	if(toggle){
		$("#timer").css('visibility', 'visible');
		$("#timer").css('opacity', '1'); 
		toggle = 0;
	}else{
		$("#timer").css('visibility', 'hidden');
		$("#timer").css('opacity', '0'); 
		toggle = 1;
	}
	
}