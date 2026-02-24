<?php

// ===== Classe 1 =====
class Pessoa
{
    public $nome;

    public function falar()
    {
        return "O meu nome é " . $this->nome;
    }
}

$p1 = new Pessoa();
$p1->nome = "Ana";
echo $p1->falar() . "<br>";

$p2 = new Pessoa();
$p2->nome = "Carlos";
echo $p2->falar() . "<br>";

$p3 = new Pessoa();
$p3->nome = "Marina";
echo $p3->falar() . "<br><br>";


// ===== Classe 2 =====
class Carro
{
    public $modelo;

    public function mostrar()
    {
        return "Modelo do carro: " . $this->modelo;
    }
}

$c1 = new Carro();
$c1->modelo = "Civic";
echo $c1->mostrar() . "<br>";

$c2 = new Carro();
$c2->modelo = "Corolla";
echo $c2->mostrar() . "<br>";

$c3 = new Carro();
$c3->modelo = "Gol";
echo $c3->mostrar() . "<br><br>";


// ===== Classe 3 =====
class Produto
{
    public $nome;

    public function exibir()
    {
        return "Produto: " . $this->nome;
    }
}

$pr1 = new Produto();
$pr1->nome = "Notebook";
echo $pr1->exibir() . "<br>";

$pr2 = new Produto();
$pr2->nome = "Mouse";
echo $pr2->exibir() . "<br>";

$pr3 = new Produto();
$pr3->nome = "Teclado";
echo $pr3->exibir() . "<br><br>";


// ===== Classe 4 =====
class Animal
{
    public $tipo;

    public function info()
    {
        return "Animal: " . $this->tipo;
    }
}

$a1 = new Animal();
$a1->tipo = "Cachorro";
echo $a1->info() . "<br>";

$a2 = new Animal();
$a2->tipo = "Gato";
echo $a2->info() . "<br>";

$a3 = new Animal();
$a3->tipo = "Pássaro";
echo $a3->info() . "<br><br>";


// ===== Classe 5 =====
class Curso
{
    public $nome;

    public function mostrarCurso()
    {
        return "Curso: " . $this->nome;
    }
}

$cu1 = new Curso();
$cu1->nome = "PHP";
echo $cu1->mostrarCurso() . "<br>";

$cu2 = new Curso();
$cu2->nome = "Java";
echo $cu2->mostrarCurso() . "<br>";

$cu3 = new Curso();
$cu3->nome = "Python";
echo $cu3->mostrarCurso() . "<br>";

?>