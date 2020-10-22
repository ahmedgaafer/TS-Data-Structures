const Graph = require('./index');

const g = new Graph(false, true);

g.addVertex(1);
g.addVertex(2);
g.addVertex(3);
g.addVertex(4);

g.addEdge(1,2, 5);
g.addEdge(1,3);
g.addEdge(2,3);
g.addEdge(3,4);

g.removeEdge(1,5)

g.view();

