const countVowels = word => (word.match(/[aeiou]/gi) || []).length;

function findLongestWord(sentence) {
  const filteredWords = sentence.replace(/[^a-zA-Z\s]/g, "").split(/\s+/);

  const longestWord = filteredWords.reduce((longest, currentWord) => {
    if (currentWord.length > longest.length) return currentWord;

    if (currentWord.length === longest.length && countVowels(currentWord) > countVowels(longest)) {
      return currentWord;
    }

    return longest;
  }, "");

  return longestWord;
}

const sentence1 = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";
const sentence2 = "The quick brown fox jumped over the lazy dog.";
const sentence3 = "12345 abcde !@#$%^ 67890 aeioun";

const longestWord = findLongestWord(sentence3);
console.log(longestWord);
