
const express = require('express');
const app = express();
const path = require('path');


module.exports = function (app) {
  app.get('/driver2', (req, res) => {
    res.sendFile(path.join(__dirname + '../../../FrontEnd', 'Driver', 'driver2.html'));
  });

  

  app.get('/driver2/data', (req, res) => {
    const db = require('../dbcon');
    const driverName = req.query.name;
    db.query("SELECT * FROM DRIVER WHERE NAME = ?",[driverName], (err, results) => {
      if (err) {
        console.log("Có lỗi: "+ err); 
      }
      res.json(results);
      
    });
  });
}



