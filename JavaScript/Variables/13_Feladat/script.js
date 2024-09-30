const num1 = 22;
const num2 = 13;

const addition = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;
const integerDivision = Math.floor(num1 / num2);
const remainder = num1 % num2;

const output = `
  Result of ${num2} added to ${num1}: ${addition}<br>
  Result of ${num2} subtracted from ${num1}: ${subtraction}<br>
  Result of ${num1} multiplied by ${num2}: ${multiplication}<br>
  Result of ${num1} divided by ${num2} (as a decimal): ${division.toFixed(2)}<br>
  Integer part of ${num1} divided by ${num2}: ${integerDivision}<br>
  Remainder of ${num1} divided by ${num2}: ${remainder}
`;

document.getElementById('output').innerHTML = output;
