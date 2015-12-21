export default class Raindrops {
  convert(num) {
    const drops = {
      3: 'Pling',
      5: 'Plang',
      7: 'Plong'
    };

    return Object.keys(drops)
            .reduce((prev, curr) => prev += ( num % curr === 0 ? drops[curr] : '' ) , '' )
            || num.toString();
  }
}