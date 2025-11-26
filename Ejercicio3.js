function cargarUsuario() {
    fetch("https://jsonplaceholder.typicode.com/users/10")
        .then(response => response.json())
        .then(data => {
            console.log("Nombre: " + data.name);
            console.log("Username: " + data.username);
            console.log("Email: " + data.email);
            
            const resultado = document.getElementById("resultado");
            resultado.innerHTML = "<p>Nombre: " + data.name + "</p>" +
                                  "<p>Username: " + data.username + "</p>" +
                                  "<p>Email: " + data.email + "</p>";
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

cargarUsuario();