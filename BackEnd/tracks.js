const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express();


var database = require('mysql');
var FrontEnd = __dirname+'/../FrontEnd';

//Connect to database. Need: npm install mysql
var con = database.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "f1"
});

module.exports = function (app) {
    app.get('/test', function(req, res) {
        res.json(200, {'test': 'it works!'})
    });

    // To the tracks page
    app.get('/duong-dua', (req, res) => {
        res.sendFile(path.join(FrontEnd, 'Tracks', 'tracks.html'));
    });

    // Connect to db
    app.get('/connect', (req, res) => {
        con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
        });
    });
        con.query('SELECT * from tracks', function(err, result, fields) {
            if (err) {
                console.log('Error while performing Query.');
            } else {
                res.send(result);
            }
        });
    })
}
