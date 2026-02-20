//===========eventos do mouse===========
var area = document.getElementById("area");

var mensagem = document.getElementById("mensagem");


area.addEventListener("click", function () {
    mensagem.textContent = "Clique simples detectado!";
    area.style.background = "white";
});




area.addEventListener("dblclick", function () {
    mensagem.textContent = "Duplo clique detectado!";
    area.style.background = "lightgreen"; 
});


area.addEventListener("mouseenter", function(){
    mensagem.textContent = "O mouse entrou na área!";
});


area.addEventListener("mouseleave", function(){
    mensagem.textContent = "O mouse saiu da área!";
});

var posicao = document.getElementById ("posicao");

area.addEventListener("mousemove", function(event){
    posicao.textContent = `Posição do mouse: X=${event.clientX}, Y=${event.clientY}`;
});


area.addEventListener("contextmenu", function(event){
event.preventDefault();
alert("Botão direito clicado!");
});
    
//===========eventos do teclado===========

document.addEventListener("keydown", function(event){
console.log("Tecla pressionada: " + event.key);
});


document.addEventListener("keyup", function(event){
console.log("Tecla liberada: " + event.key);
});


document.addEventListener("keypress", function(event){
console.log("Caractere digitado: " + event.key);
});


document.addEventListener("keydown", function(event){
// Exibe a tecla pressionada
var campo = document.getElementById("resultado");
campo.textContent = "Tecla pressionada: " + event.keyCode;
// Também mostra no console
console.log("Tecla pressionada: " + event.key);
});


//===========eventos do formulário===========


//===========eventos da janela===========
