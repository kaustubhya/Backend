// console.log("Hi");

// console.log(200/4);


// console.log("Hi there");

// console.log("Hey there");

// console.log("Hey there");



// making servers in backend

// const http = require("http");

// // importing file based module
// const gfName = require("./features");
import http from "http";
import gfName from "./features.js";
import { gfName2 } from "./features.js";

console.log(gfName);
const server = http.createServer((req,res) => {
    // console.log(req.url);
    // res.end("<h1>Noice</h1>")

    // Routing
    if(req.url==="/about") {
        res.end("<h1>About Page</h1>");
    }

    else if(req.url==="/") {
        res.end("<h1>Home Page</h1>");
    }

    else if(req.url==="/contact") {
        res.end("<h1>Contact Page</h1>");
    }
    else {
        res.end("<h1>Error 404: Page Not Found</h1>");

    }
});

// listening on server - getting server output

server.listen(5000, () => {
    console.log("Server is Working Fine");
});
