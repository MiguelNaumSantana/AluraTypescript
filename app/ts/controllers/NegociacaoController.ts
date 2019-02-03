// app/ts/controllers/NegociacaoController.ts 

    class NegociacaoController {

        private _inputData: HTMLInputElement;
        private _inputQuantidade: HTMLInputElement;
        private _inputValor: HTMLInputElement;

        // Resumo do Type script para criação das variaveis
        constructor(){
            /*
            Esse processo de conversão explícita é chamado de casting.
            No caso, estamos forçando uma conversão de um tipo mais genérico para um tipo mais específico. 
            Pode ocorrer o casting implícito, quando atribuímos um tipo mais específico a um tipo mais genérico. 
            Por enquanto, apenas o casting explícito se apresentou necessário em nossa aplicação.
            
            */
            this._inputData = <HTMLInputElement>document.querySelector('#data');
            this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
            this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        }

        adiciona(event) {

            event.preventDefault();

            const negociacao = new Negociacao(
                new Date(this._inputData.value.replace(/-/g,",")),
                parseInt(this._inputQuantidade.value),
                parseFloat(this._inputValor.value));

            console.log(negociacao);
        }
    }