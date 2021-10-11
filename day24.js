Duplicate arguments http://www.codewars.com/kata/duplicate-arguments
Last Argument http://www.codewars.com/kata/last

const  solution = (...arg) => new Set(arg).size !== arg.length;

function last(list){
	var last = arguments[arguments.length - 1];
	return last[last.length - 1] || last;
}
//=)
