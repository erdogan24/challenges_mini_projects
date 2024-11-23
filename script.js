'use strict';

// PROJECT -- 1 --
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();

// ------------------------------------------------------------------
// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.birthYear = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2045 - this.birthYear);
  }
}
const erdogan = new PersonCl('Erdogan', 1998);
console.log(erdogan);
erdogan.calcAge();

console.log(erdogan.__proto__ === PersonCl.prototype);
