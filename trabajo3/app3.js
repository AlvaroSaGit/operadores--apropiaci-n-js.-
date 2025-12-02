import leer from "prompt-sync";
const ingresar = leer();
// 4. El contador de visitas
// Un sitio web comienza con un contador de visitas en 100. En un día recibe 25
// visitas adicionales, luego pierde 10 por un error de registro, y finalmente se
// duplican las visitas. Representa esta situación y determina cuál es el valor final del
// contador.

// se crea visitas y sus secuencias
let visitas = parseInt(ingresar("Ingrese la cantidad de visitas del sitio web: "));

visitas += parseInt(ingresar("Primer caso - Cuantos aumentaron: "));
visitas -= parseInt(ingresar("Segundo caso - Cuantos disminuyeron: "));
visitas *= parseInt(ingresar("Tercero caso - Por cuanto quiere que se duplique: "));

console.log(`El valor final del contador fue de: ${visitas}`);


