import { SinglyLinkedList } from "./index";

describe("SinglyLinkedList tests 1", () => {
	it("Constructor empty", () => {
		const list = new SinglyLinkedList<number>();
		expect(list).toBeDefined();
	});

	it("Constructor with args", () => {
		const list = new SinglyLinkedList<number>([1, 2, 3, 4]);
		expect(list.getSize()).toBe(4);
	});

	it("Insert first position", () => {
		const list = new SinglyLinkedList<string>();
		list.insert("1", 0);
		expect(list.getHead()?.data).toBe("1");
		expect(list.getTail()?.data).toBe("1");
	});

	it("Insert at tail", () => {
		const list = new SinglyLinkedList<number>([1]);
		list.insert(5, 0);

		expect(list.getHead()?.data).toBe(5);
		expect(list.getTail()?.data).toBe(1);

		list.insert(9, 2);

		expect(list.getTail()?.data).toBe(9);
	});

	it("Insert random position", () => {
		const list = new SinglyLinkedList<number>([1]);
		list.insert(5, 0).insert(6, 1).insert(6, 2);

		expect(list.getHead()?.data).toBe(5);
		expect(list.getTail()?.data).toBe(1);

		list.insert(9, 1);
		expect(list.getHead()?.data).toBe(5);
		expect(list.getTail()?.data).toBe(1);
		expect(list.getSize()).toBe(5);
		expect(list.getHead()?.next?.data).toBe(9);
	});

	it("Push random values and chaining", () => {
		const list = new SinglyLinkedList<number>();

		list.push(1).push(2).push(3);

		expect(list.getHead()?.data).toBe(1);
		expect(list.getTail()?.data).toBe(3);
		expect(list.getSize()).toBe(3);
	});

	it("pushStart and chaining", () => {
		const list = new SinglyLinkedList<number>();

		list.pushStart(1).pushStart(2).pushStart(3);

		expect(list.getHead()?.data).toBe(3);
		expect(list.getTail()?.data).toBe(1);
		expect(list.getSize()).toBe(3);
	});

	it("delete from the list start, end, middle & 1 element", () => {
		const list = new SinglyLinkedList<number>();

		list.push(1).push(2).push(3).push(4).push(5).push(6);

		list.delete(0);
		expect(list.getHead()?.data).toBe(2);
		expect(list.getTail()?.data).toBe(6);
		expect(list.getSize()).toBe(5);

		list.delete(4);

		expect(list.getHead()?.data).toBe(2);
		expect(list.getTail()?.data).toBe(5);
		expect(list.getSize()).toBe(4);

		list.delete(2);
		expect(list.getHead()?.data).toBe(2);
		expect(list.getTail()?.data).toBe(5);
		expect(list.getSize()).toBe(3);

		list.delete(0).delete(1);
		expect(list.getHead()?.data).toBe(3);
		expect(list.getTail()?.data).toBe(3);
		expect(list.getSize()).toBe(1);

		list.delete(0);
		expect(list.getHead()).toBe(null);
		expect(list.getTail()).toBe(null);
		expect(list.getSize()).toBe(0);
	});

	it("pop from the list and chaining", () => {
		const list = new SinglyLinkedList<number>([1, 2, 3, 4]);

		list.pop();

		expect(list.getHead()?.data).toBe(1);
		expect(list.getTail()?.data).toBe(3);
		expect(list.getSize()).toBe(3);

		list.pop().pop();

		expect(list.getHead()?.data).toBe(1);
		expect(list.getTail()?.data).toBe(1);
		expect(list.getSize()).toBe(1);

		list.pop();
		expect(list.getHead()).toBe(null);
		expect(list.getTail()).toBe(null);
		expect(list.getSize()).toBe(0);
	});

	it("popStart from the list and chaining", () => {
		const list = new SinglyLinkedList<number>([1, 2, 3, 4]);

		list.popStart();

		expect(list.getHead()?.data).toBe(2);
		expect(list.getTail()?.data).toBe(4);
		expect(list.getSize()).toBe(3);

		list.popStart().popStart();

		expect(list.getHead()?.data).toBe(4);
		expect(list.getTail()?.data).toBe(4);
		expect(list.getSize()).toBe(1);

		list.popStart();
		expect(list.getHead()).toBe(null);
		expect(list.getTail()).toBe(null);
		expect(list.getSize()).toBe(0);
	});

	it("view list", () => {
		const list = new SinglyLinkedList<number>([1, 2, 3, 4]);
		const consoleSpy = jest.spyOn(console, "log");
		list.view();
		expect(consoleSpy).toHaveBeenCalledTimes(1);
	});

	it("toArray", () => {
		const list = new SinglyLinkedList<number>([1, 2, 3, 4]);
		const arr = list.toArray();

		expect(arr.length).toBe(4);
		expect(arr[0]).toBe(1);
		expect(arr[3]).toBe(4);
	});
});

describe("SinglyLinkedList tests 2", () => {
	it("Insert out of bounds index", () => {
		const list = new SinglyLinkedList<number>([1]);
		expect(() => list.insert(5, 5)).toThrowError("Index out of bounds.");
	});

	it("Delete Can't delete from an empty list", () => {
		const list = new SinglyLinkedList<number>([]);
		expect(() => list.delete(0)).toThrowError(
			"Can not delete from an empty list",
		);
	});

	it("Delete index out of bounds index", () => {
		const list = new SinglyLinkedList<number>([11]);
		expect(() => list.delete(33)).toThrowError("Index out of bounds.");
	});

	it("view empty list", () => {
		const list = new SinglyLinkedList<number>();

		expect(() => list.view()).toThrowError("Can not view an empty list.");
	});
});
