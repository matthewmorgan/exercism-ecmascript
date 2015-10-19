export default (input) => {
  input = validate(input);
  return {
    number: () => input,
    areaCode: () => areaCode(input),
    toString: () => toString(input)
  }
};

const number = '0000000000';

let validate = (input) => {
  input = clean(input);
  switch(input.length){
    case 11: return input.substring(0,1) === '1' ? input.substring(1,11) : number;
    case 10: return input;
  }
  return number;
};

let clean = (input) => input.replace(/\D/g,'');
let areaCode = (input) => input.substring(0,3);
let toString = (input) => `(${areaCode(input)}) ${input.substring(3,6)}-${input.substring(6,10)}`;