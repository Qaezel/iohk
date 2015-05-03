var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
// var express = require('express');
// var fs = require('fs');

// var app = express.createServer(express.logger());

// app.get('/', function(request, response) {
//   var file = fs.readFileSync("index.html");
//   response.send(file.toString());
// });

// var port = process.env.PORT || 8080;
// app.listen(port, function() {
//   console.log("Listening on " + port);
// });
