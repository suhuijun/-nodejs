#!/usr/bin/node

const http = require('http');
http.createServer((req,res) =>{
  res.end('Hello World!');
}).listen(8080)

