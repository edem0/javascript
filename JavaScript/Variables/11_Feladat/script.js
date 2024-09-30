const miles = parseFloat(prompt("Please enter a distance in miles:"));

const kilometers = miles * 1.60934;

document.getElementById('output').innerHTML = `The distance in km: ${kilometers.toFixed(2)}`;
