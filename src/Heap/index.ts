import { NodeData } from "../types/nodes.types";
import { CMP, HeapOptions } from "../types/utility.types";
import { IHeap } from "../types/datastructures.types";

// Default Max Heap<number>

/**
 * @class Heap
 *
 */
export class Heap<T extends NodeData = number> implements IHeap<T> {
	_data: T[];
	_size: number;
	_comparator: CMP<T>;

	/**
	 * 
	 * @param data Array of elements to push into the heap
	 * @param options Heap options
	 * @example 
```ts

const heapOptions = {
	cmp: (a, b) => a < b // max heap comparator "Default"
}

// You can remove type specification and it will default to number
const h = new Heap([], heapOptions);
```
	 */
	constructor(data: T[] = [], options?: HeapOptions<T>) {
		this._data = data;
		this._size = 0;
		this._comparator = options?.cmp || ((a, b) => a < b);

		data.forEach((element) => {
			this.push(element);
		});
	}

	_getLeftChildIndex(parentIndex: number): number {
		return 2 * parentIndex + 1;
	}

	_getRightChildIndex(parentIndex: number): number {
		return 2 * parentIndex + 2;
	}

	_getParentIndex(childIndex: number): number {
		return Math.floor((childIndex - 1) / 2);
	}

	_hasLeftChild(index: number): boolean {
		return this._getLeftChildIndex(index) < this._size;
	}

	_hasRightChild(index: number): boolean {
		return this._getRightChildIndex(index) < this._size;
	}

	_hasParent(index: number): boolean {
		return this._getParentIndex(index) >= 0;
	}

	_leftChild(index: number): T {
		return this._data[this._getLeftChildIndex(index)];
	}

	_rightChild(index: number): T {
		return this._data[this._getRightChildIndex(index)];
	}

	_parent(index: number): T {
		return this._data[this._getParentIndex(index)];
	}

	_swap(i: number, j: number): void {
		const tmp = this._data[i];
		this._data[i] = this._data[j];
		this._data[j] = tmp;
	}

	_heapifyUp(): void {
		let index = this._size - 1;
		while (
			this._hasParent(index) &&
			this._comparator(this._parent(index), this._data[index])
		) {
			this._swap(this._getParentIndex(index), index);
			index = this._getParentIndex(index);
		}
	}

	_heapifyDown(): void {
		let index = 0;
		while (this._hasLeftChild(index)) {
			let childIndex = this._getLeftChildIndex(index);
			const lChild = this._leftChild(index);
			const rChild = this._rightChild(index);
			if (this._hasRightChild(index) && this._comparator(lChild, rChild)) {
				childIndex = this._getRightChildIndex(index);
			}

			if (this._comparator(this._data[childIndex], this._data[index])) {
				break;
			} else {
				this._swap(index, childIndex);
			}
			index = childIndex;
		}
	}

	/**
 * Push data into the heap
 * @param data 
 * @returns self reference
 * @example
```ts
const h = Heap();
h.push(1).push(2).push(3);

```
 */
	push(data: T): Heap<T> {
		this._data[this._size] = data;
		this._size += 1;
		this._heapifyUp();
		return this;
	}

	/**
	 * pop the top of the heap
	 * @returns self reference
	 * @example
```ts
const h = Heap();
h.push(1).push(2).push(3).pop();
```
	 */
	pop(): Heap<T> {
		if (this._size === 0) throw "Can not remove from an empty heap";
		const item = this._data[0];
		this._data[0] = this._data[this._size - 1];
		this._size -= 1;
		this._heapifyDown();
		return this;
	}

	/**
	 * Retrieve the top element in the heap
	 * @returns 
	 * @example
	 * 
```ts
const h = Heap();
const peak = h.push(1).push(2).push(3).peak(); // 3
```
	 */
	peak(): T {
		if (this._size === 0) throw "Can not view the peak of an empty heap";
		return this._data[0];
	}

	/**
 * Get the current size of the heap
 * @returns 
 * @example
```ts
const h = Heap();
const size = h.push(1).push(2).push(5).size(); // 3
```
 */
	getSize(): number {
		return this._size;
	}

	/**
 * View the heap
 * @returns 
 * @example
```ts
const h = Heap();
h.push(1).push(2).push(5).view(); //[ 5 , 2 , 1 ]
```
 */
	view(): Heap<T> {
		console.log(this._data);
		return this;
	}
}
