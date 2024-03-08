//encrypt
let originalText = prompt("Enter text to encrypt").toUpperCase();
let encryptedTxt = '';


for (let i = 0; i < originalText.length; i++) {
  let char = originalText[i];
  let index = deciphertxt.indexOf(char);
  if (index !== -1) {
    encryptedTxt += cipertxt[index];
  } else {
    encryptedTxt += char; 
  }
}

console.log("Encrypted Text:", encryptedTxt);

//decrypt
let todecrypt = prompt("Enter text to decrypt");

let deciphertxt = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let cipertxt = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C'];

let decryptedText = '';

for (let i = 0; i < todecrypt.length; i++) {
  let char = todecrypt[i].toUpperCase();
  let index = cipertxt.indexOf(char);
  if (index !== -1) {
    decryptedText += deciphertxt[index];
  } else {
    decryptedText += char; 
  }
}

console.log("Decrypted Text:", decryptedText);
