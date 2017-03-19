let jse = require('./lib/jse');
jse.enableExtension = require('./lib/extensions-jse').enable;
module.exports = jse;