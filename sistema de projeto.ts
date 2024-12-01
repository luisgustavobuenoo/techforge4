// 1 Sistema de Tarefas e Projetos


abstract class GerenciadorDeTarefas {
    abstract adicionarTarefa(tarefa: string): void;
    abstract listarTarefas(): string[];
}

class Projeto extends GerenciadorDeTarefas {
    private tarefas: Set<string> = new Set();

    adicionarTarefa(tarefa: string): void {
        this.tarefas.add(tarefa);
    }

    listarTarefas(): string[] {
        return Array.from(this.tarefas);
    }
}

class TarefasDiarias extends GerenciadorDeTarefas {
    private tarefas: Set<string> = new Set();

    adicionarTarefa(tarefa: string): void {
        this.tarefas.add(tarefa);
    }

    listarTarefas(): string[] {
        return Array.from(this.tarefas);
    }
}



//  Inventário de Itens funcionando


abstract class Inventario {
    abstract adicionarItem(item: string, quantidade: number): void;
    abstract removerItem(item: string): void;
    abstract listarInventario(): Record<string, number>;
}

class InventarioArmazem extends Inventario {
    private itens: Record<string, number> = {};

    adicionarItem(item: string, quantidade: number): void {
        this.itens[item] = (this.itens[item] || 0) + quantidade;
    }

    removerItem(item: string): void {
        delete this.itens[item];
    }

    listarInventario(): Record<string, number> {
        return this.itens;
    }
}

class InventarioLoja extends Inventario {
    private itens: Record<string, number> = {};
    private readonly quantidadeMaxima = 10;

    adicionarItem(item: string, quantidade: number): void {
        const quantidadeAtual = this.itens[item] || 0;
        this.itens[item] = Math.min(quantidadeAtual + quantidade, this.quantidadeMaxima);
    }

    removerItem(item: string): void {
        delete this.itens[item];
    }

    listarInventario(): Record<string, number> {
        return this.itens;
    }
}



//  Gerenciador de Favoritos


abstract class GerenciadorDeFavoritos {
    abstract adicionarFavorito(item: string): void;
    abstract listarFavoritos(): string[];
}

class FilmesFavoritos extends GerenciadorDeFavoritos {
    private favoritos: Set<string> = new Set();

    adicionarFavorito(item: string): void {
        this.favoritos.add(item);
    }

    listarFavoritos(): string[] {
        return Array.from(this.favoritos).sort();
    }
}

class LivrosFavoritos extends GerenciadorDeFavoritos {
    private favoritos: string[] = [];

    adicionarFavorito(item: string): void {
        this.favoritos.unshift(item); // Adiciona ao início
    }

    listarFavoritos(): string[] {
        return this.favoritos;
    }
}



//  Sistema de Votação ? dificil 


abstract class SistemaDeVotacao {
    abstract votarEm(candidato: string): void;
    abstract obterResultados(): object;
}

class Eleicao extends SistemaDeVotacao {
    private votos: Record<string, number> = {};

    votarEm(candidato: string): void {
        this.votos[candidato] = (this.votos[candidato] || 0) + 1;
    }

    obterResultados(): object {
        return this.votos;
    }
}

class Enquete extends SistemaDeVotacao {
    private votos: Record<string, number> = {};

    votarEm(candidato: string): void {
        this.votos[candidato] = (this.votos[candidato] || 0) + 1;
    }

    obterResultados(): object {
        return Object.entries(this.votos)
            .sort(([, a], [, b]) => b - a) // Ordena pelo número de votos
            .reduce((acc, [candidato, votos]) => {
                acc[candidato] = votos;
                return acc;
            }, {} as Record<string, number>);
    }
}

// Exemplos de uso do sistema //


const projeto = new Projeto();
projeto.adicionarTarefa("Desenhar esquema do banco de dados");
projeto.adicionarTarefa("Implementar API");
console.log("Tarefas do Projeto:", projeto.listarTarefas());

const tarefasDiarias = new TarefasDiarias();
tarefasDiarias.adicionarTarefa("Exercício matinal");
tarefasDiarias.adicionarTarefa("Ler documentação do TypeScript");
console.log("Tarefas Diárias:", tarefasDiarias.listarTarefas());

const armazem = new InventarioArmazem();
armazem.adicionarItem("Laptops", 50);
armazem.adicionarItem("Teclados", 30);
console.log("Inventário do Armazém:", armazem.listarInventario());

const loja = new InventarioLoja();
loja.adicionarItem("Laptops", 5);
loja.adicionarItem("Laptops", 8);
console.log("Inventário da Loja:", loja.listarInventario());

const filmes = new FilmesFavoritos();
filmes.adicionarFavorito("A Origem");
filmes.adicionarFavorito("Matrix");
console.log("Filmes Favoritos:", filmes.listarFavoritos());

const livros = new LivrosFavoritos();
livros.adicionarFavorito("Código Limpo");
livros.adicionarFavorito("O Programador Pragmático");
console.log("Livros Favoritos:", livros.listarFavoritos());

const eleicao = new Eleicao();
eleicao.votarEm("Alice");
eleicao.votarEm("Bob");
eleicao.votarEm("Alice");
console.log("Resultados da Eleição:", eleicao.obterResultados());

const enquete = new Enquete();
enquete.votarEm("Opção A");
enquete.votarEm("Opção B");
enquete.votarEm("Opção A");
enquete.votarEm("Opção C");
console.log("Resultados da Enquete:", enquete.obterResultados());
