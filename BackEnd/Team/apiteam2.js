
const express = require('express');
const app = express();
const path = require('path');


module.exports = function (app) {
  app.get('/team2', (req, res) => {
    res.sendFile(path.join(__dirname + '../../../FrontEnd', 'Team', 'team2.html'));
  });

  app.get('/team2/data', (req, res) => {
    const db = require('../dbcon');
    const teamName = req.query.name;
    db.query("SELECT * FROM DRIVER LEFT JOIN TEAM ON DRIVER.TEAM_NAME = TEAM.TEAM_NAME WHERE TEAM.TEAM_NAME =? ", [teamName], (err, results) => {
      if (err) {
        console.log("Có lỗi: " + err);
      }
      res.json(results);

    });
  });

}