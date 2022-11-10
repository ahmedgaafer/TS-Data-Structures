import { IGraph } from "../types/datastructures.types";
import { GraphObject } from "../types/nodes.types";
/**
 * @class Graph
 */
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

	/**
 * Add a new vertex to the graph
 * @param vertex 
 * @returns self reference
 * @example
```ts
const g = new Graph();

g.addVertex("a").addVertex("b");	
```
 */
	addVertex(vertex: string): Graph {
		if (this._graph[vertex]) throw "Vertex already exists.";

		this._graph[vertex] = {};
		this.vertices += 1;

		return this;
	}

	/**
	 * Add edge between 2 existing vertices
	 * @param u 
	 * @param v 
	 * @param w only pass a value if the isWeighted flag is true
	 * @returns self reference
	 * @example
```ts
const g = new Graph();
g.addVertex("a").addVertex("b");
g.addEdge("a", "b");

// or 


const g = new Graph(false,  true);
g.addVertex("a").addVertex("b");
g.addEdge("a", "b", 5);
```
	 */
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

	/**
 * Remove a vertex from the graph with all of it's links with other vertices
 * @param vertex 
 * @returns self reference
 * @example
```ts
const g = new Graph();
g.addVertex("a").addVertex("b");
g.addEdge("a", "b");

g.removeVertex("a");
```
 */
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

	/**
 * Remove edge between 2 vertices if the graph is directional it will remove 1 way
 * @param u 
 * @param v 
 * @returns self reference
 * @example 
```ts
const g = new Graph();
g.addVertex("a").addVertex("b");
g.addEdge("a", "b");

g.removeEdge("a", "b")  
		
``` 
 */
	removeEdge(u: string, v: string): Graph {
		if (!this._graph[u] || !this._graph[u][v])
			throw "Can not remove a non-existent edge.";

		delete this._graph[u][v];
		if (!this.unidirectional) delete this._graph[v][u];

		return this;
	}

	/**
	 * retrieve the neighbors of a vertex
	 * @param vertex 
	 * @returns 
	 * @example
```ts
const g = new Graph();
g.addVertex("a").addVertex("b");
g.addEdge("a", "b");

g.getNeighbors("a"); // {b:1}
```
	 */
	getNeighbors(vertex: string): GraphObject[keyof GraphObject] {
		if (!this._graph[vertex]) throw "Can not get a non-existent vertex";

		return this._graph[vertex];
	}

	/**
	 * Prints a visual representation of the graph
	 * @returns 
	 * @example
```ts
const g = new Graph();
g.addVertex("a").addVertex("b");
g.addEdge("a", "b");

g.view();

// a => [b, 1] :
// b => [a, 1] :
```
	 */
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

	/**
	 * Get the current number of vertices in the graph
	 * @returns 
	 * @example
```ts
const g = new Graph();
g.addVertex("a").addVertex("b");

g.getVerticesNumbers(); //2
```
	 */
	getVerticesNumbers(): number {
		return this.vertices;
	}
}
