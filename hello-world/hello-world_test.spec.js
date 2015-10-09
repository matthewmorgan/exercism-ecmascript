import HelloWorld from './hello-world';

describe('Hello World', () => {
  var helloWorld = new HelloWorld();

  it('says hello world with no name', () => {
    expect(helloWorld.hello('')).toEqual('Hello, world!');
  });

  it('says hello to bob', () => {
    expect(helloWorld.hello('Bob')).toEqual('Hello, Bob!');
  });

  it('says hello to sally', () => {
    expect(helloWorld.hello('Sally')).toEqual('Hello, Sally!');
  });
});

