// class
class Motorcycle {
    constructor(name,model) {
        this.name = name;
        this.model = model;
    }

    getInfo() {
        return `the motorcycle is a ${this.name} ${this.model}`;
    }
}

// oobject

let Motorcycle1 = new Motorcycle("Suzuki", "Klx");
const Motorcycle2 = new Motorcycle("Yamaha", "Crf")

console.log (Motorcycle1.getInfo());
console.log (Motorcycle2.getInfo());
