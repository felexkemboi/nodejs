const express = require('express');
  const app     = express();

app.get('/', (req, res) => {
     res.render('index');  // Renders template index.ejs
   })


module.exports = app    // Export our contoller