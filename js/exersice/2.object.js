// class
class motorcycle {
    constructor(name,model) {
        this.name = name;
        this.model = model;
    }

    getInfo() {
        return `the motorcycle is a ${this.name} ${this.model}`;
    }
}

// oobject

let motorcycle1 =new motorcycle("Suzuki", "Klx");
const motorcycle2 = new motorcycle("Yamaha", "Crf")

console.log (motorcycle1.getInfo());
console.log (motorcycle2.getInfo());
