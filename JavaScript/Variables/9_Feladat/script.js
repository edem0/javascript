const humptyLines = [
    "Humpty Dumpty sat on a wall,",
    "Humpty Dumpty had a great fall.",
    "All the king's horses and all the king's men",
    "Couldn't put Humpty together again."
  ];
  
  const formattedLines = humptyLines.join('<br>');
  
  document.getElementById('output').innerHTML = formattedLines;
  