export interface Documento {
    titulo: string;
    conteudo: string;
}

export class Texto implements Documento {
    constructor(public titulo: string, public conteudo: string) {}

    exibir(): string {
        return `Título: ${this.titulo}, Conteúdo: ${this.conteudo}`;
    }
}
