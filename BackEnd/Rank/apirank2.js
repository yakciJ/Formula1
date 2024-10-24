const express = require('express');
const app = express();
const path = require('path');

odule.exports = function (app) {
    app.get('/rank2', (req, res) => {
        res.sendFile(path.join(__dirname + '../../../FrontEnd', 'Rank2', 'rank2.html'));
      });
}
