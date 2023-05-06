'use strict';
/*
// Old way
const Profile_maker = function (firstName, secondName, age, state) {
  this.firstName = firstName;
  this.secondName = secondName;
  this.age = age;
  this.state = state;
};
Profile_maker.prototype.intro_string = function () {
  return `My name is ${this.firstName + ' ' + this.secondName} and I am from ${
    this.state
  } and my age is ${this.age}`;
};
Profile_maker.prototype.intro = function () {
  return `My name is ${this.firstName + ' ' + this.secondName}...`;
};
Profile_maker.prototype.isIndian = true;

// const saurav = new Profile_maker('Saurav', 'Meghwal', 18, 'Rajasthan');
console.log(new Profile_maker());
// const arr = ['sonu', 'monu', 'raja'];
// console.log(arr.__proto__);

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  /*
this = {}

  static saurav = 19;
  accelerate() {
    this.speed = this.speed + 10;
    // console.log(this.speed);
  }

  brake() {
    this.speed = this.speed - 5;
    // console.log(this.speed);
  }

  set make(make) {
    if (make.includes('B')) {
      this._make = make;
    } else {
      //   console.log('Must be BMW only');
    }
  }
}

const bmw = new Car('BMW', 78);
// console.log(bmw);
// console.log(Car.saurav);
*/

const proto = {
  basicDetails({ name, birthYear, solved, correct }) {
    this.name = name;
    this.birthYear = birthYear;
    this.solved = solved;
    this.correct = correct;
  },
  calcAgenIQ() {
    this.age = 2022 - this.birthYear;
    this.IQ = (this.correct / this.solved) * 100 + '% IQ';
  },
};

const saurav = Object.create(proto);

saurav.basicDetails({
  name: 'Saurav Meghwal',
  solved: 1000000,
  correct: 999999,
  birthYear: 2005,
});
saurav.calcAgenIQ();
// console.log(saurav);

// Human > Female > wife > mother

const Human = function (country, birthYear, married) {
  this.country = country;
  this.birthYear = birthYear;
  this.married = married;
};
Human.prototype.calcAge = function () {
  this.age = 2023 - this.birthYear;
};

const raji = new Human('India', 2005, true);
raji.calcAge();
console.log(raji);
