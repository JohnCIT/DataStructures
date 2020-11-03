import LinkedList from "./LinkedList.js";
import Node from "./Node.js";

export default class Stack {
    linkedList;


    constructor(value) {
        this.linkedList = new LinkedList();
    }

    push(value)
    {
        this.linkedList.addFirst(new Node(value))
    }

    pop()
    {
        return this.linkedList.getFirst();
    }

    clear()
    {
        this.linkedList.clear();
    }

    count()
    {
        return this.linkedList.count();
    }
}