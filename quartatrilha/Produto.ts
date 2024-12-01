export interface Produto {
    id: number;
    nome: string;
    preco: number;
}

export class ItemLoja implements Produto {
    constructor(public id: number, public nome: string, public preco: number) {}
}
