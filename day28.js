Function within a function http://www.codewars.com/kata/a-function-within-a-function
Pure function https://www.codewars.com/kata/59bdbe9d46038724ca0000b9/train/javascript

const always = (n) => (cbArgument) => n;

const solution = (arr, options) => arr.map(el => el + 2 * options.modifier);
