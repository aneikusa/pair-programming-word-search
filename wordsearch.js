// a function that receives a 2D array of letters and a word.
// Check to find the word horizontally and vertically
// Return true if the word is found, and return false if the word is not found

const transpose = function(matrix) {
  let output1 = [];
  let output2 = [];
  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      output2.push((matrix[j][i]));
    }
    output1.push(output2);
    output2 = [];
  }
  return output1;
};

// const diag = function (letters, word) {
//     let arr = [];
//     for (let i = 0; i < letters.length; i++) {
//         for (let j = i + 1; j < letters[i].length; j++) {
//             arr.push(letters[i][j])
//         }
//         console.log(arr)
//     }
//     return true;
// }

// for (let i=0; i<word.length;i++){
//     for (let j =0; j<letters.length;j++){
//         if (word[i]!==letters[i][j])
//     }
// }
// if (diag(letters, word)) {
//     return true;
// }

const diag = (letters,word) => {
  const arr = [];

  for (let k = 0; k < letters.length; k++) { // if you set to index 0 it will only ever look at first line --> set to variable and will continue
    for (let i = 0; i < letters[k].length; i++) {
      let currentDiagonal = letters[k][i];
      let addition = i + 1;
      for (let j = 1; j < letters.length; j++) {
        if (letters[j][addition] !== undefined) {
          currentDiagonal += letters[j][addition];
          addition++;
        }
      }
      arr.push(currentDiagonal);
      // console.log(currentDiagonal);
    }
  }

  for (let d = 0; d < arr.length; d++) {
    if (arr[d].includes(word)) {
      return true;
    }
  }
  return false;
};


const wordSearch = (letters, word) => {
  const reversedWord = word.split('').reverse().join('');

  if (diag(letters, word)) {
    return true;
  }

  const verticalJoin = transpose(letters).map((column) => column.join(""));
  for (const v of verticalJoin) {
    if (v.includes(word) || v.includes(reversedWord)) return true;
  }
  //const verticalJoin = verticalLetters.map((ls) => ls.join(''));
  const horizontalJoin = letters.map((ls) => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word) || l.includes(reversedWord)) return true;
  }

  return false;
};

module.exports = wordSearch;

// Complete functions that receives a 2D array of letters and a word and checks to see if it matches horizontally, vertically and diagonally. Pairing with @m-khalaf
