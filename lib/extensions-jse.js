/**
 * 添加对 JSE 格式的支持
 * JSE 格式是自定义的加密脚本文件，
 * 你可以使用 require('./code<.jse>') 加载加密脚本
 */

const fs = require('fs');
const vm = require('vm');

const jse = require('./jse');

function _enable(){
  require.extensions[".jse"] = function(module) {

      // 复制全局方法到安全沙盒中
      let sandbox = {
          require: require,
          __filename: __filename,
          __dirname: __dirname,
          module: module,
          exports: exports
      }
      Object.assign(sandbox, global);

      // 在安全沙盒中执行代码
      vm.runInNewContext(jse.unpackFromFile(module.filename), sandbox);
  };  
}


module.exports = {
    enable: _enable
}
