import { type } from "os";

export type NodeData = unknown;

export type Node<T = NodeData> = {
	data: T;
};

export interface ISinglyLinkedListNode<T = NodeData> extends Node<T> {
	next: ISinglyLinkedListNode<T> | null;
}

export interface IDoublyLinkedListNode<T = NodeData> extends Node<T> {
	next: IDoublyLinkedListNode<T> | null;
	prev: IDoublyLinkedListNode<T> | null;
}

export interface GraphNode<T = NodeData> extends Node<T> {
	edges: GraphNode<T>[];
}

export interface BSTreeNode<T = NodeData> extends Node<T> {
	left: BSTreeNode<T> | null;
	right: BSTreeNode<T> | null;
}

export type GraphObject = {
	[key: string]: { [key: string]: number };
};
