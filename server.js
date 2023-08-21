import http from 'http';
import routing from './routing';


let server = new http.Server(function(req, res) {
    let jsonString = '';
    res.setHeader('Content-Type', 'application/json');
    req.on('data', (data) => {
        jsonString += data;
    });

    req.on('end', () => {
        routing.define(req, res, jsonString);
    });
});
server.listen(8000, 'localhost');