
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

//var index = require('./routes/index');
var index = require('./routes/index');
var project = require('./routes/project');
var login = require('./routes/login');
var register = require('./routes/register');
var help = require('./routes/help');
var help2 = require('./routes/help2');

var game = require('./routes/game');
var status = require('./routes/status');

var zoo = require('./routes/zoo');
var settings = require('./routes/settings');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
//app.get('/', index.view);

app.get('/', index.view);
app.get('/project/:name', project.viewProject);
app.get('/login/:name', login.viewLogin);
app.get('/register/:name', register.viewRegister);
app.get('/help/:name', help.viewHelp);
app.get('/help2/:name', help2.viewHelp2);

app.get('/game/:name', game.viewGame);
app.get('/status/:name', status.viewStatus);

app.get('/zoo/:name', zoo.viewZoo);
app.get('/settings/:name', settings.viewSettings);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
