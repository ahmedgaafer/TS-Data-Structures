const withTry = require('../HigherOrderFunctions/withTry');

function Graph(isUniDirectional = false, isWeighted= false){
    this.graph = {};
    this.vertcies = 0;
    this.unidirectional = isUniDirectional;
    this.weighted = isWeighted;
}

Graph.prototype.foo = withTry(function(){});
Graph.prototype.foo = withTry(function(){});
Graph.prototype.foo = withTry(function(){});
Graph.prototype.foo = withTry(function(){});

module.exports = Graph;
