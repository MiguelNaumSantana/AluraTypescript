class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        /*
        retornando um novo array toda vez que o método paraArray() for chamado, sendo assim,
        qualquer mudança será efetuada na cópia e não no array original encapsulado por Negociacoes:
        */
        return [].concat(this._negociacoes);
    }
}
