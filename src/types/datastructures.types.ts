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

export interface ISinglyLinkedList {
	head: ISinglyLinkedListNode<any> | null;
	tail: ISinglyLinkedListNode<any> | null;
	size: number;
	insert(data: any, pos: number): ThisType<ISinglyLinkedList>;
	pushStart(data: any): ThisType<ISinglyLinkedList>;
	push(data: any): ThisType<ISinglyLinkedList>;
	delete(data: any): ThisType<ISinglyLinkedList>;
	pop(): ThisType<ISinglyLinkedList>;
	popStart(): ThisType<ISinglyLinkedList>;
	getHead(): ISinglyLinkedListNode<any> | null;
	getTail(): ISinglyLinkedListNode<any> | null;
	getSize(): number;
	view(): ThisType<ISinglyLinkedList>;
	toArray(): Array<any>;
}
