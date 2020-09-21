const http = require('http');
const url = require('url');
const fs = require('fs');

function renderhtml(filepath, res) {
  fs.readFile(filepath, (err, data) => {
    if (err) {
      res.writeHead(504, { 'Content-Type': 'text/html' });
      return res.end("<h1>504 You shouldn't be seeing this</h1>");
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}

http
  .createServer((req, res) => {
    const query = url.parse(req.url);

    switch (query.pathname) {
      case '/':
        renderhtml('./index.html', res);
        break;
      case '/about':
        renderhtml('./about.html', res);
        break;
      case '/contact-me':
        renderhtml('./contact-me.html', res);
        break;
      default:
        renderhtml('./404.html', res);
    }
  })
  .listen(8080);
