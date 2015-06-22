var express = require("express"),
app = express(),
db = require("./models"),
bodyParser = require("body-parser"),
methodOverride = require("method-override"),
morgan = require("morgan"),
request = require("request");
//using dotenv to hide APIs
require('dotenv').load();
	//community API
 var commKey= process.env.DB_Comm,
  //all articles API
  artKey = process.env.DB_Art,
  //newswire API
  newsKey= process.env.DB_Wire


app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(morgan('tiny'));

app.get('/', function(req, res){
	res.redirect('/articles');
})

app.get('/articles', function(req, res){
	var url = "http://api.nytimes.com/svc/news/v3/content/nyt/all/24.json?limit=25&api-key=" + newsKey;
  request(url, function(error, response, body){
	 	if(error){
			res.render('errors/500')
		}
		 else if(!error && response.statusCode !==200){
      res.render('errors/500')
		}
		else{
		  var articles = JSON.parse(body).results;
			res.render('articles/index', {articles:articles});
		}
	})
});



app.listen(8000, function(){
	console.log('server listening : 8000');
})