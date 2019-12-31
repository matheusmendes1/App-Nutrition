let importButton = document.querySelector("#import-client");

importButton.addEventListener("click", function(){

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        let erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisible");
            let response = xhr.responseText;
            let clients = JSON.parse(response);

            clients.forEach(function(client) {
                addClientOnTable(client);
            });
        } else {
            erroAjax.classList.remove("invisible");
        }
    });

    xhr.send();
});
