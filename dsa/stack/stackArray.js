class Stack {
    constructor(){
        this.items = []
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        this.items.pop()
    }
    peek(){
        console.log("hii",this.items[this.items.length-1])
    }
}
const s = new Stack()
s.push(4)
s.push(5)
s.push(6)
s.push(7)
s.pop()
s.peek()
console.log(s)