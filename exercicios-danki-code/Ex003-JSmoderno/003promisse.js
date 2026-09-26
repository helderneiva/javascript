//Promise

const minhaPromessa = new Promise((resolve, reject) => {
    let sucesso = true

    if(sucesso) {
        resolve('Deu certo!')
    } else {
        reject('Algo deu errado!')
    }
});

//async/await forma moderna e melhor

async function rodarMinhaPromessa() {
    try {
        const resultado = await minhaPromessa
        console.log(resultado)
    } catch(erro) {
        console.error(erro)
    }
};

rodarMinhaPromessa();

/*
jeito antigo
.then chama o resolve
.catch chama o rejetc

minhaPromessa
.then(resultado => {
    console.log(resultado)
})
.catch(erro => {
    console.error(erro)
});
*/