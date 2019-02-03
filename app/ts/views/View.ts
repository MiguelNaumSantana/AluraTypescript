//Classes abstratas não podem ser instanciadas, apenas herdadas.


abstract class View<T> {

    private _elemento: JQuery;

    constructor(seletor: string) {

        this._elemento = $(seletor);
    }

    update(model: T) {

        this._elemento.html(this.template(model));
    }
    //Se não implementarmos o método template nas classes filhas,
    //o TypeScript indicará um erro, lembrando o programador de sua tarefa.
    abstract template(model: T): string;
}