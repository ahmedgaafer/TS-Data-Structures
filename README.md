# TypeScript Data Structures

<p align="">
  <a href="https://www.npmjs.com/package/@ahmeds.gaafer/ts-data-structures" target="_blank"><img src="https://img.shields.io/npm/l/@ahmeds.gaafer/ts-data-structures"></a>
  <a href="https://www.npmjs.com/package/@ahmeds.gaafer/ts-data-structures" target="_blank"><img src="https://img.shields.io/bundlephobia/min/@ahmeds.gaafer/ts-data-structures" ></a>
  <a href="https://codeclimate.com/github/ahmedgaafer/TS-Data-Structures"><img src="https://img.shields.io/codeclimate/maintainability-percentage/ahmedgaafer/TS-Data-Structures"></a>
 
  <a href="#"> <img src="https://img.shields.io/badge/testing-true-green"> </a>
</p>  
<p align="">
  <a href="https://discord.gg/TgVpvUN" target="_blank"><img src="https://img.shields.io/discord/712223278844084275?label=Discord&style=for-the-badge"></a>
</p>

Data Structures package made by TypeScript.

## Install

```bash
$ npm i @ahmeds.gaafer/ts-data-structures
```

## Data Structure list:

- [x] Singly Linked List
- [x] Doubly Linked List
- [x] Queue
- [x] Stack
- [x] Heap
- [x] Graph

## Usage

### Singly Linked List:

```ts
import { SinglyLinkedList } from "@ahmeds.gaafer/ts-data-structures";

// The constructor can accept an array as an input and it will transform the array to the linked list
const arr = [1, 2, 3];
const list = new SinglyLinkedList<number>(arr);

list.push(1);

list.view();

// You can chain methods that does not return a value

list.popStart().pop().view(); // vaild

list.getHead().view(); // invalid
```

functions:

- **_.insert(data, pos)_** => Insert data to certian position.
- **_.pushStart(data)_** => Insert data at the head position.
- **_.push(data)_** => Insert data at tail position.
- **_.delete(pos)_** => Delete element at a certian position.
- **_.pop()_** => Delete element from the end of the tail.
- **_.popStart()_** => Delte element from the head.
- **_.getHead()_** => Returns a copy of the head node.
- **_.getTail()_** => Returns a copy of the tail node.
- **_.view()_** => Prints a visual dispaly of the linked list.
- **_.toArray()_** => Returns the linked list as an array

### Doubly Linked List:

```ts
import { DoublyLinkedList } from "@ahmeds.gaafer/ts-data-structures";
// The constructor can accept an array as an input and it will transform the array to the linked list
const arr = [1, 2, 3];
const list = new DoublyLinkedList<number>(arr);

list.push(1);

list.view();

// You can chain methods that does not return a value

list.popStart().pop().view(); // vaild

list.getHead().view(); // invalid
```

functions:

- **_.insert(data, pos)_** => Insert data to certian position.
- **_.pushStart(data)_** => Insert data at the head position.
- **_.push(data)_** => Insert data at tail position.
- **_.delete(pos)_** => Delete element at a certian position.
- **_.pop()_** => Delete element from the end of the tail.
- **_.popStart()_** => Delte element from the head.
- **_.getHead()_** => Returns a copy of the head node.
- **_.getTail()_** => Returns a copy of the tail node.
- **_.view()_** => Prints a visual dispaly of the linked list.
- **_.toArray()_** => Returns the linked list as an array.

### Queue:

```ts
import { Queue } from "@ahmeds.gaafer/ts-data-structures";

// The constructor can accept an array as an input and it will transform the array to the Queue
const arr = [1, 2, 3];
const queue = new Queue<number>(arr);

queue.enqueue(5);
queue.deqeue();

// You can chain methods that does not return a value
queue.enqueue(5).dequeue().view(); //vaild

queue.peak().view(); // invalid
```

functions:

- **_.enqueue(data)_** => Add data to the end of the queue.
- **_.dequeue()_** => Remove first element of the queue.
- **_.peak()_** => Returns the first element in the queue.
- **_.getSize()_** => Returns the size of the queue.
- **_.view()_** => Prints a visual dispaly of the queue.

### Stack:

```ts
import { Stack } from "@ahmeds.gaafer/ts-data-structures";

// The constructor can accept an array as an input and it will transform the array to the Heap

const arr = [1, 2, 3];

const stack = new Stack<number>(arr);

stack.push(1);

// You can chain methods that does not return a value
stack.push(1).push(2).pop(); // vaild
stack.peak().push(1); // invalid
```

functions:

- **_.push(data)_** => Inserts data to top of stack.
- **_.pop()_** => Removes the item on the top of the stack.
- **_.peak()_** => Returns the item on the top of the stack.
- **_.getSize()_** =>Returns the size of the stack;
- **_.view()_** => Prints a visual display of the stack.

### Heap:

```ts
import { Heap } from "@ahmeds.gaafer/ts-data-structures";

// The constructor can accept an array as an input and it will transform the array to the Heap

const arr = [1, 2, 3];
const maxHeapOptions = {
  cmp: (a, b) => a < b;
}
const minHeapOptions = {
  cmp: (a, b) => a > b;
}

// Heap type is set to number by default but you can change it

//min heap
const minHeap = new Heap(arr, minHeapOptions);

//max heap
const maxHeap = new Heap(arr, maxHeapOptions);

/// or
const maxHeap = new Heap<string>([], maxHeapOptions);

maxHeap.push(5);

// You can chain methods that does not return a value
minHeap.push(1).push(2); // vaild
minHeap.peak().push(1); // invalid
```

functions:

- **_.push(data)_** => Insert a data to the heap.
- **_.pop()_** => Removes the root of the heap and fixes the the heap.
- **_.peak()_** => Returns the value of the root of the heap.
- **_.getSize()_** => Returns the size of the heap;
- **_.view()_** => Prints the array of the heap;

### Graph:

```ts
import { Graph } from "@ahmeds.gaafer/ts-data-structures";

//The graph can has 2 arguments that are set to false by default.
//The first argument is "isUniDirectional" if you set it to true the graph will be a directed graph.
//The second argument is "isWeighted" if you set it to true the graph will be weighted.

const g = new Graph(); // un-directed un-weighted graph
//or
const g = new Graph(true, false); // directed un-weighted graph.
//or
const g = new Graph(false, true); // un-directed  weighted graph.
//or
const g = new Graph(true, true); // directed weighted graph

g.addVertex(1);
g.addVertex(2);

// You can chain methods that does not return a value

g.addVertex(1).addVertex(2); // valid

g.getNeighbors(1).addVertex(3); // invalid

g.removeVertex(5); // remove a non-existent vertex

// etc...
```

functions:

- **_.addVertex(v)_** => Adds vertex to the graph.
- **_.addEdge(u, v, w: conditional)_** => Add edge between vertex "u" and vertex "v" . weight of the edge "w" is valid if only the graph is set to be weighted.
- **_.removeVertex(v)_** => Removes the vertex from the graph and removes all of the linked edges to it.
- **_.removeEdge(u, v)_** => Removes edge between vertex "u" and "v".
- **_.getVerticesNumbers()_** => Returns the number of vertices in the Graph.
- **_.getNeighbors(v)_** => Returns a the list of neighbors of vertex v
- **_.view()_** => Display a visual display of the graphs adjacency list.

# Important Note:

> **_Any usage of the functions not mentioned in the functions above might lead to un-expected behavior and may lead to the functions throwing an error._**
