import { IStack } from "../types/datastructures.types";
import { NodeData } from "../types/nodes.types";

export class Stack<T extends NodeData> implements IStack<T> {
	data!: T[];

	constructor(data: T[] = []) {
		this.data = [];
		if (data.length > 0) {
			this.data = [...data];
		}
	}

	/**
	 * Push new data to Stack
	 * @param data the data you want to push to stack
	 * @returns self reference
	 * @example Pushing data to stack
```ts
const s = new Stack<number>();
s.push(1).push(2).push(3) // [$base, 1, 2, 3]
```
	 */
	push(data: T): Stack<T> {
		this.data.push(data);
		return this;
	}

	/**
	 * Remove item from top of the Stack
	 * @returns  self reference
	 * @example Popping items from Stack
```ts
const s = new Stack<number>();
s.push(1).push(2).push(3).pop(); // [$base, 1, 2]
```
	 */
	pop(): Stack<T> {
		if (this.data.length == 0) throw "Can not remove from an empty queue.";
		this.data.pop();
		return this;
	}

	/**
 * 
 * @returns Top element in the stack;
 * @example Returning the top element of the stack;
```ts
const s = new Stack<number>();
const top = s.push(1).push(2).push(3).peak();
console.log(top); // 3
```
 */
	peak(): T {
		if (this.data.length == 0) throw "Can not view from an empty queue.";
		return this.data[this.data.length - 1];
	}

	/**
	 * 
	 * @returns self reference
	 * @example Viewing the stack
```ts
const s = new Stack<number>();
s.push(1).push(2).push(3).view();

//  Stack Top
//  3
//  ----------
//  2
//  ----------
//  1
//  ==========
//  Stack Base

```
	 */
	view(): Stack<T> {
		if (this.data.length == 0) throw "Can not view from an empty queue.";
		let log = "";
		for (let i = this.data.length - 1; i >= 0; i--) {
			log +=
				(i == this.data.length - 1 ? "Stack Top\n" : "") +
				`${this.data[i]}\n` +
				(i > 0 ? "----------\n" : "==========\nStack Base");
		}
		console.log(log);
		return this;
	}

	/**
	 * 
	 * @returns Stack size
	 * @example getting current Stack size
```ts
const s = new Stack<number>();
const currentSize = s.push(1).push(2).push(3).getSize();

console.log(currentSize); // 3
```
	 */
	getSize(): number {
		return this.data.length;
	}
}
