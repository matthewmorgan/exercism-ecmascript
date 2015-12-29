const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      usedNames ={};

const random = (max) => Math.floor(Math.random()*max);

const generateName = () => {
  let name = alpha.charAt(random(alpha.length))
      +alpha.charAt(random(alpha.length))
      +random(10)+random(10)+random(10);
  usedNames[name] ? name = generateName() : usedNames[name] = true;
  return name;
};

export default class Robot {
  constructor(){
    this.reset();
  }

  get name() {
    return this.robotName;
  }

  reset() {
    this.robotName = generateName();
  }
};