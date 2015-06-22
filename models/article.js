var mongoose = require("mongoose");
var mkdate = new Date();
var date = (mkdate.getMonth() + 1) + "/" + mkdate.getDate() + "/" + mkdate.getFullYear().toString().substr(2,2);

var articleSchema = new mongoose.Schema({
	title: String,
	author: String,
	loc: String,
	link: String,
	section: String,
	date: {
					type: String,
					default: date
					},
})
var Article = mongoose.model("Article", articleSchema);
module.exports = Article;