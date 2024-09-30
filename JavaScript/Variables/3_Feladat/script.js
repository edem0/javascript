const mass_in_kg = 81.2;
const height_in_m = 1.78;
const bmi = mass_in_kg / (height_in_m ** 2);

document.getElementById('output').innerHTML = 
  `Mass: ${mass_in_kg} kg<br>` +
  `Height: ${height_in_m} m<br>` +
  `Your BMI is: ${bmi.toFixed(2)}`;
