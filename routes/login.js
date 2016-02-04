exports.viewLogin = function(req, res) {
  // controller code goes here
  var name = req.params.name;
  console.log("|" + name + "|");
  res.render('login', {
	  'projectName': name
  });
};