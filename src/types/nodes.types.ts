export type NodeData = unknown;

export type Node<T = NodeData> = {
	data: T;
};

export interface ISinglyLinkedListNode<T = NodeData> extends Node<T> {
	next: ISinglyLinkedListNode<T> | null;
}

export interface DoublyLinkedListNode<T = NodeData> extends Node<T> {
	next: DoublyLinkedListNode<T> | null;
	prev: DoublyLinkedListNode<T> | null;
}

export interface GraphNode<T = NodeData> extends Node<T> {
	edges: GraphNode<T>[];
}

export interface BSTreeNode<T = NodeData> extends Node<T> {
	left: BSTreeNode<T> | null;
	right: BSTreeNode<T> | null;
}