function show_Section(section_Id) {
  document.querySelectorAll('body > main > section').forEach(function (section) {
    section.style.display = 'none';
  });
  document.querySelector('body > main #' + section_Id).style.display = 'block';
}

const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'wquqwyresw982',
});

db.connect((err) => {
  if (err) {
    console.error('Kết nối thất bại: ', err.stack);
    return;
  }
  console.log('Đã kết nối đến cơ sở dữ liệu với id: ' + db.threadId);
});








