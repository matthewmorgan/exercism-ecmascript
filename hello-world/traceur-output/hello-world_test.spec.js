"use strict";
$traceurRuntime.options.symbols = true;
var $__hello_45_world__;
var HelloWorld = ($__hello_45_world__ = require("./hello-world"), $__hello_45_world__ && $__hello_45_world__.__esModule && $__hello_45_world__ || {default: $__hello_45_world__}).default;
describe('Hello World', function() {
  var helloWorld = new HelloWorld();
  it('says hello world with no name', function() {
    expect(helloWorld.hello('')).toEqual('Hello, world!');
  });
  it('says hello to bob', function() {
    expect(helloWorld.hello('Bob')).toEqual('Hello, Bob!');
  });
  it('says hello to sally', function() {
    expect(helloWorld.hello('Sally')).toEqual('Hello, Sally!');
  });
});
