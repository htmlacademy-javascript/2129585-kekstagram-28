
function checkLength(str, number) {
  const strLength = str.length;

  if (strLength > number) {
    return false;
  } else {
    return true;
  }
}


function checkPalindrome(str) {
  const Len = str.length;

  for (let i = 0; i < Len; i++) {
    const right = Len - 1 - i;
    if (right <= i) {
      return true;
    }

    if (str[i] !== str[right]) {
      return false;
    }
  }
  return true;
}


function getNumber(text) {
  let numberString = '';

  for (let i = 0; i < text.length; i++) {
    const el = text[i];
    if (el !== ' ' && !isNaN(Number(el))) {
      numberString += el;
    }
  }

  let result = NaN;
  if (numberString.length) {
    result = Number(numberString);
  }
  return result;
}

function padStartString(string, targetlength, symbols) {
  if (targetlength <= string.length) {
    return string;
  }

  const count = targetlength - string.length;
  const symbolsLength = symbols.length;
  const remainder = Math.floor(count / symbolsLength);
  const fraction = count % symbolsLength;

  const additionalFractStr = fraction ? symbols.slice(0, fraction) : '';
  const remainderStr = remainder ? symbols.repeat(remainder) : '';

  return additionalFractStr + remainderStr + string;
}
