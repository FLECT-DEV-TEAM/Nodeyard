/*
  postinstall.js
*/

var execSync = require('child_process').execSync;

var env = process.env.NODE_ENV;

if (env === 'production') {
  var result = execSync('npm run build').toString();
  console.log(result);
}
