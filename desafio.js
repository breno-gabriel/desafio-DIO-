// Classe que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome; 
        this.idade = idade; 
        this.tipo = tipo; 
    }

    // Método para atacar
    atacar() {
        let ataque; 

        if (this.tipo === 'mago') {
            ataque = 'magia';
        } else if (this.tipo === 'guerreiro') {
            ataque = 'espada';
        } else if (this.tipo === 'monge') {
            ataque = 'artes marciais';
        } else if (this.tipo === 'ninja') {
            ataque = 'shuriken';
        } else {
            ataque = 'ataque desconhecido';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }
}

const heroi1 = new Heroi('Gandalf', 150, 'mago');
const heroi2 = new Heroi('Aragorn', 87, 'guerreiro');
const heroi3 = new Heroi('Shaolin', 30, 'monge');
const heroi4 = new Heroi('Ninja Hattori', 25, 'ninja');

// Chamando o método atacar para cada herói
heroi1.atacar();
heroi2.atacar(); 
heroi3.atacar(); 
heroi4.atacar(); 

