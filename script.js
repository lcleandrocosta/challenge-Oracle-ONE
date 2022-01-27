//Declaração e atribuição de variáveis
const texto = document.querySelector('#input-text');
const saidaTexto = document.querySelector('#saida');
const botaoCript = document.querySelector('#cript');
const botaoDecript = document.querySelector('#descript');
const botaoCopia = document.querySelector('#btn-copia');


//Função para codificar texto de entrada
function codificar(texto) {
   return texto.replace(/u/g, "ufat").replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/a/g, "ai");

}

//Função para decodificação
function decodificar(texto) {
   return texto.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");

}

//Função para chamar a função de codificação e tratar campos
function mostrarCriptografia(){
   var textoInput = texto.value;
   var textoCript = codificar(textoInput);
   saidaTexto.innerHTML = textoCript;
   texto.value = " ";
   texto.focus();
}

//Função para chamar a função de decodificação e tratar campos
function mostrarDecritografia(){
   var textoInput = texto.value;
   var textoDecript = decodificar(textoInput);
   saidaTexto.innerHTML = textoDecript;
   texto.value = " ";
   texto.focus();
}

//Função copia para a área de transferência
function copiar(){
   saidaTexto.select();
   document.execCommand('copy');
   alert("Copiado");
   texto.focus();
}

//Acionar eventos de click nos botões, quando clicados
botaoCript.addEventListener('click', mostrarCriptografia);
botaoDecript.addEventListener('click', mostrarDecritografia);
botaoCopia.addEventListener('click', copiar);