'use strict';

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

const saurav = new Profile_maker('Saurav', 'Meghwal', 18, 'Rajasthan');
console.log(new Profile_maker());
