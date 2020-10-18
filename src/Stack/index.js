const withTry = require('../HigherOrderFunctions/withTry');

function Stack(data = []){
    this.data = [...data]   
}

/**
 *   push
 * * Adds item to the top of the stack.
 */
Stack.prototype.push = withTry(function(data){
    this.data.push(data);
    return this;

});

/**
 *   pop
 * * Remove item from the top of the stack and returns it.
 */
Stack.prototype.pop = withTry(function(){
    if(this.data.length == 0)throw "Can not remove from an empty queue."
    return this.data.pop();

});

/**
 *   peak
 * * gets the item that is in top of the stack and returns it.
 */
Stack.prototype.peak = withTry(function(){
    if(this.data.length == 0)throw "Can not view from an empty queue."
    return this.data[this.data.length - 1];

});

/**
 *   view
 * * Display the stack content
 */
Stack.prototype.view = withTry(function(){
    if(this.data.length == 0)throw "Can not view from an empty queue."
    let log = ""
    for(let i = this.data.length - 1; i >= 0 ;i--){
        log += ((i == this.data.length - 1)? "Stack Top\n": "") + `${this.data[i]}\n` + ((i > 0)? "----------\n" : "==========\nStack Base"); 
    }
    console.log(log);
    return this;

});

/**
 *   getSize
 * * returns the number of elements in the stack.
 */
Stack.prototype.getSize = withTry(function(){
    return this.array.length;
});





module.exports = Stack;