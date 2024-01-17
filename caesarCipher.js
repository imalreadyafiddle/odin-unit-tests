// accepts a string and a shift factor
// returns a new string with each letter shifted by the shift factor

function caesarCipher(string, shift) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let charCode = char.charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      newString += String.fromCharCode(
        ((charCode - 65 + shift + 26) % 26) + 65
      );
    } else if (charCode >= 97 && charCode <= 122) {
      newString += String.fromCharCode(
        ((charCode - 97 + shift + 26) % 26) + 97
      );
    } else {
      newString += char;
    }
  }
  return newString;
}

module.exports = caesarCipher;
