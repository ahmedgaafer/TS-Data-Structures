import { BSTreeNode, NodeData } from "../types/nodes.types";
import { BSTree } from "..//types/datastructures.types";

//#region helpers

/**
 * _search
 * @param root root of the tree
 * @param data data you want to search for in the tree
 */
function _search(
	root: BSTNode<typeof data> | null,
	data: any,
): BSTNode<typeof data> | -1 {
	if (!root) return -1;
	return data > root.data
		? _search(root.right, data)
		: data < root.data
		? _search(root.left, data)
		: root;
}

/**
 * Recursive insert help
 */
function _insert(root: BSTNode<any> | null, node: BSTNode<any>) {
	if (!root) return node;
	if (root.data > node.data) root.left = _insert(root.left, node);
	else if (root.data < node.data) root.right = _insert(root.right, node);
	return root;
}

/**
 *   _delete
 *   @param root the root of the tree
 *   @param data data you want to delete
 * * delete a node from the tree by its value.
 */
function _delete(
	root: BSTNode<typeof data> | null,
	data: any,
): BSTNode<typeof data> | null {
	if (!root) return root;
	if (root.data > data) {
		root.left = _delete(root.left, data);
		return root;
	} else if (root.data < data) {
		root.right = _delete(root.right, data);
		return root;
	} else {
		let newNode;
		if (!root.left) {
			newNode = root.right;
			root = null;
			return newNode;
		}

		if (!root.right) {
			newNode = root.left;
			root = null;
			return newNode;
		}

		newNode = _getMinNode(root.right);
		root.data = newNode?.data;
		root.right = _delete(root.right, newNode?.data);

		return root;
	}
}

/**
 *   _view
 *   @param root root of the tree
 * * Recursive view helper to get all data from the tree
 */
function _view(root: BSTNode<any> | null | undefined): any[] {
	if (!root) return [];
	let v = root.data;
	let r: any[] = _view(root.right);
	let l: any[] = _view(root.left);
	return [v, r, l];
}

/**
 *   Recursive getMaxDepth
 *   @param root root of the tree
 * * get the max depth of the tree
 */
function _getMaxDepth(root: BSTNode<any> | null): number {
	if (!root) return 0;

	const left: number = _getMaxDepth(root.left);
	const right: number = _getMaxDepth(root.right);

	return Math.max(left, right) + 1;
}

/**
 *   _getMaxNode
 *   @param root root of the tree
 * * get the max node from a tree root
 */
function _getMaxNode(root: BSTNode<any> | null): BSTNode<any> | null {
	return root?.right ? _getMaxNode(root.right) : root;
}

/**
 *   _getMinNode
 *   @param root root of the tree
 * * get the min node from a tree root
 */
function _getMinNode(root: BSTNode<any> | null): BSTNode<any> | null {
	return root?.left ? _getMinNode(root.left) : root;
}

//#endregion

class BSTNode<T> implements BSTreeNode<T> {
	data: T;
	left: BSTNode<T> | null;
	right: BSTNode<T> | null;

	constructor(data: any) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

export class BST<T extends NodeData> implements BSTree<T> {
	root: BSTreeNode<any> | null;
	size: number;

	constructor(data: any[]) {
		this.root = null;
		this.size = 0;

		if (data.length > 0) {
			data.forEach((element) => {
				this.insert(element);
			});
		}
	}

	/**
	 * insert a node into the tree
	 * @param data  data you want to insert into the tree
	 * @returns a self reference to the BST
	 */
	insert(data: T): BST<T> {
		const newNode: BSTreeNode<typeof data> = new BSTNode(data);
		this.root = this.size === 0 ? newNode : _insert(this.root, newNode);
		this.size += 1;

		return this;
	}

	/**
	 * Get the maximum depth of the tree
	 * @returns the maximum depth of the tree
	 */
	getMaxDepth(): number {
		if (this.size === 0) throw "Can not get depth of an empty tree";
		if (this.size === 1) return 0;

		return _getMaxDepth(this.root) - 1;
	}

	/**
	 * Delete a node from the tree
	 * @param data data you want to delete from the tree
	 * @returns a self reference to the BST
	 */
	delete(data: T): BST<T> {
		if (this.size === 0) throw "Can not delete from an empty tree";

		this.root = _delete(this.root, data);
		this.size -= 1;
		return this;
	}

	/**
	 * Logs the tree to the console
	 * @returns a self reference to the BST
	 */
	view(): BST<T> {
		if (this.size === 0) throw "Can not display an empty tree";
		const maxDepth = this.getMaxDepth();
		console.log(
			`Tree max depth : ${maxDepth}\nTree Items: ${this.size}\nTree:\n`,
		);
		const root: any = this.root?.data;
		const left = `${_view(this.root?.left)}`;
		const right = `${_view(this.root?.right)}`;
		const leftPush = (len: number) => " ".repeat(left.length + len);
		let log = ` ${leftPush(3)} ${root}\n ${leftPush(3)}/ \\\n${leftPush(
			3,
		)}/   \\\n${leftPush(2)}/     \\\n{${left}}       {${right}}`;
		console.log(log);
		return this;
	}

	/**
	 * Get the node with the maximum value
	 * @returns  The node with the maximum value in the tree
	 */
	getMaxNode(): BSTreeNode<T> | null {
		if (this.size === 0) throw "Tree is empty";

		return _getMaxNode(this.root);
	}

	/**
	 * Get the node with the minimum value
	 * @returns  The node with the minimum value in the tree
	 */
	getMinNode(): BSTreeNode<T> | null {
		if (this.size === 0) throw "Tree is empty";
		return _getMinNode(this.root);
	}

	/**
	 * Search for a node with the given value
	 * @param data data you want to search for
	 * @returns the node with the data or -1 if not found
	 */
	search(data: T): BSTreeNode<T> | -1 {
		return _search(this.root, data);
	}
}
