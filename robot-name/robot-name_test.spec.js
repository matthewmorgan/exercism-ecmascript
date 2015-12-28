import Robot from './robot-name';

describe('Robot', () => {
  let robot;

  beforeEach(() => {
    robot = new Robot();
  });

  it('has a name', () => {
    expect(robot.name).toMatch(/^[A-Z]{2}\d{3}$/);
  });

  it('internal name cannot be modified', () => {
    const modifyInternal = () => robot.name += "a modification";
    expect(modifyInternal).toThrow();
  });


  it('name is the same each time', () => {
    expect(robot.name).toEqual(robot.name);
  });

  it('different robots have different names', () => {
    const NUMBER_OF_ROBOTS = 10000;
    let usedNames = {};

    for (let i = 0; i < NUMBER_OF_ROBOTS; i++) {
      let newRobot = new Robot();
      usedNames[newRobot.name] = true;
    }

    expect(Object.keys(usedNames).length).toEqual(NUMBER_OF_ROBOTS);
  });

  it('is able to reset the name', () => {
    let originalName = robot.name;
    console.log(originalName);
    robot.reset();
    let newName = robot.name;
    console.log(newName);
    expect(newName).toMatch(/^[A-Z]{2}\d{3}$/);
    expect(originalName).not.toEqual(newName);
  });

  it('should set a unique name after reset', () => {
    const NUMBER_OF_ROBOTS = 10000;
    let usedNames = {};

    usedNames[robot.name] = true;
    for (let i = 0; i < NUMBER_OF_ROBOTS; i++) {
      robot.reset();
      usedNames[robot.name] = true;
    }

    expect(Object.keys(usedNames).length).toEqual(NUMBER_OF_ROBOTS + 1);
  });

  it('should test for sequential names', () => {
    expect(areSequential("AA000", "AA001")).toEqual(true);
    expect(areSequential("AA000", "AA002")).toEqual(false);
    expect(areSequential("AA999", "AB000")).toEqual(true);
    expect(areSequential("AA999", "AA998")).toEqual(true);
    expect(areSequential("AA999", "AA997")).toEqual(false);
    expect(areSequential("AB000", "AA999")).toEqual(true);
    expect(areSequential("AB999", "AA000")).toEqual(false);
  });


  const areSequential = (name1, name2) => {
    const alpha1 = name1.substr(0,2);
    const alpha2 = name2.substr(0,2);
    const num1 = +name1.substr(2,3);
    const num2 = +name2.substr(2,3);

    const numDiff = num2-num1;
    const alphaDiff = (alpha2.charCodeAt(0)-alpha1.charCodeAt(0))*26
        + (alpha2.charCodeAt(1)-alpha1.charCodeAt(1));

    const totalDiff = alphaDiff*1000 + numDiff;

    return Math.abs(totalDiff) <= 1;

  };

});
