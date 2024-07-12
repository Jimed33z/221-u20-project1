
 //making the pic1 into an object
//let pic1 = {name : 'Marist_Story_1', image:'/images/campus.png'};
//let pic2 = {name : 'Marist_Story_2', image:'/images/news_pic.jpg'};


//Make in array and add the pic1
//let feed = [];
//feed.push(pic1);
//feed.push(pic2);

//window.onload = () => {
    //console.log(feed);

    //let feedhtml = document.getElementById("feed");


    //for (let i=0; i<feed.length; i++) {
        //feedhtml.innerHTML += feed[i].name;
        //feedhtml.innerHTML += "<img src='" + feed[i].image + "'/>"; 
    //}
//}

/*
document.addEventListener('DOMContentLoaded', function() {
    function goToMaristEdu() {
        goToLocation('http://my.marist.edu');
    }

    document.getElementById('portal_button').addEventListener('click', goToMaristEdu);

    document.getElementById('portal_button_text').addEventListener('click', goToMaristEdu);
});

let currentStories = [];

    currentStories.push({
        Title: 'Marist Story 1',
        Body: 'Body 1 ',
        linkUrl: 'https://example.com/story1',
        imageUrl: 'images/campus.png'
    });

    currentStories.push({
        Title: 'Marist Story 2',
        Body: 'Marist is named numbers 1 best collage in the Dutchess County area',
        linkUrl: 'https://example.com/story2',
        imageUrl: 'images/news_pic.jpg'
    });

    currentStories.push({
        Title: 'Marist Story 3',
        Body: 'I take the wonderful marist progrm hosted by NFA were we go over the summer and learn about tech here in the Hancock Building like if we were the ones in collage, as a highschoolers!',
        linkUrl: 'https://example.com/story3',
        imageUrl: 'images/hancock.jpeg'
    });

    function displayItem(feedItem) {
        let newsfeedElement = document.getElementById('newsfeed');
        
        let itemHTML = `
            <div class="feed-item">
                <h2><a href="${feedItem.linkUrl}" target="_blank">${feedItem.Title}</a></h2>
                <p>${feedItem.Body}</p>
                <a href="${feedItem.linkUrl}" target="_blank">
                    <img src="${feedItem.imageUrl}" alt="${feedItem.Title}" style= "max-width: 40%; height: 0%;">
                    
                </a>
            </div>
        `;
        
        newsfeedElement.innerHTML += itemHTML;
    }

    currentStories.forEach(function(item) {
        displayItem(item);
    });
*/

// Define feedItem object constructor



function feedItem(title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}

// Create an array called currentStories
let currentStories = [];
 
// Create instances of feedItem and add them to currentStories
let story1 = new feedItem(
    'MARIST D1 BASKETBALL TEAM',
    'Marist College offers Men and Women Basketball teams. Who are D1! You can compete aganist the best of the best! ',
    'https://goredfoxes.com/sports/mens-basketball',
    'images/Marist.png'
    
);
let story2 = new feedItem(
    "THE FEMALE CHAMPIONS",
    "Marist Womens D1 Basketball team wins '2013 MAAC Championships",
    'https://www.marist.edu/w/maac-championship-news-bridge-page-2024',
    'images/Champions.jpg'
);
let story3 = new feedItem(
    "HOLD ON TO YOUR SEATS",
    "HOLD ON TO YOUR SEAT!!: After a crazy close game at Marist College for Mens Basketball team. A close 65-61",
    'https://www.espn.com/mens-college-basketball/team/_/id/2368/marist-red-foxes',
    'images/IMG_8329.jpg'
);

currentStories.push(story1, story2, story3);

// Function to display feedItem on the newsfeed element
function displayItem(feedItem) {
    let newsfeedElement = document.getElementById("newsfeed");

    // Create HTML structure for the feed item
    let itemHTML = `
        <div class="feed-item">
            <h2>${feedItem.title}</h2>
            <img src="${feedItem.imageUrl}" alt="${feedItem.title}"style= "max-width: 70%; height: 0%;">
            <p>${feedItem.body}</p>
            <a href="${feedItem.linkUrl}" target="_blank">Click for more</a>
        </div>
    `;
//style= "max-width: 40%; height: 0%;



    // Append to the newsfeed
    newsfeedElement.innerHTML += itemHTML;
}

// Event listener for when the page loads
document.addEventListener("DOMContentLoaded", function() {
    // Iterate through currentStories and call displayItem for each item
    currentStories.forEach(function(item) {
        displayItem(item);
    });
});

