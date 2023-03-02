export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    ehIgual(objeto) {
        throw new Error("Method not implemented.");
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}
