const palindromes = function (words = "") {
    let splitWord = words.split("");
    splitWord = splitWord.map((character) => character.toLowerCase());
    let filterCharacter = splitWord.filter((char) => char >= "a" && char <= "z" || char >="0" && char <= "9");
    words = filterCharacter.join("");
    let reverseWords = filterCharacter.reverse().join("");
    return words === reverseWords;
};

// Do not edit below this line
module.exports = palindromes;
