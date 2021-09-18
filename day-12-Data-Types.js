function wordToBin(str){
  const array = [];
  for (var i = 0; i < str.length; i++) {
      array.push('0' + str[i].charCodeAt(0).toString(2) + "");
  }
  return array;
}
