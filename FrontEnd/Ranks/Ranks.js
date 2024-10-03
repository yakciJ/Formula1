console.log("testing");

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();

// Middleware
app.use(cors()); // Bật CORS (Cross-Origin Resource Sharing)
app.use(bodyParser.json()); // Phân tích dữ liệu JSON trong yêu cầu

// Thiết lập kết nối MySQL
const db = mysql.createConnection({
  server: 'localhost',     // Thay đổi tùy vào cấu hình MySQL của bạn
  user: 'root',      // Thay bằng tên người dùng MySQL
  password: '',  // Thay bằng mật khẩu MySQL
  database: 'rank'  // Thay bằng tên database bạn muốn kết nối
});

// Kết nối đến MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL database.');
});

// Endpoint API để lấy dữ liệu dựa trên năm
app.post('/api/get-data', (req, res) => {
  const { year } = req.body;

  // Câu truy vấn lấy dữ liệu từ MySQL theo năm
  const query = 'SELECT * FROM RANKS WHERE YEAR = ?';

  db.query(query, [year], (err, results) => {
    if (err) {
      console.error('Error querying database:', err.message);
      return res.status(500).json({ error: 'Database query failed' });
    }

    // Trả kết quả về cho frontend
    res.json(results);
  });
});

// Khởi động server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
