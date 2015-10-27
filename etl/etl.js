//export default (olde) =>
//    Object.keys(olde).reduce((newe, score) => {
//      olde[+score].forEach((letter) => newe[letter.toLowerCase()] = +score);
//      return newe;
//    }, {});
//
//
//


export default (old) => {

  let score, letters;
  ({ score: letters } = old);
  console.log(score, letters);


}