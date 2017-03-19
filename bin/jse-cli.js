#!/usr/bin/env node
/**
 * @description 将指定文件加密到 JSE 格式
 * @example
 *   jse-cli <src/code.js> <dist/>
 */

const jse = require('../lib/jse');
const path = require('path');
const mkdirp = require('mkdirp');

let fileSrc = process.argv[2];
let dist = process.argv[3] || 'jse/'; 

if (fileSrc) {

	let result = jse.packFromFile(fileSrc);

	let filePath = path.parse(fileSrc);

	mkdirp.sync(dist);

	jse.writeToFile(dist + filePath.name + '.jse', result);

    console.log('done!');
} else {
    console.log('nothing to encrypt.')
}