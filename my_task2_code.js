//Instructions
//Given an array of strings, words, return a string that has all the words concatenated together
// - spaces are needed in between words
//
//ex. ['how', 'are', 'you'] -> 'how are you'

function wordsToSentence(words) {
    const word1 = "hey"
    const word2 = "there"
    const words = {word1,
        word2}
    return words.word1 + words.word2;
    //your code here
}

//console log results
console.log('results', wordsToSentence(['hey', 'there']));

//don't change this line
if (typeof module !== 'undefined') {
    module.exports = {
        wordsToSentence,
    };
}
