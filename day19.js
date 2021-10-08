#37: Unlock new weapon---RegExp Object http://www.codewars.com/kata/5735e39313c205fe39001173
#38: Regular Expression--""^"",""$"", ""."" and test() http://www.codewars.com/kata/573975d3ac3eec695b0013e0

function countAnimals(animals,count){
  //coding here...
  const result = []
  for(let i = 0; i < count.length; i++){
  let match = (animals.match(new RegExp(count[i],"g"))||[]).length;
  result.push(match)
    }
  return result
}

function findSimilarity(inputs,str){
  //coding here...
const input = inputs.split(' ');
const end = str.slice(-1);
const midle = str.slice(1,str.length-1).replace(/[A-Z]/ig,'.');
const begin = 1;
  
const r = new RegExp(str[0] + midle + end);
const res = input.filter(el =>  el.match(r));
const ress = res.filter(el => el.length === str.length);
return ress.join(' ');

}
