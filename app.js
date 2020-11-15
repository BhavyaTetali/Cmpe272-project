var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!This is a Jenkins CI test!');
});
var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
