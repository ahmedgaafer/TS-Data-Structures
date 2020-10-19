const withTry = require('../HigherOrderFunctions/withTry');

function Graph(isUniDirectional = false, isWeighted= false){
    this.graph = {};
    this.vertcies = 0;
}

module.exports = Graph;
