const express = require("express")
const app = express();
const port = 6969;

var database = require('mysql2');
var con = database.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "F1"
});

app.get('/', (req, res) => {
    con.query(`Select * from tracks`, function(err, result, fields){
        if(err){
            console.log('Error while performing Query.');
        } else{
            res.json(result);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});