import Node from './linkedListClass/Node.js'
import LinkedList from "./linkedListClass/LinkedList.js";


let node1 = new Node(5);
let node2 = new Node(8);
let node3 = new Node(25);



let linkedList = new LinkedList();
linkedList.addEnd(node1);
linkedList.addEnd(node2);
linkedList.addEnd(node3);

linkedList.printList();


linkedList.removeEnd();
linkedList.printList();

linkedList.addEnd(node3);
linkedList.enumerate((value) => {
    console.log("!!!: " + value)
});

linkedList.remove(25);

linkedList.enumerate((value) => {
    console.log("!!!: " + value)
});