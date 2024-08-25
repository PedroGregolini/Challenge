var botaoEncriptar = document.querySelector(".btn-encriptar");
var botaoDesencriptar = document.querySelector(".btn-desencriptar");
var hominho = document.querySelector(".hominho");
var paragrafo = document.querySelector(".paragrafo1");
var resultado = document.querySelector(".texto-resultado");

botaoEncriptar.onclick = encriptar;
botaoDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultar();
    var caixatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(caixatexto);
}

function desencriptar(){
    ocultar();
    var caixatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(caixatexto);
}

function recuperarTexto(){
    var caixatexto = document.querySelector(".caixatexto")
    return caixatexto.value
}

function ocultar(){
    hominho.classList.add("ocultar");
    paragrafo.classList.add("ocultar");
}

function encriptarTexto(mensagem) {
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("ola"); 
});