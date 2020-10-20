# JavaScript Data Structures
<p align="">
  <a href="https://www.npmjs.com/package/@ahmeds.gaafer/js-data-structures" target="_blank"><img src="https://img.shields.io/npm/l/@ahmeds.gaafer/js-data-structures"></a>
  <a href="https://www.npmjs.com/package/@ahmeds.gaafer/js-data-structures" target="_blank"><img src="https://img.shields.io/bundlephobia/min/@ahmeds.gaafer/js-data-structures" ></a>
  <a href="https://codeclimate.com/github/ahmedgaafer/JS-Data-Structures"><img src="https://img.shields.io/codeclimate/maintainability-percentage/ahmedgaafer/JS-Data-Structures"></a>
  <a href="https://david-dm.org/ahmedgaafer/js-data-structures" title="dependencies status"><img src="https://david-dm.org/ahmedgaafer/js-data-structures/status.svg?style=flat-square"/></a>
</p>  
<p align="">
  <a href="https://discord.gg/TgVpvUN" target="_blank"><img src="https://img.shields.io/discord/712223278844084275?label=Discord&style=for-the-badge"></a>
</p>


Data Structures made by Vanilla JS.

## Install

```bash
$ npm install @ahmeds.gaafer/js-data-structures --save
```

## Data Structure list:

- [x] Singly Linked List
- [x] Doubly Linked List
- [x] Queue
- [x] Stack
- [x] Heap
- [ ] Graph

## Usage

### Singly Linked List:

```JS
const { SinglyLinkedList } = require('@ahmeds.gaafer/js-data-structures');

// The constructor can accept an array as an input and it will transform the array to the linked list
const arr = [1, 2, 3];
const list = new SinglyLinkedList(arr);

list.push(1); 

list.view();

// You can chain methods that does not return a value

list.popStart().pop().view(); // vaild

list.getHead().view(); // invalid

```
functions:

- ***.insert(data, pos)*** => Insert data to certian position.
- ***.pushStart(data)*** => Insert data at the head position.
- ***.push(data)*** => Insert data at tail position.
- ***.delete(pos)*** => Delete element at a certian position.
- ***.pop()*** => Delete element from the end of the tail.
- ***.popStart()*** => Delte element from the head.
- ***.getHead()*** => Returns a copy of the head node.
- ***.getTail()*** => Returns a copy of the tail node.
- ***.view()*** => Prints a visual dispaly of the linked list.
- ***.toArray()*** => Returns the linked list as an array


### Doubly Linked List:

```JS
const { DoublyLinkedList } = require('@ahmeds.gaafer/js-data-structures');

// The constructor can accept an array as an input and it will transform the array to the linked list
const arr = [1, 2, 3];
const list = new DoublyLinkedList(arr);

list.push(1); 

list.view();

// You can chain methods that does not return a value

list.popStart().pop().view(); // vaild

list.getHead().view(); // invalid

```
functions:

- ***.insert(data, pos)*** => Insert data to certian position.
- ***.pushStart(data)*** => Insert data at the head position.
- ***.push(data)*** => Insert data at tail position.
- ***.delete(pos)*** => Delete element at a certian position.
- ***.pop()*** => Delete element from the end of the tail.
- ***.popStart()*** => Delte element from the head.
- ***.getHead()*** => Returns a copy of the head node.
- ***.getTail()*** => Returns a copy of the tail node.
- ***.view()*** => Prints a visual dispaly of the linked list.
- ***.toArray()*** => Returns the linked list as an array.

### Queue:

```JS
const { Queue } = require('@ahmeds.gaafer/js-data-structures');

// The constructor can accept an array as an input and it will transform the array to the Queue
const arr = [1, 2, 3];
const queue = new Queue(arr);

queue.enqueue(5);
queue.deqeue();

// You can chain methods that does not return a value
queue.enqueue(5).dequeue().view(); //vaild

queue.peak().view(); // invalid

```

functions:

- ***.enqueue(data)*** => Add data to the end of the queue.
- ***.dequeue()*** => Remove first element of the queue.
- ***.peak()*** => Returns the first element in the queue.
- ***.getSize()*** => Returns the size of the queue.
- ***.view()*** => Prints a visual dispaly of the queue.

### Stack:

```JS
const { Stack } = require('@ahmeds.gaafer/js-data-structures');
// The constructor can accept an array as an input and it will transform the array to the Heap

const arr = [1, 2, 3];

const stack = new Stack(arr);

stack.push(1);


// You can chain methods that does not return a value
stack.push(1).push(2).pop() // vaild
stack.peak().push(1); // invalid

```
functions:

- ***.push(data)*** => Inserts data to top of stack.
- ***.pop()*** => Removes the item on the top of the stack.
- ***.peak()*** => Returns the item on the top of the stack.
- ***.getSize()*** =>Returns the size of the stack;
- ***.view()*** => Prints a visual display of the stack.


### Heap:

```JS
const { Heap } = require('@ahmeds.gaafer/js-data-structures');

// The constructor can accept an array as an input and it will transform the array to the Heap

const arr = [1, 2, 3];

//min heap
const minHeap = new Heap(arr);

//max heap
const maxHeap = new Heap(arr, true);

/// or 
const maxHeap = new Heap([], true);

maxHeap.push(5);

// You can chain methods that does not return a value
minHeap.push(1).push(2) // vaild
minHeap.peak().push(1); // invalid



```

functions:

- ***.push(data)*** => Insert a data to the heap.
- ***.pop()*** => Removes the root of the heap and fixes the the heap.
- ***.peak()*** => Returns the value of the root of the heap.
- ***.getSize()*** => Returns the size of the heap;
- ***.view()*** => Prints the array of the heap;

