const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express();

//lấy db
const con = require('./db'); 

var FrontEnd = __dirname+'/../FrontEnd';
app.set("view engine", "ejs");

module.exports = function (app) {

    // test html
    app.get('/testhtml', (req, res) => {
        res.sendfile(path.join(FrontEnd, 'Tracks', 'tracks.html'));
    });

    // render tracks.ejs
    app.get('/duong-dua', (req,res) => {
        con.query('SELECT Name, BasicImage from tracks', function(err, result, fields) {
            if (err) {
                console.log('Error while performing Query.');
            } else {
                res.render(path.join(FrontEnd, 'Tracks', 'tracks.ejs'), {result: result});
            }
        });
    })

    app.get('/thay=ten-duong-dua', (req,res) => {
        res.render(path.join(FrontEnd, 'Tracks', 'track.ejs'));
    })
}
