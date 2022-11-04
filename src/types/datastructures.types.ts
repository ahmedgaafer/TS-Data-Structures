import { BSTreeNode, IDoublyLinkedListNode, ISinglyLinkedListNode, NodeData } from "./nodes.types";

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

export interface ISinglyLinkedList<T> {
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
