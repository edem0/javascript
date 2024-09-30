const classmates = ["Niki", "Zsombor", "Marci"];

const greetings = classmates.map(classmate => `Hello, ${classmate}!`).join('<br>');

document.getElementById('output').innerHTML = greetings;
