Call function using apply http://www.codewars.com/kata/write-javascripts-call-function-using-apply
Anonymous returns http://www.codewars.com/kata/anonymous-returns

Function.prototype.call = function(a, ...args) {
  return this.apply(a, args);
}

name = 'The Window';

var alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
        const that = this;
        return function() {
            return that.name;
        };
    }
};
