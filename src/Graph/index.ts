import { IGraph } from "../types/datastructures.types";
import { GraphObject } from "../types/nodes.types";

export class Graph implements IGraph {
	_graph: GraphObject;
	vertices: number;
	unidirectional: boolean;
	weighted: boolean;

	constructor(isUniDirectional = false, isWeighted = false) {
		this._graph = {};
		this.vertices = 0;
		this.unidirectional = isUniDirectional;
		this.weighted = isWeighted;
	}

	addVertex(vertex: string): Graph {
		if (!this._graph[vertex]) {
			this._graph[vertex] = {};
			this.vertices += 1;
		}
		return this;
	}

	addEdge(u: string, v: string, w: number = 1): Graph {
		if (!this.weighted && w != 1)
			throw "Can not pass weight to unweighted graph.";
		if (!this._graph[u] || !this._graph[v])
			throw "Can not add edge between undefined edges.";
		let W = 1;
		if (this.weighted) W = w;
		if (!this.unidirectional) this._graph[v][u] = W;

		this._graph[u][v] = W;
		return this;
	}

	removeVertex(vertex: string): Graph {
		if (!this._graph[vertex])
			throw "Can not remove a vertex that does not exist.";
		delete this._graph[vertex];
		for (const [k, v] of Object.entries(this._graph)) {
			for (const [k2, v2] of Object.entries(this._graph[k])) {
				if (k2 == vertex) delete this._graph[k][k2];
			}
		}
		this.vertices -= 1;
		return this;
	}

	removeEdge(u: string, v: string): Graph {
		if (!this._graph[u] || !this._graph[u][v])
			throw "Can not remove a non-existent edge.";

		delete this._graph[u][v];

		return this;
	}

	getNeighbors(vertex: string): GraphObject[keyof GraphObject] {
		if (!this._graph[vertex]) throw "Can not get a non-existent vertex";

		return this._graph[vertex];
	}

	view(): Graph {
		let log = `Graph contains ${this.vertices} vertices.\n\n`;
		for (const [k, v] of Object.entries(this._graph)) {
			let link = "";
			for (const [k2, v2] of Object.entries(this._graph[k]))
				link += `[${k2}, ${v2}] : `;
			log += `${k} => ${link} \n`;
		}

		console.log(log);
		return this;
	}

	getVerticesNumbers(): number {
		return this.vertices;
	}
}
