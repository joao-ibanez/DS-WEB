/* ======================================================
   SELEÇÃO DO ELEMENTO
====================================================== */

const bola = document.getElementById("bola");


/* ======================================================
   VARIÁVEIS PRINCIPAIS
====================================================== */

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let posX = mouseX;
let posY = mouseY;

let tamanho = 60;


/* ======================================================
   CONTROLE DE TECLADO
====================================================== */

let teclas = {};
let velocidade = 6;
let usandoTeclado = false;

document.addEventListener("keydown", (e) => {
    teclas[e.key.toLowerCase()] = true;
    usandoTeclado = true;
});

document.addEventListener("keyup", (e) => {
    teclas[e.key.toLowerCase()] = false;

    if (!teclas["w"] && !teclas["a"] && !teclas["s"] && !teclas["d"]) {
        usandoTeclado = false;
    }
});


/* ======================================================
   CAPTURA DE MOVIMENTO DO MOUSE
====================================================== */

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});


/* ======================================================
   CONFIGURAÇÃO DA CALDA
====================================================== */

const quantidadeCalda = 15;
let calda = [];

for (let i = 0; i < quantidadeCalda; i++) {

    let rastro = document.createElement("div");
    rastro.classList.add("rastro");
    document.body.appendChild(rastro);

    calda.push({
        element: rastro,
        x: posX,
        y: posY
    });
}


/* ======================================================
   LOOP PRINCIPAL DE ANIMAÇÃO
====================================================== */

function animar() {

    // Movimento via teclado
    if (usandoTeclado) {

        if (teclas["w"]) posY -= velocidade;
        if (teclas["s"]) posY += velocidade;
        if (teclas["a"]) posX -= velocidade;
        if (teclas["d"]) posX += velocidade;

    } 
    // Movimento via mouse
    else {

        posX += (mouseX - posX) * 0.08;
        posY += (mouseY - posY) * 0.08;

    }

    /* ----------- Rotação do peixe ----------- */

    let angulo = Math.atan2(mouseY - posY, mouseX - posX);

    bola.style.transform = `
        translate(${posX - tamanho/2}px, ${posY - tamanho/2}px)
        rotate(${angulo}rad)
    `;


    /*----------- Atualização da calda ----------- */

    let anteriorX = posX;
    let anteriorY = posY;

    calda.forEach((item, index) => {

        item.x += (anteriorX - item.x) * 0.3;
        item.y += (anteriorY - item.y) * 0.3;

        item.element.style.transform =
            `translate(${item.x - 7}px, ${item.y - 7}px)`;

        item.element.style.opacity =
            (1 - index / quantidadeCalda);

        anteriorX = item.x;
        anteriorY = item.y;

    });

    requestAnimationFrame(animar);
}

animar();


/* ======================================================
   CONTROLE DE CLIQUE (AUMENTAR / DIMINUIR)
====================================================== */

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

document.addEventListener("mousedown", (e) => {

    if (e.button === 0) {
        tamanho += 5;
    }

    if (e.button === 2) {
        tamanho -= 5;
        if (tamanho < 30) tamanho = 30;
    }

    bola.style.width = tamanho + "px";
    bola.style.height = tamanho + "px";
});


/* ======================================================
   MUDANÇA DE COR NO SCROLL (AFETA A CALDA)
====================================================== */

window.addEventListener("scroll", () => {

    let scroll = window.scrollY;

    let r = scroll % 255;
    let g = (scroll * 2) % 255;
    let b = (scroll * 3) % 255;

    let cor = `rgb(${r}, ${g}, ${b})`;

    calda.forEach(item => {
        item.element.style.background = cor;
    });

});