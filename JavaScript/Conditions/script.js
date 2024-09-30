function largerOfTwo() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    let output = num1 > num2 ? `The larger number is: ${num1}` : `The larger number is: ${num2}`;
    document.getElementById("output").innerText = output;
}

function largerOfThree() {
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    let num3 = parseFloat(prompt("Enter third number:"));
    let output = Math.max(num1, num2, num3);
    document.getElementById("output").innerText = `The larger number is: ${output}`;
}

function divisibleByThreeAndFive() {
    let number = parseInt(prompt("Enter a number:"));
    let output = "";
    if (number % 3 === 0) {
        output += "Divisible by 3.\n";
    } else {
        output += "Not divisible by 3.\n";
    }
    if (number % 5 === 0) {
        output += "Divisible by 5.";
    } else {
        output += "Not divisible by 5.";
    }
    document.getElementById("output").innerText = output;
}

function oddOrEven() {
    let number = parseInt(prompt("Enter a number:"));
    let output = number % 2 === 0 ? "The given number is even." : "The given number is odd.";
    document.getElementById("output").innerText = output;
}

function gradeFromScore() {
    let score = parseInt(prompt("Enter a numeric score:"));
    let grade;
    if (score >= 90) {
        grade = "A";
    } else if (score >= 80) {
        grade = "B";
    } else if (score >= 70) {
        grade = "C";
    } else if (score >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }
    document.getElementById("output").innerText = `The letter grade is: ${grade}`;
}

function vowelOrConsonant() {
    let word = prompt("Enter a word:").toLowerCase();
    let output = "The word starts with a " + ("aeiou".includes(word[0]) ? "vowel." : "consonant.");
    document.getElementById("output").innerText = output;
}

function leapYearCheck() {
    let year = parseInt(prompt("Enter a year:"));
    let output = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? "Leap year." : "Not a leap year.";
    document.getElementById("output").innerText = output;
}

function monthName() {
    let monthNumber = parseInt(prompt("Enter a number from 1 to 12:"));
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let output = (monthNumber >= 1 && monthNumber <= 12) ? `The month is: ${months[monthNumber - 1]}` : "Invalid month number.";
    document.getElementById("output").innerText = output;
}

function numberSign() {
    let number = parseFloat(prompt("Enter a number:"));
    let output = number > 0 ? "The number is positive." : (number < 0 ? "The number is negative." : "The number is zero.");
    document.getElementById("output").innerText = output;
}

function rockPaperScissors() {
    let player1 = prompt("Player 1: Enter your choice (rock, paper, scissors):").toLowerCase();
    let player2 = prompt("Player 2: Enter your choice (rock, paper, scissors):").toLowerCase();
    let output;
    if (player1 === player2) {
        output = "The game is a tie.";
    } else if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "scissors" && player2 === "paper") ||
        (player1 === "paper" && player2 === "rock")
    ) {
        output = "The first player wins.";
    } else {
        output = "The second player wins.";
    }
    document.getElementById("output").innerText = output;
}