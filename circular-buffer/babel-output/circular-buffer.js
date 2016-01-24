"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var buffer = undefined,
    bufferMax = undefined;

function bufferEmptyException() {
  return {
    name: "buffer empty exception!",
    message: "can't read from an empty buffer!"
  };
}

function bufferFullException() {
  return {
    name: "buffer full exception!",
    message: "can't write to a full buffer!"
  };
}

function read() {
  if (buffer.length === 0) throw bufferEmptyException();
  return buffer.shift();
}

function write(value) {
  if (buffer.length === bufferMax) {
    throw bufferFullException();
  }
  if (value) buffer.push(value);
}

function forceWrite(value) {
  if (buffer.length === bufferMax) read();
  write(value);
}

function clear() {
  buffer = [];
}

function CircularBuffer(capacity) {
  buffer = [];
  bufferMax = capacity;
  return { read: read, write: write, forceWrite: forceWrite, clear: clear };
}

exports["default"] = CircularBuffer;
exports.bufferFullException = bufferFullException;
exports.bufferEmptyException = bufferEmptyException;