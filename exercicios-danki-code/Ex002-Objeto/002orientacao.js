//funções construtoras
function Pessoa(){
    this.nome = "Helder",
    this.idade = 24,
    this.printNome = function() {
        console.log(this.nome)
    }
}

//let pessoa = new Pessoa();
//pessoa.printNome();

function Animal(nome, peso){
    this.nome = nome
    this.peso = peso
}

animal = new Animal("Cachoro", "32Kg")
animal2 = new Animal("Gato", "24Kg")

console.log(animal.nome, animal.peso)
console.log(animal2.nome, animal2.peso)