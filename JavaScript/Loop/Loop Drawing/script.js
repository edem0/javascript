function drawChessTable() {
  let size = parseInt(prompt("Please enter the chess table size:"));
  let output = "";
  for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
          output += (i + j) % 2 === 0 ? "%" : " ";
      }
      output += "\n";
  }
  document.getElementById("output").innerText = output;
}

function drawSquareWithDiagonal() {
  let size = parseInt(prompt("Please enter the square size:"));
  let output = "";
  for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
          if (i === 0 || i === size - 1 || j === 0 || j === size - 1 || i === j) {
              output += "%";
          } else {
              output += " ";
          }
      }
      output += "\n";
  }
  document.getElementById("output").innerText = output;
}

function drawDiamond() {
  let height = parseInt(prompt("Please enter the diamond height:"));
  let output = "";
  for (let i = 0; i < height; i++) {
      let spaces = ' '.repeat(height - i - 1);
      let stars = '*'.repeat(2 * i + 1);
      output += spaces + stars + "\n";
  }
  for (let i = height - 2; i >= 0; i--) {
      let spaces = ' '.repeat(height - i - 1);
      let stars = '*'.repeat(2 * i + 1);
      output += spaces + stars + "\n";
  }
  document.getElementById("output").innerText = output;
}

function drawPyramid() {
  let height = parseInt(prompt("Please enter the pyramid height:"));
  let output = "";
  for (let i = 0; i < height; i++) {
      let spaces = ' '.repeat(height - i - 1);
      let stars = '*'.repeat(2 * i + 1);
      output += spaces + stars + "\n";
  }
  document.getElementById("output").innerText = output;
}

function drawSquare() {
  let size = parseInt(prompt("Please enter the square size:"));
  let output = "";
  for (let i = 0; i < size; i++) {
      if (i === 0 || i === size - 1) {
          output += "*".repeat(size) + "\n";
      } else {
          output += "*" + " ".repeat(size - 2) + "*\n";
      }
  }
  document.getElementById("output").innerText = output;
}

function drawTriangle() {
  let height = parseInt(prompt("Please enter the triangle height:"));
  let output = "";
  for (let i = 1; i <= height; i++) {
      output += "*".repeat(i) + "\n";
  }
  document.getElementById("output").innerText = output;
}
