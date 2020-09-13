const mongoose = require('mongoose');

var Page = mongoose.model('Page',{
    name: {type : String },
    url: {type: String},
});

module.exports = {
    Page: Page
} 