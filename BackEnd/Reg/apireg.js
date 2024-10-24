const express = require('express');
const app = express();
const path = require('path');


module.exports = function (app) {
  app.get('/reg', (req, res) => {
    res.sendFile(path.join(__dirname + '../../../FrontEnd', 'Reg', 'reg.html'));
  });
  app.get('/reg/check', (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    const re_password = req.query.re_password;
    //
    if (password != re_password) {
      return res.status(501).json({ message: 'Nhập lại mật khẩu chưa chính xác!' });

    }
    //
    const db = require('../dbcon');
    db.query("SELECT * FROM USER WHERE email = ?", [email], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      if (results.length == 0) {
        db.query("INSERT INTO USER (email, password) VALUES (?, ?)", [email, password], (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
          }
        });
        res.json({ success: true });
      } else {
        res.status(401).json({ message: 'Email đã tồn tại' });
      }
    });


  });
}