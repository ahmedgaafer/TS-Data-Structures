const withTry = require("../HigherOrderFunctions/withTry");

function Heap (data = [], isMaxHeap = false){
    this.capacity = 100;
    this.data = new Array(this.capacity);
    this.size = 0;
    this.comparator = (isMaxHeap)? (parent, child) => parent < child : 
                                   (parent, child) => parent > child;
    this.comparator2 = (isMaxHeap)? (index) => (this.rightChild(index) > this.leftChild(index))?true:false:
                                 (index) => (this.rightChild(index) < this.leftChild(index))?true:false; 

    if(data.length > 0){
        data.forEach(element => {
            this.push(element);
        })
    }                             
}

Heap.prototype.getLeftChildIndex = withTry(function(parentIndex){return 2 * parentIndex + 1});
Heap.prototype.getRightChildIndex = withTry(function(parentIndex){return 2 * parentIndex + 2});
Heap.prototype.getParentIndex = withTry(function(childIndex){return Math.floor((childIndex - 1) / 2)});

Heap.prototype.hasLeftChild = withTry(function(index){return this.getLeftChildIndex(index) < this.size});
Heap.prototype.hasRightChild = withTry(function(index){return this.getRightChildIndex(index) < this.size});
Heap.prototype.hasParent = withTry(function(index){return this.getParentIndex(index) >= 0});

Heap.prototype.leftChild = withTry(function(index){return this.data[this.getLeftChildIndex(index)]});
Heap.prototype.rightChild = withTry(function(index){return this.data[this.getRightChildIndex(index)]});
Heap.prototype.parent = withTry(function(index){return this.data[this.getParentIndex(index)]});

Heap.prototype.swap = withTry(function(i, j){
    const tmp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = tmp;
});
Heap.prototype.ensureExtraCapacity = withTry(function(){
    if(this.size === this.capacity){
        let newData = new Array(this.capacity * 2);
        let i = this.capacity;
        while(i >= 0){
            newData[i] = this.data[i];
            i -= 1;
        }

        this.data = newData;
        this.capacity *= 2;
    }

});

Heap.prototype.peak = withTry(function(){
    if(this.size === 0)throw "Can not view the peak of an empty heap"
    return this.data[0];
});
Heap.prototype.pop = withTry(function(){
    if(this.size === 0)throw "Can not remove from an empty heap"
    const item = this.data[0];
    this.data[0] = this.data[this.size - 1]; 
    this.size -= 1;
    this.heapifyDown();
    return item;

});
Heap.prototype.push = withTry(function(data){
    this.ensureExtraCapacity();
    this.data[this.size] = data;
    this.size += 1;
    this.heapifyUp();
    return this;
});

Heap.prototype.heapifyUp = withTry(function(){
    let index = this.size - 1;
    while(this.hasParent(index) && this.comparator(this.parent(index), this.data[index])){
        this.swap(this.getParentIndex(index), index);
        index = this.getParentIndex(index)
    }
});
Heap.prototype.heapifyDown = withTry(function(){
    let index = 0;
    while(this.hasLeftChild(index)){
        let childIndex = this.getLeftChildIndex(index);
        if(this.hasRightChild(index) && this.comparator2(index)){
            childIndex = this.getRightChildIndex(index);
        }

        if(this.comparator(this.data[childIndex], this.data[index])){
            break;
        }
        else{
            this.swap(index, childIndex);
        }
        index = childIndex;
    }
});

Heap.prototype.getSize = withTry(function(){return this.size});
Heap.prototype.view = withTry(function(){
    console.log(this.data.filter((elem, idx) => idx < this.size));
});

module.exports = Heap;

