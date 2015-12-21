const plainKey = 'abcdefghijklmnopqrstuvwxyz1234567890',
      codeKey = 'zyxwvutsrqponmlkjihgfedcba1234567890';
const getArrayOfAlphanumericChars = str => [...str.toLowerCase().replace(/\W/g, '')];
const chunk = (str) => str.match(/.{1,5}/g).join(' ');

export default {
  encode: plain =>
              chunk(
                  getArrayOfAlphanumericChars(plain)
                      .reduce((encodedString, curr) => encodedString += codeKey[plainKey.indexOf(curr)], '')
                      .trim()
              )
};