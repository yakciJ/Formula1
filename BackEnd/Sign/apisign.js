const express = require('express');
const app = express();
const path = require('path');


module.exports = function (app) {
  app.get('/sign', (req, res) => {
    res.sendFile(path.join(__dirname + '../../../FrontEnd', 'Sign', 'sign.html'));
  });
}