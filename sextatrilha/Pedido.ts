
export class Carrinho {
    private itens: { nome: string; preco: number }[] = [];

    adicionarItem(nome: string, preco: number): void {
        this.itens.push({ nome, preco });
    }

    obterItens(): { nome: string; preco: number }[] {
        return this.itens;
    }

    calcularPrecoTotal(): number {
        return this.itens.reduce((total, item) => total + item.preco, 0);
    }
}

export class Pagamento {
    private statusPagamento: boolean = false;

    processarPagamento(precoTotal: number): boolean {
        if (precoTotal > 0) {
            this.statusPagamento = true;
        }
        return this.statusPagamento;
    }

    obterStatus(): boolean {
        return this.statusPagamento;
    }
}

export class Envio {
    private statusEnvio: boolean = false;

    atualizarStatusEnvio(statusPagamento: boolean): void {
        if (statusPagamento) {
            this.statusEnvio = true;
        }
    }

    obterStatus(): boolean {
        return this.statusEnvio;
    }
}

export class Pedido {
    private carrinho: Carrinho;
    private pagamento: Pagamento;
    private envio: Envio;

    constructor() {
        this.carrinho = new Carrinho();
        this.pagamento = new Pagamento();
        this.envio = new Envio();
    }

    adicionarItem(nome: string, preco: number): void {
        this.carrinho.adicionarItem(nome, preco);
    }

    finalizarPedido(): void {
        const precoTotal = this.carrinho.calcularPrecoTotal();
        const pagamentoAprovado = this.pagamento.processarPagamento(precoTotal);
        this.envio.atualizarStatusEnvio(pagamentoAprovado);
    }

    detalhesDoPedido(): object {
        return {
            itens: this.carrinho.obterItens(),
            precoTotal: this.carrinho.calcularPrecoTotal(),
            statusPagamento: this.pagamento.obterStatus(),
            statusEnvio: this.envio.obterStatus(),
        };
    }
}
