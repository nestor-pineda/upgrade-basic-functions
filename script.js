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
    return siguiente.length - anterior.length;
  });
  return avengersOrdenado[0];
}

console.log(findLongestWord(avengers)); // devuelve Captain A.
