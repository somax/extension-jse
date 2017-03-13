/**
 * @description 这是用来测试加密的代码
 */
'use strict';

const util = require('util');

// 测试全局变量输入
global.test = 'global test';

var _test = 'inner test';

// 测试安全沙盒功能植入
console.log('exports:', !!exports,
    '\nprocess:', !!process,
    '\n__filename:', __filename,
    '\n__dirname:', __dirname)

var code = {
    _say: function _say(hi) {
        util.log('~Yeah! ✌️' + hi);
    }
}

// 🎯 使用 _call 函数，防止在使用 console.log 打印出内存中的源码
function _call(funcName) {
    var func = code[funcName];
    return function() {
        return func.apply(func, arguments)
    }
}

module.exports = {
    say: _call('_say')
}
