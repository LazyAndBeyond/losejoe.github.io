var express = require("express");
var app = express();
var path = __dirname + '/pages/';

app.get('/', async (req, res) => {

res.sendFile(`${path}index.html`)


})


app.listen(50,function(){
  console.log("Live at Port 50");
});