//FUNÇÕES EM JAVASCRIPT




//trabalhando com data e hora

let dataatual = new Date(); //cria um objeto de data com a data e hora atual
console.log(dataatual); //exibe a data e hora atual no console

let ano = dataatual.getFullYear(); //obtém o ano atual
let mes = dataatual.getMonth() + 1; //obtém o mês atual (0-11, por isso somamos 1)
let dia = dataatual.getDate(); //obtém o dia do mês atual
let hora = dataatual.getHours(); //obtém a hora atual
let minutos = dataatual.getMinutes(); //obtém os minutos atuais
let segundos = dataatual.getSeconds(); //obtém os segundos atuais

console.log(`Data atual: ${dia}/${mes}/${ano} ${hora}:${minutos}:${segundos}`); //exibe a data formatada no console



//outro exemplo de date 
let hoje = new Date(); //cria um objeto de data com a data e hora atual
let diasparaadicionar = 7; //define o número de dias a adicionar



//cria nova data a partir da data atual 

let novadata = new Date(hoje); //cria um novo objeto de data com a mesma data e hora de hoje
novadata.setDate(novadata.getDate() + diasparaadicionar); //adiciona os dias à nova data

console.log(novadata.toLocaleDateString()); //exibe a nova data formatada no console

let data1 = new Date("2026-06-06"); //cria um objeto de data com a data especificada
let data2 = new Date("2026-06-25"); //cria um objeto de data com a data especificada



//diferença em milissegundos entre as duas datas

let diferençams = data2 - data1; //calcula a diferença em milissegundos entre as duas datas




//converte a diferença de milissegundos para dias

let diferençadias = diferençams / (1000 * 60 * 60 * 24); //converte a diferença de milissegundos para dias
console.log(`A diferença entre as datas é de ${diferençadias} dias.`); //exibe a diferença em dias no console
//saída: A diferença entre as datas é de 19 dias.




document.getElementById("conteudo").innerHTML += " Olá, Mundo!";

var valor = document.getElementById("conteudo").innerHTML; //obtém o valor do elemento com id "conteudo"
console.log(valor); //exibe o valor no console

//usando setattribute para alterar o conteúdo de um elemento

document.getElementById("foto").setAttribute("src", "imagem.png"); //altera o atributo "src" do elemento com id "foto" para "imagem.png"
 


//============================//===============================//
//usando setattribute e o getattribute para alterar o conteúdo de um elemento

document.getElementById("foto").setAttribute("src", "imagem.png"); //altera o atributo "src" do elemento com id "foto" para "imagem.png"

console.log(document.getElementById("foto").getAttribute("src")); //exibe o valor do atributo "src" do elemento com id "foto" no console



//=============================//===============================//
//alterando propriedades css de um elemento

document.getElementById("conteudo").style.color = "darkred"; //altera a cor do texto do elemento com id "conteudo" para vermelho
document.getElementById("foto").style.width = "500px"; //altera a largura do elemento com id "foto" para 200 pixels


//=============================//===============================//
//criando uma função para um botão 
function mudatamanho (){
    document.getElementById("foto").style.width = "300px"; //altera a largura do elemento com id "foto" para 300 pixels
}

function mudatamanho2 (){
    document.getElementById("foto").style.width = "500px"; //altera a largura do elemento com id "foto" para 300 pixels
}
