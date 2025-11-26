async function cargarUsuarios() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        const resultado = document.getElementById("resultado");
        data.forEach(usuario => {
            console.log(usuario.name);
            resultado.innerHTML += "<p>" + usuario.name + "</p>";
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

cargarUsuarios();