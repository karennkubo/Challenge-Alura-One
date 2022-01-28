//        .replaceAll(/e/gi, 'enter')
//        .replaceAll(/i/gi, 'imes')
//        .replaceAll(/a/gi, 'ai')
//        .replaceAll(/o/gi, 'ober')
//        .replaceAll(/u/gi, 'ufat')

var botaoCodificar = document.querySelector("#btn-cripto");
var botaoDescodificar = document.querySelector("#btn-descripto");
var botaoCopiar = document.querySelector("#btn-copy");
var mensagem = document.querySelector("#msg");


botaoCodificar.addEventListener("click", function (event) {
  event.preventDefault();
  var escreverTexto = document.querySelector("#input-texto");
  var texto = escreverTexto.value;
  var resultadoCodifica = codificarTexto(texto);
  var mensagem = document.querySelector("#msg");
  mensagem.value = resultadoCodifica;
  document.getElementById("input-texto").onkeypress = e => {
  var teclaDigitada = String.fromCharCode(e.which);
  if ("abcdefghijklmnopqrstuvwxyzç".indexOf(teclaDigitada) < 0) {
    alert('Apenas letras minúsculas!')
    return false;
  }
};
  var form = document.querySelector("#form");
  form.reset();
});

function codificarTexto(texto) {
  var resultadoCodifica = texto.toLowerCase();
  resultadoCodifica = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
  return resultadoCodifica;
}

botaoDescodificar.addEventListener("click", function (event) {
  event.preventDefault();
  var escreverTexto = document.querySelector("#input-texto");
  var texto = escreverTexto.value;
  var resultadoDescodifica = descodificarTexto(texto);
  var mensagem =  document.querySelector("#msg");
  mensagem.value = resultadoDescodifica;
  document.getElementById("input-texto").onkeypress = e => {
  var teclaDigitada = String.fromCharCode(e.which);
  if ("abcdefghijklmnopqrstuvwxyzç".indexOf(teclaDigitada) < 0) {
    alert('Apenas letras minúsculas!')
    return false;
  }
};
  var form = document.querySelector("#form");
  form.reset();
});

function descodificarTexto(texto) {
  var resultadoDescodifica = texto.toLowerCase();
  resultadoDescodifica = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
  return resultadoDescodifica;
}

botaoCopiar.addEventListener("click", () => {
  mensagem.select();
  document.execCommand("copy");
});
