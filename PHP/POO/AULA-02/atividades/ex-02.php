<?php

// Classe abstrata Animal
abstract class Animal {

    // Método abstrato (obriga as classes filhas a implementarem)
    abstract public function fazerSom();

    // Método concreto
    public function mover() {
        return "Anda";
    }
}





//  Classes que herdam de Animal

class sapo extends Animal {
    public function fazerSom() {
        return "uerberti";
    }
}

class cavalo extends Animal {
    public function fazerSom() {
        return "iiiiiiriririri";
    }
}

class tartaruga extends Animal {
    public function fazerSom() {
        return "hmmmmmm😏";
    }

    // Sobrescrevendo o método mover()
    public function mover() {
        return parent::mover();
    }
}





// Instanciando objetos

$sapo = new sapo();
$cavalo = new cavalo();
$tartaruga = new tartaruga();

// Exibindo resultados

echo "sapo faz: " . $sapo->fazerSom() . " | se move assim: " . $sapo->mover() . "<br>";
echo "cavalo faz: " . $cavalo->fazerSom() . " | se move assim: " . $cavalo->mover() . "<br>";
echo "tartaruga faz: " . $tartaruga->fazerSom() . " | se move assim: " . $tartaruga->mover() . "<br>";

?>