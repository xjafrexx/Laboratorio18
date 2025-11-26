const boton = document.getElementById("btnCargar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", async function() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
        const data = await response.json();
        resultado.innerHTML = "<p>Nombre: " + data.name + "</p>" +
                              "<p>Email: " + data.email + "</p>" +
                              "<p>Ciudad: " + data.address.city + "</p>";
    } catch (error) {
        console.error("Error:", error);
    }
});
