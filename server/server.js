const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Request received. URL: ' + req.url);

  let name = 'unknown';
  try {
    name = req.url.split('?')[1].split('=')[1];
  } catch (e) { }
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.write(`{ "greeting": "Hi ${name}!" }`);
  res.end();
});

server.listen(80);

console.log('server online');
