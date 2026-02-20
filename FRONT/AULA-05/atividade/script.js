
var area = document.getElementById("area");
var mensagem = document.getElementById("mensagem");



area.addEventListener("click", function (event) {
    
    // event.detail informa quantos cliques consecutivos aconteceram
    
    // Se for clique simples
    if (event.detail === 1) {
        mensagem.textContent = "Clique simples detectado!";
        area.style.background = "darkred";
    }

    // Se for TRIPLE CLICK (3 cliques seguidos)
    if (event.detail === 3) {
        alert("TRIPLE CLICK DETECTADO!, PARABÉNS POR DESCOBRIR O EASTER EGG!");
        area.style.background = "blue";
    }
});



area.addEventListener("dblclick", function () {
    mensagem.textContent = "Duplo clique detectado!";
    area.style.background = "lightgreen";
});



area.addEventListener("mouseenter", function(){
    mensagem.textContent = "clique para selecionar uma cor";
});



area.addEventListener("mouseleave", function(){
    mensagem.textContent = "entre para escolher uma cor";
});



area.addEventListener("contextmenu", function(event){
    event.preventDefault(); // impede o menu padrão do botão direito
    alert("não com esse botão zé");
});

//=============area 2================

var area2 = document.getElementById("area2");

var mensagem2 = document.getElementById("mensagem2");


area2.addEventListener("click", function(){
    var cor = prompt("Digite uma cor (em inglês ou hexadecimal):");
    area2.style.backgroundColor = cor;
    mensagem.textContent = "Cor alterada para: " + cor;
});


area2.addEventListener("dblclick", function(){
    area2.style.backgroundColor = "white";
    mensagem.textContent = "Cor resetada para branco!";
});





area2.addEventListener("contextmenu", function(event){
event.preventDefault();
alert("não com esse botão zé");
});


area2.addEventListener("mouseenter", function(){
    mensagem2.textContent = "clique para escrever uma cor ";
});
