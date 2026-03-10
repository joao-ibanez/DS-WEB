<?php
    class dono{
        public $nome;
        public $tel;

        public function __construct(string $nome, int $tel){
            $this->nome = $nome;
            $this->tel = $tel;
        }

         public function ExibirDados(){
            return "Dono: ". $this->nome. " | ". "telefone :". $this->tel;
        }
    }
    class Animal{
        public $nome;
        public $especie;
        public dono $dono;
       
        public function __construct(string $nome, string $especie, dono $dono){
            $this->nome = $nome;
            $this->especie = $especie;
            $this->dono = $dono;
        }
         public function ExibirDados(){
            return $this->nome. " | ".$this->especie."<br>";
        }
    }
    $Fafas = new dono("Gilberto", 54684848486);
    // $Fafas = new dono;
    // $Fafas->tel = uish732894;
    // $Fafas->nome = "fafas";
    $antonio = new Animal("Ronaldo", "Cachorro",$Fafas);
    echo $antonio->ExibirDados();
    echo $Fafas->ExibirDados();
?>