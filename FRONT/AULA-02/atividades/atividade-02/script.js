

function mudaimg1() {
    document.getElementById("imagem1").setAttribute("src", "imagem.png");
    document.getElementById("imagem1").style.width = "300px";
}

function mudaimg2() {
    document.getElementById("imagem1").setAttribute("src", "imagem2.png");
    document.getElementById("imagem1").style.width = "300px";
}

function mostrarvalor() {
    console.log(document.getElementById("imagem1").getAttribute("src"));
}