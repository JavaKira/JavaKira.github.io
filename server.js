import http from 'http';
import routing from './routing/index.js';


let server = new http.Server(function(req, res) {
    console.log("request");
    let jsonString = '';
    res.setHeader('Content-Type', 'application/json');
    req.on('data', (data) => {
        jsonString += data;
    });

    req.on('end', () => {
        routing.define(req, res, jsonString);
    });
});

server.listen(8000, 'localhost', () => {
    console.log(`Server running at localhost:8000`);
});