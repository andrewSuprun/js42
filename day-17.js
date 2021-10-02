#27: methods of arrayObject---filter() http://www.codewars.com/kata/573023c81add650b84000429
#28: methods of arrayObject---every() and some() http://www.codewars.com/kata/57308546bd9f0987c2000d07
#29: methods of arrayObject---concat() and join() http://www.codewars.com/kata/5731861d05d14d6f50000626

function countGrade(scores){
  const obj={S:0,A:0,B:0,C:0,D:0,X:0};
  
  scores.map(el=>{
  if(el>=100) {obj.S++}
  if(el>=90 && el<100) {obj.A++}
  if(el>=80 && el<90) {obj.B++}
  if(el>=60 && el<80) {obj.C++}
  if(el>=0 && el<60) {obj.D++}
  if(el<0) {obj.X++}
  })
  return obj;
}

function bigToSmall(arr){
  const res = [];
  arr.forEach(el => res.push(...el)); 
  return res.sort((a,b)=>b-a).join('>');
}
