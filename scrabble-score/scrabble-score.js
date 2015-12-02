const VALUE = {
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
};

export default function (word) {
  return [...(word || '').toUpperCase()].reduce((score, letter) => {
    return score + (VALUE[letter] || 1);
  }, 0);
};
