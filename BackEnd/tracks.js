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
        try {
            const [result, fields] = await con.query('Select Name, BasicImage from tracks');
            res.render(path.join(FrontEnd, 'Tracks', 'tracks.ejs'), {result: result});
        } catch (error) {
            console.error('Error while performing Query:' , err);
            res.status(500).send('Error while performing Query.');
        }
    })

    app.get('/thay=ten-duong-dua', async (req, res) => {
        const con = require('./dbcon');
        try {
            const [result, fields] = await con.query('Select Name, BasicImage from tracks');
            res.render(path.join(FrontEnd, 'Tracks', 'track.ejs'));
        } catch (error) {
            console.error('Error while performing Query:' , err);
            res.status(500).send('Error while performing Query.');
        }
        
    })
    
}
