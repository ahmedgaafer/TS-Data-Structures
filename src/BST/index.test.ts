import { BSTreeNode } from "../types/nodes.types";
import { BST } from "./index";

describe("Binary Search Tree tests 1", () => {
	it("should create a new tree", () => {
		const tree: BST<number> = new BST<number>([]);

		tree.insert(1);
		expect(tree).toBeDefined();
		expect(tree).toBeInstanceOf(BST);
		expect(typeof tree.root?.data).toBe("number");
	});

	it("should insert a new node", () => {
		const tree: BST<number> = new BST<number>([]);

		tree.insert(1);
		expect(tree.root).toBeDefined();
		expect(tree?.root?.data).toBe(1);
	});

	it("should delete a node", () => {
		const tree: BST<number> = new BST<number>([]);

		tree.insert(1);
		tree.delete(1);
		expect(tree.size).toBe(0);
	});

	it("should get the min node", () => {
		const tree: BST<number> = new BST<number>([]);

		tree.insert(1);
		tree.insert(2);
		tree.insert(3);
		expect(tree.getMinNode()?.data).toBe(1);
	});
	it("should throw an error", () => {
		const tree: BST<number> = new BST<number>([]);

		expect(() => tree.getMaxNode()).toThrowError("Tree is empty");
	});

	it("should return maxNode", () => {
		const tree: BST<number> = new BST<number>([]);
		tree.insert(1);
		tree.insert(2);
		tree.insert(3);

		expect((tree.getMaxNode() as BSTreeNode<number>).data).toBe(3);
	});

	it("should search for a node", () => {
		const tree: BST<number> = new BST<number>([]);
		tree.insert(1);
		tree.insert(2);
		tree.insert(3);

		expect((tree.search(2) as BSTreeNode<number>).data).toBe(2);
	});

	it("should search for a node", () => {
		const tree: BST<number> = new BST<number>([]);
		expect(tree.search(20)).toBe(-1);
	});
});

describe("Binary Search Tree tests 2", () => {
	it("should create a new tree", () => {
		const tree: BST<number> = new BST<number>([5, 3, 7, 2, 4, 6, 8, 1, 9, 10]);

		expect(tree).toBeDefined();
	});

	it("size should be 10", () => {
		const tree: BST<number> = new BST<number>([5, 3, 7, 2, 4, 6, 8, 1, 9, 10]);

		expect(tree.size).toBe(10);
	});

	it("search force branch searches", () => {
		const tree: BST<number> = new BST<number>([5, 3, 7, 2, 4, 6, 8, 1, 9, 10]);

		expect((tree.search(1) as BSTreeNode).data).toBe(1);

		expect((tree.search(10) as BSTreeNode<number>).data).toBe(10);

		expect((tree.search(5) as BSTreeNode<number>).data).toBe(5);
	});

	it("delete force branches 1", () => {
		const tree: BST<number> = new BST<number>([5, 3, 7, 2, 4, 6, 8, 1, 9, 10]);

		tree.delete(5);
		expect(tree.size).toBe(9);
		expect(tree.search(5)).toBe(-1);
		expect(tree.search(1)).not.toBe(-1);

		tree.delete(10);
		expect(tree.size).toBe(8);
		expect(tree.search(10)).toBe(-1);
		expect(tree.search(1)).not.toBe(-1);

		tree.delete(1);
		expect(tree.size).toBe(7);
		expect(tree.search(1)).toBe(-1);
		expect(tree.search(3)).not.toBe(-1);
	});

	it("viewing the tree", () => {
		const tree: BST<number> = new BST<number>([5, 3, 7, 2, 4, 6, 8, 1, 9, 10]);

		const consoleSpy = jest.spyOn(console, "log");
		tree.view();
		expect(consoleSpy).toHaveBeenCalledTimes(2);
	});

	it("Flush the tree", () => {
		const tree: BST<number> = new BST<number>([5, 3, 7, 2, 4, 6, 8, 1, 9, 10]);

		tree.delete(1);
		tree.delete(2);
		tree.delete(3);
		tree.delete(4);
		tree.delete(5);
		tree.delete(6);
		tree.delete(7);
		tree.delete(8);
		tree.delete(9);
		tree.delete(10);
		expect(tree.size).toBe(0);
	});
});

describe("Binary Search Tree tests 3", () => {
	it("delete from empty tree", () => {
		const tree: BST<number> = new BST<number>([]);

		expect(() => tree.delete(1)).toThrowError(
			"Can not delete from an empty tree",
		);
	});

	it("view from empty tree", () => {
		const tree: BST<number> = new BST<number>([]);

		expect(() => tree.view()).toThrowError("Can not display an empty tree");
	});

	it("getMaxNode from empty tree", () => {
		const tree: BST<number> = new BST<number>([]);

		expect(() => tree.getMaxNode()).toThrowError("Tree is empty");
	});

	it("getMinNode from empty tree", () => {
		const tree: BST<number> = new BST<number>([]);

		expect(() => tree.getMinNode()).toThrowError("Tree is empty");
	});

	it("getMaxDepth from empty tree", () => {
		const tree: BST<number> = new BST<number>([]);

		expect(() => tree.getMaxDepth()).toThrowError(
			"Can not get depth of an empty tree",
		);
	});

	it("getMaxDepth from root tree", () => {
		const tree: BST<number> = new BST<number>([]);

		tree.insert(5);
		expect(tree.getMaxDepth()).toBe(0);
	});

	it("delete when no right branch exists", () => {
		const tree: BST<number> = new BST<number>([]);

		tree.insert(3);
		tree.insert(2);
		tree.insert(1);
		tree.insert(5);

		tree.delete(5);
		expect(tree.size).toBe(3);
		expect(tree.search(5)).toBe(-1);
		expect(tree.search(3)).not.toBe(-1);
	});

	it("delete when no left branch exists", () => {
		const tree: BST<number> = new BST<number>([]);

		tree.insert(4);
		tree.insert(3);
		tree.insert(2);

		tree.delete(4);
		expect(tree.size).toBe(2);
		expect(tree.search(4)).toBe(-1);
		expect(tree.search(3)).not.toBe(-1);
	});
});
