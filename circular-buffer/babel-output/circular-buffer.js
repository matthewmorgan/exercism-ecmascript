"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var buffer = undefined,
    bufferMax = undefined;

var BufferEmptyException = function BufferEmptyException() {
  return {
    name: "buffer empty exception!",
    message: "can't read from an empty buffer!"
  };
};

var BufferFullException = function BufferFullException() {
  return {
    name: "buffer full exception!",
    message: "can't write to a full buffer!"
  };
};

var read = function read() {
  if (buffer.length === 0) {
    throw BufferEmptyException();
  }
  return buffer.splice(0, 1)[0];
};

var write = function write(value) {
  if (buffer.length === bufferMax) {
    throw BufferFullException();
  }
  value ? buffer.push(value) : null;
};

var forceWrite = function forceWrite(value) {
  if (buffer.length === bufferMax) {
    read();
  }
  write(value);
};

var clear = function clear() {
  return buffer = [];
};

var CircularBuffer = function CircularBuffer(capacity) {
  buffer = [];
  bufferMax = capacity;
  return {
    read: read,
    write: write,
    forceWrite: forceWrite,
    clear: clear
  };
};

exports["default"] = CircularBuffer;
exports.bufferFullException = BufferFullException;
exports.bufferEmptyException = BufferEmptyException;