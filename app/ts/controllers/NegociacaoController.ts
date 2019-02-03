// app/ts/controllers/NegociacaoController.ts 


class NegociacaoController {

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    /*
        propriedade _negociacoesView em NegociacaoController. Ela guardará uma instância de NegociacoesView
    
    */
    

    constructor() {
        /*
            Esse processo de conversão explícita é chamado de casting.
            No caso, estamos forçando uma conversão de um tipo mais genérico para um tipo mais específico. 
            Pode ocorrer o casting implícito, quando atribuímos um tipo mais específico a um tipo mais genérico. 
            Por enquanto, apenas o casting explícito se apresentou necessário em nossa aplicação.
            
            */
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        // atualiza a view para exibir os dados do modelo, vazio
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event) {

        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')), 
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );
        // depois de adicionar, atualiza a view novamente para refletir os dados
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso');
    }
}