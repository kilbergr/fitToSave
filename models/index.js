var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/articlepractice");
mongoose.set("debug", true);

module.exports.Article = require("./article");