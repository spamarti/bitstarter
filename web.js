var express = require('express');
var app = express();
app.use(express.logger());
fs = require('fs');
app.get('/', function(request, response) {
fs.readFile('index.html', function (err, data) {
  if (err) throw err;
  response.send(new Buffer(data).toString());
});

 // response.send('Yog Ratova Bhog Ratova');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
