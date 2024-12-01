
export class NotificacaoEmail {
    enviar(email: string): void {
        console.log(`Notificação enviada para o email: ${email}`);
    }
}

export class GerenciadorDeUsuarios {
    private usuarios: string[] = [];
    private notificacao: NotificacaoEmail;

    constructor(notificacao: NotificacaoEmail) {
        this.notificacao = notificacao;
    }

    criarUsuario(email: string): void {
        this.usuarios.push(email);
        this.notificacao.enviar(email);
    }

    listarUsuarios(): string[] {
        return this.usuarios;
    }
}
