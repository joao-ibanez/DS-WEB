<?php

// Classe Pessoa (Encapsulamento)
class Pessoa
{
    private $nome;
    private $idade;

    public function __construct($nome, $idade)
    {
        $this->nome = $nome;
        $this->idade = $idade;
    }

    // Getters e Setters
    public function getNome()
    {
        return $this->nome;
    }

    public function setNome($nome)
    {
        $this->nome = $nome;
    }

    public function getIdade()
    {
        return $this->idade;
    }

    public function setIdade($idade)
    {
        $this->idade = $idade;
    }
}



// Classe Funcionario (Herança)
abstract class Funcionario extends Pessoa
{
    protected $salario;

    public function __construct($nome, $idade, $salario)
    {
        parent::__construct($nome, $idade);
        $this->salario = $salario;
    }

    public function getSalario()
    {
        return $this->salario;
    }

    public function setSalario($salario)
    {
        $this->salario = $salario;
    }




    
    // Método abstrato (Polimorfismo)
    abstract public function calcularBonus();
}

// Subclasse Gerente
class Gerente extends Funcionario
{
    public function calcularBonus()
    {
        return $this->salario * 0.20; // 20%
    }
}

//Subclasse Desenvolvedor
class Desenvolvedor extends Funcionario
{
    public function calcularBonus()
    {
        return $this->salario * 0.10; // 10%
    }
}

//Testando o Polimorfismo

$gerente = new Gerente("Roberto", 40, 10000);
$dev = new Desenvolvedor("Ronaldo", 28, 5000);

echo "Gerente: " . $gerente->getNome() . "<br>";
echo "Salário: R$ " . $gerente->getSalario() . "<br>";
echo "Bônus: R$ " . $gerente->calcularBonus() . "<br>";
echo "------------------------<br>";

echo "Desenvolvedor: " . $dev->getNome() . "<br>";
echo "Salário: R$ " . $dev->getSalario() . "<br>";
echo "Bônus: R$ " . $dev->calcularBonus() . "<br>";

?>