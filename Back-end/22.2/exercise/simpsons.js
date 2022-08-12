// EXC 4
// Crie uma função que leia todos os dados do arquivo e imprima 
// cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.

const fs = require('fs').promises;

// function readAll() {
//   fs.readFile('./simpsons.json', 'utf-8')
//     .then((fileContent) => {
//       const simpsons = JSON.parse(fileContent); // Convert content to array
//       const strings = simpsons.map(({ id, name }) => `${id} - ${name}`); // map objects of array to correct format
//       strings.forEach((string) => console.log(string)); // show stings in correct format in terminal
//     });
// }

// function main() {
//   readAll();
// }

// main();


// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, 
// rejeite a Promise com o motivo "id não encontrado".

// async function getSimpsonById(id) { // criar function and read arquive
//   const fileContent = await fs
//     .readFile('./simpsons.json', 'utf-8');
  
//   const simpsons = JSON.parse(fileContent);
//   const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id); // search of simpson and error dispatch if promise rejected
//   if (!chosenSimpson) {
//     throw new Error('id não encontrado');
//   }
//   return chosenSimpson; // if simpson exists -> resolve promise with info
// }

// async function main() { // For reveiving return of async function above (output promise)
//   const simpson = await getSimpsonById(2);
//   console.log(simpson);
// }
// main();


// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

// async function filterSimpsons() {
//   const fileContent = await fs
//     .readFile('./simpsons.json', 'utf-8');
  
//   const simpsons = JSON.parse(fileContent);
//   const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6'); // filter array to remove
//   await fs.writeFile('./simpsons.json', JSON.stringify(newArray)); // write in arquive new filtered array
// }

// function main() {
//   filterSimpsons();
// }
// main();


// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, 
// contendo as personagens com id de 1 a 4.

async function createSimpsonFamily() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpson = JSON.parse(fileContent);
  const familyIds = [1, 2, 3, 4];
  const simpsonFamily = simpson
    .filter((simpson) => familyIds.includes(Number(simpson.id))); // criate array family ids and filter only members with same id
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily)); // write new arquive to .json
}

function main() {
  createSimpsonFamily();
}
main()