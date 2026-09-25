//Laços de repetição

/*
let n = 1
while(n <= 10){
    //execute aqui
    console.log(n);

    n++
}
*/

/*
for(let i = 5; i <= 10; i++){
    console.log(i);
}
*/

/*
let n = 2
do{
    console.log(n)
    n++
}while (n <= 8)
*/

let nomes = ["Helder", "Joao", "Maria"];

/*for(let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}*/

nomes.forEach(function(value, index){
    console.log(value, index)
})