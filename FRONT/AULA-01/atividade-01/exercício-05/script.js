var capital  = parseFloat (prompt ("insira seu montante"))

var tempo = Number (prompt ("insira o tempo de investimento"))

var juros = Number (prompt ("digite a taxa mensal (em porcentagem!)"))

var montante = (capital * (tempo+juros))

alert ("seu montante é"+montante)