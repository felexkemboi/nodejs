const mongoose = require('mongoose');

 var postSchema = mongoose.Schema({

     subject        : String,
     text           : String,

 });

 // create the model for users and expose it to our app
 module.exports = mongoose.model('Post', postSchema);