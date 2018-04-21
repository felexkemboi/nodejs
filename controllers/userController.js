const express = require('express');
const app     = express();
const Post = require('../models/post');


app.get('/', (req, res) => {
     res.render('index');  // Renders template index.ejs
   })

app.get('/new', (req, res) => {
    res.render('new', {error: "", success: ""});
  })


app.post('/new', (req, res) => {
     let subject = req.body.subject;
     let text =    req.body.text;
     

     let post = new Post();
     post.subject = subject;
     post.text = text;
     post.save((err, post) => {
        if(err) {
          res.render('new', {error: err,success:""});
        }else{
          res.render('new', {error :"", success: "Post Added Succesfully"});
        }
      })

    })

app.get('/all', (req, res) => {
  Post.find({}, (err, posts) => {
    if(err) throw err;
    res.render('post', {posts: posts});
 })
})

module.exports = app    // Export our contoller