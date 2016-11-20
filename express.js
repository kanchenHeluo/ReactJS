var express = require('express');

var app = express();

//static web
app.use(express.static('public'))
//route
app.get('/', function(req, res){
    res.end('hello express');
})

//server
app.listen(9999, function afterlisten(){
    console.log('express running on the http://localhost:9999');
});
