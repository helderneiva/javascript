/*
Arrays = objeto, que serve para guardar varios valores em uma unica variavel
*/

/* NÃo recomendado:
const listaDeCompras = new Array ('Arroz', 'Feijao');
*/

//use const no array, ele permite voce mudar os valores (adicionar, remover ou alterar itens). Isso deixa seu código mais seguro contra bugs.

const nomes = ['Helder', 'Gustavo', 'Carol'];
nomes[0] = 'Alice'
nomes.push('Lucas');

console.log(nomes[3]);