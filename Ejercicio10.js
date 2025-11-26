const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const contrasenas = [
    "Hola1234",
    "hola1234",
    "HOLA1234",
    "Hola",
    "HolaMundo1"
];

const resultado = document.getElementById("resultado");

contrasenas.forEach(contrasena => {
    const esValida = regex.test(contrasena);
    console.log(contrasena + ": " + esValida);
    resultado.innerHTML += "<p>" + contrasena + ": " + esValida + "</p>";
});
