class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    prepend(value) {
        const node = new Node(value)

        node.next = this.head
        this.head = node
    }
    deleteMid() {

        let slow = this.head
        let fast = this.head
        let prev = null

        while (fast && fast.next) {
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }

        prev.next = slow.next

        console.log(`deleted ${slow.value}`)
    }
}

const ll = new LinkedList()
ll.prepend(20)
ll.prepend(18)
ll.prepend(16)
console.log(ll)
ll.deleteMid()
console.log(ll)