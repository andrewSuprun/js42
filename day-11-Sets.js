Playing with Sets : Equal or Not ? https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript
Operations with Sets https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript

//=
function areEqual(as, bs){
      if (as.size !== bs.size) return false;
    for (const a of as) if (!bs.has(a)) return false;
    return true;
}

function notEqual(bs, as){
     if (as.size !== bs.size) return true;
    for (const a of as) if (!bs.has(a)) return true;
    return false;
  }
  //=

function process2Arrays(a, b) {
  

  const sameOfArrs = a.filter(el => b.indexOf(el) !== -1);
  const uniqForFirstArr = a.filter(el => sameOfArrs.indexOf(el) === -1);
  const uniqForSecondArr = b.filter(el => sameOfArrs.indexOf(el) === -1);
  

  return [sameOfArrs.length,
         [...uniqForFirstArr, ...uniqForSecondArr].length,
         uniqForFirstArr.length,
         uniqForSecondArr.length];
  
}

or
const process2Arrays = (arr1, arr2) => {
  const sameOfArr = arr1.filter((el, i, arr) => {
    if (el !== arr[i + 1]) return arr2.includes(el);
  }).length;
  const a = new Set(arr1).size;
  const b = new Set(arr2).size;
  const uniqOfArrs = a + b - 2 * sameOfArr;
  const arr1Remain = a - sameOfArr;
  const arr2Remain = b - sameOfArr;
  return [sameOfArr, uniqOfArrs, arr1Remain, arr2Remain];
};
