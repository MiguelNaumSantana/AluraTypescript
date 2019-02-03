// app/ts/controllers/NegociacaoController.ts 
class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._mensagemView = new MensagemView('#mensagemView');
        /*
           propriedade _negociacoesView em NegociacaoController. Ela guardará uma instância de NegociacoesView
       
       */
        // vai dar um erro de compilação, pois a classe não recebe parâmetro ainda
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        /*
          Esse processo de conversão explícita é chamado de casting.
          No caso, estamos forçando uma conversão de um tipo mais genérico para um tipo mais específico.
          Pode ocorrer o casting implícito, quando atribuímos um tipo mais específico a um tipo mais genérico.
          Por enquanto, apenas o casting explícito se apresentou necessário em nossa aplicação.
          
          */
        this._inputData = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        // atualiza a view para exibir os dados do modelo, vazio
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
        // depois de adicionar, atualiza a view novamente para refletir os dados
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso');
    }
}
