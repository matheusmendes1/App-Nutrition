let addButton = document.querySelector("#add-client");
addButton.addEventListener("click", function(event){
    event.preventDefault();
    
    let form = document.querySelector("#client-form");
    
    let client = getClientFromForm(form);

    let errors = validateClient(client);

    if(errors.length > 0){
        showErrorsMessages(errors);
        return;
    }

    addClientOnTable(client);   
    form.reset();

    let mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
})

function getClientFromForm(form){
    let client = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gorduraCorp.value,
        imc: calcIMC(form.peso.value, form.altura.value)
    }

    return client;
}

function createRowToForm(client){

    let clientRow = document.createElement('tr');
    clientRow.classList.add("client");

    let number = findLastNumber();

    clientRow.appendChild(createTableDataToForm(number + 1), "info-numero");
    clientRow.appendChild(createTableDataToForm(client.nome, "info-nome"));
    clientRow.appendChild(createTableDataToForm(client.peso, "info-peso"));
    clientRow.appendChild(createTableDataToForm(client.altura, "info-altura"));
    clientRow.appendChild(createTableDataToForm(client.gordura, "info-gordura"));
    clientRow.appendChild(createTableDataToForm(client.imc, "info-imc"));

    return clientRow;
}

function createTableDataToForm(dado, classe){
    let clientData = document.createElement('td');
    clientData.classList.add(classe);
    clientData.textContent = dado;

    return clientData;
}

function findLastNumber(){
    let clients = document.querySelectorAll(".client");
    let number = 0;

    for(var i = 0; i < clients.length; i++){
        if(clients[i].querySelector(".info-numero"))
            number = clients[i].querySelector(".info-numero").textContent;
    }

    return parseInt(number);
}

function validateClient(client){

    let errors = [];

    if(client.nome.length == 0)     errors.push("Campo nome vazio!");
    if(client.gordura.length == 0)  errors.push("Campo gordura vazio!");
    if(client.peso.length == 0)     errors.push("Campo peso vazio!");
    if(client.altura.length == 0)   errors.push("Campo altura vazio!");
    
    if(!validaPeso(client.peso))    errors.push("Peso é inválido!");
    if(!validaAltura(client.altura)) errors.push("Altura é inválida!");
    if(!validaGordura(client.gordura)) errors.push("Porcentagem de gordura inválida!");

    return errors;
}

function showErrorsMessages(errors){
    let unorderedList = document.querySelector("#mensagens-erro");
    unorderedList.innerHTML = '';

    errors.forEach(function(erro){
        let listItem = document.createElement("li");
        listItem.classList.add("error-message");
    
        listItem.textContent = erro;
        unorderedList.appendChild(listItem);
    })
}

function addClientOnTable(client){
    var clientRow = createRowToForm(client);
    var tableBody = document.querySelector("#clients-table");

    tableBody.appendChild(clientRow);
}