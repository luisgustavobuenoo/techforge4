// trilha 2 Exercicio 3
class Pagamento {
    processar(): void {
        console.log("Processando o pagamento");
    }
}

class PagamentoCartao extends Pagamento {
    processar(): void {
        console.log("Validando numero do cartao e processando pagamento com cartao");
    }
}

class PagamentoBoleto extends Pagamento {
    processar(): void {
        console.log("Gerando codigo do boleto para pagamento");
    }
}

function processarPagamentos(pagamentos: Pagamento[]): void {
    pagamentos.forEach(pagamento => pagamento.processar());
}


const pagamentos: Pagamento[] = [
    new PagamentoCartao(),
    new PagamentoBoleto()
];

processarPagamentos(pagamentos);

