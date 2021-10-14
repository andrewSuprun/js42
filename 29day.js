How new works https://www.codewars.com/kata/how-new-works
Replicate new http://www.codewars.com/kata/replicate-new

const myObj = Object.create(MyObject.prototype);
MyObject.call(myObj);

function nouveau(Constructor, ...args) {
  const thisValue = Object.create(Constructor.prototype);
  const result = Constructor.apply(thisValue, args);
  if ((typeof result === 'object' || typeof result === 'function') && result !== null) {
    return result;
  }
  return thisValue;
}
