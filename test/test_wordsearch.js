const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'S', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'E', 'B', 'X', 'E', 'L', 'D'],
      ['Y', 'F', 'I', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'N', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'F', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'E', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'L', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'D', 'A', 'K', 'U', 'A', 'S'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return false if the word is not present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'S', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'E', 'B', 'X', 'E', 'L', 'D'],
      ['Y', 'F', 'I', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'N', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'D', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'A', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'L', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'D', 'A', 'K', 'U', 'A', 'S'],
    ], 'SEINFELD')

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally backwards", function() {
    const result = wordSearch([
      ['A', 'W', 'S', 'F', 'Q', 'U', 'A', 'L'],
      ['D', 'L', 'E', 'F', 'N', 'I', 'E', 'S'],
      ['Y', 'F', 'I', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'N', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'F', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'E', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'L', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'D', 'A', 'K', 'U', 'A', 'S'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically backwards", function() {
    const result = wordSearch([
      ['A', 'W', 'D', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'L', 'B', 'X', 'E', 'L', 'D'],
      ['Y', 'F', 'E', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'F', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'N', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'I', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'E', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'S', 'A', 'K', 'U', 'A', 'S'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present diagonally", function() {
    const result = wordSearch([
      ['F', 'W', 'D', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'S', 'B', 'X', 'E', 'L', 'D'],
      ['Y', 'E', 'I', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'I', 'N', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'N', 'N', 'F', 'E', 'R', 'L'],
      ['B', 'F', 'I', 'E', 'F', 'E', 'Y', 'B'],
      ['U', 'B', 'E', 'W', 'A', 'E', 'L', 'I'],
      ['O', 'D', 'S', 'A', 'K', 'U', 'L', 'D'],
      ['O', 'D', 'S', 'A', 'K', 'U', 'A', 'D'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

});
