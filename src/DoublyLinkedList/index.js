const withTry = require('../HigherOrderFunctions/withTry');

function DoublyLinkedListNode(data){
    this.data = data;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList(data = []){
    this.head = null;
    this.tail = null;
    this.size = 0;

    if(data.length > 0){

        data.forEach(element => {
            this.push(element);
        });
    }

}


/**
*   insert
*   @param data The data inserted into a new node
*   @param pos The position of the new inserted node
* * insert a new node to linked list.
*/
DoublyLinkedList.prototype.insert = withTry(function ( data, pos){
    
    const newNode = new DoublyLinkedListNode(data);

    if(this.size === 0) this.head = newNode;
    if(this.size < pos) throw "Index out of bounds.";
    if(this.size === 0) {
        this.tail = newNode;
    }

    if(pos+1 === 0){
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        
        
    }
    else if(pos === this.size - 1){
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
    else{
        let pntr = this.head;
        for(let i = 0 ; i < pos-1; i++){
            pntr = pntr.next
        }
        newNode.next = pntr.next;
        newNode.prev = pntr;
        newNode.next.prev = newNode;
        newNode.prev.next = newNode;
    }

    this.size += 1;

    return this;
});
/**
 * push_start
 * @param data The data inserted into a new node
 * * Insert A node at the start
 */
DoublyLinkedList.prototype.pushStart = withTry(function(data){
    return this.insert(data, -1);
});

/**
 * push
 * @param data The data inserted into a new node
 * * Insert A node at the end
 */
DoublyLinkedList.prototype.push = withTry(function(data){
    return this.insert(data, this.size - 1);
});

/**
 * delete
 * @param pos
 * * deletes a node at position
 */
DoublyLinkedList.prototype.delete = withTry(function(pos){
    if(this.size === 0) throw "Can not delete from an empty list"
    if(this.size -1 < pos) throw "Index out of bounds.";
    if(this.size === 1) {this.head = null; this.tail = null;};

    if(pos === 0){
        this.head = this.head.next;
        this.head.prev = null;
    }
    else if(pos === this.size - 1){
        let newTail = this.tail.prev;
        this.tail.prev = null;
        newTail.next = null;
        this.tail = newTail;     
    }
    else{
        let pntr = this.head;
        for(let i = 0; i < pos-1; i++){
            pntr = pntr.next;
        }
        pntr.next = pntr.next.next;
        pntr.next.prev = pntr;
    }
    this.size -= 1;

    return this;
});

/**
 * pop
 * *Remove last element of list
 */
DoublyLinkedList.prototype.pop = withTry(function(){
    return this.delete(this.size - 1);
});

/**
 * popStart
 * *Remove first element of list
 */
DoublyLinkedList.prototype.popStart = withTry(function(){
    return this.delete(0);
});

/**
 * getHead
 * * Return a copy of the list head
 */
DoublyLinkedList.prototype.getHead = withTry(function () {
    return {...this.head};
});

/**
 * getTail
 * * Return a copy of the list tail
 */
DoublyLinkedList.prototype.getTail = withTry(function () {
    return {...this.tail};
});

/**
 * size
 * * returns the number of elements in the DoublyLinkedList
 */
DoublyLinkedList.prototype.getSize = withTry(function () {
    return this.size;
});

/**
 *   view
 * * Log the content of the DoublyLinkedList.
 */
DoublyLinkedList.prototype.view = withTry(function () {
    
    if(this.size === 0) throw "Can not view list of size 0."
    let pntr = this.head;
    let log = "";
    while(pntr){
        log += `${pntr.data} <==> `
        pntr = pntr.next
    }
    log += "NULL"

    console.log(log);
    return this;
});


module.exports = DoublyLinkedList;