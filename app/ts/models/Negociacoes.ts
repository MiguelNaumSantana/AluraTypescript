class Negociacoes {

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao):void {

        this._negociacoes.push(negociacao);
    }

    paraArray():Negociacao[] {
        /*
        retornando um novo array toda vez que o método paraArray() for chamado, sendo assim, 
        qualquer mudança será efetuada na cópia e não no array original encapsulado por Negociacoes:
        */
       return [].concat(this._negociacoes);
    }
}