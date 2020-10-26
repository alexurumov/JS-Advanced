class Rat {
    unitedRats = [];
    
    constructor(name) {
        this.name = name;
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.unitedRats.push(otherRat);
        }
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {
        let result = `${this.name}`;
        this.unitedRats.forEach(rat => {
            result += `\n##${rat.name}`
        });
        return result;
    }
}

let firstRat = new Rat("Peter"); 
console.log(firstRat.toString());
  
console.log(firstRat.getRats()); 
 
firstRat.unite(new Rat("George")); 
firstRat.unite(new Rat("Alex")); 
console.log(firstRat.getRats()); 
 
console.log(firstRat.toString()); 
