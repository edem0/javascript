window.onload = function() {
    const myName = "John Doe"; 
    const myAge = 31;  
    const myHeight = 1.75;  
    const isMarried = false;  
  
    document.getElementById('output').innerHTML = 
      `Name: ${myName}<br>` +
      `Age: ${myAge}<br>` +
      `Height: ${myHeight} meters<br>` +
      `Married: ${isMarried}`;
  };