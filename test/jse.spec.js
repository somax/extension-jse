const jse = require('..');

let originCode = 'console.log(\'this is test code\')';

console.log(
	'it shoud be same:',
	jse.unpack(jse.pack(originCode)) === originCode
);

let jsePackage = jse.packFromFile(__dirname + '/src/code.js');

jse.writeToFile(__dirname + '/jse/code.jse', jsePackage);


jse.enableExtension();

var code = require("./jse/code.jse");

code.say('你好！')


console.log('>>',code)
console.log('>>',code.say)
console.log('>>',test)
