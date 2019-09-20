#!/usr/bin/node

const msg = ['name','email','qq','mobile'];

var i = 0,
      me = {};
console.log(msg[i] + ':');
process.stdin.on('data',(data)=>{
    me[msg[i]] = data.slice(0,data.length-1).toString('utf-8');// slice 是将回车进行去掉
      i++;
      if(i == msg.length){
            console.log(me);
                process.exit();
                  
      }
        console.log(msg[i] + ':');

});
process.stdin.on('end',()=>{
    console.log(me);

});
