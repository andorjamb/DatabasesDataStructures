/**
 * Given text and words,
 * return the most common words in descending order.
 * @param {string} text - The text to parse.
 * @param {number} n - The number of results.
 * @return {string[]}
 */

mostCommonWords("The map, maps keys to values; Keys can be anything.", 1); // ['keys']
mostCommonWords("Look at it! What is it? It does look like my code from 1 year ago", 2); // ['it', 'look']
mostCommonWords("a; a,b, a's c A!; b,B, c.", 4); // ['a', 'b', 'c', 's']

/* pseudocode: 
- split text into lowercase words, remobe spaces and punctuation
- count the frequency of words
- sort by freq and return top n words
 */

function mostCommonWords(text, n = 1) {
    const words = text.toLowerCase().split(/\+W/);

}
