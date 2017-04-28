
var express = require('express');
var fs=require('fs');
var app = express();
// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8081;


// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/'));

// set the home page route
/*app.get('/', function(req, res) {
    res.writeHeader(200, {"Content-Type": "text/html"});  
    res.write(html);  
    res.end(); 
});*/

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});