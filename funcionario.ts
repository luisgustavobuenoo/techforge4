//trilha 2  Exercicio 5
abstract class Funcionario {
    constructor(protected nome: string, protected salario: number) {}

    abstract calcularBonus(): number;

    getSalarioComBonus(): number {
        return this.salario + this.calcularBonus();
    }
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.salario * 0.10;  
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.salario * 0.05;  
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
    funcionarios.forEach(funcionario => {
        console.log(`Salario com bonus de ${funcionario.nome}: ${funcionario.getSalarioComBonus()}`);
    });
}

// Exemplo de uso
const funcionarios: Funcionario[] = [
    new Gerente("Carlos", 5000),
    new Operario("Ana", 2000)
];

calcularSalarioComBonus(funcionarios);

