"this"" is a problem - http://www.codewars.com/kata/this-is-a-problem
""this"" is an other problem - https://www.codewars.com/kata/this-is-an-other-problem

function NameMe(first, last) {
    this.firstName = first;
    this.lastName  = last;
    this.name = first + ' ' + last;
}

class NamedOne{
  constructor(first,last){
    this.firstName = first;
    this.lastName = last;
  }
  get fullName(){
    return this.firstName + " " + this.lastName
  }
  set fullName(input){
    if(input.includes(" ")){
      const arr = input.split(" ")
      this.firstName = arr[0]
      this.lastName = arr[1]
    }
  }
}
