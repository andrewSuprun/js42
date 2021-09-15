Number object and its properties http://www.codewars.com/kata/5722fd3ab7162a3a4500031f
Methods of Number object--toString() and toLocaleString(): https://www.codewars.com/kata/57238ceaef9008adc7000603
Methods of Number object--toFixed(), toExponential() and toPrecision() http://www.codewars.com/kata/57256064856584bc47000611

function whatNumberIsIt(n){
  switch(n){
    case Number.MAX_VALUE: return ("Input number is Number.MAX_VALUE"); 
    case Number.MIN_VALUE: return  ("Input number is Number.MIN_VALUE");
    case Number.POSITIVE_INFINITY: return ("Input number is Number.POSITIVE_INFINITY");
    case Number.NEGATIVE_INFINITY: return ("Input number is Number.NEGATIVE_INFINITY");
    case Number(n) : return "Input number is " + n;
  default: return "Input number is Number.NaN";
  }
}

function colorOf(r,g,b){
  //coding here
  return '#'+r.toString(16).padStart(2,0)+g.toString(16).padStart(2,0)+b.toString(16).padStart(2,0);
}

function howManySmaller(arr,n){
  return arr.filter(el => el.toFixed(2)<n).length
}
