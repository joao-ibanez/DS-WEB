<?php

// Classe base
class Documento {

    private $numero;

    public function getNumero() {
        return $this->numero;
    }

    public function setNumero($numero) {
        $this->numero = $numero;
    }
}









// Classe filha
class CPF extends Documento {

    public function validar() {

        $cpf = $this->getNumero();

        if ($cpf == null) return false;




        


        // Remove tudo que não for número
        $cpf = preg_replace('/[^0-9]/', '', $cpf);

        // Deve ter 11 dígitos
        if (strlen($cpf) != 11) return false;

        // Impede sequência de números iguais
        if (preg_match('/(\d)\1{10}/', $cpf)) return false;






        // ===== 1º dígito =====
        $soma = 0;
        for ($i = 0; $i < 9; $i++) {
            $soma += $cpf[$i] * (10 - $i);
        }

        $resto = $soma % 11;
        $digito1 = ($resto < 2) ? 0 : 11 - $resto;

        // ===== 2º dígito =====
        $soma = 0;
        for ($i = 0; $i < 10; $i++) {
            $soma += $cpf[$i] * (11 - $i);
        }

        $resto = $soma % 11;
        $digito2 = ($resto < 2) ? 0 : 11 - $resto;

        // Verifica
        return ($digito1 == $cpf[9] && $digito2 == $cpf[10]);
    }
}








// ================= TESTE =================

$cpf = new CPF();
$cpf->setNumero("496.082.528-65"); // CPF válido para teste

if ($cpf->validar()) {
    echo "CPF válido!";
} else {
    echo "CPF inválido!";
}

?>