import multiplicar, { dividir } from "./multiplicacionDivision.js";
import { sumar, restar } from "./sumaResta.js";

const num1 = 10;
const num2 = 5;

const resultado = document.createElement("div");
resultado.id = "resultado";
document.body.appendChild(resultado);

resultado.innerHTML += "<p>Suma: " + sumar(num1, num2) + "</p>";
console.log("Suma: " + sumar(num1, num2));

resultado.innerHTML += "<p>Resta: " + restar(num1, num2) + "</p>";
console.log("Resta: " + restar(num1, num2));

resultado.innerHTML += "<p>Multiplicacion: " + multiplicar(num1, num2) + "</p>";
console.log("Multiplicacion: " + multiplicar(num1, num2));

try {
    resultado.innerHTML += "<p>Division: " + dividir(num1, num2) + "</p>";
    console.log("Division: " + dividir(num1, num2));
} catch (error) {
    resultado.innerHTML += "<p>Error en division: " + error.message + "</p>";
    console.log("Error en division: " + error.message);
}

try {
    resultado.innerHTML += "<p>Division entre cero: " + dividir(num1, 0) + "</p>";
    console.log("Division entre cero: " + dividir(num1, 0));
} catch (error) {
    resultado.innerHTML += "<p>Error en division: " + error.message + "</p>";
    console.log("Error en division: " + error.message);
}