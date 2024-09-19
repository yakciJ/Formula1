const express = require('express'); // thư viện ẽxpress để tạo ứng dụng web
const path = require('path');       // thư viện để làm việc đường dẫn
const app = express();              // ứng dụng express
const port = 3001;                  // cổng

// đường dẫn

app.use('/FrontEnd',express.static(path.join(__dirname,'FrontEnd')));

app.use('/BackEnd',express.static(path.join(__dirname,'BackEnd')));

app.use('/Image',express.static(path.join(__dirname,'Image')));
//
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'FrontEnd','Home', 'home.html'));
});



// API route to serve JSON data
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the back-end!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});