let items = [];

document.querySelector('input[type=submit]').addEventListener('click', (e) => {
    e.preventDefault();

    let nomeProduto = document.querySelector('input[name=nome_produto]');
    let valorProduto = document.querySelector('input[name=valor_produto]');

    if (nomeProduto.value.trim() === "" || valorProduto.value.trim() === "") {
        alert("Por favor, preencha o nome e o valor do produto!");
        return;
    }

    items.push({
        nome: nomeProduto.value,
        valor: valorProduto.value
    });

    let listaProduto = document.querySelector('.lista-produto');
    let soma = 0;

    listaProduto.innerHTML = "";
    items.forEach(function(item) {
        let valorNumerico = parseFloat(item.valor) || 0;
        soma += valorNumerico;

        listaProduto.innerHTML += `
        <div class="item-produto">
            <h3>${item.nome}</h3>
            <h3 class="preco"><span>R$ ${valorNumerico.toFixed(2).replace('.', ',')}</span></h3>
        </div>
        `;
    });

    soma = soma.toFixed(2).replace('.', ',');
    nomeProduto.value = "";
    valorProduto.value = "";
    let elementoSoma = document.getElementById('valor-total');
    elementoSoma.innerHTML = "R\$ " + soma;
});
document.querySelector('button[name=limpar]').addEventListener('click', () => {
    items = []; 
    document.querySelector('.lista-produto').innerHTML = ""; 
    document.getElementById('valor-total').innerHTML = "R\$ 0,00";
});