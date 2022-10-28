import { Stack } from ".";

describe("Stack tests 1", () => {
	it("Viewing the stack", () => {
		const s = new Stack<number>();
		s.push(1).push(2).push(3).view();
	});
});
