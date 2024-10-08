var cluster = require('cluster');
// Make server reset every time it crash.
if (cluster.isMaster) {

    // Count the machine's CPUs
    var crashed = 0;
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    cluster.on('exit', function (worker) {
        crashed++;
        // Replace the dead worker,
        // we're not sentimental
        console.log('Server crashed times %d :(. Reset server!', crashed);
        cluster.fork();
    });
}
// Bat dau code trong else tu day. Ke phan tren di.
else {
    const express = require('express');
    const path = require('path');
    const app = express();
    const port = 6969;
    
    const cors = require('cors');
    const bodyParser = require('body-parser');

    // Cho phép FE và BE chạy cùng nhau dù khác port
    app.use(cors());
    app.use(bodyParser.json()); // Phân tích dữ liệu JSON trong yêu cầu

    // Serve static files from the directories
    app.use('/FrontEnd', express.static(path.join(__dirname, 'FrontEnd')));
    app.use('/Image', express.static(path.join(__dirname, 'Image')));
    app.use('/BackEnd', express.static(path.join(__dirname, 'BackEnd')));

    // Serve the main HTML file
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'FrontEnd', 'Home', 'home.html'));
    });



    // Start the server

    // Gọi file Ranks.js
    const ranksRoutes = require(path.join(__dirname, '/FrontEnd/Ranks/Ranks.js'));
    app.use('/api', ranksRoutes); // Đặt prefix cho các route từ Ranks.js


    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });

    require(path.join(__dirname, '/BackEnd/tracks.js'))(app);
    require(path.join(__dirname, '/BackEnd/raceresults.js'))(app);
    require(path.join(__dirname, '/BackEnd/Driver/apidriver.js'))(app);
    require(path.join(__dirname, '/BackEnd/Team/apiteam.js'))(app);
}

