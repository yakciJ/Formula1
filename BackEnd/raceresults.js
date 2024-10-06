const express = require('express');
const path = require('path');
const app = express();

var FrontEnd = __dirname+'/../FrontEnd';

module.exports = function (app) {
    app.use(express.urlencoded({extended: true}));
    app.get('/ket-qua', async (req,res) => {
            const query = 'SELECT * FROM raceresult WHERE race =1';
            const con = require('./dbcon');
            con.query(query, (err, results) => {
                if (err) {
                    return res.send('Error: ' + err);
                }
                res.render(path.join(FrontEnd, 'RaceResults', 'raceresults.ejs'), { results });
            });
    });
    app.post('/ket-qua', (req, res) => {
        const race = req.body.race; 
        const query = 'SELECT * FROM raceresult WHERE race =?';
        const con = require('./dbcon');
        con.query(query, [race], (err, results) => {
            if (err) {
                return res.send('Error: ' + err);
            }
            res.render(path.join(FrontEnd, 'RaceResults', 'raceresults.ejs'), { results });
        });
    });
}