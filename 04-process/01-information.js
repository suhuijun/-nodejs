#!usr/bin/node

const log = console.log;

var cpu = process.arch;
var sys = process.platform;
var obj = process.pid;
var dir = process.argv[1];

var mU = process.memoryUsage();

var e = process.env;

console.log(sys);
console.log(cpu);
log(obj);
log(dir);
log(mU);
log(e);

process.stdin.pause;
