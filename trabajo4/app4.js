import leer from "prompt-sync";
const ingresar = leer();


// 5. La operación misteriosa
// Se tiene la expresión matemática siguiente: (20+10)/5+3∗2−4(20 + 10) / 5 + 3 * 2 - 4(20+10)/5+3∗2

let operacion = (20 + 10) / 5 + 3 * 2 - 4 + (20 + 10) / 5 + 3 * 2 - 4 + (20 + 10) / 5 + 3 * 2;

// Se desarrollara primero los parentesis
// Luego de izquierda a derecha se resulve las divisiones y multiplicaciones
// Algo que destacar es que se repiten varios casos (20 + 10)/5 o 3*2 - 4

console.log(`Resultado de la operacion: ${operacion}`);

