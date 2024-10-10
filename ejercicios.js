/* ### Ejercicio 2: Suma de números pares
Escribe un programa que calcule la suma de todos los números pares del 
1 al 50. Utiliza un bucle for para iterar a través de los números y 
una declaración if para verificar si un número es par. */

let suma = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        suma += i;
    }
}
console.log('suma de pares de 1 a 50 = ' + suma);

/* 4. Escribe un programa que permita al usuario ingresar un número y luego muestre 
la tabla de multiplicar de ese número del 1 al 10. Utiliza un bucle for para generar la tabla. */

const prompt = require('prompt-sync')();
let numTabla = parseInt(prompt("Ingrese un número: "));
for (let i = 1; i <= 10; i++) {
    console.log(`${numTabla} * ${i} = ${numTabla * i}`);
}

/* Ejercicio 5: Contador regresivo
Escribe un programa que cuente desde un número ingresado por el usuario hasta 1, 
mostrando cada número en la consola. Utiliza un bucle while para realizar el conteo regresivo. */

let numeroRegresivo = parseInt(prompt("conteo regresivo, Ingrese un número: "));
while (numeroRegresivo > 0) {
    console.log(numeroRegresivo);
    numeroRegresivo--;
}

/* Ejercicio 6: Validación de contraseña
Escribe un programa que le pida al usuario que ingrese una contraseña. La contraseña debe tener al 
menos 8 caracteres, al menos una letra mayúscula, una letra minúscula y un número. Utiliza un bucle
 while para asegurarte de que el usuario ingrese una contraseña válida. Si la contraseña es válida,
  muestra un mensaje de éxito; de lo contrario, pide al usuario que ingrese una contraseña nuevamente. */ 

let password = prompt("Ingrese una contraseña: ");
let mayuscula = false;
let minuscula = false;
let numero = false;
while (password.length < 8 || !mayuscula || !minuscula || !numero) {
    mayuscula = false;
    minuscula = false;
    numero = false;
    password = prompt("Ingrese una contraseña válida: ");
    for (let i = 0; i < password.length; i++) {
        if (password[i] >= 'A' && password[i] <= 'Z') {
            mayuscula = true;
        } else if (password[i] >= 'a' && password[i] <= 'z') {
            minuscula = true;
        } else if (!isNaN(password[i])) {
            numero = true;
        }
    }
}

if (mayuscula && minuscula && numero) {
    console.log("Contraseña válida");
} else {
    console.log("Contraseña inválida");
}

/* ### Ejercicio 7: Adivinanza con do-while
Escribe un juego en el que el programa elija un número aleatorio entre 1 y 10, 
y el usuario tenga que adivinarlo. El programa debe proporcionar pistas (mayor/menor) 
hasta que el usuario adivine correctamente el número. Utiliza un bucle do-while 
para repetir la solicitud de adivinanza hasta que se adivine el número.

**Como genero un número aleatorio:* 
*/

const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let adivinar;
do {
    adivinar = parseInt(prompt("Adivina un número entre 1 y 10: "));
    if (adivinar < 1 || adivinar > 10) {
        console.log("El número esta fuera de rango");
    } else if (adivinar > numeroAleatorio) {
        console.log("El número a adivinar es menor");
    } else if (adivinar < numeroAleatorio) {
        console.log("El número  a adivibnar es mayor");
    } else {
        console.log("Felicidades, adivinaste el número");
    }
} while (adivinar !== numeroAleatorio);

