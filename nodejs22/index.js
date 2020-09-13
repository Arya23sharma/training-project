const express = require ('express');
const bodyParser = require ('body-parser');
  
const {mongoose} = require('./db.js');
var pageController = require('./controllers/pageController');

var app = express();
app.use(bodyParser.json());

app.listen(4200,  function(){
    console.log('server running');

})
app.use('/page',pageController);    