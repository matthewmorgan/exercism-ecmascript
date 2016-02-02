function bufferEmptyException() {
  return {
    name:    "buffer empty exception!",
    message: "can't read from an empty buffer!"
  }
}

function bufferFullException() {
  return {
    name:    "buffer full exception!",
    message: "can't write to a full buffer!"
  }
}

function CircularBuffer(capacity) {
  let buffer = [];
  let bufferMax = capacity;

  return {read, write, forceWrite, clear};

  function read() {
    if (buffer.length === 0) {
      throw bufferEmptyException();
    }
    return buffer.shift();
  }

  function write(value) {
    if (buffer.length === bufferMax) {
      throw bufferFullException();
    }
    if (isValid(value)) buffer.push(value);
  }

  function forceWrite(value) {
    if (isValid(value)) {
      if (buffer.length === bufferMax) read();
      buffer.push(value);
    }
  }

  function isValid(value) {
    return value !== undefined && value !== null;
  }

  function clear() {
    buffer.length = 0
  }
}

export { CircularBuffer as default, bufferFullException, bufferEmptyException };