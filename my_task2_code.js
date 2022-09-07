//Instructions
//Given an array of strings, words, return a string that has all the words concatenated together
// - spaces are needed in between words
//
//ex. ['how', 'are', 'you'] -> 'how are you'

function wordsToSentence(words) {
    const word1 = "hey"
    const word2 = "there"
    var words = [word1, word2]
    return words[0] + words[1];
}

console.log('results', wordsToSentence(['hey', 'there']));

if (typeof module !== 'undefined') {
    module.exports = {
        wordsToSentence,
    };
}
