SantaClausable Interface http://www.codewars.com/kata/santaclausable-interface
Cylon Evolution http://www.codewars.com/kata/cylon-evolution


function isSantaClausable(obj) {
  return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(el => typeof obj[el] === 'function');
}

class Cylon{
  constructor(model){
  this.model=model
  }
  
  attack(){
  return "Destroy all humans!"
  }
}

class HumanSkin extends Cylon{
  constructor(model){
  super(model)
  }
  
  infiltrate(){
  return "Infiltrate the colonies"
  }
}
