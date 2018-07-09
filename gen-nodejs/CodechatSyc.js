//
// Autogenerated by Thrift Compiler (0.11.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;


var ttypes = require('./tutorial_types');
//HELPER FUNCTIONS AND STRUCTURES

var CodechatSyc_ping_args = function(args) {
};
CodechatSyc_ping_args.prototype = {};
CodechatSyc_ping_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CodechatSyc_ping_args.prototype.write = function(output) {
  output.writeStructBegin('CodechatSyc_ping_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CodechatSyc_ping_result = function(args) {
};
CodechatSyc_ping_result.prototype = {};
CodechatSyc_ping_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CodechatSyc_ping_result.prototype.write = function(output) {
  output.writeStructBegin('CodechatSyc_ping_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CodechatSyc_render_args = function(args) {
  this.text = null;
  this.path = null;
  if (args) {
    if (args.text !== undefined && args.text !== null) {
      this.text = args.text;
    }
    if (args.path !== undefined && args.path !== null) {
      this.path = args.path;
    }
  }
};
CodechatSyc_render_args.prototype = {};
CodechatSyc_render_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.text = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.path = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CodechatSyc_render_args.prototype.write = function(output) {
  output.writeStructBegin('CodechatSyc_render_args');
  if (this.text !== null && this.text !== undefined) {
    output.writeFieldBegin('text', Thrift.Type.STRING, 1);
    output.writeString(this.text);
    output.writeFieldEnd();
  }
  if (this.path !== null && this.path !== undefined) {
    output.writeFieldBegin('path', Thrift.Type.STRING, 2);
    output.writeString(this.path);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CodechatSyc_render_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
CodechatSyc_render_result.prototype = {};
CodechatSyc_render_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString();
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

CodechatSyc_render_result.prototype.write = function(output) {
  output.writeStructBegin('CodechatSyc_render_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var CodechatSycClient = exports.Client = function(output, pClass) {
    this.output = output;
    this.pClass = pClass;
    this._seqid = 0;
    this._reqs = {};
};
CodechatSycClient.prototype = {};
CodechatSycClient.prototype.seqid = function() { return this._seqid; };
CodechatSycClient.prototype.new_seqid = function() { return this._seqid += 1; };
CodechatSycClient.prototype.ping = function(callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_ping();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_ping();
  }
};

CodechatSycClient.prototype.send_ping = function() {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('ping', Thrift.MessageType.CALL, this.seqid());
  var args = new CodechatSyc_ping_args();
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

CodechatSycClient.prototype.recv_ping = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new CodechatSyc_ping_result();
  result.read(input);
  input.readMessageEnd();

  callback(null);
};
CodechatSycClient.prototype.render = function(text, path, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_render(text, path);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_render(text, path);
  }
};

CodechatSycClient.prototype.send_render = function(text, path) {
  var output = new this.pClass(this.output);
  output.writeMessageBegin('render', Thrift.MessageType.CALL, this.seqid());
  var params = {
    text: text,
    path: path
  };
  var args = new CodechatSyc_render_args(params);
  args.write(output);
  output.writeMessageEnd();
  return this.output.flush();
};

CodechatSycClient.prototype.recv_render = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new CodechatSyc_render_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('render failed: unknown result');
};
var CodechatSycProcessor = exports.Processor = function(handler) {
  this._handler = handler;
}
;
CodechatSycProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
}
;
CodechatSycProcessor.prototype.process_ping = function(seqid, input, output) {
  var args = new CodechatSyc_ping_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.ping.length === 0) {
    Q.fcall(this._handler.ping.bind(this._handler))
      .then(function(result) {
        var result_obj = new CodechatSyc_ping_result({success: result});
        output.writeMessageBegin("ping", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("ping", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.ping(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new CodechatSyc_ping_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("ping", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("ping", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
CodechatSycProcessor.prototype.process_render = function(seqid, input, output) {
  var args = new CodechatSyc_render_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.render.length === 2) {
    Q.fcall(this._handler.render.bind(this._handler), args.text, args.path)
      .then(function(result) {
        var result_obj = new CodechatSyc_render_result({success: result});
        output.writeMessageBegin("render", Thrift.MessageType.REPLY, seqid);
        result_obj.write(output);
        output.writeMessageEnd();
        output.flush();
      }, function (err) {
        var result;
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("render", Thrift.MessageType.EXCEPTION, seqid);
        result.write(output);
        output.writeMessageEnd();
        output.flush();
      });
  } else {
    this._handler.render(args.text, args.path, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new CodechatSyc_render_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("render", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("render", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
