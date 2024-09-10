const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'FrontEnd' directory
app.use(express.static(path.join(__dirname, 'FrontEnd')));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'FrontEnd', 'home.html'));
});

// API route to serve JSON data
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the back-end!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});