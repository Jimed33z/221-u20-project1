
let feedItem = require("../models/feedItems.js")



let currentStories = [];


let feedItem1 =  feedItem.feedItem("MARIST D1 BASKETBALL TEAM", "Marist College offers Men and Women Basketball teams. Who are D1! You can compete aganist the best of the best! ", 'https://goredfoxes.com/sports/mens-basketball', 'images/Marist.png');
let feedItem2 =  feedItem.feedItem("THE FEMALE CHAMPIONS", "Marist Womens D1 Basketball team wins '2013 MAAC Championships", 'https://www.marist.edu/w/maac-championship-news-bridge-page-2024', 'images/Champions.jpg');
let feedItem3 =  feedItem.feedItem("HOLD ON TO YOUR SEATS ", "HOLD ON TO YOUR SEAT!!: After a crazy close game at Marist College for Mens Basketball team. A close 65-61", 'https://www.espn.com/mens-college-basketball/team/_/id/2368/marist-red-foxes','images/IMG_8329.jpg');



currentStories.push(feedItem1);
currentStories.push(feedItem2);
currentStories.push(feedItem3);


// function 1 
exports.getfeedItems = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
	res.send(currentStories);
}


//function 2
exports.savefeedItem = function(req, res) {
	let newfeedItem = (req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
	currentStories.push(newfeedItem);
	res.setHeader('Content-Type', 'application/json');
	res.send(currentStories);
}



//function 3 
exports.getfeedItem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
    res.send(currentStories[req.params.feedItemId]);
}



//function 4 
exports.deletefeedItem = function(req, res) {
	currentStories.splice(req.params.feedItemId, 1);
	res.setHeader('Content-Type', 'application/json');
	res.send(currentStories);
}
 

// funtion 5 
exports.updatefeedItem = function(req, res) {
	let updatedfeedItem = currentStories[req.params.feedItemId];

	// check to see what has been passed and update the local copy
	console.log(req.body.title);
	if(req.body.title)
		updatedfeedItem.title = req.body.title;
	if(req.body.body)
		updatedfeedItem.body = req.body.body;
	if(req.body.linkUrl)
		updatedfeedItem.linkUrl = req.body.linkUrl;
	if(req.body.imageUrl)
		updatedfeedItem.imageUrl = req.body.imageUrl;

	// save the local copy of the user back into the array
	currentStories[req.params.feedItemId] = updatedfeedItem;

	res.setHeader('Content-Type', 'application/json');
	res.send(currentStories[req.params.feedItemId]);
}


exports.replacefeedItem = function(req,res) {
    let updatefeedItem = currentStories[req.params.feedItemId];

    console.log(req.body.title);
    if(req.body.title && req.body.body && req.body.linkUrl && req.body.imageUrl)
        updatefeedItem.title = req.body.title;
        updatefeedItem.title = req.body.body;
        updatefeedItem.title = req.body.linkUrl;
        updatefeedItem.title = req.body.imageUrl;

    currentStories[req.params.feedItemId] = updatefeedItem;

    res.setHeader('Content-Type', 'application/json');
    res.send(currentStories[req.params.feedItemId]);
}















