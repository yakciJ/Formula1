const express = require('express');
const path = require('path');
const app = express();

var FrontEnd = __dirname+'/../FrontEnd';
app.set("view engine", "ejs");

module.exports = function (app) {

    app.get('/ket-qua', async (req,res) => {
        //const con = require('./dbcon');
        try {

            res.render(path.join(FrontEnd, 'RaceResults', 'raceresults.ejs'));
        } catch (error) {
            console.error('Error while performing Query:' , err);
            res.status(500).send('Error while performing Query.');
        }
    })
}