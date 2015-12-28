"use strict";
$traceurRuntime.options.symbols = true;
var $__robot_45_name__;
var Robot = ($__robot_45_name__ = require("./robot-name"), $__robot_45_name__ && $__robot_45_name__.__esModule && $__robot_45_name__ || {default: $__robot_45_name__}).default;
describe('Robot', function() {
  var robot;
  beforeEach(function() {
    robot = new Robot();
  });
  it('has a name', function() {
    expect(robot.name).toMatch(/^[A-Z]{2}\d{3}$/);
  });
  it('internal name cannot be modified', function() {
    var modifyInternal = function() {
      return robot.name += "a modification";
    };
    expect(modifyInternal).toThrow();
  });
  it('name is the same each time', function() {
    expect(robot.name).toEqual(robot.name);
  });
  it('different robots have different names', function() {
    var NUMBER_OF_ROBOTS = 10000;
    var usedNames = {};
    for (var i = 0; i < NUMBER_OF_ROBOTS; i++) {
      var newRobot = new Robot();
      usedNames[$traceurRuntime.toProperty(newRobot.name)] = true;
    }
    expect(Object.keys(usedNames).length).toEqual(NUMBER_OF_ROBOTS);
  });
  it('is able to reset the name', function() {
    var originalName = robot.name;
    console.log(originalName);
    robot.reset();
    var newName = robot.name;
    console.log(newName);
    expect(newName).toMatch(/^[A-Z]{2}\d{3}$/);
    expect(originalName).not.toEqual(newName);
  });
  it('should set a unique name after reset', function() {
    var NUMBER_OF_ROBOTS = 10000;
    var usedNames = {};
    usedNames[$traceurRuntime.toProperty(robot.name)] = true;
    for (var i = 0; i < NUMBER_OF_ROBOTS; i++) {
      robot.reset();
      usedNames[$traceurRuntime.toProperty(robot.name)] = true;
    }
    expect(Object.keys(usedNames).length).toEqual(NUMBER_OF_ROBOTS + 1);
  });
  it('should test for sequential names', function() {
    expect(areSequential("AA000", "AA001")).toEqual(true);
    expect(areSequential("AA000", "AA002")).toEqual(false);
    expect(areSequential("AA999", "AB000")).toEqual(true);
    expect(areSequential("AA999", "AA998")).toEqual(true);
    expect(areSequential("AA999", "AA997")).toEqual(false);
    expect(areSequential("AB000", "AA999")).toEqual(true);
    expect(areSequential("AB999", "AA000")).toEqual(false);
  });
  var areSequential = function(name1, name2) {
    var alpha1 = name1.substr(0, 2);
    var alpha2 = name2.substr(0, 2);
    var num1 = +name1.substr(2, 3);
    var num2 = +name2.substr(2, 3);
    var numDiff = num2 - num1;
    var alphaDiff = (alpha2.charCodeAt(0) - alpha1.charCodeAt(0)) * 26 + (alpha2.charCodeAt(1) - alpha1.charCodeAt(1));
    console.log("name1, name 2", name1, name2);
    console.log(alpha1, alpha2, num1, num2);
    var totalDiff = alphaDiff * 1000 + numDiff;
    console.log('num, alpha, total', numDiff, alphaDiff, totalDiff);
    return Math.abs(totalDiff) <= 1;
  };
});
