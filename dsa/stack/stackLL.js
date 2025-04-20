class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
    }
    push(value) {
        let node = new Node(value)

        node.next = this.top
        this.top = node

    }
    isEmpty(){
        console.log(this.top === null)
    }
}

const s = new Stack()
s.push(4)
s.push(6)
s.push(8)
s.isEmpty()