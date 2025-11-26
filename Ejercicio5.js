fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
        const resultado = document.getElementById("resultado");
        data.forEach(usuario => {
            console.log(usuario.name);
            resultado.innerHTML += "<p>" + usuario.name + "</p>";
        });
    })
    .catch(error => {
        console.error("Error:", error);
    });