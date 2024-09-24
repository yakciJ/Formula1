//ae lấy db ở đây
var database = require('mysql2');
var con = database.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3306,
    database: "f1"
});
module.exports =con;