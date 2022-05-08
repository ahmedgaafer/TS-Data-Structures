export interface ISinglyLinkedListNode<T> {
	data: T;
	next: ISinglyLinkedListNode<T> | null;
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
