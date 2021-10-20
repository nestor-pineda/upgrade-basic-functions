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
