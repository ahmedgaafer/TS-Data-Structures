const Heap = require('./index');

const h = new Heap([], isMaxHeap=true);
h.push(1);
h.push(2);
h.push(3);
h.push(4);
h.view();
h.pop();
h.view();

