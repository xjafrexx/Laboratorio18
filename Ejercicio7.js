const boton = document.getElementById("btnCargar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/users/2")
        .then(response => response.json())
        .then(data => {
            resultado.innerHTML = "<p>Nombre: " + data.name + "</p>" +
                                  "<p>Email: " + data.email + "</p>" +
                                  "<p>Ciudad: " + data.address.city + "</p>";
        })
        .catch(error => {
            console.error("Error:", error);
        });
});