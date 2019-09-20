#!usr/bin/node

const fs = require('fs'),
      http = require('http'),
      log = console.log;

var data = fs.readFileSync('./qr-code.jpg').toString('base64');
var html = '<!DOCTYPE html>'
+'<html>'
+ '<head>'
+  '<title>Document</title>'
+ '</head>'
+ '<body>'
+  '<img src="data:image/jpg;base64,' + data + '">'
+ '</body>'
+'</html>';

http.createServer((req,res)=>{
  res.end(html);
}).listen(8080);

//log(data);
