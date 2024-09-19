const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express();
const port = 6969;

var database = require('mysql');
var FrontEnd = __dirname+'/FrontEnd';

// Serve static files from the directories
app.use('/FrontEnd', express.static(path.join(__dirname, 'FrontEnd')));
app.use('/Image', express.static(path.join(__dirname, 'Image')));
app.use('/BackEnd', express.static(path.join(__dirname, 'BackEnd')))
// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'FrontEnd', 'Home', 'home.html'));
});
// To the tracks page
app.get('/duong-dua', (req, res) => {
    res.sendFile(path.join(FrontEnd, 'Tracks', 'tracks.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//Connect to database. Need: npm install mysql
var con = database.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306
});
app.get('/connect', (req, res) => {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
});