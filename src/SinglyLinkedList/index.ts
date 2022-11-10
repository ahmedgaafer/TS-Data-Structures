import { ISinglyLinkedList } from "../types/datastructures.types";
import { ISinglyLinkedListNode, NodeData } from "../types/nodes.types";

class SinglyLinkedListNode<T extends NodeData>
	implements ISinglyLinkedListNode<T>
{
	data: T;
	next: null | ISinglyLinkedListNode<T>;
	constructor(data: T) {
		this.data = data;
		this.next = null;
	}
}

/**
 * @class SinglyLinkedList
 */
export class SinglyLinkedList<T extends NodeData>
	implements ISinglyLinkedList<T>
{
	head: null | ISinglyLinkedListNode<T>;
	tail: null | ISinglyLinkedListNode<T>;
	size: number;

	constructor(data: T[] = []) {
		this.head = null;
		this.tail = null;
		this.size = 0;

		if (data.length > 0) {
			data.forEach((element) => {
				this.push(element);
			});
		}
	}

	/**
	 * 	insert a new node to SinglyLinkedList.
	 *  @param data The data inserted into a new node
	 *  @param pos The position of the new inserted node
	 *  @returns {ThisType} self reference to the SinglyLinkedList
	 *  @example
```ts
const sll = new SinglyLinkedList<number>();

ssl.insert(1, 0); // [1]
ssl.insert(2, 0); // [2, 1]
ssl.insert(3, 1); // [2, 3, 1]
```
	 */
	insert(data: T, pos: number): SinglyLinkedList<T> {
		const newNode = new SinglyLinkedListNode<T>(data);

		if (this.size < pos) throw "Index out of bounds.";
		if (this.size === 0) this.head = newNode;
		if (this.size === 0) this.tail = newNode;

		if (pos === 0) {
			newNode.next = this.head;
			this.head = newNode;
		} else if (pos === this.size) {
			this.tail!.next = newNode;
			this.tail = newNode;
		} else {
			let pntr = this.head;
			for (let i = 0; i < pos - 1; i++) {
				pntr = pntr!.next;
			}
			newNode.next = pntr!.next;
			pntr!.next = newNode;
		}

		this.size += 1;

		return this;
	}

	/**
	 *  Insert A node at the start
	 *  @param data The data inserted into a new node
	 * 	@returns {ThisType} self reference to the SinglyLinkedList
	 * @example
```ts
const sll = new SinglyLinkedList<number>();

ssl.pushStart(1); // [1]
ssl.pushStart(2); // [2, 1]
ssl.pushStart(3); // [3, 2, 1]
```
	 */
	pushStart(data: T): SinglyLinkedList<T> {
		return this.insert(data, 0);
	}

	/**
	 *  Insert A node at the end
	 *  @param data The data inserted into a new node
	 * 	@returns {ThisType} self reference to the SinglyLinkedList
	 * 	@example
	 *
```ts
			const ssl = new SinglyLinkedList<number>();
			ssl.push(1).push(2).push(3);
```
	 */
	push(data: T): SinglyLinkedList<T> {
		return this.insert(data, this.size);
	}

	/**
	 *	deletes a node at position
	 *  @param pos
	 * 	@returns {ThisType} self reference to the SinglyLinkedList
	 * @example
```ts
const sll = new SinglyLinkedList<number>();

ssl.push(1).push(2).push(3); // [1, 2, 3]

ssl.delete(0); // [2, 3];
```
	 */

	delete(pos: number): SinglyLinkedList<T> {
		if (this.size === 0) throw "Can not delete from an empty list";
		if (this.size - 1 < pos) throw "Index out of bounds.";
		if (this.size === 1) {
			this.head = null;
			this.tail = null;
			this.size = 0;
			return this;
		}

		if (pos === 0) {
			this.head = this.head!.next;
		} else if (pos === this.size - 1) {
			let pntr = this.head;
			while (pntr!.next!.next) {
				pntr = pntr!.next;
			}
			pntr!.next = null;
			this.tail = pntr;
		} else {
			let pntr = this.head;
			for (let i = 0; i < pos - 1; i++) {
				pntr = pntr!.next;
			}
			pntr!.next = pntr!.next!.next;
		}
		this.size -= 1;

		return this;
	}

	/**
	 * Remove last element of list
	 * @returns {ThisType} self reference to the SinglyLinkedList
	 * @example
```ts
const sll = new SinglyLinkedList<number>();

ssl.push(1).push(2).push(3); // [1, 2, 3]

ssl.pop(); // [1, 2];
```
	 */
	pop(): SinglyLinkedList<T> {
		return this.delete(this.size - 1);
	}

	/**
	 * Remove first element of list
	 * @example
```ts
const sll = new SinglyLinkedList<number>();

ssl.push(1).push(2).push(3); // [1, 2, 3]

ssl.popStart(); // [1, 2];
```
	 */
	popStart(): SinglyLinkedList<T> {
		return this.delete(0);
	}

	/**
	 *
	 * @returns Head of the SinglyLinkedList
	 * @example
```ts
const sll = new SinglyLinkedList<number>();

ssl.push(1).push(2).push(3); // [1, 2, 3]

ssl.getHead(); // 1
```
	 */
	getHead(): null | ISinglyLinkedListNode<T> {
		return this.head;
	}

	/**
	 *
	 * @returns Tail of the SinglyLinkedList
	 * @example
```ts
const sll = new SinglyLinkedList<number>();

ssl.push(1).push(2).push(3); // [1, 2, 3]

ssl.getTail(); // 3
```
	 */
	getTail(): null | ISinglyLinkedListNode<T> {
		return this.tail;
	}

	/**
	 *
	 * @returns size of the SinglyLinkedList
	 * @example
```ts
const sll = new SinglyLinkedList<number>();

ssl.push(1).push(2).push(3); // [1, 2, 3]

ssl.getSize(); // 3
```
	 */
	getSize(): number {
		return this.size;
	}

	/**
	 * Log the content of the SinglyLinkedList.
	 * @example
```ts
const sll = new SinglyLinkedList<number>();

ssl.push(1).push(2).push(3); // [1, 2, 3]

ssl.view(); // 1 => 2 => 3 => null
```
	 */
	view(): SinglyLinkedList<T> {
		if (this.size === 0) throw "Can not view an empty list.";
		let pntr = this.head;
		let log = "";
		while (pntr) {
			log += `${pntr.data} => `;
			pntr = pntr.next;
		}
		log += "NULL";

		console.log(log);
		return this;
	}

	/**
	 *
	 * @returns Array of SinglyLinkedList elements
	 * @example
```ts
const sll = new SinglyLinkedList<number>();

ssl.push(1).push(2).push(3); // [1, 2, 3]

ssl.toArray(); // Array([1, 2, 3])
```
	 */
	toArray(): T[] {
		let pntr = this.head;
		const array = [];
		while (pntr) {
			array.push(pntr.data);
			pntr = pntr.next;
		}

		return array;
	}
}
