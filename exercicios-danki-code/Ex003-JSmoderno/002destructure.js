//Destructure
const nomes = ['Helder', 'Paulo', 'Maria']
const [a, b, c] = nomes

//Spread
const numeros = [1, 2, 3];
const novos = [...numeros, 4, 5, 6];

const usuario = {nome: 'João', idade: 25};
const atualizado = {...usuario, cidade: 'Belo Horizonte'}

//Rest
const [primeiro, ...resto] = [10, 20, 30, 40, 50];

console.log({primeiro, resto});