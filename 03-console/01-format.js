#!usr/bin/node

const user = {
  name:"suhuijun",
  age:20,
  qq:123456
};

const log = console.log;

log("name:%s",user.name);
log("age:%d",user.age);
log("qq:%j",user.qq);

console.error("error:something wrong!");
