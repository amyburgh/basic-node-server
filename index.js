import { createServer } from 'http';
import url from 'url';
import fs from 'fs';
import path from 'path';

const hostname = 'localhost';
const port = 8080;

const type = {
  '.html': 'text/html',
  '.css': 'text/css',
  '': 'text/plain',
};

const server = createServer((req, res) => {
  let pathname = `.${req.url}`;
  if (pathname === './') pathname = './index.html';

  const ext = path.parse(pathname).ext;
  if (ext === '') pathname += '.html';

  fs.readFile(pathname, (err, data) => {
    if (err) {
      fs.readFile('./404.html', (err404, data404) => {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(data404);
      });
    } else {
      res.writeHead(200, { 'Content-Type': `${type[ext]}` });
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
