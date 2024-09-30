const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3306;


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'f1'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected...');
});


app.get('/api/schedule', (req, res) => {
    let sql = 'SELECT * FROM F1_Schedule';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});