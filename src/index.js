import cipher from './cipher.js';

let botaoCodificar = document.getElementById("codificar");
let botaoDecodificar = document.getElementById("decodificar");
botaoCodificar.addEventListener("click", printarResultadoCode);
botaoDecodificar.addEventListener("click", printarResultadoDecode);

function printarResultadoCode() {
    let mensagem = document.getElementById("mensagem").value.toUpperCase();
    let offset = document.getElementById("offset").value;
    if (mensagem === "" || offset === "") {
        alert("nenhuma mensagem ou numero digitado, Favor preencher")
    }
    else {
        document.getElementById("resultado").innerHTML = `A PALAVRA CIFRADA É: ${cipher.encode(offset, mensagem)}`;
    }
}

function printarResultadoDecode() {
    let mensagem = document.getElementById("mensagem").value.toUpperCase();
    let offset = document.getElementById("offset").value;
    if (mensagem === "" || offset === "") {
        alert("nenhuma mensagem ou numero digitado, Favor preencher")
    }
    else {
        document.getElementById("resultado").innerHTML = `A PALAVRA DECIFRADA É: ${cipher.decode(offset, mensagem)}`;
    }

}

console.log(cipher);
