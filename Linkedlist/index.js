import Node from './linkedListClass/Node.js'
import LinkedList from "./linkedListClass/LinkedList.js";
import Stack from "./linkedListClass/Stack.js";
import PostFixCalc from "./linkedListClass/postFixCalc.js";

postFixCalc();


function postFixCalc() {
    let postFixCalc = new PostFixCalc();
    postFixCalc.calculate([5,6,7, "*", "+", 1, "-"])
}


function stackCode()
{
    let stack = new Stack();
    stack.push(10);
    stack.push(20);
    stack.push(30);

    let one = stack.pop();
    let two = stack.pop();
    let three = stack.pop();

    console.log("!!!!!!! " + one + " ! " + two + " ! " + three);
}





function linkedList()
{
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
}

