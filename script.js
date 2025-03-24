var botaoEncriptar = document.querySelector(".btn-encriptar");
var botaoDesencriptar = document.querySelector(".btn-desencriptar");
var hominho = document.querySelector(".hominho");
var paragrafo = document.querySelector(".paragrafo1");
var resultado = document.querySelector(".texto-resultado");

botaoEncriptar.onclick = encriptar;
botaoDesencriptar.onclick = desencriptar;

function encriptar() {
    ocultar();
    var texto = recuperarTexto();
    resultado.textContent = encriptarTexto(texto);
    resultado.classList.remove("ocultar");
}

function desencriptar() {
    ocultar();
    var texto = recuperarTexto();
    resultado.textContent = desencriptarTexto(texto);
    resultado.classList.remove("ocultar");
}

function recuperarTexto() {
    return document.querySelector(".caixatexto").value;
}

function ocultar() {
    hominho.classList.add("ocultar");
    paragrafo.classList.add("ocultar");
}

function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

const btnCopiar = document.querySelector(".btn-copiar");
btnCopiar.addEventListener("click", () => {
    var textoCopiar = resultado.textContent;
    navigator.clipboard.writeText(textoCopiar).then(() => {
        alert("Texto copiado com sucesso!");
    });
});
