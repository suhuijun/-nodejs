#!/usr/bin/node

process.stdin.resume();//默认是暂停的，需要resume使其恢复流动

process.on('SIGINT',()=>{//捕获当前进程接受的信息
    console.log('you have pressed Ctrl+C');
      process.exit();

})

process.on('SIGTSTP',()=>{
    console.log('you have pressed Ctrl+Z');

})
