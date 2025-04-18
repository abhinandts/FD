// function getMiddleElement(head) {

//     let length = getLength(head);

//     let midIndex = Math.floor(length / 2);

//     while (midIndex > 0) {
//         head = head.next;
//         midIndex -= 1;
//     }
//     return head.data;
// }

// function getLength(head) {
//     let length = 0;

//     while (head) {
//         length += 1;
//         head = head.next;
//     }
//     return length;
// }

// class Node {
//     constructor(x) {
//         this.data = x;
//         this.next = null;
//     }
// }

// function main() {
//     const head = new Node(10);
//     head.next = new Node(20);
//     head.next.next = new Node(30);
//     head.next.next.next = new Node(40)
//     head.next.next.next.next = new Node(50);
//     head.next.next.next.next.next = new Node(60);

//     console.log(getMiddleElement(head))
// }

// main()


// ---2 POINTER------------

function getMiddleElement(head) {

    let slowPointer = head;
    let fastPointer = head;

    while (fastPointer !== null && fastPointer.next !== null) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
    }

    return slowPointer.data;
}

class Node {
    constructor(x) {
        this.data = x;
        this.next = null;
    }
}

function createLL() {
    const head = new Node(10)
    head.next = new Node(11)
    head.next.next = new Node(12)
    head.next.next.next = new Node(13)
    head.next.next.next.next = new Node(14)
    head.next.next.next.next.next = new Node(15)

    // getMiddleElement(head)
    console.log(getMiddleElement(head))
}

createLL()