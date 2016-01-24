const drops = {
  3: 'Pling',
  5: 'Plang',
  7: 'Plong'
};

export default class Raindrops {
  convert(num) {
    return Object.keys(drops)
            .filter(key => num % key === 0)
            .map(key => drops[key])
            .join('')
            || num.toString();
  }
}