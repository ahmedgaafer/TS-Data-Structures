
let LinkedList = require('./index');

let obj = new LinkedList([1, 2, 3]);

obj.popStart().pop().view()

let h = obj.getHead();
let t = obj.getTail();

console.log(h);
console.log(t);
