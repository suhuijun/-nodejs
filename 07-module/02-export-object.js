#!usr/bin/node

var duixiang = {
  'area':function area(r){
    return Math.PI * r * r;
  },
  'zhouchang':function zhouchang(r){
    return 2 * Math.PI * r;
  },
  'zhijing':function zhijing(r){
    return 2 * r;
  }
}

console.dir(module);
module.exports = duixiang;
