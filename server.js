const express = require("express");
const https = require("https");
const fs = require("fs");
const db = require("./db/db.js")

const app = express();

app.use(express.static("public"));

let routes = ["/profile", "/about", "/customer", "/customerProfile", "/form", "/freelancer", "/freelancerProfile", "/orders"]

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

routes.forEach(route => {
    app.get(route, (req, res) => {
        res.sendFile(__dirname + "/public" + route + ".html");
    })
})

app.get("/api/test", (req, res) => {
    res.end(JSON.stringify({
        text: `${db.getUser(1)}`
    }));
})

app.listen(80, "5.253.61.170", () => {
    console.log("http is running at http://5.253.61.170:80")
});

https.createServer({
    key: fs.readFileSync("privkey.pem"),
    cert: fs.readFileSync("fullchain.pem"),
}, app).listen(443, "5.253.61.170", () => {
    console.log("https is running at https://5.253.61.170:443")
});