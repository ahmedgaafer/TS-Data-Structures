import { IDoublyLinkedList } from "../types/datastructures.types";
import { IDoublyLinkedListNode, NodeData } from "../types/nodes.types";

class DoublyLinkedListNode<T extends NodeData> implements IDoublyLinkedListNode<T> {
    data: T;
    next: DoublyLinkedListNode<T> | null;  // why did you use the interface and not the class itself
    prev: DoublyLinkedListNode<T> | null;
    constructor (data: T) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// sets the list to a list with on element
function _setEmptyList<T> (list: DoublyLinkedList<T>, node: DoublyLinkedListNode<T>) {
    list.head = node;
    list.tail = node;
    list.size = 1;
    return list;
}

// empties the list
function _emptyList<T> (list: DoublyLinkedList<T>) {
    list.head = null;
    list.tail = null;
    list.size = 0;
    return list;
}

export class DoublyLinkedList<T extends NodeData> implements IDoublyLinkedList<T> {
    head: IDoublyLinkedListNode<T> | null;
    tail: IDoublyLinkedListNode<T> | null;
    size: number;

    constructor(data: Array<T> = []) {
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
     * Inserts a new node to a specific index in the list
     * if no index is provided it adds the node to the end of the list
     * @returns self reference
     * @example
```ts
const list = new DoublyLinkedList<string>(['john', 'sami']);
list.insert('joe', 0).insert('gaafar', 1) // ['joe', 'gaafar', 'john', 'sami']
```
     */
    insert(data: T, pos?: number): DoublyLinkedList<T> {
		const newNode = new DoublyLinkedListNode(data);

        if(pos === undefined) pos = this.size;

        if(this.size === 0) {
            return _setEmptyList(this, newNode)
        }

        if(this.size < pos) throw "Index out of bounds.";

        if(pos <= 0) {
            newNode.next = this.head;
            this.head!.prev = newNode;
            this.head = newNode;
        }

        else if(pos === this.size) {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } 
        
        else {
            let pntr = this.head;
            for(let i = 0 ; i < pos-1; i++) {
                pntr = pntr!.next
            }

            newNode.next = pntr!.next;
            newNode.prev = pntr;
            newNode.next!.prev = newNode;
            pntr!.next = newNode;
        }

        this.size += 1;
        return this;
	}

    /**
     * Inserts a new node to the beggining of the list
     * @returns self reference
     * @example
```ts
const list = new DoublyLinkedList<string>(['john', 'sami']);
list.pushStart('joe'); // ['joe,', 'john', 'sami']
```
     */
    pushStart(data: T): DoublyLinkedList<T> {
        return this.insert(data, 0);
    };

    /**
     * Inserts a new node to the end of the list
     * @returns self reference
     * @example
```ts
const list = new DoublyLinkedList<string>(['john', 'sami']);
list.push('joe') // ['john', 'sami', 'joe']
```
     */
    push(data: T):DoublyLinkedList<T> {
        return this.insert(data, this.size);
    };

    /**
     * deletes a node from the list
     * @returns self reference
     * @example
```ts
const list = new DoublyLinkedList<number>([1,2,3,4,5]);
list.delete(3) // [1,2,3,5]
```
     */
    delete(pos: number): DoublyLinkedList<T> {
        if(this.size === 0) throw "Can not delete from an empty list"
        if(this.size - 1 < pos) throw "Index out of bounds.";
        if(this.size === 1) {
            return _emptyList(this)
        };

        if(pos === 0) {
            this.head = this.head!.next;
            this.head!.prev = null;
        }

        else if(pos === this.size - 1){
            this.tail = this.tail!.prev;   
            this.tail!.next = null;
        }

        else {
            let pntr = this.head;
            
            for(let i = 0; i < pos-1; i++){
                pntr = pntr!.next
            }

            pntr!.next = pntr!.next!.next;
            pntr!.next!.prev = pntr
        }

        this.size -= 1;

        return this;
    }

    /**
     * deletes the last node from the list
     * @returns self reference
     * @example
```ts
const list = new DoublyLinkedList<number>([1,2,3,4,5]);
list.pop().pop() // [1,2,3]
```
     */
    pop(): DoublyLinkedList<T> {
        return this.delete(this.size - 1);
    }

    /**
     * deletes the first node from the list
     * @returns self reference
     * @example
```ts
const list = new DoublyLinkedList<number>([1,2,3,4,5]);
list.popStart().popStart() // [3,4,5]
```
     */
    popStart(): DoublyLinkedList<T> {
        return this.delete(0);
    }

    /**
     * 
     * @returns head node
     * @example
```ts
const list = new DoublyLinkedList<number>([1,2,3,4,5]);
list.getHead() // 1
```
     */
    getHead(): DoublyLinkedListNode<T> | null {
        return this.head;
    }
    
    /**
     * 
     * @returns tail node
     * @example
```ts
const list = new DoublyLinkedList<number>([1,2,3,4,5]);
list.getTail() // 5
```
     */
    getTail(): DoublyLinkedListNode<T> | null {
        return this.tail;
    }
    
    /**
     * 
     * @returns head node
     * @example
```ts
const list = new DoublyLinkedList<number>([1,2,3,4,5]);
list.getSize() // 5
```
     */
    getSize(): number {
        return this.size;
    }

    /**
     * logs the list in the console
     * @returns self reference
     * @example
```ts
const list = new DoublyLinkedList<number>([1,2,3,4,5]);
list.view() 
```
     */
    view(): DoublyLinkedList<T> {
        if(this.size === 0) throw "Can not view an empty list."
        let pntr = this.head;
        let log = "";
        while(pntr){
            log += `${pntr.data} <==> `
            pntr = pntr.next
        }
        log += "NULL"

        console.log(log);
        return this;
    }

/**
     * returns an array of all the nodes' data
     * @returns array
     * @example
```ts
const list = new DoublyLinkedList<number>([1,2,3,4,5]);
list.toArray() // [1,2,3,4,5]
```
     */
    toArray(): T[] {
        let pntr = this.head;
        let array = [];
        while(pntr){
            array.push(pntr.data);
            pntr = pntr.next
        }

        return array;
    };
}