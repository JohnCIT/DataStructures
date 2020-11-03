import Node from "./Node.js";

export default class LinkedList {
    linkedList;
    headNode;
    tailNode;
    count;

    constructor() {
        this.count = 0;
        this.linkedList = [];
        let defaultNode = new Node();
        this.headNode = defaultNode;
        this.tailNode = defaultNode;
        this.headNode.next = this.tailNode;
    }


    addFirst(node)
    {
        // Store current head node
        let tempHeadNode = this.headNode;

        // Get set this node as the current head node and point to the old head
        this.headNode.next = tempHeadNode;

        this.count++;

        if(this.count === 1)
        {
            this.tailNode = this.headNode;
        }
    }

    addEnd(node)
    {
        // Empty list
        if(this.count === 0)
        {
            this.headNode = node;
        }
        else
        {
            this.tailNode.next = node;
        }

        this.tailNode = node;

        this.count++;
    }

    removeFront()
    {

    }

    // Remove from the end of the list. Re assign
    removeEnd()
    {
        if(this.count == 1)
        {
            this.headNode = new Node();
            this.tailNode = new Node();
        }
        else
        {
            let currentNode = this.headNode;
            while(currentNode.getNext() != this.tailNode)
            {
                currentNode = currentNode.getNext();
            }

            currentNode.setNext(null);
            this.tailNode = currentNode;
        }

        this.count--;
    }

    enumerate(cb) {
        let currentNode = this.headNode;
        while (currentNode != null)
        {
            cb(currentNode.getValue());
            currentNode = currentNode.getNext();
        }

    }

    getCount()
    {
        return this.count;
    }

    // TODO check this
    remove(value)
    {
        let previous = null;
        let current = this.headNode;

        while(current != null)
        {
            if(current.getValue() === value)
            {
                // Handles if value found in middle of list
                if(previous != null)
                {
                    previous.setNext(current.getNext());

                    // Should handle at the end
                    if(current.getNext() === null || current.getNext() === undefined)
                    {
                        this.tailNode = previous;
                    }

                    this.count--;
                }
                else
                {
                    this.removeFront();
                }
            }

            previous = current;
            current = current.getNext();
        }

        return false;
    }

    clear()
    {
        this.count = 0;
        this.headNode = null;
        this.tailNode = null;
    }

    printList()
    {
        let node = this.headNode;

        while (node != null)
        {
            console.log(node.getValue());
            node = node.getNext();
        }
    }



}