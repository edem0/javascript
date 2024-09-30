function calculateLegs() {
    const chickens = parseInt(document.getElementById('chickens').value);
    const pigs = parseInt(document.getElementById('pigs').value);

    if (isNaN(chickens) || isNaN(pigs)) {
      document.getElementById('result').innerText = "Please enter valid numbers!";
      return;
    }

    const totalLegs = (chickens * 2) + (pigs * 4);

    document.getElementById('result').innerText = `The number of legs: ${totalLegs}`;
  }