const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.listen(port, hostname () => {
  //Server is listening on port 1245
});

module.exports = app;
