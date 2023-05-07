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

  brk() {
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

// const proto = {
//   basicDetails({ name, birthYear, solved, correct }) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.solved = solved;
//     this.correct = correct;
//   },
//   calcAgenIQ() {
//     this.age = 2022 - this.birthYear;
//     this.IQ = (this.correct / this.solved) * 100 + '% IQ';
//   },
// };

// const saurav = Object.create(proto);

// saurav.basicDetails({
//   name: 'Saurav Meghwal',
//   solved: 1000000,
//   correct: 999999,
//   birthYear: 2005,
// });
// saurav.calcAgenIQ();
// // console.log(saurav);

// // Human > Female > wife > mother

// const Human = function (country, birthYear) {
//   this.country = country;
//   this.birthYear = birthYear;
// };
// Human.prototype.calcAge = function () {
//   this.age = 2023 - this.birthYear;
// };

// const Female = function (country, birthYear, gender, hairs) {
//   Human.call(this, country, birthYear);
//   this.gender = gender;
//   this.hairs = hairs;
// };

// const Wife = function (country, birthYear, gender, hairs, married) {
//   Female.call(this, country, birthYear, gender, hairs);
//   this.married = married;
// };

// const Mother = function (
//   country,
//   birthYear,
//   gender,
//   hairs,
//   married,
//   parent,
//   child_num
// ) {
//   Wife.call(this, country, birthYear, gender, hairs, married);
//   this.parent = parent;
//   this.child_num = child_num;
// };
// Mother.prototype = Object.create(Human.prototype);
// const raji = new Mother('India', 1995, 'Female', 'long', true, true, 2);
// raji.calcAge();
// // console.log(raji);
// // console.log('Mother', raji instanceof Mother);
// // console.log('Wife', raji instanceof Wife);
// // console.log('Female', raji instanceof Female);
// // console.log('Human', raji instanceof Human);
// // console.log(raji instanceof Human);

// //////////////////////////////////////////////////
// /////////////////////////////////////////////////
// class theOne {
//   constructor(University, course, Relation) {
//     this.University = University;
//     this.course = course;
//     this.Relation = Relation;
//   }
//   cu() {
//     this.course_university = this.University + ' ' + this.course;
//   }
// }
// class theTwo extends theOne {
//   /*
//    constructor(University, course, Relation, name, age){
//      super(University, course, Relation);

//      this.name = name;
//      this.age = age;
//    }   */
//   // If you don't use this code but use extends then it automatically executes the parent class
//   //like below--
// }
// const skd = new theTwo(
//   'Harvard',
//   'Computer Science, Philosophy',
//   'Single',
//   'Saurav',
//   17
// );
// skd.cu();
// console.log(skd);
/*
class Car {
  constructor(make, currentSpeed) {
    this.make = make;
    this.currentSpeed = currentSpeed;
  }
  acc() {
    this.currentSpeed += 20;
    if (this.charge) this.charge -= 1;
  }
}

class EV extends Car {
  constructor(make, currentSpeed, charge) {
    super(make, currentSpeed);

    this.charge = charge;
  }
  chargeTo(energy) {
    const req_charge = energy + this.charge;
    if (req_charge > 100) this.charge = 100;
    else this.charge += energy;
  }
}
const model_S = new EV('Tesla', 120, 23);
model_S.acc();
model_S.acc();
model_S.chargeTo(10660);
console.log(model_S);


*/
class Bank {
  constructor(username, age, gender, pin) {
    this.username = username;
    this._pin = pin;
    this.age = age;
    this.gender = gender;
    this.mov = [];
    this.balance = 0;
  }
  deposit(val, pin) {
    pin === this._pin
      ? this.mov.push(val)
      : console.error('Entered Pin is incorrect');
    return this;
  }
  withdrawal(val, pin) {
    this.deposit(-val, pin);
    return this;
  }
  calcBal() {
    this.balance += this.mov.reduce((a, c) => a + c, 0);
    return this;
  }
  getLoan(amount) {
    this.mov.push(amount);
    return this;
  }
}
const sa = new Bank('sauravmeghwal', 18, 'male', 2388);
sa.deposit(1828283, 2388)
  .deposit(283, 2388)
  .withdrawal(1000000, 2388)
  .getLoan(98778765456);

sa.calcBal();
// console.log(sa);

class CarCl {
  constructor(make, tyres, seats, topSpeed, currentSpeed) {
    this.make = make;
    this.tyres = tyres;
    this.seats = seats;
    this.currentSpeed = currentSpeed;
    this.topSpeed = topSpeed;
  }
}

class EvCl extends CarCl {
  #currentCharge;

  constructor(make, tyres, seats, topSpeed, currentSpeed, currentCharge) {
    super(make, tyres, seats, topSpeed, currentSpeed);
    this.#currentCharge = currentCharge;
  }
  acc() {
    this.currentSpeed += 20;

    if (this.make === 'EV') {
      this.#currentCharge -= 1;
      console.log(
        `${this.make} is going with the speed of ${
          this.currentSpeed
        }km/h with the charge of ${this.#currentCharge}%`
      );
    }
    return this;
  }
  brk() {
    this.currentSpeed - +20;

    console.log(
      `${this.make} is going with the speed of ${
        this.currentSpeed
      }km/h with the charge of ${this.#currentCharge}%`
    );
    return this;
  }
  charge(energy) {
    const req_charge = energy + this.#currentCharge;
    if (req_charge > 100) this.charge = 100;
    else this.#currentCharge += energy;

    console.log(
      `${this.make} is going with the speed of ${
        this.currentSpeed
      }km/h with the charge of ${this.#currentCharge}%`
    );
    return this;
  }
}
const modelK = new EvCl('EV', 'CEAT', 4, '300km/h', 100, 70);
modelK
  .charge(19)
  .acc()
  .charge(11)
  .brk()
  .brk()
  .brk()
  .acc()
  .acc()
  .acc()
  .charge(82823883);
