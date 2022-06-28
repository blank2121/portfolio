const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname + '/views')))

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.sendFile("C:/Users/admin/Desktop/udemy js html css course/portfolio/views/home.html");
});

app.listen(3000);