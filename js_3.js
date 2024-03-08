let text = prompt("Enter text:");

let txtcount = text.length;
console.log("The number of characters in your text is " + txtcount);

let txtsplit = text.split(" ");
console.log("The word count is " + txtsplit.length);

let txtsentencecount = text.split(/[.!?]/g);
let sentencecount = parseInt(txtsentencecount.length)-1;
console.log("The number of sentences is " + sentencecount);

const words = {};

for (let frequent of txtsplit) {
    words[frequent] = (words[frequent] || 0) + 1;
}
let mostFrequentWord = '';
let maxFrequency = 0;
for (let word in words) {
    if (words[word] > maxFrequency) {
        maxFrequency = words[word];
        mostFrequentWord = word;
    }
}
console.log("The most frequent word is:", mostFrequentWord);
console.log("Frequency:", maxFrequency);

let totalCharacters = 0;
for (let i = 0; i < txtsplit.length; i++) {
    totalCharacters += txtsplit[i].length; 
}
const averageWordLength = totalCharacters / txtsplit.length;

console.log("Average word length:", averageWordLength.toFixed(2)); 