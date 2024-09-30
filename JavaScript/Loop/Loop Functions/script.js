const outputDiv = document.getElementById("output");
let output = "";

for (let i = 1; i <= 20; i++) {
    output += i + "<br>";
    if (i === 13) {
        break;
    }
}

const strForVowel = "Hello World";
output += "<h2>Task 2: Letters from a string, stop at first vowel</h2>";
for (const char of strForVowel) {
    if ("aeiouAEIOU".includes(char)) {
        break;
    }
    output += char;
}
output += "<br>";

const strForNonLetter = "Hello World!";
output += "<h2>Task 3: Letters from a string, stop at first non-letter</h2>";
for (const char of strForNonLetter) {
    if (!char.match(/[a-zA-Z]/)) {
        break;
    }
    output += char;
}
output += "<br>";

output += "<h2>Task 4: Find the largest number from user input</h2>";
let largestNumber = null;
let count = parseInt(prompt("How many numbers do you want to enter?"));

for (let i = 0; i < count; i++) {
    let number = parseFloat(prompt(`Enter number ${i + 1}:`));
    if (number <= 0) {
        break;
    }
    if (largestNumber === null || number > largestNumber) {
        largestNumber = number;
    }
}

if (largestNumber === null) {
    output += "There is no largest number.<br>";
} else {
    output += `The largest number is: ${largestNumber}<br>`;
}

output += "<h2>Task 5: Numbers from 1 to 20, skip those divisible by 3</h2>";
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0) {
        continue;
    }
    output += i + "<br>";
}

const myStringVowels = "I have an apple";
output += "<h2>Task 6: Letters from a string, not vowels</h2>";
let resultVowels = "";
for (const char of myStringVowels) {
    if (!"aeiouAEIOU".includes(char)) {
        resultVowels += char;
    }
}
output += resultVowels + "<br>";

const myStringUppercase = "I have an Apple";
output += "<h2>Task 7: Letters from a string, not uppercase</h2>";
let resultUppercase = "";
for (const char of myStringUppercase) {
    if (char === char.toUpperCase() && char !== " ") {
        continue;
    }
    resultUppercase += char;
}
output += resultUppercase + "<br>";

output += "<h2>Task 8: Numbers from 1 to 100, skip every third divisible by 3</h2>";
let skipCount = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        skipCount++;
        if (skipCount % 3 === 0) {
            continue;
        }
    }
    output += i + "<br>";
}

output += "<h2>Task 14: Numbers from 1 to 10</h2>";
let numbersLine = "";
for (let i = 1; i <= 10; i++) {
    numbersLine += i + (i < 10 ? ", " : "");
}
output += numbersLine + "<br>";

output += "<h2>Task 15: Even numbers from 1 to 20</h2>";
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        output += i + "<br>";
    }
}

const multiplicationNumber = 5;
output += `<h2>Task 16: Multiplication Table for ${multiplicationNumber}</h2>`;
for (let i = 1; i <= 10; i++) {
    output += `${i} * ${multiplicationNumber} = ${i * multiplicationNumber}<br>`;
}

const myString = "apple";
output += "<h2>Task 17: Print each letter of a string</h2>";
for (const char of myString) {
    output += char + "<br>";
}

let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum += i;
}
output += "<h2>Task 18: Sum of numbers from 1 to 50</h2>";
output += `The sum is: ${sum}<br>`;

const numberForFactorial = parseInt(prompt("Enter a number to find its factorial:"));
let factorial = 1;
output += "<h2>Task 19: Factorial of a number</h2>";
for (let i = 1; i <= numberForFactorial; i++) {
    factorial *= i;
}
output += `${numberForFactorial} factorial is ${factorial}.<br>`;

const myVowelString = "apple";
let vowelCount = 0;
for (const char of myVowelString) {
    if ("aeiouAEIOU".includes(char)) {
        vowelCount++;
    }
}
output += `<h2>Task 20: Number of vowels in "${myVowelString}"</h2>`;
output += `The number of vowels is: ${vowelCount}<br>`;

output += "<h2>Task 21: ASCII values of uppercase letters</h2>";
for (let i = 65; i <= 90; i++) {
    output += `ASCII value of ${String.fromCharCode(i)} is ${i}<br>`;
}

const stringToReverse = "apple";
output += "<h2>Task 22: Reverse a string</h2>";
let reversedString = "";
for (let i = stringToReverse.length - 1; i >= 0; i--) {
    reversedString += stringToReverse[i];
}
output += reversedString + "<br>";

const stringOfNumbers = "234";
output += "<h2>Task 23: Square of each number</h2>";
for (const char of stringOfNumbers) {
    const number = parseInt(char);
    output += `${number * number}<br>`;
}

const numberForSum = 234;
let digitSum = 0;
for (const digit of String(numberForSum)) {
    digitSum += parseInt(digit);
}
output += `<h2>Task 24: Sum of digits of ${numberForSum}</h2>`;
output += `The sum of digits is: ${digitSum}.<br>`;

const numberForAverage = 268;
let digitAverage = 0;
let digitCount = 0;
for (const digit of String(numberForAverage)) {
    digitAverage += parseInt(digit);
    digitCount++;
}
digitAverage /= digitCount;
output += `<h2>Task 25: Average of digits of ${numberForAverage}</h2>`;
output += `The average of digits is: ${digitAverage}.<br>`;

output += "<h2>Task 26: Print odd numbers from 1 to 20 using a while loop</h2>";
let i = 1;
while (i <= 20) {
    if (i % 2 !== 0) {
        output += i + "<br>";
    }
    i++;
}

output += "<h2>Task 27: Infinite loop printing a sentence</h2>";
let count1 = 0;
while (count1 < 3) {
    output += "Welcome<br>";
    count1++;
}

output += "<h2>Task 28: Print random numbers using a while loop</h2>";
count = 0;
while (count < 5) {
    output += Math.floor(Math.random() * 100) + "<br>";
    count++;
}

output += "<h2>Task 29: Check if characters in a string are vowels</h2>";
const inputString = prompt("Enter a string:");
let index = 0;
while (index < inputString.length) {
    const char = inputString[index];
    if ("aeiouAEIOU".includes(char)) {
        output += `${char} is a vowel`;
        output += char === char.toUpperCase() ? " and uppercase<br>" : " and lowercase<br>";
    } else {
        output += `${char} is not a vowel<br>`;
    }
    index++;
}

output += "<h2>Task 30: Print divisors of numbers from 10 to 30</h2>";
let number = 10;
while (number <= 30) {
    output += `${number}: `;
    let divisor = 1;
    while (divisor <= number) {
        if (number % divisor === 0) {
            output += `${divisor}, `;
        }
        divisor++;
    }
    output += "<br>";
    number++;
}

output += "<h2>Task 31: Analyze digits of a number</h2>";
const numberToAnalyze = prompt("Enter a number:");
let resultString = "";
let digits = String(numberToAnalyze);
for (let i = 0; i < digits.length; i++) {
    const digit = parseInt(digits[i]);
    if (digit === 0) {
        resultString += "o";
    } else if (digit === 1) {
        resultString += "c";
    } else if (digit > 1 && digit < 10 && isPrime(digit)) {
        resultString += "p";
    } else if (digit % 2 === 0 && !isPrime(digit)) {
        resultString += "i";
    } else if (digit > 4 && digit % 2 !== 0 && !isPrime(digit)) {
        resultString += "k";
    }
}
output += `The string based on the digits is: ${resultString}.<br>`;

const numForFactorial = prompt("Enter a number for factorial:");
let factorialResult = 1;
let temp = 1;
while (temp <= numForFactorial) {
    factorialResult *= temp;
    temp++;
}
output += `Factorial of ${numForFactorial} is: ${factorialResult}.<br>`;

output += "<h2>Task 32: Asterisks pattern of right triangle</h2>";
const triangleSize = prompt("Enter a number for triangle size:");
let row = 1;
while (row <= triangleSize) {
    output += " ".repeat(triangleSize - row) + "*".repeat(row) + "<br>";
    row++;
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

outputDiv.innerHTML = output;
