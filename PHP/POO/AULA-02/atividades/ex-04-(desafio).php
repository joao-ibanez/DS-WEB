<?php

//  Classe abstrata Produto
abstract class Produto
{

    protected $nome;
    protected $preco;
    protected $estoque;

    public function __construct($nome, $preco, $estoque)
    {
        $this->nome = $nome;
        $this->setPreco($preco);
        $this->setEstoque($estoque);
    }







    // Encapsulamento
    public function getNome()
    {
        return $this->nome;
    }

    public function getPreco()
    {
        return $this->preco;
    }

    public function setPreco($preco)
    {
        if ($preco >= 0) {
            $this->preco = $preco;
        }
    }

    public function getEstoque()
    {
        return $this->estoque;
    }

    public function setEstoque($estoque)
    {
        if ($estoque >= 0) {
            $this->estoque = $estoque;
        }
    }

    // Método abstrato
    abstract public function calcularDesconto();

    // Método para calcular preço final
    public function calcularPrecoFinal()
    {
        $precoComDesconto = $this->calcularDesconto();

        // 5. Desconto extra se estoque < 5
        if ($this->estoque < 5) {
            $precoComDesconto *= 0.90; // 10% extra
        }

        return $precoComDesconto;
    }
}








//  Subclasse Eletronico
class Eletronico extends Produto
{

    public function calcularDesconto()
    {
        return $this->preco * 0.90; // 10% de desconto
    }
}


//  Subclasse Roupa
class Roupa extends Produto
{

    public function calcularDesconto()
    {
        return $this->preco * 0.80; // 20% de desconto
    }
}








//  Instanciando produtos

$notebook = new Eletronico("Notebook", 3000, 3); // estoque baixo
$camiseta = new Roupa("Camiseta", 100, 10); // estoque normal

echo "Produto: " . $notebook->getNome() . "<br>";
echo "Preço final: R$ " . number_format($notebook->calcularPrecoFinal(), 2, ',', '.') . "<br><br>";

echo "Produto: " . $camiseta->getNome() . "<br>";
echo "Preço final: R$ " . number_format($camiseta->calcularPrecoFinal(), 2, ',', '.') . "<br>";

?>