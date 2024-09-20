var cluster = require('cluster');
// Make server reset every time it crash.
if(cluster.isMaster){

    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    cluster.on('exit', function (worker) {

        // Replace the dead worker,
        // we're not sentimental
        console.log('Worker %d died :(', worker.id)+'. Reset server!';
        cluster.fork();
    
    });
} 
// Bat dau code trong else tu day. Ke phan tren di.
else
{
    const exp = require('constants');
    const express = require('express');
    const path = require('path');
    const app = express();
    const port = 6969;
    
    var database = require('mysql');
    var FrontEnd = __dirname+'/FrontEnd';
    
    // Serve static files from the directories
    app.use('/FrontEnd', express.static(path.join(__dirname, 'FrontEnd')));
    app.use('/Image', express.static(path.join(__dirname, 'Image')));
    app.use('/BackEnd', express.static(path.join(__dirname, 'BackEnd')))
    // Serve the main HTML file
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'FrontEnd', 'Home', 'home.html'));
    });
    
    
    // Start the server
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
    
    // Connect to backend tracks.js
    require(path.join(__dirname, '/BackEnd/tracks.js'))(app);
}

