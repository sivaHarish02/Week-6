// This is a list of words
let words = ['Loops', 'are', 'a', 'great', 'way', 'to', 'find', 'elements', 'in', 'an', 'array'];

// TODO: implement this function to return a string containing all words in a paragraph.
 let paragraph = '  ';
function createParagraph(words) {
 paragraph=paragraph+' '+words;
}
// Prints paragraph to console
//console.log(createParagraph(words));
words.forEach(createParagraph);
console.log(paragraph);
// don't change this line
if (typeof module !== 'undefined') {
  module.exports = createParagraph;
}
