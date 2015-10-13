let robotName ='', usedNames ={};
const alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let random = (max) => Math.floor(Math.random()*max);

let generateName = () => {
  let name = alpha.charAt(random(26))+alpha.charAt(random(26))+random(10)+random(10)+random(10);
  usedNames[name] ? name = generateName() : usedNames[name] = true;
  return name;
};

let Robot = () => {
  robotName = generateName();
  return {
    name : robotName,
    reset : function() { this.name = generateName() }
  }
};

export default Robot;