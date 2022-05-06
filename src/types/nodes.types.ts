export interface SinglyLinkedListNode<T> {
	data: T;
	next: SinglyLinkedListNode<T> | null;
}

export interface DoublyLinkedListNode<T> {
	data: T;
	next: DoublyLinkedListNode<T> | null;
	prev: DoublyLinkedListNode<T> | null;
}

export interface GraphNode<T> {
	data: T;
	edges: GraphNode<T>[];
}

export interface BSTreeNode<T> {
	data: T | null;
	left: BSTreeNode<T> | null;
	right: BSTreeNode<T> | null;
}
