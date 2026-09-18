/*let carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020,
    dono: 'Helder',
    ligar: function() {
        return('Carro ligado.')
    }
}

console.log(carro.marca)
console.log(carro['dono'])
console.log(carro.ligar())*/

function Pokemon(nome, tipo, ataque){
    this.nome = nome
    this.tipo = tipo
    this.ataque = ataque

    this.atacar = function() {
        return(`${this.nome} é um pokemon do tipo ${this.tipo} que tem como ataque assinatura: ${this.ataque}.`)
    }
}

const pokemon1 = new Pokemon("Squirtle", "Água", "Jato de Água")
const pokemon2 = new Pokemon("Charmander", "Fogo", "Lança-Chamas")
const pokemon3 = new Pokemon("Bulbasaur", "Planta", "Chicote de Cipó")

console.log(pokemon1.atacar())

console.log(pokemon2.atacar())

console.log(pokemon3.atacar())