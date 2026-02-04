const inputItem = document.getElementById("input-item")


function criarItemDaLista() {
    evento.preventDefault();
    if (inputItem.value === "") {
        alert("Por favor, insira um item válido, burro do cacete.") 
        return
    }

    // CONTAINER DE ITENS
    const itemLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");
    
    // CHECKBOX
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++
    
    // NOME DO ITEM
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;
    
    // CONFIGURANDO CHECKBOX
inputCheckbox.addEventListener("click", function() {
    if (inputCheckbox.checked) {
        nomeItem.style.textDecoration = "line-through";
    } else {
        nomeItem.style.textDecoration = "none";
    }
});
        
    // MONTANDO A LISTA
    containerItemLista.appendChild(inputCheckbox);
    containerItemLista.appendChild(nomeItem);

    itemLista.appendChild(containerItemLista);

    // AJUSTE DA DATA
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", { weekday: "long"});
    // DIA/MÊS/ANO (formato PT-BR)
    const data = new Date().toLocaleDateString("pt-BR");
    // HORA
    const hora = new Date().toLocaleTimeString("pt-BR",{
        hour: "numeric",
        minute: "numeric"
    })
    // JUNTANDO AS INFORMAÇÕES
    const dataCompleta = `${diaDaSemana} (${data} às ${hora})`;
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;

    // ADICIONANDO CLASSE PARA ESTILIZAÇÃO
    itemData.classList.add("texto-data")
    itemLista.appendChild(itemData);

    // ADICIONANDO ITEM NA LISTA (com hora e data)
    listaDeCompras.appendChild(itemLista);

}