const express = require('express');
const path = require('path');
const app = express();

var FrontEnd = __dirname+'/../FrontEnd';

module.exports = function (app) {
    app.use(express.urlencoded({extended: true}));
    app.get('/ket-qua', async (req,res) => {
        
            res.render(path.join(FrontEnd, 'RaceResults', 'raceresults.ejs'));
            
            /*const con = require('./dbcon');
            
            con.connect(function(error){
                if(error) console.log(error);
                const sql ='SELECT * FROM raceresult';
                con.query(sql, function(error, results){
                    if (error) console.log(error); 
                    console.log(results);
                });
            }); 
            /*res.render(path.join(FrontEnd, 'RaceResults', 'raceresults.html'), { results: results });
            console.log(results);*/
    });
    app.post('/ket-qua', (req, res) => {
        const race = req.body.race; 
        const query = 'SELECT * FROM raceresult WHERE race = ?';
        const con = require('./dbcon');
        con.query(query, [race], (err, results) => {
            if (err) {
                return res.send('Error: ' + err);
            }
            console.log (results);
        });
    });
   
    /*app.post('/ket-qua', async(req, res) => {
        const con = require('./dbcon');
        const selectedTrack = req.body.track;
        const sql ='SELECT * FROM raceresult WHERE RACE = ?';
        con.query(sql, [selectedTrack],(err, results, fields)=>{
            if (err) {
                console.error('Error while performing Query:', err);
                return res.status(500).send('Error while performing Query.');
            }
            res.render(path.join(FrontEnd, 'RaceResults', 'raceresults.html'), { results: results });
            console.log(results);
        });
    });*/
}