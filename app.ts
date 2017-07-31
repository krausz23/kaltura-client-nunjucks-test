let nunjucks = require('nunjucks');
let kaltura = require('kaltura-client');

var res = nunjucks.renderString('Hello {{ username }}', { username: 'James' });
console.log(res);
