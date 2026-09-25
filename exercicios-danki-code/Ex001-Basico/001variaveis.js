/*
Variaveis:
let = flexivel, permite mudar valor da variavel
const = constante, rigido, nao permite mudar valor da variavel
variavel do tipo booleano = true ou false
*/

const sexo = "Homem"
let nome = "Helder"
let idade = 24
nome = "Carlos"
idade = 19
let estudando = true //tipo booleano
//estudando = false

if(estudando) {
    console.log("Ótimos estudos!");
} else {
    console.log("Inicie seus estudos!");
}

console.log(nome,idade,sexo)