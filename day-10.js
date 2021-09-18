#19: Methods of String object--toUpperCase() toLowerCase() and replace() http://www.codewars.com/kata/5728203b7fc662a4c4000ef3
#20: Methods of String object--charAt() charCodeAt() and fromCharCode() http://www.codewars.com/kata/57284d23e81185ae6200162a
#21: Methods of String object--trim() and the string template http://www.codewars.com/kata/5729b103dd8bac11a900119e



function alienLanguage(str){
  const strArr = str.toUpperCase().split(' ');

  return strArr.map(word => word.slice(0, word.length-1) + word[word.length-1].toLowerCase())
  .join(' ');
  
  
}


function fiveLine(s){
let res = s.trim();
  for (let i = 2; i <= 5; i++) {
    res += '\n' + s.trim().repeat(i);
  }
  return res;
}
