#!/usr/bin/node

const obj = require('./03-export-all'),
      log = console.log;

log(obj.pi);
log(obj.circle(10).area());

var c = new obj.Circle(20);
log(c.diameter());