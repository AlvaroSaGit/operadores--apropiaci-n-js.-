import leer from "prompt-sync";
const ingresar = leer();
// 2. Las tres notas del estudiante
// Un aprendiz obtuvo tres notas en sus evaluaciones. Necesita calcular el promedio
// para saber cómo le fue en la asignatura. Crea un programa que, a partir de tres
// valores numéricos, muestre el promedio en pantalla.


// se crea las 3 variables
let nota1 = parseInt(ingresar("Ingrese la primera variable: "));
let nota2 = parseInt(ingresar("Ingrese la segunda variable: "));
let nota3 = parseInt(ingresar("Ingrese la tercera variable: "));
// promedio se le asignara la operacion

let promedio = (nota1 + nota2 + nota3) / 3;

console.log(`El promedio fue de: ${promedio}`);
