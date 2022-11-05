import { NodeData } from "../types/nodes.types";
import { CMP, HeapOptions } from "../types/utility.types";
import { IHeap } from "../types/datastructures.types";

// Default Max Heap<number>
export class Heap<T extends NodeData = number> implements IHeap<T> {
	_data: T[];
	_size: number;
	_comparator: CMP<T>;

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

	push(data: T): Heap<T> {
		this._data[this._size] = data;
		this._size += 1;
		this._heapifyUp();
		return this;
	}

	pop(): Heap<T> {
		if (this._size === 0) throw "Can not remove from an empty heap";
		const item = this._data[0];
		this._data[0] = this._data[this._size - 1];
		this._size -= 1;
		this._heapifyDown();
		return this;
	}

	peak(): T {
		if (this._size === 0) throw "Can not view the peak of an empty heap";
		return this._data[0];
	}

	getSize(): number {
		return this._size;
	}

	view(): Heap<T> {
		console.log(this._data.filter((elem, idx) => idx < this._size));
		return this;
	}
}
