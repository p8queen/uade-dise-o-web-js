
console.log("hola mundo");
const prompt = require('prompt-sync')();

// let numero = parseInt(prompt("Ingrese un número: "));
let numero = 5;
// ternario
let mensaje = 'el numero ingresado es ';
mensaje += numero % 2 === 0 ? 'par' : 'impar';
console.log(mensaje);

if (numero === 0) {
    console.log("El número es cero");
    } else if (numero > 0) {
    console.log("El número es positivo");
    } else {
    console.log("El número es negativo");
    }

// switch 
switch (numero) {
    case 0:
        console.log("El número es cero");
        break;
    case 1:
        console.log("El número es uno");
        break;
    case 2:
        console.log("El número es dos");
        break;
    default:
        console.log("El número mayor a dos");
        break;
}

// bucles
let contador = 0;
while (contador < numero) {
    console.log('while: ' + contador);
    contador++;
}

for (let i = 0; i < numero; i++) {
    console.log('for: ' + i);
}

// for con incremento de 2
for (let i = 0; i < 20; i += 2) {
    console.log('for incremento de 2: ' + i);
}