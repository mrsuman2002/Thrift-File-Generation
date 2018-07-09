var thrift = require('thrift');
var CodechatSyc = require('./gen-nodejs/CodechatSyc');
var ttypes = require('./gen-nodejs/tutorial_types');
const assert = require('assert');



  var transport = thrift.TBufferedTransport;
  var protocol = thrift.TBinaryProtocol;
  var connection = thrift.createConnection("localhost", 9090, {
    transport : transport,
    protocol : protocol
  });


  connection.on('error', function(err) {
    assert(false, err);
  });
  var client = thrift.createClient(CodechatSyc, connection);

  client.ping(function(err, response) {
    console.log('ping()');

  });
  client.render('some text', 'a path', function(err, response) {
    console.log("client even works");
    console.log(response)
    connection.end();
  });

//close the connection once we're done
