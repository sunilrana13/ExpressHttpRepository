const hostname = "nodeapp.com";
const port = "3000";

const http = require("http");
const express = require("express");
//const morgan = require("morgan");

const app = express();
//app.use(morgan("dev"));
app.use(express.static("public"));
app.use((req, res, next) => {
    //console.log(req.headers);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html")
    res.end("<html><body> Express server is working!!!!</body></html>")
});

const server = http.createServer(app);
server.listen(port, hostname);
