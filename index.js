//external dependencies
var express = require('express');
var bodyParser = require('body-parser');

//app specific variables
var app = express();
var port = 3000;

app.use(express.static('assets'))
app.use(bodyParser.json())

var messages = [];

app.get('/messages', function (req, res, next) {
  res.status(200).json({ messages: messages });
});

app.post('/messages', function (req, res, next) {
  console.log(req.body);
  messages.push({ message: req.body.message, time: new Date () });
  res.status(200).json({messages: messages});
});

app.listen(port);
