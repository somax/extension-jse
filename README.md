# Extension-JSE

JavaScript Encrypt Extensions. Protect your code in the process of copying.

## install
```bash
npm i extension-jse

# or install globally
npm i -g extension-jse
```

## Usage

### cli

```bash
$ export JSE_KEY=<secret-key>
$ jse <src/code.js> [output/]
```

### in code
Pack your code
```js
const jse = require('extension-jse');

// in memory
let originCode = 'your-code';
jse.pack(originCode);

// package from file
let jsePackage = jse.packFromFile(__dirname +'path/to/code.js');

// write to file
jse.writeToFile(__dirname + '/jse/code.jse', jsePackage);
```

Use jse
```js
// enable 'require' to support 'jse' extension
require('extension-jse').enableExtension();

// use .jse like regular modules, the '.jse' is not necessary.
var code = require("./jse/code[.jse]");
```

```bash
$ export JSE_KEY=<secret-key>
$ node your-porject.js
```

### npm script

```js
"scripts": {
    "build": "jse  <src/code.js> [output/]",
}
```

```bash
$ export JSE_KEY=<secret-key>
$ npm run build
```
