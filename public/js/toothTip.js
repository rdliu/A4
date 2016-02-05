$(document).ready(function() {
	initializeToothTip();
})

function initializeToothTip() {
	var tips = [
	"A soft bristled electric toothbrush is the way to go!", 
	"Remember to brush your gums, tongue, and roof of your mouth!", 
	"Don't rinse after brushing your teeth to get the most out of your toothpaste!",
	"Dentists recommend two minutes of thorough brushing!",
	"Flossing is not to be underestimated!",
	"Circular brushing, like polishing a shoe, is the most effective method to remove plaque!"
	];

	var max = 5;
	var min = 0;
	var n = Math.floor(Math.random() * (max - min + 1)) + min;

  	//console.log("TOOTHTIP");

  	$("#toothTip").text(tips[n]);
	//$("#toothTip").html(tips['text'][n]);
}