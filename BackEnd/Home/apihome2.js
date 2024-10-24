const express = require('express');
const app = express();
const path = require('path');


module.exports = function (app) {
  app.get('/home2', (req, res) => {
    res.sendFile(path.join(__dirname + '../../../FrontEnd', 'Home', 'home2.html'));
  });

  

  
}