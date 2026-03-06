// 
// SELECIONA O FORMULÁRIO
//

const form = document.getElementById("formulario");


//
// EVENTO DE ENVIO
//

form.addEventListener("submit", function (e) {

    // impede o recarregamento da página
    e.preventDefault();

    // limpa erros antigos
    limparErros();

    // controla se o formulário está válido
    let válido = true;
    let resultadoTexto = "";



    //
    // PEGAR VALORES DOS CAMPOS
    //

    // objeto que guarda os valores digitados
    const dados = {

        // trim remove espaços extras
        nome: document.getElementById("nome").value.trim(),
        email: document.getElementById("email").value.trim(),
        senha: document.getElementById("senha").value,
        confirmaSenha: document.getElementById("confirma-senha").value,
        cpf: document.getElementById("cpf").value.trim(),
        telefone: document.getElementById("telefone").value.trim(),
        cep: document.getElementById("cep").value.trim(),
        data: document.getElementById("data-nascimento").value.trim(),
        valor: document.getElementById("valor").value.trim(),
        url: document.getElementById("url").value.trim(),
        cartao: document.getElementById("cartao").value.trim()

    };



    //
    // REGEX (FORMATOS)
    //

    // padrões usados para validar textos
    const regex = {

        nome: /^[A-Za-zÀ-ú\s]{3,}$/, // letras e mínimo 3 caracteres
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // formato email
        cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/, // 000.000.000-00
        telefone: /^\(\d{2}\)\s\d{4,5}-\d{4}$/, // (11) 99999-9999
        cep: /^\d{5}-\d{3}$/, // 00000-000
        valor: /^\d{1,3}(\.\d{3})*,\d{2}$/, // 1.299,90
        cartao: /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/ // 0000 0000 0000 0000

    };



    // 
    // VALIDAÇÕES
    //

    // nome
    if (!regex.nome.test(dados.nome)) {
        erro("erro-nome", "Nome inválido");
        válido = false;
    }
    else {
        resultadoTexto += "Nome passou na validação: " + dados.nome + "<br>";
    }



    // email
    if (!regex.email.test(dados.email)) {
        erro("erro-email", "Email inválido");
        válido = false;
    } else {
        resultadoTexto += "Email passou na validação: " + dados.email + "<br>";
    }



    // senha mínima
    if (dados.senha.length < 8) {
        erro("erro-senha", "Senha deve ter 8 caracteres");
        válido = false;
    } else {
        resultadoTexto += "Senha passou na validação: " + dados.senha + "<br>";
    }



    // confirmar senha
    if (dados.senha !== dados.confirmaSenha) {
        erro("erro-senha", "Senhas diferentes");
        válido = false;
    } else {
        resultadoTexto += "Confirmação de senha passou na validação: " + dados.confirmaSenha + "<br>";
    }



    // cpf
    if (!regex.cpf.test(dados.cpf)) {
        erro("erro-cpf", "CPF inválido");
        válido = false;
    } else {
        resultadoTexto += "CPF passou na validação: " + dados.cpf + "<br>";
    }



    // telefone
    if (!regex.telefone.test(dados.telefone)) {
        erro("erro-telefone", "Telefone inválido");
        válido = false;
    } else {
        resultadoTexto += "Telefone passou na validação: " + dados.telefone + "<br>";
    }



    // cep
    if (!regex.cep.test(dados.cep)) {
        erro("erro-cep", "CEP inválido");
        válido = false;
    } else {
        resultadoTexto += "CEP passou na validação: " + dados.cep + "<br>";
    }



    // data
    if (!validarData(dados.data)) {
        erro("erro-data-nascimento", "Data inválida");
        válido = false;
    } else {
        resultadoTexto += "Data passou na validação: " + dados.data + "<br>";
    }



    // valor
    if (!regex.valor.test(dados.valor)) {
        erro("erro-valor", "Valor inválido");
        válido = false;
    } else {
        resultadoTexto += "Valor passou na validação: " + dados.valor + "<br>";
    }



    // url
    if (!dados.url.startsWith("http://") && !dados.url.startsWith("https://")) {
        erro("erro-url", "URL inválida");
        válido = false;
    } else {
        resultadoTexto += "URL passou na validação: " + dados.url + "<br>";
    }



    // cartão
    if (!regex.cartao.test(dados.cartao)) {
        erro("erro-cartao", "Cartão inválido");
        válido = false;
    } else {
        resultadoTexto += "Cartão passou na validação: " + dados.cartao + "<br>";
    }



    //
    // RESULTADO FINAL
    // 

    if (válido) {

        document.getElementById("resultado").innerHTML =
            "<h3 style='color:green; text-align:center; background:lightblue; padding:12px; border:none; border-radius:6px; '>Formulário enviado com sucesso!</h3>" + resultadoTexto;

    }

});



//
// MOSTRAR ERRO NO SPAN
//

function erro(id, msg) {

    // coloca a mensagem no span
    document.getElementById(id).innerText = msg;

}



//
// LIMPAR ERROS
//

function limparErros() {

    // seleciona todos os spans
    const spans = document.querySelectorAll("span");

    // limpa o texto de cada um
    spans.forEach(span => span.innerText = "");

}



//
// VALIDAR DATA
//

function validarData(data) {

    // separa dia/mres/ano
    const partes = data.split("/");

    if (partes.length !== 3) return false;

    const dia = parseInt(partes[0]);
    const mês = parseInt(partes[1]);
    const ano = parseInt(partes[2]);

    // cria data JS
    const d = new Date(ano, mês - 1, dia);

    // verifica se a data existe
    return d.getDate() === dia &&
        d.getMonth() === mês - 1 &&
        d.getFullYear() === ano;
}