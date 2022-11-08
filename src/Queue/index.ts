import { IQueue } from "../types/datastructures.types";
import { NodeData } from "../types/nodes.types";

/**
 * @class Queue
 */
export class Queue<T extends NodeData> implements IQueue<T> {
	_data!: T[];

	constructor(data: T[] = []) {
		this._data = [...data];
	}

	/**
     * Add element at the end of the queue
     * @param data 
     * @returns self reference
     * @example
```ts
const q = new Queue();
q.enqueue(1).enqueue(2).enqueue(3) // 1 <= 2 <= 3

```
     */
	enqueue(data: T): Queue<T> {
		this._data.push(data);
		return this;
	}

	/**
     * Remove element from the start of a queue
     * @returns self reference
     * @example
```ts
const q = new Queue();
q.enqueue(1).enqueue(2).enqueue(3).dequeue()  // 1 <= 2 
```
     */
	dequeue(): Queue<T> {
		if (this._data.length === 0) throw "Can not remove from an empty queue.";
		this._data.shift();
		return this;
	}

	/**
     * 
     * @returns first element in the queue
     * @example
```ts
const q = new Queue();
const first = q.enqueue(1).enqueue(2).first();
console.log(first); // 1
```
     */
	first(): T {
		if (this._data.length === 0) throw "Can not get first of an empty queue.";
		return this._data[0];
	}

	/**
     * 
     * @returns last element in the queue
     * @example
```ts
const q = new Queue();
const last = q.enqueue(1).enqueue(2).last();
console.log(last); // 2
```
     */
	last(): T {
		if (this._data.length === 0) throw "Can not get last of an empty queue.";
		return this._data[this._data.length - 1];
	}

	/**
     * a visual representation of the queue
     * @returns self reference
     * @example
```ts
const q = new Queue();
q.enqueue(1).enqueue(2).view(); // Start <--- 1 <--- 2 <--- End

```
     */
	view(): Queue<T> {
		if (this._data.length == 0) throw "Can not view an empty queue.";

		let log = "Start <--- ";

		this._data.forEach((element) => {
			log += ` ${element} <---`;
		});
		log += " End";
		console.log(log);
		return this;
	}

	/**
     * 
     * @returns the current size of the queue
     * @example
```ts
const q = new Queue();
const currentSize = q.enqueue(1).enqueue(2).getSize();
console.log(currentSize); // 2

```
     */
	getSize(): number {
		return this._data.length;
	}
}
