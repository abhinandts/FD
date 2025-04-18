// ---- LL reversing using 3 pointer ----

class Node {
    constructor(x){
        this.data = x;
        this.next = null;
    }
}

function reverse(head){

    let previousNode = null;
    let currentNode = head;
    let nextNode;

    while(currentNode !== null){

        nextNode = currentNode.next;

        currentNode.next = previousNode;

        previousNode = currentNode;
        currentNode = nextNode;
    }
    return previousNode;
}


function main (){
    let head = new Node(10)
    head.next = new Node(11)
    head.next.next = new Node(12)

    console.log("real ll",head);
    console.log(reverse(head));
    // console.log(head);
}

main()



// ---- using Recursion ----

// // reach last node of LL using recursion,
// // then start reversing LL from last Node


// function reverse(head) {

//     if (head === null || head.next === null) return head

//     let rest = reverse(head.next)

//     head.next.next = head;
//     head.next = null;
//     return rest
// }

// class Node {
//     constructor(x) {
//         this.data = x
//         this.next = null
//     }
// }

// let head = new Node(10)
// head.next = new Node(11)
// head.next.next = new Node(12)
// head.next.next.next = new Node(13)
// head.next.next.next.next = new Node(14)

// function print(node) {
//     while (node !== null) {
//         console.log(node.data)
//         node = node.next;
//     }
// }
// print(head)
// console.log("Reversed LL ")
// head = reverse(head)
// print(head)