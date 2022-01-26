//Declaração e atribuição de variáveis
const t = document.querySelector('#input-text');
const st = document.querySelector('#saida');
const botaoCript = document.querySelector('#cript');
const botaoDecript = document.querySelector('#descript');

//Função para codificar texto de entrada
function codificar(texto) {
   return texto.replace(/u/g, "ufat").replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/a/g, "ai");
  
}

//Função para decodificação
function descodificar(texto) {
   return texto.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
  
}

//Função para chamar a função de codificação e tratar campos
function mostrarCrp(){
   var te = t.value;
   var tc = codificar(te);
   st.innerHTML = tc;
   t.value = " ";
   t.focus();
   return;
}

//Função para chamar a função de decodificação e tratar campos
function mostrarDescrp(){
   var te = t.value;
   var tc = descodificar(te);
   st.innerHTML = tc;
   t.value = " ";
   t.focus();
   return;
}

//Acionar eventos de click nos botões, quando clicados
botaoCript.addEventListener('click', mostrarCrp);
botaoDecript.addEventListener('click', mostrarDescrp);