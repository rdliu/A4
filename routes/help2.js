exports.viewHelp2 = function(req, res) {
  // controller code goes here
  var name = req.params.name;
  console.log("|" + name + "|");
  res.render('help2', {
	  'projectName': name
  });
};