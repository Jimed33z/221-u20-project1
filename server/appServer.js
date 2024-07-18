const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(express.static('client/public'));

app.use(bodyParser.json({ type: 'application/json'}));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})

})

app.get('/feed', function(req, res){
    res.sendFile('feed.html', {root: './client/views'})
})

const feedRoutes = require('./routes/feedRoutes')
app.use("/api/currentStories", feedRoutes)


app.listen(1337,() => console.log('Listening on port 1337.'))





/*
window.addEventListener("load" , () => {
    console.log("load function")
    fetch('/api/feedItems').then((res) => {
        res.json().then((data) => {
            console.log(data)
            for(let i=0; i<data.length i++) {
                console.log(data[i]);
                displayFeed(data[i]);
            }

        })
    })
});
*/

    



