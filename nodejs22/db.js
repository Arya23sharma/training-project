const mongoose = require('mongoose');
const {json} = require ('body-parser');

mongoose.connect("mongodb://localhost:27017/arya",{ useNewUrlParser:true , useUnifiedTopology:true },function(err){
    if(!err)
    
    console.log("connected");
   
    else
   
    console.log("er......=" +JSON.stringify(err, undefined, 2));
 
})
 
module.exports = mongoose;