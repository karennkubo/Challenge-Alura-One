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
  var form = document.querySelector("#form");
  form.reset();
});

function codificarTexto(texto) {
  var resultadoCodifica = texto.toLowerCase();
  resultadoCodifica = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat").replace(/[^a-z ]/gi,'');
  return resultadoCodifica;
}

botaoDescodificar.addEventListener("click", function (event) {
  event.preventDefault();
  var escreverTexto = document.querySelector("#input-texto");
  var texto = escreverTexto.value;
  var resultadoDescodifica = descodificarTexto(texto);
  var mensagem =  document.querySelector("#msg");
  mensagem.value = resultadoDescodifica;
  var form = document.querySelector("#form");
  form.reset();
});

function descodificarTexto(texto) {
  var resultadoDescodifica = texto.toLowerCase();
  resultadoDescodifica = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u").replace(/[^a-z ]/gi,'');
  return resultadoDescodifica;
}

botaoCopiar.addEventListener("click", () => {
  mensagem.select();
  document.execCommand("copy");
});
