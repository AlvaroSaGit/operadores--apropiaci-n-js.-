// 1. El terreno rectangular
// Un agricultor tiene un terreno rectangular y conoce su base y su altura en metros. Quiere calcular tanto el área como el perímetro del terreno para cercarlo y sembrar. Diseña un programa en el que él pueda obtener ambos valores.

let base =5;
let altura = 8;

let area=base*altura;
let perimetro = (2 * base) + (2 + altura);

console.log(`El area es de: ${area}\nEl perimetro es de: ${perimetro}`);

// 2. Las tres notas del estudiante
// Un aprendiz obtuvo tres notas en sus evaluaciones. Necesita calcular el promedio
// para saber cómo le fue en la asignatura. Crea un programa que, a partir de tres
// valores numéricos, muestre el promedio en pantalla.

let nota1 = 5;
let nota2 = 2;
let nota3 = 4;

let promedio = (nota1 + nota2 + nota3) / 3;

console.log(`El promedio fue de: ${promedio}`);

// 4. El contador de visitas
// Un sitio web comienza con un contador de visitas en 100. En un día recibe 25
// visitas adicionales, luego pierde 10 por un error de registro, y finalmente se
// duplican las visitas. Representa esta situación y determina cuál es el valor final del
// contador.

let visitas = 100;

visitas = visitas + 25;

visitias = visitas - 10;

visitas = visitas * 2;

console.log(`El valor final del contador fue de: ${visitas}`);


// 5. La operación misteriosa
// Se tiene la expresión matemática siguiente: (20+10)/5+3∗2−4(20 + 10) / 5 + 3 * 2 - 4(20+10)/5+3∗2

let operacion = (20+10)/5+3*2-4+(20 + 10) / 5 + 3 * 2 - 4 + (20+10)/5+3*2;

console.log(`Resultado de la operacion: ${operacion}`);
