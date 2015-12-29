const ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const mod = (n, m) => ((n % m) + m) % m;

function generateKey() {
  return Array.apply(null, Array(100))
      .map(() => ALPHA.charAt(Math.floor(Math.random() * ALPHA.length))).join('');
}

function xCode(key, inText, sign) {
  return [...inText].reduce((outText, letter, ii) => {
    const offset = sign * ALPHA.indexOf(key.charAt(mod(ii, key.length)));
    return outText += ALPHA.charAt(mod(ALPHA.indexOf(letter) + offset, ALPHA.length));
  }, '');
}

export default key => {
  if (typeof key === 'undefined') {
    key = generateKey();
  } else if (key.length === 0 || key.match(/[^a-z]/, "g")) {
    throw new Error("Bad key");
  }

  return {
    key:    key,
    encode: plainText => xCode(key, plainText, 1),
    decode: encodedText => xCode(key, encodedText, -1)
  };
};