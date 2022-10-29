import { Stack } from ".";

describe("Stack tests 1", () => {
	it("Constructor 1", () => {
		const s = new Stack<number>();
		expect(s).toBeDefined();
	});

	it("Constructor 2", () => {
		const s = new Stack<number>([1, 2, 3, 4]);
		expect(s).toBeDefined();
	});

	it("push", () => {
		const s = new Stack<number>();
		s.push(1).push(2).push(3);

		expect(s.data[0]).toBe(1);
	});

	it("pop", () => {
		const s = new Stack<number>();
		s.push(1).pop();
		expect(s.data.length).toBe(0);
	});

	it("Peak", () => {
		const s = new Stack<number>();
		expect(s.push(1).peak()).toBe(1);
	});

	it("Viewing the stack", () => {
		const consoleSpy = jest.spyOn(console, "log");
		const s = new Stack<number>();
		s.push(1).push(2).push(3).view();

		expect(consoleSpy).toHaveBeenCalledTimes(1);
	});

	it("getSize", () => {
		const s = new Stack<number>();
		s.push(1).push(2).push(3);

		expect(s.getSize()).toBe(3);

		s.pop().pop();

		expect(s.getSize()).toBe(1);
	});
});

describe("Stack tests 2", () => {
	it("pop from empty Stack", () => {
		const s = new Stack<number>();
		expect(() => s.pop()).toThrow("Can not remove from an empty stack.");
	});

	it("peak an empty Stack", () => {
		const s = new Stack<number>();
		expect(() => s.peak()).toThrow("Can not peak an empty stack.");
	});

	it("view an empty stack", () => {
		const s = new Stack<number>();
		expect(() => s.view()).toThrow("Can not view an empty stack.");
	});
});
