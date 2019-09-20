#!usr/bin/node

if(process.argv.length !== 4){
    console.log('请输入正确的参数个数');
      process.exit(-1);

}
const name = process.argv[2],
            pwd = process.argv[3];
if(name == '' || pwd == ''){
    console.log('请输入正确的参数！');
      process.exit(-1);

}
var str = name + ':' + pwd;
var buf = new Buffer(str);
console.log("base64 content:",buf.toString('base64'));
