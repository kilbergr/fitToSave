$(function(){
	var articles;

function articleHTML(article){
	return '<div data-id="' + article._id + '"><p><a href="' + article.link + '/">' + article.title + 
           '</a></p><p>Author: ' + article.author + ', Date Written: ' + article.date + '</p>' +
           '<p>In Section:' + article.section + '</p>' + '<p><a href="/articles/' + article._id + '/edit">Comment on this article</a></p><hr></div>';
     }
     
})
