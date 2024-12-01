
import { Pedido } from "./Pedido";
import { GerenciadorDeUsuarios, NotificacaoEmail } from "./GerenciadorDeUsuarios";
import { EnviadorDeEmails, ValidadorDeContato } from "./EnviadorDeEmails";

// 1. Teste do Pedido
const pedido = new Pedido();
pedido.adicionarItem("Livro", 30);
pedido.adicionarItem("Caderno", 10);
pedido.finalizarPedido();
console.log("Pedido:", pedido.detalhesDoPedido());

// 2. Teste do Gerenciador de Usuários
const notificacao = new NotificacaoEmail();
const usuarioManager = new GerenciadorDeUsuarios(notificacao);
usuarioManager.criarUsuario("usuario@example.com");
console.log("Usuários:", usuarioManager.listarUsuarios());

// 3. Teste do Enviador de Emails
const validador = new ValidadorDeContato();
const enviador = new EnviadorDeEmails(validador);
enviador.enviarEmail("contato@example.com");
enviador.enviarEmail("contato_invalido");
