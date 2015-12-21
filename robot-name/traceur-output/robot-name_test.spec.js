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
    var name = robot.name;
    var modifiedName = robot.name;
    modifiedName += "a modification";
    expect(robot.name).toEqual(name);
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
});
