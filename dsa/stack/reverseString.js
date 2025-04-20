function reverse(str){

    let stack = []

    for(let char of str){
        stack.push(char)
    }

    let reversed = ""

    while(stack.length>0){
        reversed+=stack.pop()
    }
    return reversed
}
const string = reverse("Thaivalappil")
console.log(string)

// // avoid string concatenation for efficiency

function rev(str){

    let stack = []

    for(let char of str){
        stack.push(char)
    }

    let revArray = []

    while(stack.length > 0){
        revArray.push(stack.pop())
    }

    return revArray.join("")
}

const value = rev("Choolissery")
console.log(value)