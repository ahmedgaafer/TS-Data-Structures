import { SinglyLinkedList } from "./index";

describe("SinglyLinkedList tests 1", () => {
	it("Constructor", () => {
		const list = new SinglyLinkedList<number>([]);
		expect(list).toBeDefined();
	});
});
