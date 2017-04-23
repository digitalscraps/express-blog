'use strict';

var express = require('express');
var express = require('express'),
    posts = require('./mock/posts.json');

var app = express();

debugger;

app.get('/', function(req, res) {
    res.send("<h1>I am Bork</h1>")
})
app.get('/blog/:title?', function(req, res){
    debugger;
    var title = req.params.title;
    if (title === undefined) {
        //let search engigne know this page is under construction
        res.status(503);
        // render construction text for user
        res.send("This page is coming together")
    } else {
        var post = posts[title];
        res.send(post);
    }
});
app.listen(3000, function() {
    console.log("The frontend server is running on port 3000!")
});
