class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedL {
    constructor() {
        this.head = null
        this.tail = null
    }
    prepend(value) {
        const node = new Node(value)

        if (!this.head) {
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
    }
    delete(value){
        let current = this.head

        while(current){
            if(current.value = value){

                if(current.prev){
                    current.prev.next = current.next
                }else{
                    this.head = current.next
                }

                if(current.next){
                    current.next.prev = current.prev
                }else{
                    this.tail = current.prev
                }
                return
            }
            current = current.next
        }
    }
}

const dll = new DoublyLinkedL()

dll.prepend(10)
dll.prepend(8)
dll.prepend(6)
console.log(dll)
dll.delete(8)
console.log(dll)