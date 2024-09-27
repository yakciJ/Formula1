const express = require('express');
const path = require('path');
const app = express();

var FrontEnd = __dirname+'/../FrontEnd';
app.set("view engine", "ejs");

module.exports = function (app) {

    // test html
    app.get('/testhtml', (req, res) => {
        res.sendfile(path.join(FrontEnd, 'Tracks', 'tracks.html'));
    });

    // render tracks.ejs
    app.get('/duong-dua', async (req,res) => {
        const con = require('./dbcon');
        con.query('Select ID, Name, BasicImage from tracks', function(err, result, fields){
            if(err){
                console.log('Error while performing Query.');
            } else{
                res.render(path.join(FrontEnd, 'Tracks', 'tracks.ejs'), {result: result});
            }
        });
    })

    app.get('/duong-dua/:id', (req, res) => {
        console.log(req.params.id);
        const con = require('./dbcon');
        con.query(`Select * from tracks Where ID = '${req.params.id}'`, function(err, result, fields){
            if(err){
                console.log('Error while performing Query.');
            } else{
                res.render(path.join(FrontEnd, 'Tracks', 'track.ejs'), {result: result});
            }
        });
    })
}
