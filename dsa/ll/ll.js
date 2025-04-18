class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    prepend(value) {
        const node = new Node(value)

        if (this.head === null) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
    }
    append(value) {
        const node = new Node(value)

        if (this.head) {
            this.tail.next = node
            this.tail = node
        } else {
            this.head = node
            this.tail = node
        }
    }
    delete(value) {

        let cur = this.head
        let pre = null

        while (cur) {

            if (cur.value === value) {
                console.log("deleted", value)
                if (pre === null) {
                    this.head = cur.next
                } else {
                    pre.next = cur.next
                }

                if (cur.next === null) {
                    this.tail = pre
                }
                return
            }

            pre = cur
            cur = cur.next
        }
    }
    middleElement() {

        let length = this.getLength()
        let midIndex = Math.floor(length / 2)
        let head = this.head

        while (midIndex > 0) {
            console.log(head.value)
            head = head.next
            midIndex -= 1
        }
        console.log("Middle element is ", head.value)
    }

    getLength() {
        let len = 0
        let cur = this.head
        while (cur) {
            len += 1
            cur = cur.next
        }
        return len
    }
}

const ll = new LinkedList()

ll.append(44)
ll.append(55)
ll.prepend(33)
ll.append(66)
ll.prepend(27)
ll.prepend(22)
ll.prepend(1)

ll.middleElement()