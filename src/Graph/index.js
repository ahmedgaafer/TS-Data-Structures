const withTry = require('../HigherOrderFunctions/withTry');

function Graph(isUniDirectional = false, isWeighted= false){
    this.graph = {};
    this.vertices = 0;
    this.unidirectional = isUniDirectional;
    this.weighted = isWeighted;
}

Graph.prototype.addVertex = withTry(function(vertex){
    if(!this.graph[vertex]){
        this.graph[vertex] = {};
        this.vertices += 1;
    }
    return this;
});

Graph.prototype.addEdge = withTry(function(u, v, w=1){
    if(!this.weighted && w != 1) throw "Can not pass weight to unweigthed graph."
    if(!this.graph[u] || ! this.graph[v]) "Can not add edge between undefined edges."
    let W = 1;
    if(this.weighted) W = w;
    if(!this.unidirectional) this.graph[v][u] = W;
    
    this.graph[u][v] = W

    return this;
});

Graph.prototype.removeVertex = withTry(function(vertex){
    if(!this.graph[vertex])throw 'Can not remove a vertex that does not exist.'
    delete this.graph[vertex];
    for(const [k, v] of Object.entries(this.graph)){
        for(const [k2, v2] of Object.entries(this.graph[k])) {
            if(k2 == vertex) delete this.graph[k][k2];
        }
    }
    this.vertices -= 1;
    return this;
});

Graph.prototype.removeEdge = withTry(function(u, v){
    if(!this.graph[u] || !this.graph[u][v])throw "Can not remove a non-existant edge.";

    delete this.graph[u][v];

    return this;
});

Graph.prototype.getNeighbours = withTry(function(vertex){
    if(!this.graph[vertex]) throw "Can not get a non-existant vertex";

    return this.graph[vertex];
});

Graph.prototype.view = withTry(function(){
    let log = `Graph contains ${this.vertices} vertcies.\n\n`;
    for(const [k, v] of Object.entries(this.graph)) {
        let link = '';
        for(const [k2, v2] of Object.entries(this.graph[k]))link += `[${k2}, ${v2}] : `;
        log += `${k} => ${link} \n`
    }

    console.log(log);
    return this;
});

Graph.prototype.getVerticesNumbers = withTry(function(){
    return this.vertices;
});

module.exports = Graph;
