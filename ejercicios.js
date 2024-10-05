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


