Implement own reduce https://www.codewars.com/kata/array-number-reduce/train/javascript
Deep freeze https://www.codewars.com/kata/52ed80dfe7bf9ae61d000056

Array.prototype.reduce = function reduce(reducer, initialValue) {
  let accumulator = initialValue === undefined ? this.shift() : initialValue 
  for(let i=0; i<this.length; i++) 
  accumulator = reducer(accumulator, this[i], i, this);
  return accumulator;
}

Object.deepFreeze = function (object) {
  Object.freeze(object)
  for (const i in object) Object.deepFreeze(object[i])
}
