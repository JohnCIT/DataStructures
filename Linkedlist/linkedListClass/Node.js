export default class Node {
    value;
    next;

    constructor(value) {
        this.value = value;
    }

    setValue(value)
    {
        this.value = value;
    }

    getValue(){
        return this.value;
    }

    setNext(next) {
        this.next = next;
    }

    getNext()
    {
        return this.next;
    }
}