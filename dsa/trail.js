class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

function main(){

    let head = new Node(11)
    head.next = new Node(22)
    head.next.next = new Node(33)

    console.log(head)
}
main()

function reverse(head){

    let previousNode = null
    let currentNode = head
    let nextNode 

    while(currentNode !==null){
        
    }
}