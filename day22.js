Check your arrows
https://www.codewars.com/kata/559f860f8c0d6c7784000119/train/javascript
Currying functions: multiply all elements in an array
https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

function anyArrows(arrows){
  // arrow it
  return arrows.some(el => !el.damaged);
}

const multiplyAll = (arr) => (nm) => arr.map(el => el * nm);
