/**
 * 添加对 JSE 格式的支持
 * JSE 格式是自定义的加密脚本文件，
 * 你可以使用 require('./code<.jse>') 加载加密脚本
 * 
 */
const fs = require('fs');
const vm = require('vm');

let crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    key = process.env.JSE_KEY || 'eS*Df3DF2^$%';

require.extensions[".jse"] = function(module) {

    let fileStr = fs.readFileSync(module.filename).toString().replace(/^JSE_/, '');
    // console.log('jse code:', fileStr)
    let decipher = crypto.createDecipher(algorithm, key)
    let dec = decipher.update(fileStr, 'hex', 'utf8')
    dec += decipher.final('utf8');

    // 复制全局方法到安全沙盒中
    let sandbox = {
        require: require,
        __filename: __filename,
        __dirname: __dirname,
        module: module,
        exports: exports
    }
    Object.assign(sandbox, global)

    // console.log('origin code:',dec);

    // 在安全沙盒中执行代码
    vm.runInNewContext(dec, sandbox);
};
