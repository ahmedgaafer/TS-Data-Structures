import {
	BSTreeNode,
	GraphObject,
	IDoublyLinkedListNode,
	ISinglyLinkedListNode,
	NodeData,
} from "./nodes.types";

import { CMP } from "./utility.types";

export interface BSTree<T extends NodeData> {
	root: BSTreeNode<T> | null;
	size: number;
	insert(data: T): ThisType<BSTree<T>>;
	delete(data: T): ThisType<BSTree<T>>;
	search(data: T): BSTreeNode<any> | number;
	getMaxDepth(): number;
	view(): ThisType<BSTree<T>>;
	getMaxNode(): BSTreeNode<T> | null;
	getMinNode(): BSTreeNode<T> | null;
}

export interface ISinglyLinkedList<T extends NodeData> {
	head: ISinglyLinkedListNode<T> | null;
	tail: ISinglyLinkedListNode<T> | null;
	size: number;
	insert(data: T, pos: number): ThisType<ISinglyLinkedList<T>>;
	pushStart(data: T): ThisType<ISinglyLinkedList<T>>;
	push(data: T): ThisType<ISinglyLinkedList<T>>;
	delete(pos: number): ThisType<ISinglyLinkedList<T>>;
	pop(): ThisType<ISinglyLinkedList<T>>;
	popStart(): ThisType<ISinglyLinkedList<T>>;
	getHead(): ISinglyLinkedListNode<T> | null;
	getTail(): ISinglyLinkedListNode<T> | null;
	getSize(): number;
	view(): ThisType<ISinglyLinkedList<T>>;
	toArray(): Array<T>;
}

export interface IDoublyLinkedList<T> {
	head: IDoublyLinkedListNode<T> | null;
	tail: IDoublyLinkedListNode<T> | null;
	size: number;
	insert: (data: T, pos: number) => ThisType<IDoublyLinkedList<T>>;
	pushStart: (data: T) => ThisType<IDoublyLinkedList<T>>;
	push: (data: T) => ThisType<IDoublyLinkedList<T>>;
	delete: (pos: number) => ThisType<IDoublyLinkedList<T>>;
	pop: () => ThisType<IDoublyLinkedList<T>>;
	popStart: () => ThisType<IDoublyLinkedList<T>>;
	getHead: () => IDoublyLinkedListNode<T> | null;
	getTail: () => IDoublyLinkedListNode<T> | null;
	getSize: () => number;
	view: () => ThisType<IDoublyLinkedList<T>>;
	toArray: () => Array<T>;
}

export interface IStack<T extends NodeData> {
	data: T[];
	push(data: T): ThisType<IStack<T>>;
	pop(): ThisType<IStack<T>>;
	peak(): T;
	view(): ThisType<IStack<T>>;
	getSize(): number;
}

export interface IQueue<T extends NodeData> {
	_data: T[];
	enqueue(data: T): ThisType<IQueue<T>>;
	dequeue(): ThisType<IQueue<T>>;
	first(): T;
	last(): T;
	view(): ThisType<IQueue<T>>;
	getSize(): number;
}

export interface IGraph {
	_graph: GraphObject;
	vertices: number;
	unidirectional: boolean;
	weighted: boolean;

	addVertex(vertex: string): ThisType<IGraph>;
	addEdge(u: string, v: string, w: number): ThisType<IGraph>;
	removeVertex(vertex: string): ThisType<IGraph>;
	removeEdge(u: string, v: string): ThisType<IGraph>;
	getNeighbors(vertex: string): GraphObject[keyof GraphObject];
	view(): ThisType<IGraph>;
	getVerticesNumbers(): number;
}
export interface IHeap<T extends NodeData> {
	_data: T[];
	_size: number;
	_comparator: CMP<T>;
	_getLeftChildIndex(index: number): number;
	_getRightChildIndex(index: number): number;
	_getParentIndex(index: number): number;
	_hasLeftChild(index: number): boolean;
	_hasRightChild(index: number): boolean;
	_hasParent(index: number): boolean;
	_leftChild(index: number): T;
	_rightChild(index: number): T;
	_parent(index: number): T;
	_swap(i: number, j: number): void;
	_heapifyUp(): void;
	_heapifyDown(): void;
	push(data: T): ThisType<IHeap<T>>;
	pop(): ThisType<IHeap<T>>;
	peak(): T;
	getSize(): number;
	view(): ThisType<IHeap<T>>;
}
