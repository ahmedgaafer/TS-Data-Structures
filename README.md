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
```

### Queue:

```JS
```

### Stack:

```JS
```

### Heap:

```JS
```
