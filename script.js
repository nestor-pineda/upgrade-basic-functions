"use strict";

// #1: Buscar el máximo
function sum(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log(numberOne);
  } else {
    console.log(numberTwo);
  }
}

sum(7, 8); // Devuelve 8.

// #2: Buscar la palabra más larga
const avengers = ["Hulk", "Thor", "IronMan", "Captain A.", "Spiderman", "Captain M."];

function findLongestWord(param) {
  let avengersOrdenado = avengers.sort(function (primero, segundo) {
    return segundo.length - primero.length;
  });
  return avengersOrdenado[0];
}

console.log(findLongestWord(avengers)); // Devuelve Captain A.

// #3: Calcular la suma
const numbers = [1, 2, 3, 5, 45, 37, 58];

let suma = numbers.reduce(function (total, numero) {
  return total + numero;
}, 0);

console.log(suma); // Devuelve 151

// #4: Calcular el promedio
const numeros = [12, 21, 38, 5, 45, 37, 6];

let sumatorio = numeros.reduce(function (total, numero) {
  return total + numero;
}, 0);
let promedio = sumatorio / numeros.length;

console.log(promedio); // Devuelve 23.428571428571427

// #5: Calcular promedio de strings

const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

/* function averageWord(param) {
  for (let i = 0; i < mixedElements.length; i++) {
    if (typeof mixedElements[i] == "number") {
      mixedElements.reduce(function (total, numero) {
        return total + numero;
      });
    }
  }
}

console.log(averageWord(mixedElements));
 */

// #6: Valores únicos
const duplicates = ["sushi", "pizza", "burger", "potatoe", "pasta", "ice-cream", "pizza", "chicken", "onion rings", "pasta", "soda"];

let uniques = [];

function removeDuplicates(param) {
  param.forEach((string) => {
    if (!uniques.includes(string)) {
      uniques.push(string);
    }
  });
  return uniques;
}
console.log(removeDuplicates(duplicates));
