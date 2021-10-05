#30: methods of arrayObject---reduce() and reduceRight() http://www.codewars.com/kata/573156709a231dcec9000ee8
#31: methods of arrayObject---isArray() indexOf() and toString() http://www.codewars.com/kata/5732b0351eb838d03300101d
#36 

methods of Math -- random()   https://www.codewars.com/kata/5735956413c2054a680009ec


function tailAndHead(arr){
  let res=[];
  for (let i=0; i < arr.length-1; i++)
  res.push(arr[i]%10 + Number((arr[i+1]+'')[0]))
  return res.reduce((a,b) => a * b)
}

function blackAndWhite(arr) {
  if (Array.isArray(arr)) {
    return arr.indexOf(5) + 1 && arr.indexOf(13) + 1
      ? "It's a black array"
      : "It's a white array";
  } else return "It's a fake array";
}

function rndCode(){
  const capsChar = 'ABCDEFGHIJKLM';
  const symbols = '~!@#$%^&*';
  const numbers = '0123456789';
  let result = '';
  for (let i = 1; i <=8; i++){
   if (i===1||i===2) {result +=  capsChar[~~(capsChar.length*Math.random())]}
   if (i>2&&i<7) {result += numbers[~~(numbers.length*Math.random())]}
   if (i>6) {result += symbols[~~(symbols.length*Math.random())]}
  }
  return result
}
