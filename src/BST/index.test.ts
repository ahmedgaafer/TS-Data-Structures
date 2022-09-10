import { BSTreeNode } from "../types/nodes.types";
import { BST } from "./index";

describe("Binary Search Tree tests 1", () => {
	const tree = new BST<number>([]);
	it("should create a new tree", () => {
		expect(tree).toBeDefined();
	});

	it("should insert a new node", () => {
		tree.insert(1);
		expect(tree.root).toBeDefined();
		expect(tree?.root?.data).toBe(1);
	});

	it("should delete a node", () => {
		tree.delete(1);
		expect(tree.size).toBe(0);
	});

	it("should get the min node", () => {
		tree.insert(1);
		tree.insert(2);
		tree.insert(3);
		expect(tree.getMinNode()?.data).toBe(1);
	});
	it("should get the max node", () => {
		expect(tree.getMaxNode()?.data).toBe(3);
	});

	it("should search for a node", () => {
		//@ts-ignore
		expect(tree.search(2).data).toBe(2);
	});

	it("should search for a node", () => {
		expect(tree.search(20)).toBe(-1);
	});
});

describe("Binary Search Tree tests 2", () => {
	const tree = new BST<number>([5, 3, 7, 2, 4, 6, 8, 1, 9, 10]);
	it("should create a new tree", () => {
		expect(tree).toBeDefined();
	});

	it("size should be 10", () => {
		expect(tree.size).toBe(10);
	});

	it("search force branch searches", () => {
		expect((tree.search(1) as BSTreeNode).data).toBe(1);
		//@ts-ignore
		expect(tree.search(10).data).toBe(10);
		//@ts-ignore
		expect(tree.search(5).data).toBe(5);
	});

	it("delete force branches 1", () => {
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
		const consoleSpy = jest.spyOn(console, "log");
		tree.view();
		expect(consoleSpy).toHaveBeenCalledTimes(2);
	});

	it("Flush the tree", () => {
		tree.delete(2);
		tree.delete(3);
		tree.delete(4);
		tree.delete(6);
		tree.delete(7);
		tree.delete(8);
		tree.delete(9);
		expect(tree.size).toBe(0);
	});
});

describe("Binary Search Tree tests 3", () => {
	const tree = new BST([]);

	it("delete from empty tree", () => {
		expect(() => tree.delete(1)).toThrowError(
			"Can not delete from an empty tree",
		);
	});

	it("view from empty tree", () => {
		expect(() => tree.view()).toThrowError("Can not display an empty tree");
	});

	it("getMaxNode from empty tree", () => {
		expect(() => tree.getMaxNode()).toThrowError("Tree is empty");
	});

	it("getMinNode from empty tree", () => {
		expect(() => tree.getMinNode()).toThrowError("Tree is empty");
	});

	it("getMaxDepth from empty tree", () => {
		expect(() => tree.getMaxDepth()).toThrowError(
			"Can not get depth of an empty tree",
		);
	});

	it("getMaxDepth from root tree", () => {
		tree.insert(5);
		expect(tree.getMaxDepth()).toBe(0);
	});

	it("delete when no right branch exists", () => {
		tree.insert(3);
		tree.insert(2);
		tree.insert(1);

		tree.delete(5);
		expect(tree.size).toBe(3);
		expect(tree.search(5)).toBe(-1);
		expect(tree.search(3)).not.toBe(-1);
	});
});
