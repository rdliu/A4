$(document).ready(function() {
	initializeToothTip();
})

function initializeToothTip() {
	var tips = [
	"tip1",
	"tip2",
	"tip3",
	"tip4"
	];

	var max = 3;
	var min = 0;
	var n = Math.floor(Math.random() * (max - min + 1)) + min;

  	//console.log("TOOTHTIP");

  	$("#toothTip").text(tips[n]);
	//$("#toothTip").html(tips['text'][n]);
}