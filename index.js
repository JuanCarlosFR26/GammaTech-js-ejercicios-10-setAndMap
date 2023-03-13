import { fullCountries } from "./countries_data.js";

// Ejercicios

// Ejercicios:Nivel 1

// const a = [4, 5, 8, 9];
// const b = [3, 4, 5, 7];
// const countries = ["Finland", "Sweden", "Norway"];
// crear un set vacío
const emptySet = new Set();

console.log( emptySet );

console.log("=============================");


// Crear un set que contenga de 0 a 10 utilizando el bucle
const tenNumbers = new Set()
for(let i = 0; i <= 10; i++) {
    tenNumbers.add(i);
}

console.log( tenNumbers );

console.log("=============================");


// Eliminar un elemento de set
tenNumbers.delete(5);
console.log( tenNumbers );

console.log("=============================");


// Limpia set
tenNumbers.clear();
console.log( tenNumbers );

console.log("=============================");

// Crear un set de 5 elementos string a partir de un array
const citys = [
    "Madrid",
    "Madrid",
    "Roma",
    "paris",
    "Berlín",
    "París",
  ];
  
const fiveLanguages = new Set(citys);

console.log(fiveLanguages);

console.log("=============================");

// Crear un map de países y el número de caracteres de un país
const countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
  ];

const map = new Map(countries);

console.log(map);

map.forEach(e => console.log(`${e} => Caracteres: ${e.length}`));

console.log("=============================");


// Ejercicios:Nivel 2

// Encontrar a unión b
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C);

console.log("=============================");

// Encontrar a intersección b
let newC = a.filter((num) => B.has(num));
console.log(newC);
console.log("=============================");

// Encontrar a con b
let noneNewC = a.filter((num) => !B.has(num));
console.log(noneNewC);
console.log("=============================");


// Ejercicios:Nivel 3

// Cuántos idiomas hay en el archivo de objetos de países.

// *** Utiliza los datos de los países para encontrar las 10 lenguas más habladas:

// // El resultado debería ser el siguiente
// console.log(mostSpokenLanguages(countries, 10))[
//   ({ English: 91 },
//   { French: 45 },
//   { Arabic: 25 },
//   { Spanish: 24 },
//   { Russian: 9 },
//   { Portuguese: 9 },
//   { Dutch: 8 },
//   { German: 7 },
//   { Chinese: 5 },
//   { Swahili: 4 },
//   { Serbian: 4 })
// ];

// // El resultado debería ser el siguiente
// console.log(mostSpokenLanguages(countries, 3))[
//   ({ English: 91 }, { French: 45 }, { Arabic: 25 })
// ];

function mostSpokenLanguages(arr, num) {
    const languages = arr.reduce((acc, country) => {
        return acc.concat(country.languages);
    }, []);

    const languageCounts = languages.reduce((acc, language) => {
        acc[language] = (acc[language] || 0) + 1;
        return acc;
    }, {});

    const sortedLanguages = Object.keys(languageCounts).sort((a, b) => languageCounts[b] - languageCounts[a]);

    return sortedLanguages.slice(0, num).reduce((acc, language) => {
        acc[language] = languageCounts[language];
        return acc;
    }, {});
}

console.log(mostSpokenLanguages(fullCountries, 10));
console.log(mostSpokenLanguages(fullCountries, 3));