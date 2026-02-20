var contador = 0;

function Cadastrar() {

    contador++;

    let novoaluno = document.createElement('li');

    let novonome = document.getElementById('nome').value;
    let novoemail = document.getElementById('email').value;
    let novoRA = document.getElementById('ra').value;
    let novotelefone = document.getElementById('telefone').value;
    let novoturma = document.getElementById('turma').value;

    novoaluno.innerHTML = contador + '<br>' + novonome + ' <br> ' + novoemail + ' <br> ' + novoRA + ' <br> ' + novotelefone + ' <br> ' + novoturma + '<br>';

    novoaluno.setAttribute('id', contador);

    let botaoremover = document.createElement('button');
    botaoremover.innerHTML = 'Remover';
    botaoremover.setAttribute('onclick', `remover(${contador})`);

    novoaluno.appendChild(botaoremover);
    document.getElementById('listaalunos').appendChild(novoaluno);

}



function remover (itemlista) {

    var item = document.getElementById(itemlista);
    document.getElementById("listaalunos").removeChild(item);
}