var express = require('express');
var request = require('request')
var app = express();
var path = require('path')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/api', function( req, res) {
  request('https://api.brewerydb.com/v2/hops/?key=247b3351918ffe5b36f3d5a6eafbd7ef', function (error, response, body) { 
    if (!error && response.statusCode === 200) { 
      console.log(body); 
      res.send(body);
      var jsonString = request.responseText;
      console.log( jsonString )
    } 
   });
});

app.use(express.static('public'));


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});