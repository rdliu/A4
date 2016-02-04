function initializeToothTip() {
	var tips = ["rand1", "rand2", "rand3", "rand4"];

	var max = 3;
	var min = 0;
	var n = Math.floor(Math.random() * (max - min + 1)) + min;

	alert("TEST");
  	//console.log("TOOTHTIP");

  	$("#toothTip").text(tips[n]);
	//$("#toothTip").html(tips['text'][n]);

}