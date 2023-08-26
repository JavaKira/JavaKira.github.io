require("dotenv").config();
const express = require("express");
const https = require("https");
const fs = require("fs");
const db = require("./db/db.js");

const app = express();

app.use(express.static("public"));

let routes = ["/profile", "/about", "/customer", "/customerProfile", "/form", "/freelancer", "/freelancerProfile", "/orders"];

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

routes.forEach(route => {
    app.get(route, (req, res) => {
        res.sendFile(__dirname + "/public" + route + ".html");
    })
});

app.get("/api/user/:id", (req, res) => {
    const id = req.params.id;
    db.getUser(id).then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(400).send(err.message);
    })
});

app.get("/api/file/:id", (req, res) => {
    const id = req.params.id;
    https.get(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/getFile?file_id=${id}`, response => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            https.get(`https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${JSON.parse(data).file_path}`, response => {
                let data = '';

                response.on('data', (chunk) => {
                    data += chunk;
                });

                response.on('end', () => {
                    res.status(200).sendFile(data);
                });
            })
        });
    })
});

app.listen(process.env.HTTP_PORT, process.env.HOSTNAME, () => {
    console.log(`http is running at http://${process.env.HOSTNAME}:${process.env.HTTP_PORT}`)
});

https.createServer({
    key: fs.readFileSync("privkey.pem"),
    cert: fs.readFileSync("fullchain.pem"),
}, app).listen(process.env.HTTPS_PORT, process.env.HOSTNAME, () => {
    console.log(`https is running at https://${process.env.HOSTNAME}:${process.env.HTTPS_PORT}`)
});