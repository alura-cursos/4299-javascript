const listaDeCompras = document.getElementById("lista-de-compras")

// CONFIGURANDO BOTÃO
const botaoAdicionar = document.getElementById("adicionar-item")
let contador = 0;

botaoAdicionar.addEventListener("click", (evento) => {
    verificarListaVazia();
})

// MENSAGEM DE LISTA VAZIA

const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia() {
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block"
    } else {
        mensagemListaVazia.style.display = "none"
    }
}

verificarListaVazia();