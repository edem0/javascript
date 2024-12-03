import { readFile } from 'fs/promises';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import input from './input.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const filePath = resolve(__dirname, 'uvegek.txt');

const uvegKapacitasokBeolvasasa = async () => {
  try {
    const fileContent = await readFile(filePath, 'utf8');
    return fileContent.split(',').map(kapacitas => Number(kapacitas.trim()));
  } catch (err) {
    console.error('Nem sikerült beolvasni a fájlt:', err);
    throw err;
  }
};

const legnagyobbUvegKeresese = (kapacitasok) => {
  return kapacitasok.reduce((max, current, index) => {
    return current > max.kapacitas ? { kapacitas: current, pozicio: index + 1 } : max;
  }, { kapacitas: kapacitasok[0], pozicio: 1 });
};

const main = async () => {
  try {
    console.log('2. feladat');
    const uvegKapacitasok = await uvegKapacitasokBeolvasasa();

    const lekvarMennyisegInput = await input('Mari néni lekvárja (dl): ');
    const lekvarMennyiseg = Number(lekvarMennyisegInput);

    console.log('3. feladat');
    const { kapacitas, pozicio } = legnagyobbUvegKeresese(uvegKapacitasok);
    console.log(`A legnagyobb üveg: ${kapacitas} dl és ${pozicio}. a sorban.`);

    const teljesKapacitas = uvegKapacitasok.reduce((osszeg, current) => osszeg + current, 0);

    console.log('4. feladat');
    if (teljesKapacitas >= lekvarMennyiseg) {
      console.log('Elegendő üveg volt.');
    } else {
      console.log('Maradt lekvár.');
    }
  } catch (err) {
    console.error('Hiba történt:', err);
  }
};

main();
