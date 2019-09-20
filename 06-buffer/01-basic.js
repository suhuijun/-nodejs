#!usr/bin/node

// 初始化对象 new Buffer()
 const log = console.log;
var buf1 = new Buffer(256);
 buf1[0] = 23;
log('buf1 length:',buf1.length);
log('buf2 content:',buf1);

// 循环初始化
for(var i = 0;i<buf1.length;i++) buf1[i] = i;
log('buf1 new content:',buf1);

// 切片填充操作
var buf2 = buf1.slice(246,257);
log('buf2 length:',buf2.length);
log('buf2 new content:',buf2);
buf2.fill(0);
log('buf2 fill content:',buf2);

// 数组进行初始化
var arr = ['a',0xBA,0xDF,0x00,0x00,255,10];
var buf3 = new Buffer(arr,'utf-8');
log('buf3 length:',buf3.length);
log('buf3 content:',buf3);

//字符串初始化
var buf4 = new Buffer('Hello World','utf-8');
log('buf4 length:',buf4.length);
log('buf4 content:',buf4);
log('buf4 string content:',buf4.toString('utf-8'));


//复制内容
 buf3.copy(buf4);
log('buf3 length:',buf3.length);
log('buf3 content:',buf3);
