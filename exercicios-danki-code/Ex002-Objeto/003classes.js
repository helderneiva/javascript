//Classes (ES6) melhor forma de OO

class Animal {
    constructor(nome, raca, peso) {
        this.nome = nome
        this.raca = raca
        this.peso = peso
    }
    comer(comida) {
        console.log(`Meu ${this.nome} é da raça ${this.raca} e só come ${comida}.`);
    }
}

/*const animal = new Animal ("Cachorro", "Pinscher", "22Kg");
const animal2 = new Animal ("Gato", "Persa", "18.5Kg");

animal.comer("ração");
animal2.comer("peixe");*/

//Herança (Classes Filhas)

class Cachorro extends Animal {
    constructor(nome, raca, peso, corDoPelo) {
        super(nome, raca, peso)
        this.corDoPelo = corDoPelo
    }

    latir() {
        console.log(`Meu ${this.nome} é um ${this.raca} insuportal! Agora está latindo: Au Au`);
    }

    comer(comida){
        super.comer(comida)
        this.latir()
    }
}

class Gato extends Animal {
    miar(){
        console.log(`O ${this.nome} da raça ${this.raca} está miando: Miau!`)
    }

    comer(comida) {
        super.comer(comida)
        this.miar()
    }
}

const meuCachorro = new Cachorro("Cachorro", "Pinscher", "2Kg");
const meuGato = new Gato("Gato", "Persa", "4.5Kg");

meuCachorro.comer("ração");
meuGato.comer("peixe");
