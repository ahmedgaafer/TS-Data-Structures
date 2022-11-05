import { Graph } from ".";

describe("graph.expected", () => {
	it("graph.constructor", () => {});
	it("graph.addVertex", () => {});
	it("graph.addEdge", () => {});
	it("graph.removeVertex", () => {});
	it("graph.removeEdge", () => {});
	it("graph.view", () => {});
	it("graph.getVerticesNumbers", () => {});
});

describe("graph.unexpected", () => {
	it("graph.addEdge.weight", () => {});
	it("graph.addEdge.invalid_vertex", () => {});
	it("graph.removeVertex.invalid_vertex", () => {});
	it("graph.removeEdge.invalid_edge", () => {});
	it("graph.getNeighbors.invalid_vertex", () => {});
});
