// Seleciona o botão com a classe 'button-foco' e o armazena na constante 'foco'
const foco = document.querySelector('.button-foco');

// Seleciona o botão com a classe 'button-curto' e o armazena na constante 'curto'
const curto = document.querySelector('.button-curto');

// Seleciona o botão com a classe 'button-longo' e o armazena na constante 'longo'
const longo = document.querySelector('.button-longo');

// Seleciona todos os botões com a classe 'button' e armazena na constante 'botoes' como uma lista (NodeList)
const botoes = document.querySelectorAll('.button');

// Adiciona um evento de clique ao botão 'foco'
// Quando o botão é clicado, chama a função 'alterarContexto' com o argumento 'foco'
foco.addEventListener('click', () => {
    alterarContexto('foco');
});

// Adiciona um evento de clique ao botão 'curto'
// Quando o botão é clicado, chama a função 'alterarContexto' com o argumento 'curto'
curto.addEventListener('click', () => {
    alterarContexto('curto');
});

// Adiciona um evento de clique ao botão 'longo'
// Quando o botão é clicado, chama a função 'alterarContexto' com o argumento 'longo'
longo.addEventListener('click', () => {
    alterarContexto('longo');
});

// Define a função 'alterarContexto', que manipula o comportamento dos botões com base no contexto clicado
function alterarContexto(contexto) {
    // Itera por todos os botões na lista 'botoes'
    botoes.forEach(function (botao) {
        // Verifica se o botão atual tem o mesmo valor de 'data-contexto' que o contexto recebido
        if (botao.dataset.contexto === contexto) {
            // Se o botão já tem a classe 'active', remove essa classe
            if (botao.classList.contains('active')) {
                botao.classList.remove('active');
            } else {
                // Caso contrário, primeiro remove a classe 'active' de todos os botões
                botoes.forEach(b => b.classList.remove('active'));
                // Depois, adiciona a classe 'active' ao botão clicado
                botao.classList.add('active');
            }
        }
    });
}



