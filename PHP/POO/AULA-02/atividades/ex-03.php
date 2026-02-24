<?php

// Classe base Veiculo
class Veiculo {

    protected $marca;
    protected $modelo;
    private $velocidade = 0; // Encapsulamento

    public function __construct($marca, $modelo) {
        $this->marca = $marca;
        $this->modelo = $modelo;
    }





    //  Getter e Setter da velocidade
    public function setVelocidade($velocidade) {
        if ($velocidade >= 0) {
            $this->velocidade = $velocidade;
        }
    }

    public function getVelocidade() {
        return $this->velocidade;
    }

    public function exibirInformacoes() {
        return "Marca: {$this->marca}, Modelo: {$this->modelo}, Velocidade: {$this->velocidade} km/h";
    }

    // Método que será sobrescrito (polimorfismo)
    public function acelerar() {
        $this->velocidade += 5;
    }
}






//  Subclasse Carro
class Carro extends Veiculo {

    public function acelerar() {
        // Carro acelera mais rápido
        $this->setVelocidade($this->getVelocidade() + 120);
    }
}

//  Subclasse Moto
class Moto extends Veiculo {

    public function acelerar() {
        // Moto acelera ainda mais rápido
        $this->setVelocidade($this->getVelocidade() + 150);
    }
}






//  Instanciando objetos

$carro = new Carro("Toyota", "Corolla");
$moto = new Moto("Honda", "Civic");

// Acelerando
$carro->acelerar();
$moto->acelerar();

// Exibindo resultados
echo "Carro: " . $carro->exibirInformacoes() . "<br>";
echo "Moto: " . $moto->exibirInformacoes() . "<br>";

?>