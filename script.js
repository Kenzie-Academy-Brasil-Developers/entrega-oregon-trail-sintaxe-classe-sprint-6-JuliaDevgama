class Traveler {
    constructor(nome){
        this.name = nome
        this.qtdFood = 1
        this.isHealthy = true
    }

    hunt(){
        let qtd = this.qtdFood += 2
        console.log(qtd)
    }

    eat(){
       if(this.qtdFood === 0){
           return this.isHealthy = false 
       } else if(this.qtdFood > 0){
            console.log(this.qtdFood -=1)
       }
    }
}

class Wagon {
    constructor(capacity){
        this.capacidade = capacity
        this.passengers = []
    }
    getAvailableSeatCount(){
        console.log(this.capacidade - this.passengers.length)
    }

    join(viajante){
        if(this.passengers.length < this.capacidade){
            console.log(this.passengers.push(viajante))
        }
    }
    
   
}




