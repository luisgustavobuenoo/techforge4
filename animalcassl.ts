//trilha 2 Exercicio 4
class Animal {
    private energia: number = 100;

    comer(): void {
        console.log("O animal esta comendo");
        this.energia += 10;
    }

    statusEnergia(): void {
        console.log(`Energia: ${this.energia}`);
    }
}

class Leao extends Animal {
    comer(): void {
        console.log("O leao vai atacar ");
        this.statusEnergia();
        this.energia -= 20;  
        super.comer();        
        this.statusEnergia();
    }
}

class Passaro extends Animal {
    comer(): void {
        console.log("O passaro esta comendo sementes");
        super.comer();        
        this.statusEnergia();
    }
}


const leao = new Leao();
const passaro = new Passaro();

leao.comer();
passaro.comer();

