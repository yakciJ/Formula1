const express = require('express');
const path = require('path');
const app = express();

var FrontEnd = __dirname+'/../FrontEnd';

module.exports = function (app) {
    app.use(express.urlencoded({extended: true}));
    app.get('/ket-qua', async (req,res) => {
            const query = 'SELECT * FROM raceresult WHERE race =1';
            const raceQuery = 'SELECT * FROM raceinfo WHERE id = 1';
            const con = require('./dbcon');
            con.query(raceQuery, (err, raceInfo) => {
                if (err) {
                    return res.send('Error: ' + err);
                }
                con.query(query, (err, results) => {
                    if (err) {
                        return res.send('Error: ' + err);
                    }
                    res.render(path.join(FrontEnd, 'RaceResults', 'raceresults.ejs'), { raceInfo: raceInfo[0], results });
                });
            });
    });
    app.get('/ket-qua2', async (req,res) => {
        const query = 'SELECT * FROM raceresult WHERE race =1';
        const raceQuery = 'SELECT * FROM raceinfo WHERE id = 1';
        const con = require('./dbcon');
        con.query(raceQuery, (err, raceInfo) => {
            if (err) {
                return res.send('Error: ' + err);
            }
            con.query(query, (err, results) => {
                if (err) {
                    return res.send('Error: ' + err);
                }
                res.render(path.join(FrontEnd, 'RaceResults', 'raceresults2.ejs'), { raceInfo: raceInfo[0], results });
            });
        });
});
    app.get('/ket-qua/:id', (req, res) => {
        const race = req.params.id; 
        const raceQuery = 'SELECT * FROM raceinfo WHERE id = ?';
        const resultQuery = 'SELECT * FROM raceresult WHERE race = ?';
        const con = require('./dbcon');
        con.query(raceQuery, [race], (err, raceInfo) => {
            if (err) {
                return res.send('Error: ' + err);
            }
            con.query(resultQuery, [race], (err, results) => {
                if (err) {
                    return res.send('Error: ' + err);
                }
                res.render(path.join(FrontEnd, 'RaceResults', 'raceresults.ejs'), { raceInfo: raceInfo[0], results });
            });
        });
    });
    app.get('/ket-qua2/:id', (req, res) => {
        const race = req.params.id; 
        const raceQuery = 'SELECT * FROM raceinfo WHERE id = ?';
        const resultQuery = 'SELECT * FROM raceresult WHERE race = ?';
        const con = require('./dbcon');
        con.query(raceQuery, [race], (err, raceInfo) => {
            if (err) {
                return res.send('Error: ' + err);
            }
            con.query(resultQuery, [race], (err, results) => {
                if (err) {
                    return res.send('Error: ' + err);
                }
                res.render(path.join(FrontEnd, 'RaceResults', 'raceresults2.ejs'), { raceInfo: raceInfo[0], results });
            });
        });
    });
}