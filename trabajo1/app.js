import leer from "prompt-sync";
const ingresar = leer();
// 1. El terreno rectangular
// Un agricultor tiene un terreno rectangular y conoce su base y su altura en metros. Quiere calcular tanto el área como el perímetro del terreno para cercarlo y sembrar. Diseña un programa en el que él pueda obtener ambos valores.

// se crean y se suponen para practica de la variable
// paralelograma (dfd)
let base = parseFloat(ingresar("Ingrese la base del rectangulo: "));
let altura = parseFloat(ingresar("Ingrese la altura del rectangulo: "));

// rectangulo (dfd)
let area=base*altura;
// perimetro es para la operacion
let perimetro = (2 * base) + (2 + altura);

console.log(`El area es de: ${area}\nEl perimetro es de: ${perimetro}`);

