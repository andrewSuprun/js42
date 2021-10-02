#24: methods of arrayObject---splice() and slice() http://www.codewars.com/kata/572cb264362806af46000793
#25: methods of arrayObject---reverse() and sort() http://www.codewars.com/kata/572df796914b5ba27c000c90
#26: methods of arrayObject---map() http://www.codewars.com/kata/572fdeb4380bb703fc00002c

function threeInOne(arr) {
  let result = [];
  for(let i = 0; i < arr.length - 1; i+=3){
    result.push(arr[i]+arr[i+1]+arr[i+2]);
  };
  return result;
}


function sortIt(arr) {
  const newArr = arr.slice();
  newArr.sort((a, b) => {
    const count1 = arr.filter((value) => value === a).length;
    const count2 = arr.filter((value) => value === b).length;
    if (count1 === count2) return b - a;
    return count1 > count2 ? 1 : -1;
  });
  return newArr;
}

function isolateIt(arr) {
  return arr.map(v => {
  if (v.length % 2 === 0) {return v.slice(0, v.length / 2) + '|' + v.slice(v.length / 2)};
  if (v.length % 2! === 0) {return v.slice(0, v.length / 2) + '|' + v.slice((v.length / 2) + 1)};
  });
}
