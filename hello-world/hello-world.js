'use strict';

class HelloWorld {
  hello(name){
    return `Hello, ${name || "world"}!`;
  }
}

export default HelloWorld;

