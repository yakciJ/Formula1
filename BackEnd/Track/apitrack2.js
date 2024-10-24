const express = require('express');
const app = express();
const path = require('path');


module.exports = function (app) {
  app.get('/track2', (req, res) => {
    res.sendFile(path.join(__dirname + '../../../FrontEnd', 'Driver', 'driver2.html'));
  });

  

  
}