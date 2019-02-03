/*
Cria uma instância de
NegociacaoController para em seguida associar ao
evento submit do formulário de index.html a chamada do método adiciona.

*/
const controller = new NegociacaoController();
document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));
