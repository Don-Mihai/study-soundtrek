

class Enemy {
    #secret_key = '12345'
    not_sectre = '0000'
    constructor(power) {
        this.power = power

    }


    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}


class Alien extends Enemy {
    constructor (name, phrase, power) {
        super(power)
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    #fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    sayPhrase = () => console.log(this.phrase)
}

const aline = new Alien('Миша', 'пыщ пыщ аое', 10)
