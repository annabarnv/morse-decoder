const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let resultString = '';
  let arr = [];
  for(let i = 0, length = expr.length; i < length; i+=10) {
    arr.push(expr.substring(i, i + 10))
    };
  for (let i = 0; i < arr.length; i++) {
      let arrEncoded = [];
      if (arr[i] === '**********') {
          resultString +=' ';
      } else {
          arr[i].replace(/(00)|(10)|(11)/g, function(match, p1, p2, p3) {
              if (p1) { arrEncoded.push('') }
              if (p2) { arrEncoded.push('.') }
              if (p3) { arrEncoded.push('-') }
            });
            resultString += `${MORSE_TABLE[arrEncoded.join('')]}`;
      }
  }
  return resultString
}

module.exports = {
    decode
}