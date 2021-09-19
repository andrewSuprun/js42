#22: Unlock new skills--Arrow function,spread operator and deconstruction http://www.codewars.com/kata/572ab0cfa3af384df7000ff8
loopArray https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/
#23: methods of arrayObject---push(), pop(), shift() and unshift() http://www.codewars.com/kata/572af273a3af3836660014a1

const shuffleIt = (arr,...ex) => {
  let result = arr.slice();
  for ([ a, b ] of ex) [ result[a], result[b]] = [result[b], result[a] ];
  return result;
}


function loopArr(arr, direction, steps) {
  let result = [...arr];
if (direction === 'right'){
  for (let i = 0; i < steps; i++ ) {
    let a = result.pop();
    result.unshift(a);
  }
}
if (direction === 'left'){
  for (let i = 0; i < steps; i++ ) {
    let a = result.shift();
    result.push(a);
  }
}
    return result;
}

const infiniteLoop = (arr,d,n) => {
  for (let i = 1; i <= n; i++){
  if (d === "left"){
    arr[2].push(arr[0].shift());
    arr[1].push(arr[2].shift());
    arr[0].push(arr[1].shift());
  }
  if (d === "right"){
    arr[0].unshift(arr[2].pop());
    arr[1].unshift(arr[0].pop());
    arr[2].unshift(arr[1].pop());
  }
  }
  return arr;
}
