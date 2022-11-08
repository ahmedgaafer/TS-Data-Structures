import { Heap } from ".";

describe("Heap.expected", () => {
	it("Heap.constructor", () => {
		let h = new Heap<number>();
		expect(h).toBeDefined();
		h = new Heap<number>([1, 2, 3, 4], { cmp: (a, b) => a > b });

		expect(h._data[0]).toBe(1);
	});

	it("Heap.push", () => {
		const h = new Heap<number>();
		h.push(1).push(2).push(3);

		expect(h._data[0]).toBe(3);
		expect(h._data[1]).toBe(1);
		expect(h._data[2]).toBe(2);
	});

	it("Heap.pop 1", () => {
		const h = new Heap<number>();
		h.push(1).push(2).push(3).pop();

		expect(h._data[0]).toBe(2);
		expect(h._data[1]).toBe(1);

		h.pop();

		expect(h._data[0]).toBe(1);
	});
	it("Heap.pop 2", () => {
		const h = new Heap<number>();
		h.push(5).push(2).push(3).push(1).pop().pop().pop();
		expect(h._data[0]).toBe(1);
	});

	it("Heap.peak", () => {
		const h = new Heap<number>();
		const max = h.push(5).push(2).push(3).peak();
		expect(max).toBe(5);
	});

	it("Heap.getSize", () => {
		const h = new Heap<number>();
		h.push(1).push(2).push(3);

		expect(h.getSize()).toBe(3);
	});

	it("Heap.view", () => {
		const consolSpy = jest.spyOn(console, "log");
		const h = new Heap<number>();
		h.push(1).push(2).push(3).view();

		expect(consolSpy).toBeCalledTimes(1);
	});
});

describe("Heap.unexpected", () => {
	it("Heap.pop", () => {
		const h = new Heap<number>();
		expect(() => h.pop()).toThrow("Can not remove from an empty heap");
	});

	it("Heap.peak", () => {
		const h = new Heap<number>();
		expect(() => h.peak()).toThrow("Can not view the peak of an empty heap");
	});
});
