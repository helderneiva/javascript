class Pessoa {
    constructor(nome, idade, sexo) {
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
    }
    seApresentando(){
        return`Me chamo ${this.nome}, tenho ${this.idade} anos e sou ${this.sexo}.`
    }
}

const pessoa1 = new Pessoa("Ana", 28, "Mulher");
const pessoa2 = new Pessoa("Carlos", 35, "Homem");

console.log(pessoa1.seApresentando());
console.log(pessoa2.seApresentando());