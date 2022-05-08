import { BSTreeNode, ISinglyLinkedListNode } from "./nodes.types";

export interface BSTree {
	root: BSTreeNode<any> | null;
	size: number;
	insert(data: any): ThisType<BSTree>;
	delete(data: any): ThisType<BSTree>;
	search(data: any): BSTreeNode<any> | number;
	getMaxDepth(): number;
	view(): ThisType<BSTree>;
	getMaxNode(): BSTreeNode<any> | null;
	getMinNode(): BSTreeNode<any> | null;
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
