#9: loop statement --while and do..while http://www.codewars.com/kata/57216d4bcdd71175d6000560
#10: loop statement --for http://www.codewars.com/kata/5721a78c283129e416000999
#11: loop statement --break,continue http://www.codewars.com/kata/5721c189cdd71194c1000b9b
#12: loop statement --for..in and for..of http://www.codewars.com/kata/5722b3f0bd5583cf44001000


#9 function padIt(str,n){
  while(n>0){
    if(n%2 === 0) {
      str = str + "*";
    }else{
      str = "*" + str;
    }
    n --;
  }
  return str;
}


#10 function pickIt(arr){
  var odd=[],even=[];
  for(let i=0; i<arr.length; i++){
    const number = arr[i]
    if (number%2==0) even.push(number)
    else odd.push(number)
//     odd.push(number)
  }
  
  
  return [odd,even];
}

#11 function grabDoll(dolls){
  var bag=[];
  
  for(var i = 0; i < dolls.length; i++) {
  
    if(dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll")
      bag.push(dolls[i]);
    else
      continue;
      
    if(bag.length === 3) break;
  }
  
  return bag;
}

#12 function giveMeFive(obj){
 const result = [];
  for (let key in obj){
    if (key.length==5)
      result.push(key)
    if (obj[key].length==5)
      result.push(obj[key])


    }
  return result;
}
