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
