#!usr/bin/node

const filename = process.argv[2],
        fs = require('fs'),
              buf = fs.readFileSync(filename),
                    log = console.log;
log('BMP width:',buf.readUInt32LE(18));
log('BMP Height:',buf.readUInt32LE(22));
log('color deapth:',buf.readUInt16LE(28));
