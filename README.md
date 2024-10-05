# Actividad 8 – JavaScript
## Condicionales y Ciclos

### Ejercicio 1: Saludo personalizado
Escribe un programa que le pida al usuario ingresar su nombre y luego muestre un saludo personalizado en la consola. Utiliza una declaración if para verificar si se ingresó un nombre.

### Ejercicio 2: Suma de números pares
Escribe un programa que calcule la suma de todos los números pares del 1 al 50. Utiliza un bucle for para iterar a través de los números y una declaración if para verificar si un número es par.

### Ejercicio 3: Calculadora de promedio
Escribe un programa que le permita al usuario ingresar una serie de calificaciones. Luego, calcula y muestra el promedio de esas calificaciones. Utiliza un bucle for o while para permitir al usuario ingresar una cantidad variable de calificaciones.

### Ejercicio 4: Tabla de multiplicar
Escribe un programa que permita al usuario ingresar un número y luego muestre la tabla de multiplicar de ese número del 1 al 10. Utiliza un bucle for para generar la tabla.

### Ejercicio 5: Contador regresivo
Escribe un programa que cuente desde un número ingresado por el usuario hasta 1, mostrando cada número en la consola. Utiliza un bucle while para realizar el conteo regresivo.

### Ejercicio 6: Validación de contraseña
Escribe un programa que le pida al usuario que ingrese una contraseña. La contraseña debe tener al menos 8 caracteres, al menos una letra mayúscula, una letra minúscula y un número. Utiliza un bucle while para asegurarte de que el usuario ingrese una contraseña válida. Si la contraseña es válida, muestra un mensaje de éxito; de lo contrario, pide al usuario que ingrese una contraseña nuevamente.

### Ejercicio 7: Adivinanza con do-while
Escribe un juego en el que el programa elija un número aleatorio entre 1 y 10, y el usuario tenga que adivinarlo. El programa debe proporcionar pistas (mayor/menor) hasta que el usuario adivine correctamente el número. Utiliza un bucle do-while para repetir la solicitud de adivinanza hasta que se adivine el número.

**Como genero un número aleatorio:**

```javascript
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;


