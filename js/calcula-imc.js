let clients = document.querySelectorAll(".client");

if(clients){
    for(var i = 0; i < clients.length; i++){
        let client = clients[i];
    
        let clientPeso      = client.querySelector(".info-peso").textContent;
        let clientAltura    = client.querySelector(".info-altura").textContent;
    
        let valAltura   = validaAltura(clientAltura);
        let valPeso     = validaPeso(clientPeso);

        if(valAltura && valPeso){
            let clientIMCValue  = calcIMC(clientPeso, clientAltura);
            client.querySelector(".info-imc").textContent = clientIMCValue;
        }
    }
}

function calcIMC(peso, altura){
    peso = parseFloat(peso);
    altura = parseFloat(altura);
    let imc = (peso / (altura*altura));
    return imc.toFixed(2);
}

function validaAltura(altura){
    let validate = (altura >= 0 && altura <= 3.00) ?  true : false;
    return validate;
}

function validaPeso(peso){
    let validate = (peso >= 0 && peso <= 1000) ? true : false;
    return validate;
}

function validaGordura(gordura){
    let validate = (gordura >= 0 && gordura <= 100) ? true : false;
    return validate;
}