const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (_, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/about', (_, res) => {
  res.sendFile(path.join(__dirname, '/public/about.html'));
});

app.get('/contact-me', (_, res) => {
  res.sendFile(path.join(__dirname, '/public/contact-me.html'));
});

// Handle 404 errors
app.use((_, res) => {
  res.status(404).sendFile(path.join(__dirname, '/public/404.html'));
});

app.listen(8080);
console.log('Starting server on http://localhost:8080');
