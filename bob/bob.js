'use strict';

let isSilent = (input) => input.trim().length < 1;
let isShouting = (input) =>  (input.toUpperCase() === input) && (/[A-Z]+/).test(input);
let isQuestion = (input) => input.charAt(input.length - 1) === '?';

let responses = {
  4: 'Fine. Be that way!',
  2: 'Whoa, chill out!',
  1: 'Sure.',
  0: 'Whatever.'
}

export default class Bob {
    hey (input) {
      return responses[
          Math.max(
              isSilent(input) << 2,
              isShouting(input) << 1,
              isQuestion(input) << 0
          )
      ];
    }
}
