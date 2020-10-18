let LinkedList = require('./index');

let obj = new LinkedList([1, 2, 3]);
// obj.push("end").pushStart("start").insert("Mid", 3).view();
// console.log(obj.getSize());
// let h = obj.getHead();
// let t = obj.getTail();
// console.log(h);
// console.log(t);

obj = new LinkedList([1, 2, 3]);
obj.pop().popStart().push(1).push(2).push(3).push(4).view();
let a = obj.toArray();

console.log(Array.isArray(a))

