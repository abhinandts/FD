class Stack {
    constructor() {
        this.mainStack = []
        this.minStack = []
    }
    push(value) {
        this.mainStack.push(value)

        if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(value)
        }
    }
    pop(){
        const poped = this.mainStack.pop()
        if(poped === this.minStack[this.minStack.length-1]){
            this.minStack.pop()
        }
        return console.log(poped)
    }
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}

const s = new Stack()
s.push(12)
s.push(14)
s.push(13)
s.push(11)
s.push(11)
s.push(10)

const min = s.getMin()
console.log(s)
console.log(min)
s.pop()
console.log(s)