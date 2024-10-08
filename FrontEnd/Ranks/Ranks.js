// BackEnd/Ranks.js
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Thiết lập kết nối MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Thay bằng mật khẩu của bạn
    database: 'f1' // Thay bằng tên database của bạn
});

// Kết nối đến MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Định nghĩa endpoint để lấy dữ liệu
router.post('/get-data', (req, res) => {
    const { year } = req.body;
    const query = 'SELECT * FROM RANKS WHERE YEAR = ?';

    db.query(query, [year], (err, results) => {
        if (err) {
            console.error('Error querying database:', err.message);
            return res.status(500).json({ error: 'Database query failed' });
        }

        res.json(results);
    });
});

// Xuất router để sử dụng trong server.js
module.exports = router;
