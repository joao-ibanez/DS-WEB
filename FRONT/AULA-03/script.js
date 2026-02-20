
var contadoritem = 0

function adicionarItem() {
   
    contadoritem++;

    let novoitem = document.createElement('li');

    novoitem.textContent = contadoritem + ' - ' + prompt('Digite o nome da tarefa');

    novoitem.setAttribute('id', contadoritem);


//========//=======//

    let botaoremover = document.createElement('button');
    botaoremover.textContent = 'Remover';
    botaoremover.setAttribute('onclick', `remover(${contadoritem})`);  

    novoitem.appendChild(botaoremover);
    document.getElementById('lista').appendChild(novoitem);

    
    let botaoeditar = document.createElement('button');
    botaoeditar.textContent = 'Editar';
    botaoeditar.setAttribute('onclick', `editar(${contadoritem})`);

    novoitem.appendChild(botaoeditar);
    document.getElementById('lista').appendChild(novoitem);
}

//========//=======//

function remover(itemlista) {

    var item = document.getElementById(itemlista);
    document.getElementById("lista").removeChild(item);

}


function editar(itemlista) {

    var item = document.getElementById(itemlista);
    var textoatual = item.textContent;
    var novotexto = prompt('Digite o novo nome da tarefa', textoatual);
    

}       
