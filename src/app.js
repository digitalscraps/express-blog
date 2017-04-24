'use strict';

var express = require('express');
var express = require('express'),
    posts = require('./mock/posts.json');

var app = express();
app.set ('view engine', 'pug');
app.set ('views', __dirname + '/views')
debugger;

app.get('/', function(req, res) {
    res.render('index')
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
        // find by post title or leave empty
        var post = posts[title] || {};
        res.render('post', { post: post});
    }
});
app.listen(3000, function() {
    console.log("The frontend server is running on port 3000!")
});
