const createIterator = (array) => {
  let index = 0;

  return {
    next() {
      if (index < array.length) {
        return { value: array[index++], done: false };
      }
      return {
        value: undefined,
        done: true,
      };
    },
 
    get index() {
      return index;
    },
  };
}
