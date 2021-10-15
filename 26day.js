Power of bind http://www.codewars.com/kata/power-bind
Sort with Arrow Functions https://www.codewars.com/kata/sort-with-arrow-functions

Function.prototype.bind = function (ctx1) {
 return (ctx = ctx1) => this.call(ctx, ctx);
};

const OrderPeople = (people) => people.sort( (a, b) => a.age - b.age );
