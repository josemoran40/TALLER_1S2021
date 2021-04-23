/*
 * Comentarios multilinea
 */

// Comentarios de una linea

// Impresion por consola
console.log("Hello world");

/**
 * Variables
 */
// Numeros
var a = 5;
var b = 10.5;
var c = -5;

// Cadenas de texto (string)
var text = "Hello";
var char = "a";

//Arreglos (Arrays)
var list = [];
var numbers = [1, 2, 3, 4];
var names = ["Francisco", "Jose", "Jorge", "Luis"];

// JavaScript Object Notation (JSON)
var student = { name: "Francisco Suarez", age: 21, carnet: 201807190 };
var students = [
  { name: "Francisco Suarez", age: 21, carnet: 201807190 },
  { name: "Jorge Cante", age: 21, carnet: 201800499 },
  { name: "Jose Moran", age: 21, carnet: 201807455 },
];

//Impresion
console.log(a);

/**
 * Condicionales
 */

// IF
console.log("IF-ELSE IF-ELSE");
var x = 10;
if (x > 10) {
  console.log("El numero es mayor a 10");
} else if (x < 10) {
  console.log("El numero es menor a 10");
} else {
  console.log("El numero es igual a 10");
}

//SWITCH
console.log("SWITCH");
var y = 0;
switch (y) {
  case 0:
    console.log("El numero es igual a 0");
    break;
  case 5:
    console.log("El numero es igual a 5");
    break;
  case 10:
    console.log("El numero es igual a 10");
    break;
  default:
    console.log("Default: El numero es:", y);
    break;
}

/**
 * Ciclos
 */

// FOR
console.log("FOR");
for (let i = 0; i < 5; i++) {
  let element = i;
  //Impresion de datos
  console.log(element);
}

console.log("FOR para recorrer un array");
for (let i = 0; i < students.length; i++) {
  let element = students[i];
  //Impresion de datos
  console.log(element);
}

// WHILE
console.log("WHILE");
var z = 0;
while (z < 5) {
  console.log(z);
  z++;
}

console.log("WHILE para recorrer un array");
var count = 0;
while (count < numbers.length) {
  let element = numbers[count];
  console.log(element);
  count++;
}

// FOREACH
console.log("FOREACH");
students.forEach((element) => {
  console.log(element.name);
});

// FUNCIONES

function suma(a, b) {
  let result = a + b;
  return result;
}

function resta(a, b) {
  let result = a - b;
  return result;
}

function operation(a, b, symbol) {
  let result = 0;
  switch (symbol) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      result = 0;
      break;
  }
  return result;
}

function greetMe(yourName) {
  alert("Hola " + yourName);
}

function areaCirculo(radio) {
  const pi = 3.1416;
  const result = pi * radio ** 2;
  return result;
}

greetMe("Francisco");

console.log(operation(1, 2, "+"));

console.log(areaCirculo(2));
