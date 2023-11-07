const express = require('express');

const app = express();
app.use(express.static('public'));


app.get('/about',(req, res) => {
    res.sendFile(__dirname + '/views/about.html')
});

app.get('/pic',(req, res) => {
    res.sendFile(__dirname + '/views/pic.html')
});

app.get('/home',(req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

app.listen(3000, () => console.log('servus') );