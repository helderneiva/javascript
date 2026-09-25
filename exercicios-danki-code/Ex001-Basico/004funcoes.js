//Funções

function teste() {
    //executada só quando chamar
    console.log('Executada!')
};
//chamando função
//teste();

function teste2(nome,idade) {
    console.log('Me chamo: '+nome)
    console.log('Idade: '+idade)
};
//teste2("Helder", 24);

function pegarNome(parametro) {
    if(parametro == 1) {
        return "Helder"
    } else {
        return "Outro nome"
    }
};

/*let nome = pegarNome(5);
console.log(nome)*/

let fun = function() {
    console.log("Olá!")
};
//fun();

/*declarar função e já chamar 
(function() {
    console.log("Olá");
}) () */
