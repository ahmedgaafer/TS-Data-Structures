const BST = require('./index');

const tree = new BST([7,7, 5, 22, 15, 14, 13, 12, 11, 16, 25, 27]);

tree.insert(1).delete(7).delete(1).view();

const min = tree.getMinNode();
const max = tree.getMaxNode();

const search = tree.search(15);

