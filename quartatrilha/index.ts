import { ItemLoja } from "./Produto";
import { Texto } from "./Documento";
import { Loja } from "./Loja";
import { Biblioteca } from "./Biblioteca";
import { BibliotecaGestao } from "./BibliotecaGestao";

// 1 Teste de Produto
const item = new ItemLoja(1, "Caneta", 2.5);
console.log("Produto:", item);



// 2 Teste de Documento
const documento = new Texto("Meu Texto", "Este é o conteúdo.");
console.log("Documento:", documento.exibir());



// 3 Teste de Loja
const loja = new Loja();
loja.adicionarProduto({ codigo: 101, nome: "Caderno" });
loja.adicionarProduto({ codigo: 102, nome: "Lápis" });
console.log("Produto encontrado:", loja.buscarProdutoPorCodigo(101));



// 4 Teste de Biblioteca
const biblioteca = new Biblioteca();
biblioteca.adicionarLivro({ titulo: "Livro A", autor: "Autor X", disponivel: true });
biblioteca.adicionarLivro({ titulo: "Livro B", autor: "Autor Y", disponivel: false });
console.log("Livros disponíveis:", biblioteca.buscarLivrosDisponiveis());



// 5 Teste de BibliotecaGestao
const bibliotecaGestao = new BibliotecaGestao();
bibliotecaGestao.adicionarLivro({ titulo: "Livro 1", autor: "Autor 1", genero: "Ficção", disponivel: true });
bibliotecaGestao.adicionarLivro({ titulo: "Livro 2", autor: "Autor 2", genero: "Terror", disponivel: false });
bibliotecaGestao.adicionarLivro({ titulo: "Livro 3", autor: "Autor 1", genero: "Ficção", disponivel: true });
console.log("Livros de Ficção:", bibliotecaGestao.filtrarPorGenero("Ficção"));
console.log("Livros do Autor 1:", bibliotecaGestao.buscarPorAutor("Autor 1"));
console.log("Livros disponíveis ordenados:", bibliotecaGestao.obterLivrosDisponiveisOrdenados());
