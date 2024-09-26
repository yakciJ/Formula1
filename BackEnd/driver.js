function show_Section(section_Id) {
  document.querySelectorAll('body > main > section').forEach(function (section) {
    section.style.display = 'none';
  });
  document.querySelector('body > main #' + section_Id).style.display = 'block';
}

const db = require('./dbcon');
const express = require('express');
const app = express();
const path = require('path');


module.exports = function (app) {
  app.get('/driver', (req, res) => {
    res.sendFile(path.join(__dirname + '/../FrontEnd', 'Driver', 'driver.html'));
  });

  app.get('/driver/data', (req, res) => {
    db.query("SELECT * FROM DRIVER WHERE NAME='Max Verstappen'", (err, results) => {
      if (err) {
        console.log("Lỗi: "+ err); 
      }
      res.json(results);

    });
  });
}

