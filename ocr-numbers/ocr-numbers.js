const PATTERNS = [' _ | ||_|   ',
                  '     |  |   ',
                  ' _  _||_    ',
                  ' _  _| _|   ',
                  '   |_|  |   ',
                  ' _ |_  _|   ',
                  ' _ |_ |_|   ',
                  ' _   |  |   ',
                  ' _ |_||_|   ',
                  ' _ |_| _|   '],
                  WIDTH = 3, HEIGHT = 4;

function parseLine(scanLines, scanLine, chars) {
  let charIndex = 0;
  while (charIndex < scanLine[0].length / WIDTH) {
    let onePattern = '';
    for (let layer = 0; layer < HEIGHT; layer++) {
      onePattern += scanLine[layer].substr(charIndex * WIDTH, WIDTH);
    }
    charIndex++;
    chars += recognizeChar(onePattern);
  }
  scanLines.length > 0 ? chars += ',' : {};
  return chars;
}

function recognizeChar(pattern) {
  return PATTERNS.indexOf(pattern) >= 0 ? PATTERNS.indexOf(pattern).toString() : '?';
}

class Ocr {
  convert(str) {
    const scanLines = str.match(/[|_ ]+/g);
    let chars = '';

    do {
      const scanLine = scanLines.splice(0, HEIGHT);
      chars = parseLine(scanLines, scanLine, chars);
    } while (scanLines.length > 0);

    return chars;
  }
}

export default Ocr;

