async function buscarLista() {
    try {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?language=pt-BR&page=1&sort_by=revenue.desc&api_key=5992cc3b4ef3de233b61bbbe49dbad59')
        
        const json = await response.json()
        console.log(json)

    } catch(error) {
        console.log("Erro", error)
    }
};

buscarLista();