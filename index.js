const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello World</h1>');
  res.end();
});

server.listen(8080, () => {
  console.log('Server is running...');
});
