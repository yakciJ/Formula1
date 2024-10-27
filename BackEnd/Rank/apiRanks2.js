const express = require('express');
const app = express();
const path = require('path');


module.exports = function (app) {
  app.get('/ranks/check', (req, res) => {
    const db = require('../dbcon');
    const query = 'SELECT * FROM RANKS ORDER BY POSITION';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving data from database');
            return;
        }
        res.json(results);
    });
  });
  app.get('/ranks/fix', (req, res) => {
    const pts = req.query.pts;
    const drv= req.query.drv;
    const ntl= req.query.ntl;
    const car= req.query.car;
    const pn= req.query.pn;
    
    const db = require('../dbcon');

    const query = 'UPDATE RANKS SET DRIVER = ?,NATIONALITY = ?,CAR = ?,POINTS = ? WHERE POSITION = ?';
    db.query(query,[drv, ntl,car,pn,pts], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving data from database');
            return;
        }
        res.json(results);
    });
  });
  app.get('/ranks/delete', (req, res) => {
    const pts = req.query.pts;
    
    const db = require('../dbcon');

    const query = 'DELETE FROM RANKS WHERE POSITION = ?';
    db.query(query,[pts], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving data from database');
            return;
        }
        res.json(results);
    });
  });
  app.get('/ranks/add', (req, res) => {
    const pts = req.query.pts;
    const drv= req.query.drv;
    const ntl= req.query.ntl;
    const car= req.query.car;
    const pn= req.query.pn;
    
    const db = require('../dbcon');

    const query = 'INSERT INTO RANKS(POSITION,DRIVER,NATIONALITY,CAR,POINTS) VALUE (?,?,?,?,?)';
    db.query(query,[pts,drv, ntl,car,pn], (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving data from database');
            return;
        }
        res.json(results);
    });
  });

}