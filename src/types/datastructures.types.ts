import { BSTreeNode } from "./nodes.types";

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
