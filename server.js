const express = require('express');

const app = express();

app.use(express.static('public'));

let routes = ["/profile", "/about", "/customer", "/customerProfile", "/form", "/freelancer", "/freelancerProfile", "/orders"]

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

routes.forEach(route => {
    app.get(route, (req, res) => {
        res.sendFile(__dirname + '/public' + route + '.html');
    })
})

app.listen(8000, '5.253.61.170', () => {
    console.log(`Server running at 5.253.61.170:8000`);
});