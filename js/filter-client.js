let filterField = document.querySelector("#filter-clients");

filterField.addEventListener("input", function(){
   
    let clients = document.querySelectorAll(".client");

    if(this.value.length > 0){

        for(var i = 0; i < clients.length; i++){
            let client = clients[i];
            let infoNome = client.querySelector(".info-nome").textContent;
            console.log(infoNome);
            let expression = new RegExp(this.value, "i");

            if (!expression.test(infoNome)) {
                client.classList.add("invisible");
            } else {
                client.classList.remove("invisible");
            }
        }

    }else{
        for(var i = 0; i < clients.length; i++){
            let client = clients[i];
            client.classList.remove("invisible");
        }
    }
})