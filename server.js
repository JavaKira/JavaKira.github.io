require("dotenv").config();
const express = require("express");
const https = require("https");
const fs = require("fs");
const db = require("./db/db.js");

const app = express();

app.use(express.static("public"));

let routes = ["/profile", "/about", "/customer/customerProfile", "/form", "/freelancer/freelancerProfile", "/freelancer/services"];

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/customer", (req, res) => {
    res.sendFile(__dirname + "/public/customer/customer.html");
});

app.get("/freelancer", (req, res) => {
    res.sendFile(__dirname + "/public/freelancer/freelancer.html");
});

routes.forEach(route => {
    app.get(route, (req, res) => {
        res.sendFile(__dirname + "/public" + route + ".html");
    })
});

app.get("/freelancer/tasks/:call_data", (req, res) => {
    res.sendFile(__dirname + "/public/freelancer/tasks.html");
});

app.get("/freelancer/profile/:id", (req, res) => {
    res.sendFile(__dirname + "/public/freelancer/otherProfile.html");
});

app.get("/api/user/:id", (req, res) => {
    const id = req.params.id;
    db.getUser(id).then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(400).send(err.message);
    })
});

app.get("/api/tasks/:service_name", (req, res) => {
    const call_data = req.params.service_name;
    db.getTasks(call_data).then(result => {
        res.status(200).send(result);
    }).catch(err => {
        res.status(400).send(err.message);
    })
});

app.get("/api/services", (req, res) => {
    db.getServices().then(result => {
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
            https.get(`https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${JSON.parse(data).result.file_path}`, response => {
                res.setHeader("Content-Type", "image/jpeg");
                response.pipe(res);
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