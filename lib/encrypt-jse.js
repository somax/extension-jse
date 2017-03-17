/**
 * @description 将指定文件加密到 JSE 格式
 * @example
 *   node encrypt-jse <src/code.js> <dist/>
 */

const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

let fileSrc = process.argv[2];
let dist = process.argv[3] || 'jse/';

// Nodejs encryption with CTR
let crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    key = process.env.JSE_KEY || 'eS*Df3DF2^$%';

function encrypt(text) {
    let cipher = crypto.createCipher(algorithm, key)
    let crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

if (fileSrc) {
    let filePath = path.parse(fileSrc);
    let fileString = fs.readFileSync(fileSrc).toString();

    fs.writeFileSync(dist + filePath.name + '.jse', zlib.gzipSync('JSE_' + encrypt(fileString)));

    console.log('done!');
} else {
    console.log('No file to encrypt.')
}
