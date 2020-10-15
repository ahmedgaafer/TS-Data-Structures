const withTry = require('../HigherOrderFunctions/withTry');

function SinglyLinkedListNode(data){
    this.data = data;
    this.next = null;
}

function SinglyLinkedList(data = []){
    this.head = null;
    this.tail = null;
    this.size = 0;

    if(data.length > 0){

        data.forEach(element => {
            this.push(element)
        });
    }
}

/**
*   insert
*   @param data The data inserted into a new node
*   @param pos The position of the new inserted node
* * insert a new node to linked list.
*/
SinglyLinkedList.prototype.insert = withTry(function ( data, pos){

    const newNode = new SinglyLinkedListNode(data);

    if(this.size === 0) this.head = newNode;
    if(this.size < pos) throw "Index out of bounds.";
    if(this.size === 0) this.tail = newNode;

    if(pos+1 === 0){
        newNode.next = this.head;
        this.head = newNode;
        
    }
    else if(pos === this.size - 1){
        this.tail.next = newNode;
        this.tail = newNode;
    }
    else{
        let pntr = this.head;
        for(let i = 0 ; i < pos-1; i++){
            pntr = pntr.next
        }
        newNode.next = pntr.next;
        pntr.next = newNode;
    }

    this.size += 1;

    return this;
});

/**
 * push_start
 * @param data The data inserted into a new node
 * * Insert A node at the start
 */
SinglyLinkedList.prototype.pushStart = withTry(function(data){
    return this.insert(data, -1);
});

/**
 * push
 * @param data The data inserted into a new node
 * * Insert A node at the end
 */
SinglyLinkedList.prototype.push = withTry(function(data){
    return this.insert(data, this.size - 1);
});

/**
 * delete
 * @param pos
 * * deletes a node at position
 */
SinglyLinkedList.prototype.delete = withTry(function(pos){
    if(this.size === 0) throw "Can not delete from an empty list"
    if(this.size < pos) throw "Index out of bounds.";
    if(this.size === 1) {this.head = null; this.tail = null;};

    if(pos === 0){
        this.head = this.head.next;
    }
    else if(pos === this.size - 1){
        let pntr = this.head;
        while(pntr.next.next) {
            pntr = pntr.next;
        }
        pntr.next = null;
        this.tail = pntr;
        
    }
    else{
        let pntr = this.head;
        for(let i = 0; i < pos-1; i++){
            pntr = pntr.next;
        }
        pntr.next = pntr.next.next;
    }
    this.size -= 1;

    return this;
});

/**
 * pop
 * *Remove last element of list
 */
SinglyLinkedList.prototype.pop = withTry(function(){
    return this.delete(this.size - 1);
});

/**
 * popStart
 * *Remove first element of list
 */
SinglyLinkedList.prototype.popStart = withTry(function(){
    return this.delete(0);
});

/**
 * getHead
 * * Return a copy of the list head
 */
SinglyLinkedList.prototype.getHead = withTry(function () {
    return {...this.head};
});

/**
 * getTail
 * * Return a copy of the list tail
 */
SinglyLinkedList.prototype.getTail = withTry(function () {
    return {...this.tail};
});

/**
 * size
 * * returns the number of elements in the SinglyLinkedList
 */
SinglyLinkedList.prototype.getSize = withTry(function () {
    return this.size;
});

/**
 *   view
 * * Log the content of the SinglyLinkedList.
 */
SinglyLinkedList.prototype.view = withTry(function () {
    
    if(this.size === 0) throw "Can not view list of size 0."
    let pntr = this.head;
    let log = "";
    while(pntr){
        log += `${pntr.data} => `
        pntr = pntr.next
    }
    log += "NULL"

    console.log(log);
    return this;
});


module.exports = SinglyLinkedList;