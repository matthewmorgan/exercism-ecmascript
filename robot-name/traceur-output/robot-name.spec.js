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
  xit('name is the same each time', function() {
    expect(robot.name).toEqual(robot.name);
  });
  xit('different robots have different names', function() {
    var NUMBER_OF_ROBOTS = 10000;
    var usedNames = new Set();
    for (var i = 0; i < NUMBER_OF_ROBOTS; i++) {
      var newRobot = new Robot();
      usedNames.add(newRobot.name);
    }
    expect(usedNames.size).toEqual(NUMBER_OF_ROBOTS);
  });
  xit('is able to reset the name', function() {
    var originalName = robot.name;
    robot.reset();
    var newName = robot.name;
    expect(newName).toMatch(/^[A-Z]{2}\d{3}$/);
    expect(originalName).not.toEqual(newName);
  });
  xit('should set a unique name after reset', function() {
    var NUMBER_OF_ROBOTS = 10000;
    var usedNames = new Set();
    usedNames.add(robot.name);
    for (var i = 0; i < NUMBER_OF_ROBOTS; i++) {
      robot.reset();
      usedNames.add(robot.name);
    }
    expect(usedNames.size).toEqual(NUMBER_OF_ROBOTS + 1);
  });
});
