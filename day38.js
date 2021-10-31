function* generator() {
  let i = 1;
  while (true) {
     let value = yield i;
    !value ? i++ : i = value;
     }
}
