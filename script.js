class Traveler {
    constructor(nome){
        this.name = nome
        this.qtdFood = 1
        this.isHealthy = true
    }

    hunt(){
        let qtd = this.qtdFood += 2
        return qtd 
    }

    eat(){
       if(this.qtdFood === 0){
          this.isHealthy = false
          return this.isHealthy
       } else{
           let qtd = this.qtdFood -=1
           return qtd
       }
    }
}

class Wagon {
    constructor(capacidade){
        this.capacity = capacidade
        this.passengers = []
    }
    getAvailableSeatCount(){
        return this.capacity - this.passengers.length 
    }
    join(viajante){
        if (this.getAvailableSeatCount() > 0) {
            return this.passengers.push(viajante)
        }
        return `Ocupados os ${this.passengers.length} assentos vazios`
    }
    shouldQuarantine(saudavel){
        if(saudavel == false){
            return true
        }else {
            return false
        }
    }
    totalFood(){
        let count = 0
        for(let i = 0; i <= this.capacity; i++){
            count+=i
        }
        return count
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);