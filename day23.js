Unpacking arguments http://www.codewars.com/kata/unpacking-arguments
For the sake of argument http://www.codewars.com/kata/for-the-sake-of-argument

function spread(func, args) {
  return func(...args);
}

const numbers = (...arr) => arr.every(el => typeof el === 'number');
