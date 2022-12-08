
// class design pattern
class Car {
    constructor(doors,engine,color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class Suv extends Car {
    constructor(doors,engine,color) {
        super(doors,engine,color);
        this.wheels = 4;
    }


}

const civic = new Car(4,'vvti','red')
const fortrunner = new Suv(4,'vvti','red')

console.log(civic)
console.log(fortrunner)