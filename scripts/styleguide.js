var path = require('path');
var fs = require('fs');
var mdcss = require('mdcss');

var src = path.resolve(__dirname, '../dist/public/stylesheets/style.css');
var css = fs.readFileSync(src, 'utf-8');


mdcss.process(css, {
  examples: {
    css: [src]
  }
}).then(() => {
  console.log('Generate Success.');
}).catch((error) => {
  console.error(error);
});
