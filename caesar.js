const encrypt = (plaintext, key) => {
  const plainArray = [...plaintext.toLowerCase()];
  const cipher = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z'
  ];

  plainArray.forEach((char, index) => {
    let cipherStart = cipher.indexOf(char);

    if (cipherStart >= 0) {
      let replacement = cipherStart += key;

      // Wrap around alphebet if outside cipher index
      replacement < 0 && (replacement += 26);
      replacement > 25 && (replacement -= 26);
      
      // Replace original character with shifted char
      plainArray[index] = cipher[replacement];
    }
  });

  let encrypted = plainArray.join('');
  
  return encrypted;
};

module.exports = { encrypt };