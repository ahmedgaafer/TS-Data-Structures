import { Queue } from ".";

describe("Queue", () => {
	describe("Queue expected cases", () => {
		it("queue.constructor", () => {
			const q = new Queue([1, 2, 3]);
			expect(q).toBeDefined();
			expect(q._data[0]).toBe(1);
			expect(q._data[2]).toBe(3);
		});

		it("queue.enqueue", () => {
			const q = new Queue();
			q.enqueue(1).enqueue(2).enqueue(3);
			expect(q._data[0]).toBe(1);
			expect(q._data[2]).toBe(3);
		});

		it("queue.dequeue", () => {
			const q = new Queue();
			q.enqueue(1).enqueue(2).enqueue(3).dequeue();
			expect(q._data[0]).toBe(2);
			expect(q._data[1]).toBe(3);
			expect(q._data[2]).toBe(undefined);
		});

		it("queue.first", () => {
			const q = new Queue();
			q.enqueue(1).enqueue(2).enqueue(3);

			expect(q.first()).toBe(1);
		});

		it("queue.last", () => {
			const q = new Queue();
			q.enqueue(1).enqueue(2).enqueue(3);

			expect(q.last()).toBe(3);
		});

		it("queue.view", () => {
			const consoleSpy = jest.spyOn(console, "log");
			const q = new Queue();
			q.enqueue(1).enqueue(2).enqueue(3).view();

			expect(consoleSpy).toBeCalledTimes(1);
		});

		it("queue.getSize", () => {
			const q = new Queue();
			q.enqueue(1).enqueue(2).enqueue(3);
			expect(q.getSize()).toBe(3);
			q.dequeue().dequeue().dequeue();
			expect(q.getSize()).toBe(0);
		});
	});

	describe("Queue un-expected cases", () => {
		it("queue.dequeue", () => {
			const q = new Queue();
			expect(() => q.dequeue()).toThrow("Can not remove from an empty queue.");
		});

		it("queue.first", () => {
			const q = new Queue();
			expect(() => q.first()).toThrow("Can not get first of an empty queue.");
		});

		it("queue.last", () => {
			const q = new Queue();
			expect(() => q.last()).toThrow("Can not get last of an empty queue.");
		});

		it("queue.view", () => {
			const q = new Queue();
			expect(() => q.view()).toThrow("Can not view an empty queue.");
		});
	});
});
