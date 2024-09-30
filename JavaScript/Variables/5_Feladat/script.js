const length = 10.4;
const width = 13.5;
const height = 8.2;

const surface_area = 2 * (length * width + length * height + width * height);
const volume = length * width * height;

document.getElementById('output').innerHTML = 
  `Surface Area: ${surface_area.toFixed(2)}<br>` +
  `Volume: ${volume.toFixed(2)}`;
