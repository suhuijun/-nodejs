#!usr/bin/node

var len = process.argv.length;
var arr = process.argv;
var log = console.log;

//for(var i = 2;i<len;++i){
//  console.log(`${i}:argv - ${process.argv[i]}`);
//}

if(arr[2] == "--help"||arr[2] == "-h"||len === 2){
  log("说明");
}
else if(len === 3){
  log(arr[2]+"="+eval(arr[2]));
}
else{
  log("说明");
}
