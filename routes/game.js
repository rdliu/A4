exports.viewGame = function(req, res) {
  // controller code goes here
  var name = req.params.name;
  console.log("|" + name + "|");
  res.render('game', {
	  'projectName': name
  });
};