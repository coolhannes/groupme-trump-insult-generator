var HTTPS = require('https');
var HTTP = require('http');

var generator = require('./generator.js')

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      trumpCommand = '/trump';

  var name;

  if(request.text &&
     request.text.length > trumpCommand.length &&
     request.text.substring(0, trumpCommand.length) === trumpCommand) {
    this.res.writeHead(200);
    name = request.text.substring(trumpCommand.length + 1);
    postMessage(generator.generateInsult(name));
    this.res.end();
  } else {
    this.res.writeHead(200);
    this.res.end();
  }
}

function encodeQuery(query) {
  return query.replace(/\s/g, '+');;
}

function postMessage(message) {
  var botResponse, options, body, botReq;

  botResponse = message;

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        console.log('202 response');
      } else {
        console.log('rejecting bad status code from groupme:' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

exports.respond = respond;