var express = require('express');
var app = express();

var PORT = 3000


app.get('/', function(req, res){
    res.send('Hellow World!');
});

app.listen(PORT, function(){
    console.log("App listening on port 3000!");
});