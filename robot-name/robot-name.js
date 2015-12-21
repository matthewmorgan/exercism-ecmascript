const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      usedNames ={};

const random = (max) => Math.floor(Math.random()*max);

const generateName = () => {
  let name = alpha.charAt(random(26))
      +alpha.charAt(random(26))
      +random(10)+random(10)+random(10);
  usedNames[name] ? name = generateName() : usedNames[name] = true;
  return name;
};

export default class Robot {
  constructor(){
    this.robotName = generateName();
  }

  get name() {
    return this.robotName;
  }

  reset() {
    this.robotName = generateName();
    return this;
  }
};