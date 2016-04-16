var http = require('http');
var director = require('director');

var bot = require('./bot.js');


var router = new director.http.Router({
  '/': {
    'post': bot.respond,
    'get': ping
  }
});

var server = http.createServer(function(req, res) {
  req.chunks = [];
  req.on('data', function(chunk) {
    req.chunks.push(chunk.toString());
  });

  router.dispatch(req, res, function(err) {
    res.writeHead(err.status, {"Content-Type": "text/plain"});
    res.end(err.message);
  });
});

var port = Number(process.env.PORT || 5000);
server.listen(port);

function ping() {
  this.res.writeHead(200);
  this.res.end("Hey, I'm the Donald Trump Insult generator.");
}