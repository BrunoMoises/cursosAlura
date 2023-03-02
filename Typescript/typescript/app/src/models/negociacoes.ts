import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {

    ehIgual(objeto: Negociacoes): boolean {
        throw new Error("Method not implemented.");
    }
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}