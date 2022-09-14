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

export interface ISinglyLinkedList<T> {
	head: ISinglyLinkedListNode<T> | null;
	tail: ISinglyLinkedListNode<T> | null;
	size: number;
	insert(data: T, pos: number): ThisType<ISinglyLinkedList<T>>;
	pushStart(data: T): ThisType<ISinglyLinkedList<T>>;
	push(data: T): ThisType<ISinglyLinkedList<T>>;
	delete(data: T): ThisType<ISinglyLinkedList<T>>;
	pop(): ThisType<ISinglyLinkedList<T>>;
	popStart(): ThisType<ISinglyLinkedList<T>>;
	getHead(): ISinglyLinkedListNode<T> | null;
	getTail(): ISinglyLinkedListNode<T> | null;
	getSize(): number;
	view(): ThisType<ISinglyLinkedList<T>>;
	toArray(): Array<T>;
}
