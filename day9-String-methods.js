

function cutIt(arr){
 const arrLength =  arr.map((el, i) => arr[i].length);
 return arr.map(el => el.substring(0, Math.min(...arrLength)) );
}

function firstToLast(str,c){
  if(str.indexOf(c) === -1) return -1;
  return str.lastIndexOf(c) - str.indexOf(c);
}
