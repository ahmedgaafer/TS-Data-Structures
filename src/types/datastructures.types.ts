import { BSTreeNode, ISinglyLinkedListNode, NodeData } from "./nodes.types";

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

export interface IStack<T extends NodeData> {
	data: T[];
	push(data: T): ThisType<IStack<T>>;
	pop(): ThisType<IStack<T>>;
	peak(): T;
	view(): ThisType<IStack<T>>;
	getSize(): number;
}
