// Array para armazenar os itens do carrinho
const carrinhoItens = [];

// Função para atualizar o carrinho e a exibição do carrinho
function atualizarCarrinho() {
    const carrinhoElement = document.querySelector('.cart-items');
    const totalElement = document.querySelector('.cart-total');

    // Limpe o conteúdo atual do carrinho
    carrinhoElement.innerHTML = '';

    // Atualize o carrinho com os itens
    let total = 0;
    for (const item of carrinhoItens) {
        const itemElement = document.createElement('li');
        itemElement.innerText = `${item.nome} - $${item.preco}`;
        carrinhoElement.appendChild(itemElement);
        total += item.preco;
    }

    // Atualize o total
    totalElement.innerText = `Total: $${total.toFixed(2)}`;
}

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(nome, preco) {
    const item = { nome, preco };
    carrinhoItens.push(item);
    atualizarCarrinho();
}

// Adicionar evento de clique para o botão "Adicionar ao Carrinho"
const botoesAdicionar = document.querySelectorAll('.adicionarAoCarrinho');
botoesAdicionar.forEach((botao) => {
    botao.addEventListener('click', () => {
        const produtoElement = botao.parentElement;
        const nome = produtoElement.querySelector('h2').innerText;
        const precoTexto = produtoElement.querySelector('.price').innerText;
        const preco = parseFloat(precoTexto.replace('$', ''));
        adicionarAoCarrinho(nome, preco);
    });
});
