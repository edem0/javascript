let a = 3;
a += 10; 

let b = 100;
b -= 7; 

let c = 44;
c *= 2; 

let d = 125;
d /= 5; 

let e = 8;
e = Math.pow(e, 3); 

let f1 = 123;
let f2 = 345;
let isF1Greater = f1 > f2; 

let g1 = 350;
let g2 = 200;
let isDoubleG2Greater = (g2 * 2) > g1; 

let h = 136020258;
let has11AsDivisor = (h % 11 === 0); 

let i1 = 10;
let i2 = 3;
let isI1InRange = (i1 > Math.pow(i2, 2)) && (i1 < Math.pow(i2, 3)); 

let j = 1521;
let isDivisibleBy3Or5 = (j % 3 === 0) || (j % 5 === 0); 

const output = `
  Value of a after increase: ${a}<br>
  Value of b after decrease: ${b}<br>
  Value of c after doubling: ${c}<br>
  Value of d after division: ${d}<br>
  Value of e after cubing: ${e}<br>
  Is f1 greater than f2? ${isF1Greater}<br>
  Is double g2 greater than g1? ${isDoubleG2Greater}<br>
  Does h have 11 as a divisor? ${has11AsDivisor}<br>
  Is i1 greater than i2 squared and smaller than i2 cubed? ${isI1InRange}<br>
  Is j divisible by 3 or 5? ${isDivisibleBy3Or5}
`;

document.getElementById('output').innerHTML = output;
