const isSilent = input => input.trim().length < 1;
const isShouting = input => (input.toUpperCase() === input) && (/[A-Z]+/).test(input);
const isQuestion = input => input.charAt(input.length - 1) === '?';
const other = input => true;


const teenageBrain = [
  {adult: isSilent, andResponds: 'Fine. Be that way!'},
  {adult: isShouting, andResponds:  'Whoa, chill out!'},
  {adult: isQuestion, andResponds: 'Sure.'},
  {adult: other, andResponds: 'Whatever.'}
];

teenageBrain.hears = Array.prototype.find;

export default () => ({
  hey: speaks => teenageBrain
      .hears(when => when.adult(speaks)).andResponds
})