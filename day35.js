Object Prototypes https://www.codewars.com/kata/js-prototypes-module-number-1-object-prototypes
Class-Like Objects https://www.codewars.com/kata/javascript-class-like-objects

Object.prototype.description = "TODO: GIVE ME A DESCRIPTION";

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  toString() {
    return `${this.name} is a ${this.type}`;
  }
}

