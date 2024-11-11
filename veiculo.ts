//segunda trilha Exercicio 1 
class Veiculo {
    mover(): void {
        console.log("O veiculo esta em movimento");
    }
}

class Carro extends Veiculo {
    mover(): void {
        console.log("O carro esta sendo dirigido");
    }
}

class Bicicleta extends Veiculo {
    mover(): void {
        console.log("A bicicleta estaandando e pedalando");
    }
}


const carro = new Carro();
const bicicleta = new Bicicleta();

carro.mover();      
bicicleta.mover();   