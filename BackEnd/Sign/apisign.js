const express = require('express');
const app = express();
const path = require('path');


module.exports = function (app) {
  app.get('/sign', (req, res) => {
    res.sendFile(path.join(__dirname + '../../../FrontEnd', 'Sign', 'sign.html'));
  });

  // window.location.href = `/sign/check?email=${email}&password=${password}`;

  app.get('/sign/check', (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    const db = require('../dbcon');
    db.query("SELECT * FROM USER WHERE email = ? AND password=?", [email, password], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      if (results.length > 0) {
        res.json({ success: true });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    });
  });


}