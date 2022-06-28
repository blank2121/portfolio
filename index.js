var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname + '/views')));
app.set('view engine', 'ejs');
app.get("/", function (req, res) {
    res.sendFile("C:/Users/admin/Desktop/udemy js html css course/portfolio/views/home.html");
});
app.listen(3000);
