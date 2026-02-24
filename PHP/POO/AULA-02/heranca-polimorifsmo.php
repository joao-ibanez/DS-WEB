<?php
class Pessoa
{
    public $nome = "Rasmus";
    protected $idade = 48;
    private $senha = "12345";

    public function verDados()
    {
        echo $this->nome . "<br/>";
        echo $this->idade . "<br/>";
        echo $this->senha . "<br/>";
    }
}
class Programador extends Pessoa
{
    public function verDados()
    {

        //Exibe a Classe atual
        echo get_class($this) . "<br/>";
        echo $this->nome . "<br/>";
        echo $this->idade . "<br/>";
        echo $this->senha . "<br/>";
    }

}

//instanciando a classe pai

$caldana = new pessoa();
$caldana->nome = 'caldana';
$caldana -> verDados();

echo "<br>";

//instanciando a classe filho

$brunão = new programador();
$brunão ->verDados();

?>

