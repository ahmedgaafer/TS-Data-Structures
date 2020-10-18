const withTry = require('../HigherOrderFunctions/withTry');

function Queue(data = []){
    this.data = [...data];   
}

/**
 *   enqueue
 *   @param data The Data that you want to add.
 * * Adds data to the end of the queue
 */
Queue.prototype.enqueue = withTry(function(data){
    this.data.push(data);
    return this;
});

/**
 *   dequeue
 * * Removes data from the start of the queue and returns it.
 */
Queue.prototype.dequeue = withTry(function(){
    if(this.data.length == 0)throw "Can not remove from an empty queue."
    return this.data.shift();
});

/**
 *   peak
 * * View the element at the start of the queue without deleting it.
 */
Queue.prototype.peak = withTry(function(){
    if(this.data.length == 0)throw "Can not view an empty queue."
    return this.data[0];
})

/**
 *   view
 * * Displays the queue
 */
Queue.prototype.view = withTry(function(){
    if(this.data.length == 0)throw "Can not view an empty queue."

    let log = "Start <--- ";

    this.data.forEach(element => {
        log += ` ${element} <---`;
    });
    log += ' End';
    console.log(log);
    return this;
});

/**
 *   getSize
 * * Return the number of elements in queue.
 */
Queue.prototype.getSize = withTry(function(){});

module.exports = Queue;

