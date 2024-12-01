
export class ValidadorDeContato {
    validar(contato: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(contato);
    }
}

export class EnviadorDeEmails {
    private validador: ValidadorDeContato;

    constructor(validador: ValidadorDeContato) {
        this.validador = validador;
    }

    enviarEmail(contato: string): void {
        if (this.validador.validar(contato)) {
            console.log(`Email enviado para: ${contato}`);
        } else {
            console.log("Contato inválido!");
        }
    }
}
