// commonjs-a.js
let data = require("./commonjs-b");

console.log("data", data);

if (true) {
  let data = require("./commonjs-b");
}
