import { Graph } from ".";

describe("graph.expected", () => {
	it("graph.constructor", () => {
		const g = new Graph();
		expect(g).toBeDefined();
	});

	it("graph.addVertex", () => {
		const g = new Graph();
		g.addVertex("a").addVertex("b");

		expect("a" in g._graph).toBe(true);
		expect("b" in g._graph).toBe(true);
	});

	it("graph.addEdge.undirected-unweighted", () => {
		const g = new Graph();
		g.addVertex("a").addVertex("b");
		g.addEdge("a", "b");

		expect(g._graph["a"]).toMatchObject({ b: 1 });
		expect(g._graph["b"]).toMatchObject({ a: 1 });
	});

	it("graph.addEdge.directed-weighted", () => {
		const g = new Graph(true, true);
		g.addVertex("a").addVertex("b");
		g.addEdge("a", "b", 5);

		expect(g._graph["a"]).toMatchObject({ b: 5 });
		expect(g._graph["b"]).toMatchObject({});
	});

	it("graph.removeVertex", () => {
		const g = new Graph();
		g.addVertex("a").addVertex("b").removeVertex("a");

		expect("a" in g._graph).toBeFalsy();
	});

	it("graph.removeEdge.undirected", () => {
		const g = new Graph();
		g.addVertex("a").addVertex("b");
		g.addEdge("a", "b").removeEdge("a", "b");

		expect(g._graph["a"]["b"]).toBeUndefined();
		expect(g._graph["b"]["a"]).toBeUndefined();
	});

	it("graph.removeEdge.directed", () => {
		const g = new Graph(true);
		g.addVertex("a").addVertex("b");
		g.addEdge("a", "b").addEdge("b", "a").removeEdge("a", "b");

		expect(g._graph["a"]["b"]).toBeUndefined();
		expect(g._graph["b"]["a"]).toBe(1);
	});

	it("graph.removeVertex.withEdges", () => {
		const g = new Graph();
		g.addVertex("a")
			.addVertex("b")
			.addVertex("c")
			.addVertex("d")
			.addEdge("a", "b")
			.addEdge("a", "c")
			.addEdge("a", "d");

		g.removeVertex("a");

		expect(g._graph["a"]).toBeUndefined();
		expect(g._graph["b"]["a"]).toBeUndefined();
		expect(g._graph["c"]["a"]).toBeUndefined();
		expect(g._graph["d"]["a"]).toBeUndefined();
	});

	it("graph.getNeighbors", () => {
		const g = new Graph();
		g.addVertex("a").addVertex("b");
		g.addEdge("a", "b");

		expect(g.getNeighbors("a")).toMatchObject({ b: 1 });
	});

	it("graph.view", () => {
		const consoleSpy = jest.spyOn(console, "log");
		const g = new Graph();
		g.addVertex("a").addVertex("b");
		g.addEdge("a", "b");

		g.view();

		expect(consoleSpy).toBeCalledTimes(1);
	});

	it("graph.getVerticesNumbers", () => {
		const g = new Graph();
		let num = g.addVertex("a").addVertex("b").getVerticesNumbers();
		expect(num).toBe(2);
		num = g.addVertex("c").getVerticesNumbers();
		expect(num).toBe(3);
	});
});

describe("graph.unexpected", () => {
	it("graph.addVertex.sameVertexName", () => {
		const g = new Graph();
		g.addVertex("a");
		expect(() => g.addVertex("a")).toThrow("Vertex already exists.");
	});

	it("graph.addEdge.weight", () => {
		const g = new Graph();
		g.addVertex("a").addVertex("b");

		expect(() => g.addEdge("a", "b", 3)).toThrow(
			"Can not pass weight to unweighted graph.",
		);
	});

	it("graph.addEdge.invalid_vertex", () => {
		const g = new Graph();
		g.addVertex("a").addVertex("b");
		expect(() => g.addEdge("a", "c")).toThrow(
			"Can not add edge between undefined edges.",
		);
	});

	it("graph.removeVertex.invalid_vertex", () => {
		const g = new Graph();
		g.addVertex("a").addVertex("b");
		expect(() => g.removeVertex("c")).toThrow(
			"Can not remove a vertex that does not exist.",
		);
	});

	it("graph.removeEdge.invalid_edge", () => {
		const g = new Graph();
		g.addVertex("a").addVertex("b");

		expect(() => g.removeEdge("a", "b")).toThrow(
			"Can not remove a non-existent edge.",
		);
	});

	it("graph.getNeighbors.invalid_vertex", () => {
		const g = new Graph();
		g.addVertex("a").addVertex("b");

		expect(() => g.getNeighbors("c")).toThrow(
			"Can not get a non-existent vertex",
		);
	});
});
