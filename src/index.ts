// Exercício 1
class ContaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    sacar(valor: number): void {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
    }
}




// Exercício 2
class Livro {
    titulo: string;
    autor: string;
    paginas: number;
    lido: boolean;

    constructor(titulo: string, autor: string, paginas: number, lido: boolean = false) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = lido;
    }

    marcarComoLido(): void {
        this.lido = true;
    }
}




// Exercício 3
class Produto {
    nome: string;
    preco: number;
    quantidade: number;

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularValorEstoque(): number {
        return this.preco * this.quantidade;
    }
}




// Exercício 4
class Temperatura {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    paraFahrenheit(): number {
        return this.valor * 9 / 5 + 32;
    }

    paraKelvin(): number {
        return this.valor + 273.15;
    }
}




// Exercício 5
class Agenda {
    compromissos: string[];

    constructor() {
        this.compromissos = [];
    }

    adicionarCompromisso(compromisso: string): void {
        this.compromissos.push(compromisso);
    }

    listarCompromissos(): string[] {
        return this.compromissos;
    }
}