function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizeLastLetter(str) {
  return str.slice(0, -1) + str.charAt(str.length - 1).toUpperCase();
}

function endsWithSuffix(str, suffix) {
  return str.endsWith(suffix);
}

function titleReverse(word) {
  return word.slice(0, -1).toLowerCase() + word.charAt(word.length - 1).toUpperCase();
}

function extractFirst10Characters(str) {
  return str.slice(0, 10);
}

function indexOfSubstring(str, substring) {
  return str.indexOf(substring);
}

function extractLast3Characters(str) {
  return str.slice(-3);
}

function countOccurrences(str, char) {
  const regex = new RegExp(char, 'gi');
  const matches = str.match(regex);
  return matches ? matches.length : 0;
}

function isPalindrome(str) {
  const cleanedStr = str.replace(/[\W_]/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

function removeDigits(str) {
  return str.replace(/\d+/g, '');
}

function replaceSubstring(str, search, replace) {
  return str.replace(new RegExp(search, 'gi'), replace);
}

function reverseString(str) {
  return str.split('').reverse().join('');
}

function splitIntoWords(str) {
  return str.split(' ');
}

function stringLength(str) {
  return str.length;
}

function toLowerCase(str) {
  return str.toLowerCase();
}

function swapCase(str) {
  return str.split('').map(char => {
    return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  }).join('');
}

function checkContains(str, substring) {
  return str.includes(substring);
}

function removeWhitespace(str) {
  return str.trim();
}

function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  return str.split('').filter(char => vowels.includes(char)).length;
}

const firstString = "shakerpeare";
const lastString = "Shakespeare";
const suffixString = "goodnight";
const suffix = "knight";
const combinedStrings = "thus with" + " " + "a kiss I die";
const wordsToConvert = ["Amanda", "kayak", "USA"];
const stringToExtractFrom = "O teach me how I should forget to think (1.1.224)";
const stringToFindIndex = "I defy you, stars.";
const substringToFind = "star";
const stringToExtractLast3 = "O, then, dear saint, let lips do what hands do;";
const stringToCountOccurrences = "There's an old saying that applies to me: you can't lose a game if you don't play the game. (Act 1, scene 4)";
const characterToCount = "the";
const palindromeStrings = ["deified", "borrow or rob"];
const stringToRemoveDigits = "O teach me how I should forget to think (1.1.224.)";
const stringToReplace = "Good night, good night! parting is such sweet sorrow, That I shall say good night till it be morrow.";
const searchForReplace = "night";
const replaceWith = "day";

const reverseTestString = "we panic in a pew";
const splitTestString = "Do not swear by the moon for she changes constantly then your love would also change";
const quoteString = "Don't waste your love on somebody, who doesn't value it.";
const quoteLength = stringLength(quoteString);
const quoteResponse = `The length of the quote is ${quoteLength}.`;
const checkSubstringString = "To be, or not to be, that is the question";
const substringToCheck = "bee";
const lowerCaseSentence = "For never was a story of more woe than this of Juliet and her Romeo.";
const swappedCaseString = `
Do you bite your thumb at us, sir?
SAMPSON [Aside to Gregory]: Is the law of our side, if I say ay?
GREGORY [Aside to Sampson]: No.
SAMPSON: No, sir, I do not bite my thumb at you, sir, but I bite my thumb, sir.
`;

const leadingTrailingWhitespaceStrings = [
  "  apple",
  " banana  ",
  "  cantaloupe ",
  " date",
  "eggplant\n",
  "\n\tfig\t\n"
];

const capitalizedFirst = capitalizeFirstLetter(firstString);
const capitalizedLast = capitalizeLastLetter(lastString);
const doesEndWithSuffix = endsWithSuffix(suffixString, suffix);
const titleReversedWords = wordsToConvert.map(titleReverse).join(", ");
const first10Chars = extractFirst10Characters(stringToExtractFrom);
const indexOfSubstringResult = indexOfSubstring(stringToFindIndex, substringToFind);
const last3Chars = extractLast3Characters(stringToExtractLast3);
const occurrencesCount = countOccurrences(stringToCountOccurrences, characterToCount);
const palindromesCheck = palindromeStrings.map(isPalindrome);
const digitsRemoved = removeDigits(stringToRemoveDigits);
const replacedString = replaceSubstring(stringToReplace, searchForReplace, replaceWith);
const reversedString = reverseString(reverseTestString);
const splitResult = splitIntoWords(splitTestString);
const splitResultString = splitResult.join(", ");
const checkSubstringResult = checkContains(checkSubstringString, substringToCheck);
const lowerCaseResult = toLowerCase(lowerCaseSentence);
const swappedCaseResult = swapCase(swappedCaseString);
const vowelsCount = countVowels("to be");

const trimmedStrings = leadingTrailingWhitespaceStrings.map(removeWhitespace).join(", ");

const output = `
  Capitalized first letter: ${capitalizedFirst}<br>
  Capitalized last letter: ${capitalizedLast}<br>
  Does "${suffixString}" end with "${suffix}"? ${doesEndWithSuffix ? "Yes, it does." : "No, it does not."}<br>
  Combined strings: ${combinedStrings}<br>
  Title reverse of words: ${titleReversedWords}<br>
  First 10 characters: ${first10Chars}<br>
  Index of "${substringToFind}": ${indexOfSubstringResult}<br>
  Last 3 characters: ${last3Chars}<br>
  Occurrences of "${characterToCount}": ${occurrencesCount}<br>
  Palindromes check: ${palindromesCheck.map((result, index) => `${palindromeStrings[index]}: ${result}`).join(", ")}<br>
  String with digits removed: ${digitsRemoved}<br>
  Original string: "${stringToReplace}"<br>
  Result string: "${replacedString}"<br>
  Reversed string: "${reversedString}"<br>
  Split result: [${splitResultString}]<br>
  ${quoteResponse}<br>
  Does the string contain "${substringToCheck}"? ${checkSubstringResult ? "Yes, it does." : "No, it does not."}<br>
  Lower case sentence: "${lowerCaseResult}"<br>
  Swapped case string: "${swappedCaseResult}"<br>
  Number of vowels in "to be": ${vowelsCount}<br>
  Trimmed strings: [${trimmedStrings}]<br>
`;

document.getElementById('output').innerHTML = output;
